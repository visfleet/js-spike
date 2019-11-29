# == Schema Information
#
# Table name: templates
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  planned_start_time :datetime
#  state              :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  customer_id        :integer
#  worker_id          :integer
#
# Indexes
#
#  index_templates_on_customer_id  (customer_id)
#  index_templates_on_worker_id    (worker_id)
#

class Template < ApplicationRecord
  belongs_to :customer, optional: true, inverse_of: :templates
  belongs_to :worker, optional: true, inverse_of: :templates
end
