module Types
  class QueryType < Types::BaseObject
    def self.define_record_field(model, type)
      field(
        model.model_name.singular,
        type,
        null: false,
        description: "Lookup a #{model.model_name.name} by id"
      ) do
        argument :id, ID, required: true
      end

      define_method model.model_name.singular do |args|
        model.find(args.fetch(:id))
      end
    end

    define_record_field(Job, JobType)
    define_record_field(Template, TemplateType)
    define_record_field(CustomField, CustomFieldType)
    define_record_field(Step, StepType)
    define_record_field(Worker, WorkerType)
    define_record_field(Customer, CustomerType)
    define_record_field(Asset, AssetType)

    field :setting, SettingType, null: false
    def setting
      Setting.first_or_create!
    end

    field :jobs, [JobType], null: false
    def jobs
      Job.all
    end

    paged_field :jobs_paged, JobType
    def jobs_paged_scope
      Job.all.order(created_at: :desc)
    end

    field :assets, [AssetType], null: false
    def assets
      Asset.all
    end

    paged_field :assets_paged, AssetType do
      argument :keyword, String, required: false, default_value: ''
    end

    def assets_paged_scope(keyword:)
      assets = Asset.all
      assets = assets.where('name ILIKE ?', "%#{keyword}%") if keyword.present?
      assets
    end

    field :customers, [CustomerType], null: false
    def customers
      Customer.all
    end

    paged_field :customers_paged, CustomerType
    def customers_paged_scope
      Customer.all
    end

    field :templates, [TemplateType], null: false
    def templates
      Template.all
    end
  end
end
