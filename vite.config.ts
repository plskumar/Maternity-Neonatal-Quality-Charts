import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages, set base to /<repoName>/
// If your repo name differs, update VITE_REPO_NAME or this default.
const repoName = process.env.VITE_REPO_NAME || "maternity-metrics-dashboard";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
