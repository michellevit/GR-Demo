json.extract! product, :id, :product_name, :creator_name, :description, :price, :created_at, :updated_at
json.url product_url(product, format: :json)
