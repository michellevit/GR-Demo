class RemoveImagesIdFromProducts < ActiveRecord::Migration[7.1]
  def change
    remove_column :products, :images_id, :integer
  end
end