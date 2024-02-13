# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


# Seed Users
users_file_path = Rails.root.join('lib', 'seeds', 'users.json')
users_data = JSON.parse(File.read(users_file_path))

users_data.each do |user_attrs|
  User.create!(
    name: user_attrs["name"],
    email: user_attrs["email"],
    highlight_color: user_attrs["highlight_color"],
    background_color: user_attrs["background_color"],
    profile_pic: user_attrs["profile_pic"]
  )
end





# Seed Products
products_file_path = Rails.root.join('lib', 'seeds', 'products.json')
products_data = JSON.parse(File.read(products_file_path))

products_data.each do |product_attrs|
  # Find the user by email instead of ID
  user = User.find_by(email: product_attrs["email"])

  if user
    user.products.create!(
      product_name: product_attrs["product_name"],
      description: product_attrs["description"],
      price: product_attrs["price"],
      flex_price: product_attrs["flex_price"],
      ratings_count: product_attrs["ratings_count"],
      average_rating: product_attrs["average_rating"],
      download_count: product_attrs["download_count"],
      image_urls: product_attrs["image_urls"]
    )
  else
    puts "User not found for product: #{product_attrs["product_name"]}"
  end
end