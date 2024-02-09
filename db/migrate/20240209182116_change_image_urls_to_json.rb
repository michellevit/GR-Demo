class ChangeImageUrlsToJson < ActiveRecord::Migration[7.1]
  def change
    change_column :products, :image_urls, :jsonb
  end
end
