import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: { host: true, port: 5173 },
  plugins: [react()],
});
