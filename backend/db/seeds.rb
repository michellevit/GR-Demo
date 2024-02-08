# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


# Load the JSON data
file_path = Rails.root.join('lib', 'seeds', 'products.json')
product_data = JSON.parse(File.read(file_path))

product_data.each do |product_attrs|
  # Check for duplicates based on a unique attribute, such as 'product_name'
  unless Product.exists?(product_name: product_attrs["product_name"])
    Product.create!(product_attrs)
  end
end