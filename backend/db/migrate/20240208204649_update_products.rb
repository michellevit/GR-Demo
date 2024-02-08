class UpdateProducts < ActiveRecord::Migration[7.1]
  def change
    change_column :products, :description, :text
    add_column :products, :flex_price, :boolean
    add_column :products, :ratings_count, :integer
    add_column :products, :average_rating, :float
    add_column :products, :download_count, :integer
  end
end