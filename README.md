# GR Product Engineering Challenge 

![Ruby Version](https://img.shields.io/badge/Ruby-3.2.3-red.svg)
![Rails Version](https://img.shields.io/badge/Rails-7.1.3-red.svg)
![React Version](https://img.shields.io/badge/React-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue.svg)
![Heroku](https://img.shields.io/badge/Platform-Heroku-lightgrey.svg)

This project is a simplified replication of the GR Discover and Product Page UX, developed using Rails and React.


<a href="https://gr-demo.michellef.dev/api" target="_blank"><img src="https://img.shields.io/badge/Demo-Backend-red?style=for-the-badge&logo=ruby"></a>
<a href="https://gr-demo.michellef.dev/" target="_blank"><img src="https://img.shields.io/badge/Demo-Frontend-blue?style=for-the-badge&logo=react"></a>


## Table of Contents
- [Technologies Used](#technologies-used)
- [Added Features](#added-features)
- [Architectural Decisions](#architectural-decisions)
- [What I Learned](#what-i-learned)
- [What I Would Do Differently](#what-i-would-do-differently)
- [Basic Usage](#basic-usage)
  - [How To Interact with the Database in Development](#how-to-interact-with-db)
  - [How To Modify Database Schema](#how-to-modify-db)
  - [How To Seed the Database](#how-to-seed-db)
  - [How To Reset the Database](#how-to-reset-db)
  - [How To Update the App](#how-to-update-app)
  - [Heroku Troubleshooting](#heroku-troubleshooting)
- [Features To Add](#features-to-add)
- [Credits](#credits)


## Technologies Used<a name="technologies-used"></a>
- Ruby
- Rails
- React
- Typescript
- PostgreSQL (Database)
- Heroku (Hosting Platform)
  

## Added Features<a name="added-features"></a>
- **Discover Page 'Liked' Section:** A new section on the 'Discover' page to display products that the user has liked.
- **Product Page 'Like' Button:** An interactive heart icon allowing users to 'like' or 'unlike' products.
- **Product Page 'Bundle' Section:** A new section at the bottom of the product page to highlight bundled products. This section displays the bundle savings amount and offers users the option to add the entire bundle to their cart with a single click.
<div style="display: flex; justify-content: space-between;">
  <img src="screenshots/GR-Demo-Screenshot-Discover-Page.png" style="width: 45%; margin-right: 10px;" alt="Discover Page Screenshot" />
  <img src="screenshots/GR-Demo-Screenshot-Product-Page.png" style="width: 45%;" alt="Product Page Screenshot" />
</div>


## Architectural Decisions<a name="architectural-decisions"></a>
- **Relational Database Design:** A relational schema with a join tables (i.e., bundle_products) was implemented to handle the dynamic product bundle relationship, enhancing data integrity and relationship management.
- **Route Configuration in Rails:** Routes were strategically ordered in routes.rb to prioritize functionality (e.g., search routes) and correctly handle SPA routing with a catchall route.
- **Build Process Automation:** Batch files were chosen over npm scripts for build and deployment tasks to minimize dependencies and ensure compatibility with Heroku's buildpacks, avoiding potential deployment issues.


## What I Learned<a name="what-I-learned"></a>
 - **Relational Database Design:** Initially, the User table stored liked_products as an array of product IDs - a simple but flawed approach due to issues with stale references upon product deletions. Later, when I implemented the bundle feature, I knew to instead use a join table (i.e., bundle_products) to establish many-to-many relationships.
- **Routing Order Significance:** Implementing the search functionality brought to light the importance of the order of routes in the config/routes.rb file. At first, I placed the search route right before the catchall, which needed to be placed last, but soon found out that the search route actually needed to be first (before the resources blocks) to be matched first.
- **Controller Callbacks:** I learned the importance of selectively applying before_action callbacks in controllers after encountering a limitation while handling the bundles method in my products controller. This method required fetching not only the product but also its associated bundles and related users, rendering it unsuitable for conventional before_action usage.


## What I Would Do Differently<a name="what-i-would-do-differently"></a>
- **Image Storage:** Reflecting on my approach, I recognize that hardcoding image URLs (e.g., product images) can result in staleness issues and scalability challenges. In hindsight, I would prioritize database associations or dynamic image URLs generated by Rails Active Storage. This approach ensures data integrity, facilitates easier updates, and offers flexibility to seamlessly transition between local storage and external cloud storage solutions.
- **Global CSS Variables:** Additionally, I would prioritize the implementation of global variables in the CSS to facilitate site-wide design changes.  This would enhance maintainability and simplify the implementation of features such as user-specific background and highlight colors.


## Basic Usage<a name="basic-usage"></a>
*Basic usage instructions for developers who want to interact with the project's database or perform common tasks.*
### How to Interact with the Database in Development<a name="how-to-interact-with-db"></a>
- *The rails console allows you to interact directly with your application's database*
- In the terminal, navigate to the project's root directory
  - **Enter Rails Console:** `rails console`
  - **View All Records:** `Product.all`
  - **View First Record:** `Product.first`
  - **Create New Record:** `Product.create(product_name: "New Product", price: 100)`
  - **Delete All Record:** `Product.delete_all`


### How To Modify Database Schema<a name="how-to-modify-db"></a>
- In a Powershell terminal, navigate to the project's root directory
  - Generate a migration
    - e.g. `rails generate migration ChangeFieldTypeInProducts`
  - Open the newly created migration file in db/migrate
  - Inside the migration file's 'def change' section, add the command needed to make the change
    - e.g. `rename_column :products, :creator_name, :user`
  - Run the migration
    - Development: `rails db:migrate`
    - Production: `heroku run rake db:migrate -a gr-demo`


### How To Seed the Database<a name="how-to-seed-db"></a>
- *This command will seed the database with mock data from the JSON files in lib/seeds*
- In a Powershell terminal, navigate to the project's root directory
  - Run the seed command
    - Development: `rail db:seed`
    - Production: `heroku run rake db:seed --app gr-demo`


### How To Reset the Database<a name="how-to-reset-db"></a>
- *This script will clear the entries from all tables (i.e. Product, User, Bundle), reset the ids to 0, then reseed the database with the mock data from the JSON files in lib/seeds*
- In a Powershell terminal, navigate to the project's root directory
  - Run: `.\reset-db.bat`


### How To Update the Heroku App<a name="how-to-update-app"></a>
- *This script will rebuild the reactapp, copy the contents into the public folder, and push the changes to GitHub - every push to main deploys a new version of the app on Heroku*
- In a Powershell terminal, navigate to the project's root directory
  - Run: `.\update-app.bat "Your commit message here`


### Heroku Troubleshooting<a name="heroku-troubleshooting"></a>
- Reminders:
  - After updating routes.rb file: 
    - Make sure to restart the Heroku server after modifying the routes.rb file 
  - If the frontend isn't working
    - Check if the public folder has the index.html file (if not the reactapp build has failed due to compile error)
- Error Logging: 
  - To log errors in backend (e.g., controllers) - add this line: 
    - Add this line: `Rails.logger.info "log message here"`
    - Example: `Rails.logger.info "Parameters: #{params.inspect}"`
    - This will be printed in the Heroku logs
- Commands:
  - **Error Logs:** `heroku logs --tail -a gr-demo`
  - **Restart Server:** `heroku ps:restart -a gr-demo`
  - **Delete Table Entries:** `heroku run rails runner "User.destroy_all" --app gr-demo`


## Features To Add <a name="features-to-add"></a>
- DB: lib/tasks -> rake files not consistent
- SingleProduct Page: spacing for 'Add all to Cart' section on smaller screen size / more products
- DB: liked_products -> implement join table instead of stale array
- SingleProduct Page: Rating bar chart + accurate star ratings + if 0 ratings -> 'no ratings'
- SingleProduct Page: image carousel sizing when multiple images + transition
- AllProducts Page: Add profile pics for users
- SingleProduct Page: Add profile pics for users
- DB: Modify existing profile pic for users
- SingleProduct Page: implement user highlight_color + background_color
- DB: Add 'Cart' field for users
- Nav: 'Add to Cart' functionality
- SingleProduct Page: 'Add to Cart' functionality
- CSS: define global variables for colors and other properties
- User authentification (liked_products, recently_viewed)
- AllProducts Page: Tailor liked_products section to logged-in user
- Backend: Add recently_viewed functionality


## Credits <a name="credits"></a>
Michelle Flandin