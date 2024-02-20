class ChangeLikedProductsToArrayOfIntegers < ActiveRecord::Migration[7.1]
  def change
    change_column :users, :liked_products, 'integer[] USING ARRAY[liked_products]::integer[]', default: [], array: true
  end
end
