:: clear-users-table.bat
:: Note: the heroku command will halt the rest of the reset-database.bat script, so it had to be separated.


@echo off
setlocal EnableDelayedExpansion


cd ".."


SET /A user_count=0
FOR /F %%i IN ('heroku run rails runner "puts User.count" --app gr-demo') DO (
    SET /A user_count=%%i
)
IF %user_count% GTR 0 (
    echo Found %user_count% entries. Deleting...
    heroku run rails runner "User.destroy_all" --app gr-demo
    echo Resetting primary key sequences...
    SET basePath=%cd%
    cd "%basePath%\scripts"
    call reset-users-ids.bat
) ELSE (
    echo No entries found. Skipping deletion.
)
