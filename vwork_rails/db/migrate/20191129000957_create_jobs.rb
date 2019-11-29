class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :template_name
      t.string :planned_start_time
      t.string :state

      t.timestamps
    end
  end
end
