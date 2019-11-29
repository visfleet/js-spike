# == Schema Information
#
# Table name: customers
#
#  id           :integer          not null, primary key
#  address      :string
#  email        :string
#  name         :string
#  phone_number :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Customer < ApplicationRecord
end
