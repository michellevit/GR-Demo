class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :highlight_color
      t.string :background_color
      t.string :profile_pic
      t.text :products, array: true, default: [] 
      t.jsonb :bundled_products, default: []
      t.text :recently_viewed_products, array: true, default: []
      t.text :recently_viewed_categories, array: true, default: []
      
      t.timestamps
    end
  end
end