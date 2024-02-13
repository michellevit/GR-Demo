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
  user = User.find_or_create_by(email: user_attrs["email"]) do |u|
    u.name = user_attrs["name"]
    u.highlight_color = user_attrs["highlight_color"]
    u.background_color = user_attrs["background_color"]
    u.profile_pic = user_attrs["profile_pic"]
    u.liked_products = user_attrs["liked_products"]
  end
end


# Seed Products
products_file_path = Rails.root.join('lib', 'seeds', 'products.json')
products_data = JSON.parse(File.read(products_file_path))
products_data.each do |product_attrs|
  user = User.find_by(email: product_attrs["email"])
  next unless user # Skip if user not found
  # Attempt to find an existing product by name and user_id to avoid duplicates
  product = user.products.find_or_initialize_by(product_name: product_attrs["product_name"])
  product.assign_attributes(
    description: product_attrs["description"],
    price: product_attrs["price"],
    flex_price: product_attrs["flex_price"],
    ratings_count: product_attrs["ratings_count"],
    average_rating: product_attrs["average_rating"],
    download_count: product_attrs["download_count"],
    image_urls: product_attrs["image_urls"]
  )
  
  if product.new_record? || product.changed?
    product.save!
    puts "Created or updated product: #{product.product_name}"
  else
    puts "Skipped existing product: #{product.product_name}"
  end
end


# Seed Bundles
bundles_file_path = Rails.root.join('lib', 'seeds', 'bundles.json')
bundles_data = JSON.parse(File.read(bundles_file_path))
bundles_data.each do |bundle_attrs|
  user = User.find_by(email: bundle_attrs["email"])
  next unless user # Skip if user not found
  bundle = user.bundles.find_or_create_by(name: bundle_attrs["name"]) do |b|
    b.description = bundle_attrs["description"]
    b.discount_percentage = bundle_attrs["discount_percentage"]
  end
  # Associate products with the bundle
  bundle_attrs["products"].each do |product_name|
    product = Product.find_by(product_name: product_name, user_id: user.id)
    BundleProduct.find_or_create_by(bundle_id: bundle.id, product_id: product.id) if product
  end
  puts "Created or updated bundle: #{bundle.name}"
end