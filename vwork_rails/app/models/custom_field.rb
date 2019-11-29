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
#

class CustomField < ApplicationRecord
end
