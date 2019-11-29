# == Schema Information
#
# Table name: custom_fields
#
#  id         :integer          not null, primary key
#  field_type :string           not null
#  name       :string           not null
#  value      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  job_id     :integer          not null
#
# Indexes
#
#  index_custom_fields_on_job_id  (job_id)
#

class CustomField < ApplicationRecord
  belongs_to :job, inverse_of: :custom_fields
end
