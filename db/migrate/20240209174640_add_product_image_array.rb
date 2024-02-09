class AddImageUrlsToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :image_urls, :jsonb, default: []
  end
end
