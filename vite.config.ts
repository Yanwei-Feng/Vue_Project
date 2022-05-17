import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus(),
  ],
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "src"),
     "components": path.resolve(__dirname, "src/components"),
     "views": path.resolve(__dirname, "src/views"),
     "network":path.resolve(__dirname,'src/network'),
    //  "styles": path.resolve(__dirname, "src/styles"),
    //  "plugins": path.resolve(__dirname, "src/plugins"),
    //  "layouts": path.resolve(__dirname, "src/layouts"),
    //  "utils": path.resolve(__dirname, "src/utils"),
    //  "apis": path.resolve(__dirname, "src/apis"),
    //  "dirs": path.resolve(__dirname, "src/directives"),
    }
  },
})
