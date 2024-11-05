import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 5175,
  },
  preview: {
    port: 5175,
  },
  plugins: [
    react(),
    federation({
      name: 'viteViteHost',
      remotes: {
        '@namespace/viteViteRemote': 'http://localhost:5176/mf-manifest.json',
      },
      filename: 'remoteEntry-[hash].js',
      manifest: true,
      shared: {
        'react/': {
          requiredVersion: '18',
        },
        'styled-components': { singleton: true },
      },
      runtimePlugins: ['./src/mfPlugins'],
    }),
  ],
});
