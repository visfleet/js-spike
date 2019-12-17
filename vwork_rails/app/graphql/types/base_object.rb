module Types
  class BaseObject < GraphQL::Schema::Object
    def self.paged_field(field_name, node_type, default_per_page: 10, &block)
      paged_type_name = "#{node_type.graphql_name}PaginationType"
      paged_type = nil

      if Types.const_defined?(paged_type_name)
        paged_type = Types.const_get(paged_type_name)
      else
        paged_type = Class.new(Types::BaseObject) do
          graphql_name paged_type_name

          field :id, ID, null: false
          field :page, Integer, null: false
          field :per_page, Integer, null: false

          field :total_count, Integer, null: false
          def total_count
            scope.count
          end

          field :total_pages, Integer, null: false
          def total_pages
            [1, total_count.fdiv(per_page).ceil].max
          end

          field :nodes, [node_type], null: false
          def nodes
            scope.offset(page * per_page).limit(per_page)
          end

          def scope
            object.fetch(:scope)
          end

          def page
            object.fetch(:page)
          end

          def per_page
            object.fetch(:per_page)
          end
        end
        Types.const_set(paged_type_name, paged_type)
      end

      field field_name, paged_type, null: false do
        argument :page, Integer, required: false, default_value: 0
        argument :per_page, Integer, required: false, default_value: default_per_page
        instance_exec(&block) if block
      end

      define_method field_name do |args|
        page = args.delete(:page)
        per_page = args.delete(:per_page)

        {
          id: "#{field_name}-#{per_page}-#{page}",
          page: page,
          per_page: per_page,
          scope: args.keys.any? ? send("#{field_name}_scope", args) : send("#{field_name}_scope")
        }
      end
    end
  end
end
