class ChangeCreatorToUser < ActiveRecord::Migration[7.1]
  def change
    rename_column :products, :creator_name, :user
  end
end