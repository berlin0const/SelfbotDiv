@echo off
@break off
color 2
mode con:cols=100 lines=30
title Discord SelfBot by Const

:inicio
color 2
cls.
call node\node.exe index.js
echo.
echo.
color 2
echo Algo deu errado!
echo Pressione ENTER para prosseguir!
pause>nul
echo Reiniciandoo BOT...
goto inicio
