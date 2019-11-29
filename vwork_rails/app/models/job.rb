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
#

class Job < ApplicationRecord
  has_many :custom_fields, inverse_of: :job, dependent: :destroy
  has_many :steps, inverse_of: :job, dependent: :destroy
end
