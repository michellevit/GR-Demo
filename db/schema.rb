ActiveRecord::Schema[7.1].define(version: 2024_02_10_233431) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "products", force: :cascade do |t|
    t.string "product_name", null: false
    t.string "user"
    t.text "description"
    t.float "price"
    t.boolean "flex_price"
    t.integer "ratings_count"
    t.float "average_rating"
    t.integer "download_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.jsonb "image_urls", default: [], null: false
    t.integer "images_id"
  end

end
