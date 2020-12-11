@echo off
@break off
color 2
mode con:cols=100 lines=30
title Bot discord

:inicio
color 2
cls.
call node\node.exe ConstSFdv.js
echo.
echo.
color 2
echo Algo deu errado!
echo Pressione ENTER para prosseguir!
pause>nul
echo Reiniciandoo BOT...
goto inicio