# == Schema Information
#
# Table name: templates
#
#  id                 :integer          not null, primary key
#  name               :string
#  planned_start_time :datetime
#  state              :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Template < ApplicationRecord
end
