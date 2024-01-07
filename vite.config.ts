import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

const getPath = (path: string): string => resolve(__dirname, `src/${path}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@assets": getPath("assets"),
      "@common": getPath("common"),
      "@modules": getPath("modules"),
      "@pages": getPath("pages"),
      "@types": getPath("types"),
      "@shared/components": getPath("shared/components"),
      "@shared/containers": getPath("shared/containers"),
      "@shared/dialogs": getPath("shared/dialogs"),
      "@shared/entities": getPath("shared/entities"),
      "@shared/enums": getPath("shared/enums"),
      "@shared/hooks": getPath("shared/hooks"),
      "@shared/layouts": getPath("shared/layouts"),
      "@shared/services": getPath("shared/services")
    }
  },
  server: {
    host: true,
    port: 3000,
    open: true
  }
});
