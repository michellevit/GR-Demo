:: clear-products-table.bat
:: Note: the heroku command will halt the rest of the reset-database.bat script, so it had to be separated.


@echo off
cd ".."
SET /A product_count=0
FOR /F %%i IN ('heroku run rails runner "puts Product.count" --app gumroad-demo') DO (
    SET /A product_count=%%i
)
IF %product_count% GTR 0 (
    echo Found %product_count% entries. Deleting...
    heroku run rails runner "Product.destroy_all" --app gumroad-demo
    echo Resetting primary key sequences...
    heroku run rake products:reset_pk_sequence --app gumroad-demo
) ELSE (
    echo No entries found. Skipping deletion.
)
