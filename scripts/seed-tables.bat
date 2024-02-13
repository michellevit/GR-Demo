:: seed-tables.bat
:: Note: the heroku command will halt the rest of the reset-database.bat script, so it had to be separated.


@echo off
cd ".."
heroku run rails db:seed --app gumroad-demo