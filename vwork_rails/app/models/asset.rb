# == Schema Information
#
# Table name: assets
#
#  id          :integer          not null, primary key
#  address     :string           not null
#  asset_model :string           not null
#  cost        :decimal(10, 10)
#  latitude    :decimal(10, 5)
#  longitude   :decimal(10, 5)
#  name        :string           not null
#  notes       :text             not null
#  serial      :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  customer_id :integer
#
# Indexes
#
#  index_assets_on_customer_id  (customer_id)
#

class Asset < ApplicationRecord
  belongs_to :customer, inverse_of: :assets, optional: true
end
