class CreateAssets < ActiveRecord::Migration[6.0]
  def change
    create_table :assets do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :asset_model, null: false
      t.string :serial, null: false
      t.decimal :cost, precision: 10, scale: 10
      t.references :customer, null: true, index: true
      t.decimal :longitude, precision: 10, scale: 5, null: true
      t.decimal :latitude, precision: 10, scale: 5, null: true
      t.text :notes, null: false

      t.timestamps
    end
  end
end
