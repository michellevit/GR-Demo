:: reset-users-ids.bat
:: Note: the heroku command will halt the rest of the reset-database.bat script, so it had to be separated.
:: Note: rake file is located in the lib/tasks/

@echo off


cd ".."
heroku run rake users:reset_pk_sequence --app gr-demo