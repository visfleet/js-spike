class ChangeJobPlannedStartDateToDatetime < ActiveRecord::Migration[5.2]
  def change
    change_column :jobs, :planned_start_time, :datetime
  end
end
