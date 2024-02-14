:: psuh-changes-to-git.bat
:: Note: the heroku command will halt the rest of the reset-database.bat script, so it had to be separated.


@echo off
cd ".."


git add .
pause
git commit -m "Commit before resetting database tables"
git push origin main

