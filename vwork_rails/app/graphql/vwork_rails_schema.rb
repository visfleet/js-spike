class VworkRailsSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
end

GraphQL::Errors.configure(VworkRailsSchema) do
  rescue_from ActiveRecord::RecordNotFound do |exception|
    GraphQL::ExecutionError.new(exception.message)
  end
end
