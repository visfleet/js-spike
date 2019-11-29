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

    field :jobs, [JobType], null: false
    def jobs
      Job.all
    end
  end
end
