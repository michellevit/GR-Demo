# GR Product Engineering Challenge 

This project is a simplified replication of the GR Discover and Product Page user experience, developed using Rails and React. It incorporates core features of the original interface with several enhancements to improve user interaction and engagement. Key features include:
- Discover Page 'Liked' Section: A new section on the 'Discover' page to display products that the user has liked.
- Product Page 'Like' Button: An interactive heart icon allowing users to 'like' or 'unlike' products. 
- Product Page 'Bundle' Section: A section that appears if the product is part of a 'bundle', offering users the option to purchase related products together at a discounted rate. 

Demo - Frontend: [www.michellef.dev](https://gr-demo.michellef.dev/)
Demo - Backend:  [www.michellef.dev/api](https://gr-demo.michellef.dev/api)

![npm](https://badge.fury.io/js/reactapp.svg)
![Gem](https://badge.fury.io/rb/example_gem.svg)


## Table of Contents
- [Technologies Used](#technologies-used)
- [Architectural Decisions](#architectural-decisions)
- [What I Learned](#what-i-learned)
- [How to Use the Project](#how-to-use-the-project)
  - [Interacting With DB (Development)](#interacting-with-db-development)
  - [Editing DB (Development)](#editing-db-development)
  - [Editing DB (Production)](#editing-db-production)
  - [Heroku - Updating](#heroku-updating)
  - [Heroku - Troubleshooting](#heroku-troubleshooting)
- [TypeScript](#typescript)
- [Features To Add](#features-to-add)
- [Credits](#credits)


## 1. Technologies Used<a name="technologies-used"></a>


## 2. Architectural Decisions<a name="how-to-basics"></a>



## 2. What I Learned<a name="what-I-learned"></a>



## 2. How To Interact With DB (Development)<a name="how-to-db-development"></a>
- To add a dependency:
  - Add gem to 'Gemfile' and run 'bundle install'
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


## 6. Typescript <a name="typescript"></a>
- to compile ts into js (while in reactapp dir)
  - run: npm run tsc
  - Note: this automatically is part of the 'npm run build' command


## 7. Features To Add <a name="features-to-add"></a>
- DB: Add recently_viewed field to users
- Backend: Add recently_viewed functionality
- SingleProduct Page: Add recently_viewed section
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
- User authentification (liked_products, recently_viewed)
- CSS: define global variables for colors and other properties
- CSS: clean/reorganize


## 8. Credits <a name="credits"></a>
Michelle Flandin