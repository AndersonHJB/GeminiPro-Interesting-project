
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'remove-tailwind-cdn',
      transformIndexHtml(html) {
        // 1. 移除引入 Tailwind CDN 的 script 标签
        // 这样在 Vite 环境下（开发或构建后），只使用本地编译的 CSS，不再加载 CDN
        let newHtml = html.replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/, '');
        
        // 2. 移除配套的 Tailwind 配置 script 块
        // 匹配包含 "tailwind.config =" 的整个 <script>...</script> 代码块
        newHtml = newHtml.replace(/<script>[\s\S]*?tailwind\.config\s*=[\s\S]*?<\/script>/, '');
        
        return newHtml;
      }
    }
  ],
  build: {
    // 适当调高警告阈值到 1000KB，避免因单个库本身较大（如完整版 framer-motion）而频繁报警
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // 手动分包策略
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 将 Waline 评论系统拆分为单独的包
            if (id.includes('@waline/client')) {
              return 'waline';
            }
            // 将 Framer Motion 动画库拆分为单独的包
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            // 将 React 核心库拆分为单独的包
            if (id.includes('react') || id.includes('react-dom') || id.includes('react/jsx-runtime')) {
              return 'react-vendor';
            }
            // 将图标库拆分
            if (id.includes('lucide-react')) {
              return 'lucide';
            }
            // 其他所有第三方库归为 vendor
            return 'vendor';
          }
        }
      }
    }
  }
});
