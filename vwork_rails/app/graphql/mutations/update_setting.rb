module Mutations
  class UpdateSetting < BaseMutation
    field :setting, Types::SettingType, null: false

    argument :enable_schedule, Boolean, required: false
    argument :enable_assets, Boolean, required: false
    argument :enable_customers, Boolean, required: false
    argument :enable_jobs, Boolean, required: false

    def resolve(args)
      setting = Setting.first_or_create!
      setting.update!(
        args
      )

      { setting: setting }
    end
  end
end
