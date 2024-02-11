:: reset-products-ids.bat
:: Note: the heroku command will halt the rest of the reset-database.bat script, so it had to be separated.


@echo off


cd ".."
heroku run rake products:reset_pk_sequence --app gumroad-demo