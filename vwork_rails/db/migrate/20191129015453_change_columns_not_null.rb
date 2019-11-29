class ChangeColumnsNotNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :customers, :address, false
    change_column_null :customers, :email, false
    change_column_null :customers, :name, false
    change_column_null :customers, :phone_number, false

    change_column_null :workers, :address, false
    change_column_null :workers, :email, false
    change_column_null :workers, :name, false
    change_column_null :workers, :phone_number, false

    change_column_null :jobs, :state, false
    change_column_null :jobs, :template_name, false

    change_column_null :templates, :name, false
    change_column_null :templates, :state, false

    change_column_null :steps, :name, false
    change_column_null :steps, :address, false
    change_column_null :steps, :job_id, false

    change_column_null :custom_fields, :name, false
    change_column_null :custom_fields, :value, false
    change_column_null :custom_fields, :field_type, false
    change_column_null :custom_fields, :job_id, false
  end
end
