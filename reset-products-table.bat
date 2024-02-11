:: reset-products-table.bat


:: This script will:
:: --1. Check if logged into Heroku CLI
:: --2. Migrate any pending changes
:: --3. Check if there are any entries in the Product table before removing
:: --4. Seed the database with products.json
:: --5. Echo message of completion if script runs successfully


:: Instructions
:: Navigate into the Gumroad-Demo directory in the powershell terminal
:: Make sure you are logged into heroku from terminal (run: 'heroku login')
:: Run: .\reset-database.bat


@echo off
setlocal EnableDelayedExpansion
SET basePath=%cd%

:: Step 1: Check if logged into Heroku CLI
REM Check if logged in to Heroku
echo Checking Heroku login status...
call heroku auth:whoami
if errorlevel 1 (
    echo Not logged in to Heroku. Please log in...
    call heroku login
    if errorlevel 1 (
        echo Failed to log in to Heroku.
        exit /b
    )
)


:: Step 2: Migrate any pending changes
echo Running pending migrations...
cd "%basePath%\scripts"
call run-migrations.bat
if %errorlevel% neq 0 (
    echo ERROR: migrate failed %errorlevel%.
    exit /b %errorlevel%
)


:: Step 3: Check if there are any entries in the Product table before removing
echo Checking for existing entries in the Product table...
cd "%basePath%\scripts"
call clear-products-table.bat
if %errorlevel% neq 0 (
    echo ERROR: clearing database failed %errorlevel%.
    exit /b %errorlevel%
)


:: Step 4: Seed the database with products.json
echo Seeding the database with products.json...
cd "%basePath%\scripts"
call seed-products-table.bat
if %errorlevel% neq 0 (
    echo ERROR: seeding database failed %errorlevel%.
    exit /b %errorlevel%
)


:: --5. Echo message of completion if script runs successfully
echo Heroku database successfully reset.
