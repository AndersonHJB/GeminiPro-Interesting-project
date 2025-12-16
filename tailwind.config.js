
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",           // 扫描根目录下的 App.tsx, index.tsx 等
    "./components/**/*.{js,ts,jsx,tsx}", // 扫描 components 目录下的组件
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        slate: {
          850: '#151e2e',
          950: '#020617', // Custom deep background
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
