module Types
  class StepType < Types::BaseObject
    include GraphQL::Types

    field :id, ID, null: false
    field :address, String, null: false
    field :name, String, null: false
    field :created_at, ISO8601DateTime, null: false
    field :updated_at, ISO8601DateTime, null: false
  end
end
