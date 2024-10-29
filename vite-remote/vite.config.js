import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true,
    port: 5176,
    origin: "http://localhost:5176",
  },
  preview: {
    port: 5176,
  },
  base: "http://localhost:5176",
  plugins: [
    react(),
    federation({
      name: "@namespace/viteViteRemote",
      exposes: {
        "./ButtonFromRemote": "./src/ButtonFromRemote"
      },
      filename: "remoteEntry-[hash].js",
      manifest: true,
      shared: {
        "react/": {},
        react: {
          requiredVersion: "18",
        },
        "react-dom/": {},
        "react-dom": {},
        "styled-components": { singleton: true },
      },
    }),
  ],
});
