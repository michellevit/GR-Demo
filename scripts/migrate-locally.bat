:: migrate-locally.bat
:: Note: the heroku command will halt the rest of the reset-database.bat script, so it had to be separated.


@echo off
cd ".."


:: Migrate locally
rails db:migrate
if %ERRORLEVEL% neq 0 (
    echo Local migration failed. Exiting...
    exit /b
)