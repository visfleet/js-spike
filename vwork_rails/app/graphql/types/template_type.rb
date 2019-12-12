module Types
  class TemplateType < Types::BaseObject
    include GraphQL::Types

    field :id, ID, null: false
    field :name, String, null: false
    field :customer, CustomerType, null: true
    field :worker, WorkerType, null: true
    field :planned_start_time, ISO8601DateTime, null: true
    field :created_at, ISO8601DateTime, null: false
    field :updated_at, ISO8601DateTime, null: false
  end
end
