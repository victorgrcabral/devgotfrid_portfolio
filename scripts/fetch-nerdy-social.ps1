$token = '3c8cef99c88d50813f337b021a09b4ce56d3e1365e032cac2b5c991d4c18b5474a82ff17597cba7c9f889792246feda1b7dd285daab922cf7cd5b887dad00a9b'

$headers = @{
    'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    'Accept' = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
    'Cookie' = "js_challenge_value=$token"
}

# 1. Fetch Nerdy (218175099)
$resNerdy = Invoke-WebRequest -Uri 'https://www.behance.net/gallery/218175099/NERDY-CLOTHING' -Headers $headers -UseBasicParsing
$nerdyMatches = [regex]::Matches($resNerdy.Content, 'https://mir-s3-cdn-cf\.behance\.net/(?:project_modules|projects)/[^\s"''\\]*218175099[^\s"''\\]*?\.(?:jpg|png|jpeg|webp)')
Write-Host "Nerdy matching URLs found: $($nerdyMatches.Count)"
$nerdyUrls = @()
foreach ($m in $nerdyMatches) {
    if (-not ($nerdyUrls -contains $m.Value) -and -not ($m.Value -match '202') -and -not ($m.Value -match '404')) {
        $nerdyUrls += $m.Value
    }
}
$idx = 1
foreach ($u in $nerdyUrls) {
    $ext = if ($u.EndsWith('.png')) { '.png' } else { '.jpg' }
    $dest = "public/projects/nerdy-board-$idx$ext"
    Write-Host "Saving Nerdy Board $idx ($u)"
    Invoke-WebRequest -Uri $u -OutFile $dest -Headers $headers -UseBasicParsing
    $idx++
}

# 2. Fetch Social Hype (209409531)
$resSocial = Invoke-WebRequest -Uri 'https://www.behance.net/gallery/209409531/SOCIAL-HYPE' -Headers $headers -UseBasicParsing
$socialMatches = [regex]::Matches($resSocial.Content, 'https://mir-s3-cdn-cf\.behance\.net/(?:project_modules|projects)/[^\s"''\\]*209409531[^\s"''\\]*?\.(?:jpg|png|jpeg|webp)')
Write-Host "Social Hype matching URLs found: $($socialMatches.Count)"
$socialUrls = @()
foreach ($m in $socialMatches) {
    if (-not ($socialUrls -contains $m.Value) -and -not ($m.Value -match '202') -and -not ($m.Value -match '404')) {
        $socialUrls += $m.Value
    }
}
$idx = 1
foreach ($u in $socialUrls) {
    $ext = if ($u.EndsWith('.png')) { '.png' } else { '.jpg' }
    $dest = "public/projects/social-hype-board-$idx$ext"
    Write-Host "Saving Social Hype Board $idx ($u)"
    Invoke-WebRequest -Uri $u -OutFile $dest -Headers $headers -UseBasicParsing
    $idx++
}
