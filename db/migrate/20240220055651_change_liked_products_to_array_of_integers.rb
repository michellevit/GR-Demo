class ChangeLikedProductsToArrayOfIntegers < ActiveRecord::Migration[7.1]
  def up
    remove_column :users, :liked_products if column_exists?(:users, :liked_products)
    add_column :users, :liked_products, :integer, array: true, default: []
  end
  def down
    remove_column :users, :liked_products if column_exists?(:users, :liked_products)
  end
end
