$headers = @{
    'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    'Cookie' = 'js_challenge_value=3c8cef99c88d50813f337b021a09b4ce56d3e1365e032cac2b5c991d4c18b5474a82ff17597cba7c9f889792246feda1b7dd285daab922cf7cd5b887dad00a9b'
}
$res = Invoke-WebRequest -Uri 'https://www.behance.net/gallery/218175099/NERDY-CLOTHING' -Headers $headers -UseBasicParsing
$allImgs = [regex]::Matches($res.Content, 'https://[^\s"''\\]+?\.(?:jpg|png|jpeg|webp)')
Write-Host "Total images in HTML: $($allImgs.Count)"
$sample = $allImgs | ForEach-Object { $_.Value } | Select-Object -Unique | Select-Object -First 20
foreach ($s in $sample) {
    Write-Host "Sample: $s"
}
