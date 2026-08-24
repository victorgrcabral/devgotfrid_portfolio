$token = '3c8cef99c88d50813f337b021a09b4ce56d3e1365e032cac2b5c991d4c18b5474a82ff17597cba7c9f889792246feda1b7dd285daab922cf7cd5b887dad00a9b'

$headers = @{
    'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    'Accept' = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
    'Cookie' = "js_challenge_value=$token"
}

$res = Invoke-WebRequest -Uri 'https://www.behance.net/gallery/205043809/BUONA-NOTTE-HOSTEL' -Headers $headers -UseBasicParsing

# Extract all images from project modules
$allMatches = [regex]::Matches($res.Content, 'https://mir-s3-cdn-cf\.behance\.net/(?:project_modules|projects)/[^\s"''\\]*205043809[^\s"''\\]*?\.(?:jpg|png|jpeg|webp)')

Write-Host "Total matches found for Buona Notte: $($allMatches.Count)"

$uniqueUrls = @()
foreach ($m in $allMatches) {
    $u = $m.Value
    if (-not ($uniqueUrls -contains $u) -and -not ($u -match '202') -and -not ($u -match '404') -and -not ($u -match 'disp')) {
        $uniqueUrls += $u
    }
}

Write-Host "Unique high-res boards found: $($uniqueUrls.Count)"
$idx = 1
foreach ($u in $uniqueUrls) {
    $ext = if ($u.EndsWith('.png')) { '.png' } else { '.jpg' }
    $dest = "public/projects/buona-notte-board-$idx$ext"
    Write-Host "Downloading Buona Notte Board $idx : $dest ($u)"
    Invoke-WebRequest -Uri $u -OutFile $dest -Headers $headers -UseBasicParsing
    $idx++
}
