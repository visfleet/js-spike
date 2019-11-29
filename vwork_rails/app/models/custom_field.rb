# == Schema Information
#
# Table name: custom_fields
#
#  id         :integer          not null, primary key
#  field_type :string
#  name       :string
#  value      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  job_id     :integer
#
# Indexes
#
#  index_custom_fields_on_job_id  (job_id)
#

class CustomField < ApplicationRecord
  belongs_to :job, inverse_of: :custom_fields
end
