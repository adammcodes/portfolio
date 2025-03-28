import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  css: {
    postcss: "./postcss.config.cjs",
    preprocessorOptions: {
      scss: {
        additionalData: `
          $dark-transparent: rgba(10, 25, 47, 0.85);
          $primary-transparent: rgba(100, 255, 218, 0.1);
        `,
      },
    },
  },
});
