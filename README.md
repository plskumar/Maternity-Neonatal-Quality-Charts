# maternity-metrics-dashboard-colored

Two dashboards (Maternity + Neonatal) with KPI cards and 3 wired charts per metric using Recharts.
Includes a clean color theme, metric category accents, and a GitHub Pages deploy workflow.

## Run locally (VS Code / PowerShell)
```powershell
npm install
npm run dev
```

## Deploy to GitHub Pages
1. Create a GitHub repo named **maternity-metrics-dashboard** (recommended) or set `VITE_REPO_NAME`.
2. Push to `main`.
3. In GitHub: Settings → Pages → Source: GitHub Actions
4. Site URL:
`https://<YOUR_USERNAME>.github.io/maternity-metrics-dashboard/`
