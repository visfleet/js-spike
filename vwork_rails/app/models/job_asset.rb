# == Schema Information
#
# Table name: job_assets
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  asset_id   :integer          not null
#  job_id     :integer          not null
#
# Indexes
#
#  index_job_assets_on_asset_id  (asset_id)
#  index_job_assets_on_job_id    (job_id)

class JobAsset < ApplicationRecord
  belongs_to :job, inverse_of: :job_assets
  belongs_to :asset, inverse_of: :job_assets
end
