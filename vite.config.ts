import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import mkcert from 'vite-plugin-mkcert';
import { VitePluginRadar } from 'vite-plugin-radar';
import { analyzer } from 'vite-bundle-analyzer';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    mkcert(),
    VitePluginRadar({
      // GA measurement id
      analytics: {
        id: 'G-VW71YW2W58',
      },
      // GTM container id
      gtm: {
        id: 'GTM-WLWBHQRJ',
      },
    }),
    analyzer(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    host: 'local.ludo.study',
    port: 3000,
  },
});
