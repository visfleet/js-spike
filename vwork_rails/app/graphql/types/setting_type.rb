module Types
  class SettingType < Types::BaseObject
    field :id, ID, null: false
    field :job_list_columns, [String], null: false
    field :enable_schedule, Boolean, null: false
    field :enable_assets, Boolean, null: false
    field :enable_customers, Boolean, null: false
    field :enable_jobs, Boolean, null: false
  end
end
