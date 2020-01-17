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
    define_record_field(Asset, AssetType)

    field :setting, SettingType, null: false
    def setting
      Setting.first_or_create!
    end

    field :jobs, [JobType], null: false
    def jobs
      Job.all
    end

    field :job_states, [String], null: false
    def job_states
      Job.distinct.pluck(:state)
    end

    paged_field :jobs_paged, JobType do
      argument :filter, JobsFilterType, required: true
    end
    def jobs_paged_scope(
      filter:
    )
      jobs = Job.all.order(created_at: :desc)
      if filter.template_names.any?
        jobs = jobs.where(template_name: filter.template_names)
      end
      jobs = jobs.where(worker_id: filter.worker_ids) if filter.worker_ids.any?
      if filter.customer_ids.any?
        jobs = jobs.where(customer_id: filter.customer_ids)
      end
      jobs = jobs.where(state: filter.states) if filter.states.any?
      if filter.asset_ids.any?
        jobs =
          jobs
          .where(
            id: JobAsset.where(asset: filter.asset_ids).select(:job_id)
          )
      end
      if filter.date_eq
        jobs = jobs.where(
          'planned_start_time > ? AND planned_start_time < ?',
          filter.date_eq.beginning_of_day,
          filter.date_eq.end_of_day
        )
      end
      if filter.date_gt
        jobs = jobs.where(
          'planned_start_time > ?',
          filter.date_gt.beginning_of_day
        )
      end
      if filter.date_lt
        jobs = jobs.where(
          'planned_start_time < ?',
          filter.date_gt.end_of_day
        )
      end

      jobs
    end

    field :assets, [AssetType], null: false
    def assets
      Asset.all
    end

    field :workers, [WorkerType], null: false
    def workers
      Worker.all
    end

    paged_field :assets_paged, AssetType do
      argument :keyword, String, required: false, default_value: ''
    end

    def assets_paged_scope(keyword:)
      assets = Asset.all
      assets = assets.where('name ILIKE ?', "%#{keyword}%") if keyword.present?
      assets
    end

    field :customers, [CustomerType], null: false
    def customers
      Customer.all
    end

    paged_field :customers_paged, CustomerType
    def customers_paged_scope
      Customer.all
    end

    field :templates, [TemplateType], null: false
    def templates
      Template.all
    end
  end
end
