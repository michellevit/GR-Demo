class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :product_name
      t.string :user
      t.text :description
      t.float :price
      t.boolean :flex_price
      t.integer :ratings_count
      t.float :average_rating
      t.integer :download_count

      t.timestamps
    end
  end
end
