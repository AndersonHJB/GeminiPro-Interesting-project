
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 移除 build.rollupOptions.external 配置
  // 这样本地构建(vite build)时会自动将 node_modules 中的包打包进产物
  // 而在线预览时，浏览器会优先使用 index.html 中的 importmap (CDN)
});
