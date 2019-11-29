class AddParentToCustomFields < ActiveRecord::Migration[5.2]
  def change
    add_reference :custom_fields, :job
  end
end
