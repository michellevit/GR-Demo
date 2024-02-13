class RemoveProductIdFromProducts < ActiveRecord::Migration[7.1]
  def change
    remove_column :products, :product_id, :integer
  end
end