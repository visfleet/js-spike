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
end
