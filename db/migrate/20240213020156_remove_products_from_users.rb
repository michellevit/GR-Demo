class RemoveProductsFromUsers < ActiveRecord::Migration[7.1]
  def change
    remove_column :users, :products, :text
  end
end