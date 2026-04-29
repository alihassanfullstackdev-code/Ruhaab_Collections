/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import path from 'path';
import { fileURLToPath } from 'url'; // ESM ke liye zaroori hai
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Tailwind v4 ka naya plugin

// ESM mein __dirname ko define karne ka tarika
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        tailwindcss(), // Is line ko add karne se @tailwind v4 kaam karne lagega
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          // '@' alias ab bina kisi error ke kaam karega
          '@': path.resolve(__dirname, './src'),
        }
      }
    };
});