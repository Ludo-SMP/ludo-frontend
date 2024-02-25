import { defineConfig } from 'vite';
<<<<<<< HEAD
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
=======
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import * as path from 'path';
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
<<<<<<< HEAD
  plugins: [svgr(), react(), mkcert()],
=======
  plugins: [react(), svgr(), mkcert()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
  server: {
    host: 'local.ludoapi.store',
    port: 3000,
  },
});
