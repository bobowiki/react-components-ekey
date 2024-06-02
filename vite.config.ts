import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { name as pkgName } from "./package.json";
import { resolve } from "path";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: pkgName,
      formats: ["es", "umd"],
      fileName: (format) => `${pkgName}.${format}.js`,
    },
    outDir: "dist",
    rollupOptions: {
      external: ["react", "vite.svg"],
      output: {
        globals: {
          react: "react",
        },
      },
    },
  },
  plugins: [react(), dts({ rollupTypes: true })],
});
