class CreateTemplates < ActiveRecord::Migration[5.2]
  def change
    create_table :templates do |t|
      t.string :name
      t.datetime :planned_start_time
      t.string :state

      t.timestamps
    end
  end
end
