Add-Type -AssemblyName System.Drawing

function Crop-Image($sourcePath, $destPath, $cropX, $cropY, $cropW, $cropH) {
    $src = [System.Drawing.Image]::FromFile((Resolve-Path $sourcePath))
    Write-Host "Source ($sourcePath): $($src.Width)x$($src.Height)"
    
    $rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
    $bmp = New-Object System.Drawing.Bitmap($cropW, $cropH)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($src, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $src.Dispose()
    
    $bmp.Save((Join-Path (Get-Location) $destPath), [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Host "Cropped and saved to $destPath"
}

# Inspect images first:
$src1 = [System.Drawing.Image]::FromFile((Resolve-Path 'public/projects/interfusao-fold.png'))
Write-Host "Interfusao size: $($src1.Width)x$($src1.Height)"
$src1.Dispose()

$src2 = [System.Drawing.Image]::FromFile((Resolve-Path 'public/projects/clinica-muricy-fold.png'))
Write-Host "Muricy size: $($src2.Width)x$($src2.Height)"
$src2.Dispose()
