class ChangeProductNameType < ActiveRecord::Migration[7.1]
  def change
    change_column :products, :product_name, :string, null: false
  end
end

