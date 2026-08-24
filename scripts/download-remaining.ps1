$token = '3c8cef99c88d50813f337b021a09b4ce56d3e1365e032cac2b5c991d4c18b5474a82ff17597cba7c9f889792246feda1b7dd285daab922cf7cd5b887dad00a9b'

$headers = @{
    'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    'Accept' = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
    'Cookie' = "js_challenge_value=$token"
}

$galleries = @(
    @{ id = 'nerdy'; url = 'https://www.behance.net/gallery/218175099/NERDY-CLOTHING' },
    @{ id = 'social-hype'; url = 'https://www.behance.net/gallery/209409531/SOCIAL-HYPE' }
)

foreach ($g in $galleries) {
    Write-Host "`nFetching $($g.id)..."
    try {
        $res = Invoke-WebRequest -Uri $g.url -Headers $headers -UseBasicParsing
        $all = [regex]::Matches($res.Content, 'https://mir-s3-cdn-cf\.behance\.net/(?:project_modules|projects)/[^\s"''\\]+?\.(?:jpg|png|jpeg|webp)')
        
        $urls = @()
        foreach ($m in $all) {
            $u = $m.Value
            # Filter out tiny thumbnails
            if (-not ($u -match '/projects/202/' -or $u -match '/projects/404/' -or $u -match '/projects/115/')) {
                if (-not ($urls -contains $u)) {
                    $urls += $u
                }
            }
        }
        
        Write-Host "Found $($urls.Count) module images for $($g.id)"
        $idx = 1
        foreach ($u in ($urls | Select-Object -First 8)) {
            $ext = '.jpg'
            if ($u.EndsWith('.png')) { $ext = '.png' }
            elseif ($u.EndsWith('.webp')) { $ext = '.webp' }
            
            $filename = "$($g.id)-gallery-$idx$ext"
            $destPath = "public/projects/$filename"
            Write-Host "Saving $filename ($u)..."
            Invoke-WebRequest -Uri $u -OutFile $destPath -Headers $headers -UseBasicParsing
            $idx++
        }
    } catch {
        Write-Host "Error for $($g.id): $_"
    }
}
