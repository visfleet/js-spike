class AddWorkerToTemplates < ActiveRecord::Migration[5.2]
  def change
    add_reference :templates, :worker, foreign_key: true
  end
end
