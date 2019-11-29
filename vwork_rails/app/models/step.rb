# == Schema Information
#
# Table name: steps
#
#  id         :integer          not null, primary key
#  address    :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  job_id     :integer
#
# Indexes
#
#  index_steps_on_job_id  (job_id)
#

class Step < ApplicationRecord
  belongs_to :job, inverse_of: :steps
end
