# == Schema Information
#
# Table name: workers
#
#  id           :integer          not null, primary key
#  address      :string
#  email        :string
#  name         :string
#  phone_number :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Worker < ApplicationRecord
  has_many :jobs, inverse_of: :worker, dependent: :nullify
  has_many :templates, inverse_of: :worker, dependent: :nullify
end
