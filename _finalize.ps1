# Finalize Kojic Acid Soap JA after create-next-app scaffold
$root = "C:\Users\jader\J Supreme Tech\kojic-acid-soap-ja"
Set-Location $root

# 1. Install deps
npm install lucide-react

# 2. Rename draft files to real pages
$drafts = @(
  @{ draft = "src\app\_page.tsx.draft";                  real = "src\app\page.tsx" },
  @{ draft = "src\app\shop\_page.tsx.draft";             real = "src\app\shop\page.tsx" },
  @{ draft = "src\app\checkout\_page.tsx.draft";         real = "src\app\checkout\page.tsx" },
  @{ draft = "src\app\wholesale\_page.tsx.draft";        real = "src\app\wholesale\page.tsx" },
  @{ draft = "src\app\order-confirmed\_page.tsx.draft";  real = "src\app\order-confirmed\page.tsx" },
  @{ draft = "src\app\_layout.tsx.draft";               real = "src\app\layout.tsx" }
)
foreach ($pair in $drafts) {
  $dir = Split-Path $pair.real -Parent
  if (!(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  if (Test-Path $pair.draft) { Copy-Item $pair.draft $pair.real -Force }
}

# 3. Remove draft files
Get-ChildItem -Path "src" -Recurse -Filter "*.draft" | Remove-Item -Force

Write-Host "Done! Run: npm run dev"
