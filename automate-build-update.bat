:: automate-build-update.bat

:: This script will:
:: --1. Rebuild the reactapp 'build' file, based on the source "Gumroad-Demo" 
:: --2. Run the collectstatic command
:: --3. Commit the updates to git/Heroku app
:: --4. Add the commit message you include in the call (or else default it to "[YYYYMMDD HH:MM] update")


:: Instructions
:: Make sure you are logged into heroku form terminal (run: 'heroku login')
:: Navigate into the Heroku-Production-Planner directory in the powershell terminal
:: Run: .\automate-build-update.bat "Your commit message here"


@echo off


:: Get current date and time in YYYYMMDD-HHMM format
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (
    set _date=%%c%%a%%b
)
for /f "tokens=1-2 delims=:." %%a in ('time /t') do (
    set _time=%%a%%b
)


:: If no commit message is provided, use the current date and time
if "%~1"=="" (
    set commitMessage=%_date%-%_time% update
) else (
    set commitMessage=%~1
)


:: Build the React app
call npm run heroku-postbuild


:: Git operations
git add .
git commit -m "%commitMessage%"
git push origin main
git push heroku main:main


echo Build, collectstatic, and git update process completed.