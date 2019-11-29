# == Schema Information
#
# Table name: workers
#
#  id           :integer          not null, primary key
#  address      :string           not null
#  email        :string           not null
#  name         :string           not null
#  phone_number :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Worker < ApplicationRecord
  has_many :jobs, inverse_of: :worker, dependent: :nullify
  has_many :templates, inverse_of: :worker, dependent: :nullify
end
