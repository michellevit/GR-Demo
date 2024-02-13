:: run-migrations.bat
:: Note: the heroku command will halt the rest of the reset-database.bat script, so it had to be separated.

@echo off
setlocal EnableDelayedExpansion
SET basePath=%cd%


:: Migrate locally
cd "%basePath%
call migrate-locally.bat


:: Migrate Heroku 
cd "%basePath%
call migrate-heroku.bat