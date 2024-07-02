import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import { importStylus } from './vite-stylus-import-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      ...importStylus(),
      enforce: 'pre',
    }
  ],
  resolve: {
    alias: [
      {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))}
    ]
  },
})
