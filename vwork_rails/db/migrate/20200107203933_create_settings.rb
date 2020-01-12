class CreateSettings < ActiveRecord::Migration[6.0]
  def change
    create_table :settings do |t|
      t.text :job_list_columns, default: [].to_yaml
      t.boolean :enable_schedule, default: false
      t.boolean :enable_assets, default: false
      t.boolean :enable_customers, default: false
      t.boolean :enable_jobs, default: false

      t.timestamps
    end
  end
end
