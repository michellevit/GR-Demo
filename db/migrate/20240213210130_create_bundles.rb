class CreateBundles < ActiveRecord::Migration[7.1]
  def change
    create_table :bundles do |t|
      t.string :name
      t.text :description
      t.float :discount_percentage
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end