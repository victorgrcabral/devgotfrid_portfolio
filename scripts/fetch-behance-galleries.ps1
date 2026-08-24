$galleries = @(
    @{ id = 'nerdy'; url = 'https://www.behance.net/gallery/218175099/NERDY-CLOTHING' },
    @{ id = 'djasco'; url = 'https://www.behance.net/gallery/141930201/Djasco-Headshop-Concept-Creation-Social-Media' },
    @{ id = 'social-hype'; url = 'https://www.behance.net/gallery/209409531/SOCIAL-HYPE' },
    @{ id = 'buona-notte'; url = 'https://www.behance.net/gallery/205043809/BUONA-NOTTE-HOSTEL' }
)

$token = '3c8cef99c88d50813f337b021a09b4ce56d3e1365e032cac2b5c991d4c18b5474a82ff17597cba7c9f889792246feda1b7dd285daab922cf7cd5b887dad00a9b'

$headers = @{
    'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    'Accept' = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
    'Accept-Language' = 'en-US,en;q=0.9'
    'Cookie' = "js_challenge_value=$token"
}

foreach ($g in $galleries) {
    Write-Host "`nFetching $($g.id)..."
    try {
        $res = Invoke-WebRequest -Uri $g.url -Headers $headers -UseBasicParsing
        Write-Host "Success: status $($res.StatusCode), HTML length $($res.Content.Length)"
        $matches = [regex]::Matches($res.Content, 'https://mir-s3-cdn-cf\.behance\.net/project_modules/(?:1400_opt_1|fs|max_1200|disp|1400|source)/[a-zA-Z0-9_-]+\.(?:jpg|png|jpeg|webp)')
        Write-Host "Matches found: $($matches.Count)"
        $urls = @()
        foreach ($m in $matches) {
            if (-not ($urls -contains $m.Value)) {
                $urls += $m.Value
            }
        }
        Write-Host "Unique URLs: $($urls.Count)"
        $i = 1
        foreach ($u in ($urls | Select-Object -First 6)) {
            $ext = '.jpg'
            if ($u.EndsWith('.png')) { $ext = '.png' }
            elseif ($u.EndsWith('.webp')) { $ext = '.webp' }
            $filename = "public/projects/$($g.id)-gallery-$i$ext"
            Write-Host "Saving $filename ($u)..."
            Invoke-WebRequest -Uri $u -OutFile $filename -Headers $headers -UseBasicParsing
            $i++
        }
    } catch {
        Write-Host "Failed: $_"
    }
}
