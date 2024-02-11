class ChangeImageUrlsToJson < ActiveRecord::Migration[7.1]
  def change
    remove_column :products, :image_urls
    add_column :products, :image_urls, :jsonb, default: [], null: false  end
end
