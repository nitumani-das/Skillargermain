// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   base: '/',          // Ensure base path is root
//   plugins: [react(), tailwindcss()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import obfuscator from 'vite-plugin-javascript-obfuscator'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    obfuscator({
      compact: true,
      controlFlowFlattening: true,
    }),
  ],
})

