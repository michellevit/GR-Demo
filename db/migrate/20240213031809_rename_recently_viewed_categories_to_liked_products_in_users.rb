class RenameRecentlyViewedCategoriesToLikedProductsInUsers < ActiveRecord::Migration[7.1]
  def change
    rename_column :users, :recently_viewed_categories, :liked_products
  end
end
