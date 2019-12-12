class RemoveStateFromTemplates < ActiveRecord::Migration[6.0]
  def change

    remove_column :templates, :state, :string
  end
end
