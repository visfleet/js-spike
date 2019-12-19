# == Schema Information
#
# Table name: jobs
#
#  id                 :integer          not null, primary key
#  planned_start_time :datetime
#  state              :string           not null
#  template_name      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  customer_id        :integer
#  worker_id          :integer
#
# Indexes
#
#  index_jobs_on_customer_id  (customer_id)
#  index_jobs_on_worker_id    (worker_id)
#

class Job < ApplicationRecord
  has_many :custom_fields, inverse_of: :job, dependent: :destroy
  has_many :steps, inverse_of: :job, dependent: :destroy
  has_many :job_assets, inverse_of: :job, dependent: :destroy
  has_many :assets, through: :job_assets
  belongs_to :customer, optional: true, inverse_of: :jobs
  belongs_to :worker, optional: true, inverse_of: :jobs

  def self.create_fake!
    Job.create!(
      customer: [*Customer.all, nil].sample,
      worker: [Worker.all.sample, nil].sample,
      template_name: [*Template.all, nil].sample.try(&:name) || '',
      state: 'DRAFT',
      planned_start_time: Faker::Time.forward(days: 5),
      steps: 3.times.map do |step_index|
        Step.new(
          name: "Step #{step_index + 1}",
          address: Faker::Address.full_address
        )
      end,
      assets: [*Asset.all, *(20.times.map { nil })].sample(3).compact,
      custom_fields: 3.times.map do |custom_field_index|
        CustomField.new(
          name: "Custom Field #{custom_field_index + 1}",
          field_type: %w[Text Number Checkbox].sample,
          value: Faker::Address.full_address
        )
      end
    ).tap do |job|
      puts "Created Job##{job.id}."
    end
  end
end
