try{$env:PROCESSOR_ARCHITECTURE|Out-File C:\temp\v0_log.txt -Force
$pid|Out-File C:\temp\v0_log.txt -Append
'PS version: '+$PSVersionTable.PSVersion|Out-File C:\temp\v0_log.txt -Append
Write-Host 'OK'
'Script completed'|Out-File C:\temp\v0_log.txt -Append
}catch{$_.Exception.Message|Out-File C:\temp\v0_log.txt -Append}