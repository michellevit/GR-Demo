# Gumroad Product Page 

A basic replication of the Gumroad Product Page UX in Rails and React, with an added 'Recently Viewed' section. 
Demo: www.michellef.dev 



## Table of Contents
1. [How to Basics](#how-to-basics)
2. [How to Interact With Database (Development)](#how-to-db-development)
3. [How to Edit Schema (Development)](#how-to-edit-schema-development)
4. [How to Edit Schema (Production)](#how-to-edit-schema-production)
5. [Heroku - Updating](#heroku-troubleshooting)
6. [Heroku - Troubleshooting](#heroku-troubleshooting)
7. [Credits](#credits)



## 1. How to Basics <a name="how-to-basics"></a>
- To start the local server - navigate to backend dir + run: rails s (opens on localhost:3000)
  - To run on a specific port: rails s -p 3001
  - To close server - ctrl c
- See current routes: rails routes
- To add a dependency:
  - Add gem to 'Gemfile' and run 'bundle install'
  - This updates Gemfile with current dependencies


## 2. How to Interact With Database <a name="how-to-db-development"></a>
- Open rails console: rails console
  - See all entries: Product.all
  - List first item in DB: Product.all.first 
  - Create new entry: Product.create(product_name: "example 1")
  - Delete all entries: Product.delete_all
- To seed the db -> exit the rails console + execute: rails db:seed


## 3. How to Edit Schema - Development <a name="how-to-edit-schema-development"></a>
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
    -Run the migration (in bash terminal): 
      - rails db:migrate


## 4. How to Edit Schema - Production <a name="how-to-edit-schema-production"></a>
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
  -Run: heroku run rake db:migrate -a gumroad-demo


## 5. Heroku - Updating <a name="heroku-updating"></a>
- How to push changes to Heroku app:
  - Navigate into the Gumroad-Demo directory in the powershell terminal
  - Make sure you are logged into heroku from terminal (run: 'heroku login')
  - Run: .\automate-build-update.bat "Your commit message here"


## 6. Heroku - Troubleshooting <a name="heroku-troubleshooting"></a>
- make sure to restart the Heroku server after modifying the routes.rb file 
- Commands:
  - ERROR LOGS: heroku logs --tail -a gumroad-demo
  - MIGRATE: heroku run rake db:migrate -a gumroad-demo
  - CLEAR DATABASE: ./reset-database.bat
  - RESTART SERVER: heroku ps:restart -a gumroad-demo
  - SEED DB: heroku run rake db:seed --app gumroad-demo
  - RESET DB: .\reset-products-table.bat


## 7. Credits <a name="credits"></a>
Michelle Flandin