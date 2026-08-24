$token = '3c8cef99c88d50813f337b021a09b4ce56d3e1365e032cac2b5c991d4c18b5474a82ff17597cba7c9f889792246feda1b7dd285daab922cf7cd5b887dad00a9b'

$headers = @{
    'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    'Accept' = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
    'Cookie' = "js_challenge_value=$token"
}

$galleries = @(
    @{ id = 'nerdy'; url = 'https://www.behance.net/gallery/218175099/NERDY-CLOTHING'; projectId = '218175099' },
    @{ id = 'djasco'; url = 'https://www.behance.net/gallery/141930201/Djasco-Headshop-Concept-Creation-Social-Media'; projectId = '141930201' },
    @{ id = 'social-hype'; url = 'https://www.behance.net/gallery/209409531/SOCIAL-HYPE'; projectId = '209409531' },
    @{ id = 'buona-notte'; url = 'https://www.behance.net/gallery/205043809/BUONA-NOTTE-HOSTEL'; projectId = '205043809' }
)

foreach ($g in $galleries) {
    Write-Host "`n=== Fetching exact images for $($g.id) (Project ID: $($g.projectId)) ==="
    try {
        $res = Invoke-WebRequest -Uri $g.url -Headers $headers -UseBasicParsing
        # Search for project modules matching the project ID
        $pattern = "https://mir-s3-cdn-cf\.behance\.net/project_modules/(?:1400|1400_opt_1|fs|max_1200|disp|source)/[a-zA-Z0-9_-]*$($g.projectId)[a-zA-Z0-9_.-]+\.(?:jpg|png|jpeg|webp)"
        $matches = [regex]::Matches($res.Content, $pattern)
        
        $urls = @()
        foreach ($m in $matches) {
            $u = $m.Value
            if (-not ($urls -contains $u)) {
                $urls += $u
            }
        }
        
        Write-Host "Found $($urls.Count) exact project module matches for $($g.id)"
        
        # If no strict projectId pattern match in filename, extract all module images in the page
        if ($urls.Count -eq 0) {
            $allMatches = [regex]::Matches($res.Content, 'https://mir-s3-cdn-cf\.behance\.net/project_modules/(?:1400|1400_opt_1|fs|max_1200|disp|source)/[^\s"''\\]+?\.(?:jpg|png|jpeg|webp)')
            foreach ($m in $allMatches) {
                $u = $m.Value
                if (-not ($urls -contains $u) -and -not ($u -match 'profile') -and -not ($u -match 'user')) {
                    $urls += $u
                }
            }
            Write-Host "Fallback found $($urls.Count) module images for $($g.id)"
        }
        
        $idx = 1
        foreach ($u in $urls) {
            $ext = '.jpg'
            if ($u.EndsWith('.png')) { $ext = '.png' }
            elseif ($u.EndsWith('.webp')) { $ext = '.webp' }
            
            $filename = "$($g.id)-board-$idx$ext"
            $destPath = "public/projects/$filename"
            Write-Host "Downloading Board #$idx : $filename ($u)..."
            Invoke-WebRequest -Uri $u -OutFile $destPath -Headers $headers -UseBasicParsing
            $idx++
        }
    } catch {
        Write-Host "Error for $($g.id): $_"
    }
}
