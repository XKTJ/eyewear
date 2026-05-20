@echo off
cd /d "%~dp0"
"C:\Program Files\nodejs\node.exe" "%~dp0node_modules\next\dist\bin\next" dev -p 3001 > "%~dp0next-dev.out.log" 2> "%~dp0next-dev.err.log"
