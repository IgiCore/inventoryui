@echo off
call npm run build
copy /y build\* ..\
move /y ..\index.html ..\InventoryUiOverlay.html
pause