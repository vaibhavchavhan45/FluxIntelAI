import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: 5173,
      allowedHosts: true,
      proxy: {
        '/auth/google': {
          target: env.VITE_JS_BACKEND_URL,
          changeOrigin: true,
          secure: false,
        },
        '/auth/me': {
          target: env.VITE_JS_BACKEND_URL,
          changeOrigin: true,
          secure: false,
        },
        '/auth/logout': {
          target: env.VITE_JS_BACKEND_URL,
          changeOrigin: true,
          secure: false,
        },
        '/api': {
          target: env.VITE_JS_BACKEND_URL,
          changeOrigin: true,
          secure: false,
        }
      }
    }
  };
});