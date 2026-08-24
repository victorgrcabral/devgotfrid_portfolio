Add-Type -AssemblyName System.Drawing

# 1. Crop Interfusao:
# Source is 1024x559.
# The Edge browser top bar is ~42px, the left sidebar is ~30px.
# Webpage content starts at x=30, y=42, width=994, height=517.
# Let's crop cleanly to only the webpage!
$src1 = [System.Drawing.Image]::FromFile((Resolve-Path 'public/projects/interfusao-fold.png'))
$rect1 = New-Object System.Drawing.Rectangle(30, 42, 994, 517)
$bmp1 = New-Object System.Drawing.Bitmap(994, 517)
$g1 = [System.Drawing.Graphics]::FromImage($bmp1)
$g1.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g1.DrawImage($src1, 0, 0, $rect1, [System.Drawing.GraphicsUnit]::Pixel)
$g1.Dispose()
$src1.Dispose()
$bmp1.Save((Join-Path (Get-Location) 'public/projects/interfusao-clean.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$bmp1.Dispose()
Write-Host "Saved interfusao-clean.png"

# 2. Crop Clinica Muricy:
# Source is 1024x579.
# The Edge browser top bar is ~42px, left sidebar ~0 or ~30px.
# Webpage content starts at x=0, y=42, width=1024, height=537.
$src2 = [System.Drawing.Image]::FromFile((Resolve-Path 'public/projects/clinica-muricy-fold.png'))
$rect2 = New-Object System.Drawing.Rectangle(0, 42, 1024, 537)
$bmp2 = New-Object System.Drawing.Bitmap(1024, 537)
$g2 = [System.Drawing.Graphics]::FromImage($bmp2)
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.DrawImage($src2, 0, 0, $rect2, [System.Drawing.GraphicsUnit]::Pixel)
$g2.Dispose()
$src2.Dispose()
$bmp2.Save((Join-Path (Get-Location) 'public/projects/clinica-muricy-clean.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$bmp2.Dispose()
Write-Host "Saved clinica-muricy-clean.png"
