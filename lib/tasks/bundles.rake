# lib/tasks/bundles.rake
namespace :bundles do
desc "Reset PK sequence for the bundles table"
task reset_pk_sequence: :environment do
    ActiveRecord::Base.connection.reset_pk_sequence!('bundles')
end
end