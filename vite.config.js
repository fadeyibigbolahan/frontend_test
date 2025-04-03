import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/frontend_test/", // Ensure correct base path
  plugins: [react()],
});
