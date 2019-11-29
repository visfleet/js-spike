class AddWorkerToJobs < ActiveRecord::Migration[5.2]
  def change
    add_reference :jobs, :worker, foreign_key: true
  end
end
