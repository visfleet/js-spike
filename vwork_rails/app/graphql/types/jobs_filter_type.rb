module Types
  class JobsFilterType < Types::BaseInputObject
    include GraphQL::Types
    argument :template_names, [String], required: false, default_value: []
    argument :customer_ids, [ID], required: false, default_value: []
    argument :worker_ids, [ID], required: false, default_value: []
    argument :states, [String], required: false, default_value: []
    argument :date_eq, ISO8601Date, required: false, default_value: nil
    argument :date_gt, ISO8601Date, required: false, default_value: nil
    argument :date_lt, ISO8601Date, required: false, default_value: nil
  end
end
