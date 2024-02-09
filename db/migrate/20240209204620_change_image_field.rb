class ChangeImageField < ActiveRecord::Migration[7.1]
  def change
    reversible do |change|
      change.up do
        execute <<-SQL
          ALTER TABLE products
          ALTER COLUMN image_urls
          TYPE jsonb
          USING image_urls::jsonb
        SQL
      end

      change.down do
        execute <<-SQL
          ALTER TABLE products
          ALTER COLUMN image_urls
          TYPE json
          USING image_urls::json
        SQL
      end
    end
  end
end