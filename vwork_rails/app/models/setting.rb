# == Schema Information
#
# Table name: settings
#
#  id               :integer          not null, primary key
#  enable_assets    :boolean          default("0")
#  enable_customers :boolean          default("0")
#  enable_jobs      :boolean          default("0")
#  enable_schedule  :boolean          default("0")
#  job_list_columns :text             default("--- []\n")
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Setting < ApplicationRecord
  serialize :job_list_columns
end
