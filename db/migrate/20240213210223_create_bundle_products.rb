class CreateBundleProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :bundle_products do |t|
      t.references :bundle, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
    end
  end
end