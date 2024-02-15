# GR Product Engineering Challenge 

![React Version](https://img.shields.io/badge/react-18.2.0-blue.svg)
![Rails Version](https://img.shields.io/badge/rails-7.1.3-red.svg)
![Ruby Version](https://img.shields.io/badge/ruby-3.2.3-red.svg)

This project is a simplified replication of the GR Discover and Product Page user experience, developed using Rails and React. It incorporates core features of the original interface with several enhancements to improve user interaction and engagement. Key features include:
- Discover Page 'Liked' Section: A new section on the 'Discover' page to display products that the user has liked.
- Product Page 'Like' Button: An interactive heart icon allowing users to 'like' or 'unlike' products. 
- Product Page 'Bundle' Section: A section that appears if the product is part of a 'bundle', offering users the option to purchase related products together at a discounted rate. 


<a href="https://gr-demo.michellef.dev/" target="_blank"><img src="https://img.shields.io/badge/Demo-Frontend-blue?style=for-the-badge&logo=react"></a>
<a href="https://gr-demo.michellef.dev/api" target="_blank"><img src="https://img.shields.io/badge/Demo-Backend-red?style=for-the-badge&logo=ruby"></a>




## Table of Contents
- [Technologies Used](#technologies-used)
- [Feature Overview](#feature-overview)
- [Architectural Decisions](#architectural-decisions)
- [What I Learned](#what-i-learned)
- [How to Use the Project](#how-to-use-the-project)
  - [Interacting With DB (Development)](#interacting-with-db-development)
  - [Editing DB](#editing-db)
  - [Heroku](#heroku)
- [Features To Add](#features-to-add)
- [Credits](#credits)


## Technologies Used<a name="technologies-used"></a>


## Feature Overview<a name="feature-overview"></a>
<div style="display: flex; justify-content: space-between;">
  <img src="screenshots/GR-Demo-Screenshot-Discover-Page.png" style="width: 45%; margin-right: 10px;" alt="Discover Page Screenshot" />
  <img src="screenshots/GR-Demo-Screenshot-Product-Page.png" style="width: 45%;" alt="Product Page Screenshot" />
</div>


## Architectural Decisions<a name="architectural-decisions"></a>



## What I Learned<a name="what-I-learned"></a>


## How To Use the Project<a name="how-to-use"></a>
### How To Interact With DB (Development)
- To add a dependency:
  - Add gem to 'Gemfile' and run 'bundle install'
- Open rails console: rails console
  - See all entries: Product.all
  - List first item in DB: Product.all.first 
  - Create new entry: Product.create(product_name: "example 1")
  - Delete all entries: Product.delete_all
- To seed the db -> exit the rails console + execute: rails db:seed


### How To Edit DB (Development) <a name="how-to-edit-db"></a>
#### Development
- Open bash terminal 
- Navigate to backend dir
  - Generate a migration: rails generate migration [description of change being implemented to db]
    - e.g. rails generate migration ChangeFieldTypeInProducts
  - Open the newly created migration file in db/migrate
    - Inside the migration file, add the command needed to make the change
    - e.g. For example, to change a column named description from string to text in the products table, you would write:
    - class ChangeFieldTypeInProducts < ActiveRecord::Migration[7.1]
        def change
          change_column :products, :description, :text
        end
      end
      -EXAMPLES: 
        -rename_column :products, :creator_name, :user
    -Run the migration (in bash terminal): 
      - rails db:migrate
#### Production
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


### Heroku<a name="heroku"></a>
#### Updating App
- How to push changes to Heroku app:
  - Navigate into the Gumroad-Demo directory in the powershell terminal
  - Make sure you are logged into heroku from terminal (run: 'heroku login')
  - Run: .\update-app.bat "Your commit message here"
#### Troubleshooting
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



## Features To Add <a name="features-to-add"></a>
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


## Credits <a name="credits"></a>
Michelle Flandin