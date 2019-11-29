class AddParentToSteps < ActiveRecord::Migration[5.2]
  def change
    add_reference :steps, :job
  end
end
