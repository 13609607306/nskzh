# Slay the Spire

## Reporting Issues
1. If using Windows, run the SlayTheSpireTroubleshoot.bat script. If using OSX/Linux, run the SlayTheSpireTroubleshoot.sh script.
2. Zip up the "sendToDevs" directory created by the SlayTheSpireTroubleshoot.bat. You can do this by right-clicking the folder, select "Send to", and then select "Compressed (zipped) folder".
3. Attach the sendToDevs.zip you've created to an email and send it to support@megacrit.com with a description of your issue.

## How to Upload a Mod
1. Open a terminal in the game installation directory or double-click on the mod-uploader.jar file.
2. Type `jre/bin/java.exe -jar mod-uploader.jar new -w mymodworkspace` in the console to create a new workspace folder for your mod. The name of your workspace can be any arbitrary name. The "new" command will create a directory with a particular layout.
3. Put the jar or whatever item you wish to upload into the "content" directory in your mod's workspace.
4. Fill in the details for the config.json located in your mod's workspace. If the fields are unclear, refer to the other README.md file located in the mod's workspace for descriptions of what each field does.
5. Replace the "image.jpg" in your mod's workspace with an image of the same name that you wish to use for your mod.
6. Type `jre/bin/java.exe -jar mod-uploader.jar upload -w mymodworkspace` to upload your mod to Steam. Note: make sure you have Steam running.
