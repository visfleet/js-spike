class AddCustomerToTemplates < ActiveRecord::Migration[5.2]
  def change
    add_reference :templates, :customer, foreign_key: true
  end
end
