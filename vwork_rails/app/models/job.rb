# == Schema Information
#
# Table name: jobs
#
#  id                 :integer          not null, primary key
#  planned_start_time :string
#  state              :string
#  template_name      :string
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
  belongs_to :customer, optional: true, inverse_of: :jobs
  belongs_to :worker, optional: true, inverse_of: :jobs
end
