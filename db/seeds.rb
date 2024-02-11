# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


# Load the products JSON data
file_path = Rails.root.join('lib', 'seeds', 'products.json')
products_data = JSON.parse(File.read(file_path))

products_data.each do |product_attrs|
  # Use find_or_create_by! to avoid creating duplicates based on product_name
  Product.find_or_create_by!(product_name: product_attrs["product_name"]) do |product|
    product.user = product_attrs["user"]
    product.description = product_attrs["description"]
    product.price = product_attrs["price"]
    product.flex_price = product_attrs["flex_price"]
    product.ratings_count = product_attrs["ratings_count"]
    product.average_rating = product_attrs["average_rating"]
    product.download_count = product_attrs["download_count"]
    product.image_urls = product_attrs["image_urls"]
    product.images_id = product_attrs["images_id"]
  end
end

# Optionally, reset ID sequence in PostgreSQL (Use with caution!)
if Product.count.zero?
  ActiveRecord::Base.connection.reset_pk_sequence!('products')
end