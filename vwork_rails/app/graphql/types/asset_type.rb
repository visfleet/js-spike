module Types
  class AssetType < Types::BaseObject
    include GraphQL::Types

    field :id, ID, null: false
    field :name, String, null: false
    field :notes, String, null: false
    field :address, String, null: false
    field :serial, String, null: false
    field :assetModel, String, null: false
    field :cost, Float, null: true
    field :longitude, Float, null: true
    field :latitude, Float, null: true

    field :created_at, ISO8601DateTime, null: false
    field :updated_at, ISO8601DateTime, null: false

    field :customer, CustomerType, null: true
  end
end
