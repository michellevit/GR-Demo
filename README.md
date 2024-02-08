# Gumroad Product Page 

A basic replication of the Gumroad Product Page UX in Rails and React, with an added 'Recently Viewed' section. 
Demo: www.michellef.dev 


## Table of Contents
1. [How to Use](#how-to-use)
2. [How to Edit Schema](#how-to-edit-schema)
3. [Credits] (#credits)


## 1. How to Use <a name="how-to-use"></a>
- To start the server - navigate to backend dir + run: rails s (opens on localhost:3000)
  - To run on a specific port: rails s -p 3001
  - To close server - ctrl c
- Gitbash: rails g controller home 
- Gitbash: rails routes -> see current routes


## 2. How to Edit Schema <a name="how-to-edit-schema"></a>
- Note: This uses version control -> hence complexity
- Open bash terminal 
- Navigate to backend dir
  - Generate a migration: rails generate migration [description of change being implemented to db]
    - e.g. rails generate migration ChangeFieldTypeInProducts
  - Open the newly created migration file in db/migrate
    - Inside the migration file, you'll need to add a command to make the change
    - e.g. For example, to change a column named description from string to text in the products table, you   would write:
    - class ChangeFieldTypeInProducts < ActiveRecord::Migration[7.1]
        def change
          change_column :products, :description, :text
        end
      end
      -EXAMPLES: 
        -rename_column :products, :creator_name, :user
    -Run the migration (in bash temrinal): 
      - rails db:migrate


## 3. Credits <a name="credits"></a>
Michelle Flandin