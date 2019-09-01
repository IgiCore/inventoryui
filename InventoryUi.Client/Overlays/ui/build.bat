@echo off
call npm run build

copy /y build\* ..\
move /y ..\index.html ..\InventoryUiOverlay.html

copy /y build\* ..\..\..\Overlays\
move /y ..\..\..\Overlays\index.html ..\..\..\Overlays\InventoryUiOverlay.html
