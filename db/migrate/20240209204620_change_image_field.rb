class ChangeImageField < ActiveRecord::Migration[7.1]
  def change
    reversible do |dir|
      change_table :products do |t|
        dir.up do
          t.change :image_urls, 'jsonb USING CAST(image_urls AS jsonb)'
        end

        dir.down do
          t.change :image_urls, 'text USING CAST(image_urls AS text)'
        end
      end
    end
  end
end