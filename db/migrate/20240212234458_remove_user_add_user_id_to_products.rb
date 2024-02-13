class RemoveUserAddUserIdToProducts < ActiveRecord::Migration[7.1]
  def change
    remove_column :products, :user, :string 
    add_reference :products, :user, foreign_key: true
  end
end