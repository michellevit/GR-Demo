:: reset-db.bat


:: This script will:
:: --1. Check if logged into Heroku CLI
:: --2. Migrate any pending changes
:: --3. Commit changes to Github (so Heroku can access the current files)
:: --4. Check if there are any entries in the Product/User table before removing
:: --5. Seed the database with products.json and users.json
:: --6. Echo message of completion if script runs successfully


:: Instructions
:: Navigate into the GR-Demo directory in the powershell terminal
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


:: Step 3: Commit changes to Github (so Heroku can access the current files)
echo Updating Git with app's current state...
cd ".."
git add .
git commit -m "Commit before resetting database tables"
git push origin main


:: Step 4: Check if there are any entries in the Product/User table before removing
echo Checking for existing entries in the Product table...
cd "%basePath%\scripts"
call clear-products-table.bat
if %errorlevel% neq 0 (
    echo ERROR: clearing database failed %errorlevel%.
    exit /b %errorlevel%
)
cd "%basePath%\scripts"
call clear-users-table.bat
if %errorlevel% neq 0 (
    echo ERROR: clearing database failed %errorlevel%.
    exit /b %errorlevel%
)
cd "%basePath%\scripts"
call clear-bundles-table.bat
if %errorlevel% neq 0 (
    echo ERROR: clearing database failed %errorlevel%.
    exit /b %errorlevel%
)
cd "%basePath%\scripts"
call clear-bundle-products-table.bat
if %errorlevel% neq 0 (
    echo ERROR: clearing database failed %errorlevel%.
    exit /b %errorlevel%
)


:: Step 5: Seed the database with products.json + users.json + bundles.json
echo Seeding the database with products & users & bundles
cd "%basePath%\scripts"
call seed-tables.bat
if %errorlevel% neq 0 (
    echo ERROR: seeding database failed %errorlevel%.
    exit /b %errorlevel%
)


:: Step 6: Echo message of completion if script runs successfully
echo Heroku database successfully reset.
