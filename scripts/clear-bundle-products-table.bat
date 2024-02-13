:: clear-bundle-products-table.bat
:: Note: the heroku command will halt the rest of the reset-database.bat script, so it had to be separated.


@echo off
setlocal EnableDelayedExpansion


cd ".."


SET /A bundle_products_count=0
FOR /F %%i IN ('heroku run rails runner "puts BundleProduct.count" --app gr-demo') DO (
    SET /A bundle_products_count=%%i
)
IF %bundle_products_count% GTR 0 (
    echo Found %bundle_products_count% entries. Deleting...
    heroku run rails runner "BundleProduct.destroy_all" --app gr-demo
    echo Resetting primary key sequences...
    SET basePath=%cd%
    cd "%basePath%\scripts"
    call reset-bundle-products-ids.bat
) ELSE (
    echo No entries found. Skipping deletion.
)
