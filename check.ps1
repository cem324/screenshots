
if(Test-Path C:\temp\hta_ran.txt){Write-Host 'hta_ran.txt EXISTS: ' -NoNewline;gc C:\temp\hta_ran.txt}
if(Test-Path C:\temp\v0_log.txt){Write-Host 'v0_log.txt EXISTS: ' -NoNewline;gc C:\temp\v0_log.txt}
if(Test-Path C:\temp\t.ps1){Write-Host 't.ps1 EXISTS: ' -NoNewline;gc C:\temp\t.ps1}
Write-Host 'Done'
