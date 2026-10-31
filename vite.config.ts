import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  // The server build only renders pages for scripts/prerender.mjs, so it needs no copy of public/.
  build: { copyPublicDir: !isSsrBuild },
}));
