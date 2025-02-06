import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "*.md",
          dest: './', // 2️⃣
        },
      ],
    }),

    preact()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
      }
    }
  }

})
