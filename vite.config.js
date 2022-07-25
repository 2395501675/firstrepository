import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/firstrepository/',
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  },
  build:{
    outDir:'firstrepository'
    // rollupOptions:{
    //   output:{
    //     chunkFileNames:'[name]-[hash].js',
    //     entryFileNames:"[name]-[hash].js",
    //     assetFileNames:"[ext]/name-[hash].[ext]"
    //   }
    // }
  }
})
