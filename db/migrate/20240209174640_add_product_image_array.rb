class AddProductImageArray < ActiveRecord::Migration[7.1]
  def change
    add_column :products, :image_urls, :jsonb, default: [], array: true
  end
end