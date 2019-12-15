module Types
  class JobType < Types::BaseObject
    include GraphQL::Types

    field :id, ID, null: false
    field :state, String, null: false
    field :template_name, String, null: false
    field :customer, CustomerType, null: true
    field :worker, WorkerType, null: true
    field :planned_start_time, ISO8601DateTime, null: true
    field :created_at, ISO8601DateTime, null: false
    field :updated_at, ISO8601DateTime, null: false

    field :steps, [StepType], null: false
    field :custom_fields, [CustomFieldType], null: false
    field :assets, [AssetType], null: false
  end
end
