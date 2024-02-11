# lib/tasks/products.rake
namespace :products do
    desc "Reset PK sequence for the products table"
    task reset_pk_sequence: :environment do
      ActiveRecord::Base.connection.reset_pk_sequence!('products')
    end
  end