import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  },
  server: {
    proxy: {
      // 字符串简写写法
      '/api':
        'https://console-mock.apipost.cn/mock/e1064561-6cd6-4eea-95ba-68eafa22c68a'
    }
  }
})
