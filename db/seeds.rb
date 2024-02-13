# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

users_file_path = Rails.root.join('lib', 'seeds', 'users.json')
users_data = JSON.parse(File.read(users_file_path))

users_data.each do |user_attrs|
  User.find_or_create_by!(id: user_attrs["id"]) do |user|
    user.name = user_attrs["name"]
    user.highlight_color = user_attrs["highlight_color"]
    user.background_color = user_attrs["background_color"]
    user.profile_pic = user_attrs["profile_pic"]
    user.products = [] # This will be updated when seeding products
    user.bundled_products = user_attrs["bundled_products"]
    user.recently_viewed_products = user_attrs["recently_viewed_products"]
    user.recently_viewed_categories = user_attrs["recently_viewed_categories"]
  end
end

# Seed Products
products_file_path = Rails.root.join('lib', 'seeds', 'products.json')
products_data = JSON.parse(File.read(products_file_path))

products_data.each do |product_attrs|
  user = User.find_by(id: product_attrs["user_id"])

  if user
    Product.find_or_create_by!(product_id: product_attrs["product_id"]) do |product|
      product.product_name = product_attrs["product_name"]
      product.user_id = user.id
      product.description = product_attrs["description"]
      product.price = product_attrs["price"]
      product.flex_price = product_attrs["flex_price"]
      product.ratings_count = product_attrs["ratings_count"]
      product.average_rating = product_attrs["average_rating"]
      product.download_count = product_attrs["download_count"]
      product.image_urls = product_attrs["image_urls"]
    end
  else
    puts "User not found for product: #{product_attrs["product_name"]}"
  end
end