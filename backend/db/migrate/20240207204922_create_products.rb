class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :product_name
      t.string :creator_name
      t.string :description
      t.float  :price

      t.timestamps
    end
  end
end
