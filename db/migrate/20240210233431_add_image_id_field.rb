class AddImageIdField < ActiveRecord::Migration[7.1]
  def change
    add_column :products, :images_id, :integer
  end
end
