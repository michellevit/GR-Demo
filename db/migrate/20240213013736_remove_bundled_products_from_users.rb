class RemoveBundledProductsFromUsers < ActiveRecord::Migration[7.1]
  def change
    remove_column :users, :bundled_products, :jsonb, default: []
  end
end