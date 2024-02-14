# GR Product Page 

A basic replication of the GR Product Page UX in Rails and React, with a few additons:
- Discover Page 'Liked' section
- Product Page 'like' button
- Product Page 'Liked' section
- Product Page 'Bundle' section
Demo - Frontend: [www.michellef.dev](https://gr-demo.michellef.dev/)
Demo - Backend:  [www.michellef.dev/api/products](https://gr-demo.michellef.dev/api/products)


## Table of Contents
1. [How to Basics](#how-to-basics)
2. [How To Interact With DB (Development)](#how-to-db-development)
3. [How To Edit DB (Development)](#how-to-edit-db-development)
4. [How To Edit DB (Production)](#how-to-edit-db-production)
5. [Heroku - Updating](#heroku-troubleshooting)
6. [Heroku - Troubleshooting](#heroku-troubleshooting)
7. [Features To Add](#features-to-add)
8. [Credits](#credits)


## 1. How to Basics <a name="how-to-basics"></a>
- See current routes: rails routes
- To add a dependency:
  - Add gem to 'Gemfile' and run 'bundle install'
  - This updates Gemfile with current dependencies


## 2. How To Interact With DB (Development)<a name="how-to-db-development"></a>
- Open rails console: rails console
  - See all entries: Product.all
  - List first item in DB: Product.all.first 
  - Create new entry: Product.create(product_name: "example 1")
  - Delete all entries: Product.delete_all
- To seed the db -> exit the rails console + execute: rails db:seed


## 3. How To Edit DB (Development) <a name="how-to-edit-db-development"></a>
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


## 4. How To Edit DB - Production <a name="how-to-edit-db-production"></a>
- Note: This uses version control -> files in db/migrate folder
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
  -Run: heroku run rake db:migrate -a gr-demo


## 5. Heroku - Updating <a name="heroku-updating"></a>
- How to push changes to Heroku app:
  - Navigate into the Gumroad-Demo directory in the powershell terminal
  - Make sure you are logged into heroku from terminal (run: 'heroku login')
  - Run: .\update-app.bat "Your commit message here"


## 6. Heroku - Troubleshooting <a name="heroku-troubleshooting"></a>
- Reminders:
  - After updating routes.rb file: 
    - Make sure to restart the Heroku server after modifying the routes.rb file 
  - If the frontend isn't working
    - Check if the public folder has the index.html file (if not react build has failed)
- Debugging: 
  - To log errors in backend (e.g. controllers) - add this line: 
    - Add this line: Rails.logger.info "log message here"
    - Example: Rails.logger.info "Parameters: #{params.inspect}" 
    - This will be printed in the heroku logs
- Commands:
  - ERROR LOGS: heroku logs --tail -a gr-demo
  - MIGRATE: heroku run rake db:migrate -a gr-demo
  - RESTART SERVER: heroku ps:restart -a gr-demo
  - SEED DB: heroku run rake db:seed --app gr-demo
  - RESET DB (re-seed and index to 0): .\reset-db.bat


## 7. Features To Add <a name="features-to-add"></a>
- SingleProduct Page: Add bundled items section (if exists for product)
- DB: Add recently_viewed field to users
- Backend: Add recently_viewed functionality
- SingleProduct Page: Add recently_views section
- Nav: Search functionality
- DB: Add Cart field for users
- Nav: Add to Cart functionality
- SingleProduct Page: Add to Cart functionality
- DB: Add 'Staff Picks' table (or assign users staff status and implement star button w/ before_action)
- AllProducts Page: Add Staff Picks
- AllProducts Page: Add profile pics for users
- SingleProduct Page: Add profile pics for users
- DB: Add profile pics for users
- SingleProduct Page: Rating bar chart + accurate star ratings
- SingleProduct Page: rating bar chart, fix rating stars, if 0 ratings -> 'no ratings'
- SingleProduct Page: image carousel sizing when multiple images
- CSS: define variables for colors and other properties
- CSS: clean


## 8. Credits <a name="credits"></a>
Michelle Flandin