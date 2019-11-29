# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_29_015807) do

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
    t.string "state", null: false
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

end
