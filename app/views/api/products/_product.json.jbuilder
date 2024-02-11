json.extract! product, :id, :product_name, :user, :description, :price, :flex_price, :ratings_count, :average_rating, :download_count, :created_at, :updated_at
json.url product_url(product, format: :json)
