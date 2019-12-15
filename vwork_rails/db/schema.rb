# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_15_231819) do

  create_table "assets", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "asset_model", null: false
    t.string "serial", null: false
    t.decimal "cost", precision: 10, scale: 10
    t.integer "customer_id"
    t.decimal "longitude", precision: 10, scale: 5
    t.decimal "latitude", precision: 10, scale: 5
    t.text "notes", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["customer_id"], name: "index_assets_on_customer_id"
  end

  create_table "custom_fields", force: :cascade do |t|
    t.string "name", null: false
    t.string "value", null: false
    t.string "field_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "job_id", null: false
    t.index ["job_id"], name: "index_custom_fields_on_job_id"
  end

  create_table "customers", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "phone_number", null: false
    t.string "address", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "job_assets", force: :cascade do |t|
    t.integer "job_id", null: false
    t.integer "asset_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["asset_id"], name: "index_job_assets_on_asset_id"
    t.index ["job_id"], name: "index_job_assets_on_job_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "template_name", null: false
    t.datetime "planned_start_time"
    t.string "state", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "customer_id"
    t.integer "worker_id"
    t.index ["customer_id"], name: "index_jobs_on_customer_id"
    t.index ["worker_id"], name: "index_jobs_on_worker_id"
  end

  create_table "steps", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "job_id", null: false
    t.index ["job_id"], name: "index_steps_on_job_id"
  end

  create_table "templates", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "planned_start_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "customer_id"
    t.integer "worker_id"
    t.index ["customer_id"], name: "index_templates_on_customer_id"
    t.index ["worker_id"], name: "index_templates_on_worker_id"
  end

  create_table "workers", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "phone_number", null: false
    t.string "address", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "job_assets", "assets"
  add_foreign_key "job_assets", "jobs"
end
