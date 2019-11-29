# == Schema Information
#
# Table name: customers
#
#  id           :integer          not null, primary key
#  address      :string           not null
#  email        :string           not null
#  name         :string           not null
#  phone_number :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Customer < ApplicationRecord
  has_many :jobs, inverse_of: :customer, dependent: :nullify
  has_many :templates, inverse_of: :customer, dependent: :nullify
end
