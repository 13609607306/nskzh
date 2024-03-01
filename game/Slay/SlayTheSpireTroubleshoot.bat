@echo off
echo Launching the game in troubleshoot mode.
echo This might take a while...

mkdir sendToDevs
jre\bin\java.exe -jar desktop-1.0.jar > sendToDevs\troubleshoot.log 2>&1

type sendToDevs\troubleshoot.log

dxdiag /dontskip /whql:off /t %CD%\sendToDevs\dxdiag.txt
echo "There should now be a 'troubleshoot.log' file that you can send the devs."
pause
