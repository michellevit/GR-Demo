:: clear-bundles-table.bat
:: Note: the heroku command will halt the rest of the reset-database.bat script, so it had to be separated.


@echo off
setlocal EnableDelayedExpansion


cd ".."


SET /A bundle_count=0
FOR /F %%i IN ('heroku run rails runner "puts Bundle.count" --app gr-demo') DO (
    SET /A bundle_count=%%i
)
IF %bundle_count% GTR 0 (
    echo Found %bundle_count% entries. Deleting...
    heroku run rails runner "Bundle.destroy_all" --app gr-demo
    echo Resetting primary key sequences...
    cd "%basePath%\scripts"
    call reset-bundles-ids.bat
) ELSE (
    echo No entries found. Skipping deletion.
)
