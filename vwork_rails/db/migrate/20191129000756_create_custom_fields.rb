class CreateCustomFields < ActiveRecord::Migration[5.2]
  def change
    create_table :custom_fields do |t|
      t.string :name
      t.string :value
      t.string :field_type

      t.timestamps
    end
  end
end
