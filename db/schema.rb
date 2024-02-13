# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_02_13_210223) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bundle_products", force: :cascade do |t|
    t.bigint "bundle_id", null: false
    t.bigint "product_id", null: false
    t.index ["bundle_id"], name: "index_bundle_products_on_bundle_id"
    t.index ["product_id"], name: "index_bundle_products_on_product_id"
  end

  create_table "bundles", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.float "discount_percentage"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_bundles_on_user_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "product_name", null: false
    t.text "description"
    t.float "price"
    t.boolean "flex_price"
    t.integer "ratings_count"
    t.float "average_rating"
    t.integer "download_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.jsonb "image_urls", default: [], null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_products_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "highlight_color"
    t.string "background_color"
    t.string "profile_pic"
    t.text "recently_viewed_products", default: [], array: true
    t.text "liked_products", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "bundle_products", "bundles"
  add_foreign_key "bundle_products", "products"
  add_foreign_key "bundles", "users"
  add_foreign_key "products", "users"
end
