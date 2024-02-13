:: run-migrations.bat
:: Note: the heroku command will halt the rest of the reset-database.bat script, so it had to be separated.


@echo off
cd ".."

:: Migrate locally
rails db:migrate

:: Migrate Heroku 
heroku run rails db:migrate --app gr-demo
if %ERRORLEVEL% neq 0 (
    echo Migration failed. Exiting...
    exit /b
)