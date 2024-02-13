# lib/tasks/users.rake
namespace :users do
    desc "Reset PK sequence for the users table"
    task reset_pk_sequence: :environment do
      ActiveRecord::Base.connection.reset_pk_sequence!('users')
    end
  end