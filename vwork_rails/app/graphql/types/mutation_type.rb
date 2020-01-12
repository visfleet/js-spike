module Types
  class MutationType < Types::BaseObject
    field :update_setting, mutation: Mutations::UpdateSetting
  end
end
