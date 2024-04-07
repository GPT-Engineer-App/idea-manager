import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import daisyui from "daisyui";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3b82f6",
          secondary: "#22d3ee",
          accent: "#06b6d4",
          neutral: "#1f2937",
          "base-100": "#ffffff",
          info: "#3b82f6",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
  },
});
