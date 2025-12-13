
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // 告诉 Vite 这些包是外部依赖，不要打包它们
      // 因为它们已经在 index.html 中通过 importmap (CDN) 引入了
      external: ['marked', '@waline/client'],
      output: {
        // 在 UMD 构建模式下的全局变量名（可选，但在某些情况下有帮助）
        globals: {
          marked: 'marked',
          '@waline/client': 'Waline'
        }
      }
    }
  }
});
