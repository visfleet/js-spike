class CreateJobAssets < ActiveRecord::Migration[6.0]
  def change
    create_table :job_assets do |t|
      t.references :job, null: false, foreign_key: true, index: true
      t.references :asset, null: false, foreign_key: true, index: true

      t.timestamps
    end
  end
end
