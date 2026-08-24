Add-Type -AssemblyName System.Drawing

$bmp1 = [System.Drawing.Bitmap]::FromFile((Resolve-Path 'public/projects/interfusao-fold.png'))
Write-Host "Interfusao (1024x559):"
for ($y = 0; $y -le 60; $y += 5) {
    $c = $bmp1.GetPixel(300, $y)
    Write-Host "y=$y: $($c.R),$($c.G),$($c.B)"
}
for ($x = 0; $x -le 60; $x += 5) {
    $c = $bmp1.GetPixel($x, 70)
    Write-Host "x=$x: $($c.R),$($c.G),$($c.B)"
}
$bmp1.Dispose()

$bmp2 = [System.Drawing.Bitmap]::FromFile((Resolve-Path 'public/projects/clinica-muricy-fold.png'))
Write-Host "`nMuricy (1024x579):"
for ($y = 0; $y -le 80; $y += 5) {
    $c = $bmp2.GetPixel(300, $y)
    Write-Host "y=$y: $($c.R),$($c.G),$($c.B)"
}
for ($x = 0; $x -le 60; $x += 5) {
    $c = $bmp2.GetPixel($x, 100)
    Write-Host "x=$x: $($c.R),$($c.G),$($c.B)"
}
$bmp2.Dispose()
