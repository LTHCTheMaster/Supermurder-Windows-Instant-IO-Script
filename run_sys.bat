@echo off

:systemmain
echo.
echo Text:
set /p wantedtext=

node system %wantedtext%

python supermurder.py

echo.
echo Again? [y/n]
choice /c yn /n

if %errorlevel%==2 goto :endmain
if %errorlevel%==1 goto :systemmain

:endmain
erase generated.supermurder
echo Now you can quit the programm by pressing a key

pause>nul
