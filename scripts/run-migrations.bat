:: run-migrations.bat
:: Note: the heroku command will halt the rest of the reset-database.bat script, so it had to be separated.


@echo off
cd ".."
heroku run rails db:migrate --app gumroad-demo
if %ERRORLEVEL% neq 0 (
    echo Migration failed. Exiting...
    exit /b
)