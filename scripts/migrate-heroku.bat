:: migrate-heroku.bat
:: Note: the heroku command will halt the rest of the reset-database.bat script, so it had to be separated.


@echo off
cd ".."


:: Migrate to heroku
heroku run rails db:migrate --app gr-demo
if %ERRORLEVEL% neq 0 (
    echo Heroku migration failed. Exiting...
    exit /b
)