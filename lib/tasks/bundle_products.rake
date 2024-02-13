# lib/tasks/bundle_products.rake
namespace :bundles do
  desc "Reset PK sequence for the bundle_products table"
  task reset_pk_sequence: :environment do
    ActiveRecord::Base.connection.reset_pk_sequence!('bundle_products')
  end
end