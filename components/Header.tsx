
import React from 'react';
import { Sparkles, Sun, Moon, Monitor, Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeMode } from '../types';
import { BornForThisLogo } from './BornForThisLogo';

interface HeaderProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, searchQuery, setSearchQuery }) => {
  return (
    <header className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-50 dark:opacity-100 transition-opacity duration-500">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal" />
        <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal" />
      </div>

      {/* Top Navigation Bar */}
      <div className="absolute top-0 w-full px-4 sm:px-6 py-6 flex justify-between items-center z-50">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold tracking-tight shrink-0">
          <BornForThisLogo className="w-9 h-9 sm:w-10 sm:h-10" />
          <span className="hidden md:inline text-lg">BornForThis</span>
        </div>
        
        {/* Right: Actions (Search + Theme) */}
        <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Search Bar - Enhanced */}
            <div className="relative group">
                {/* Search Icon - Left aligned, pointer-events-none so click passes to input */}
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
                    <Search className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors duration-300" />
                </div>
                
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜索项目..."
                    className="
                      block
                      w-36 focus:w-56 sm:w-44 sm:focus:w-72
                      transition-[width,background-color,shadow] duration-300 ease-out
                      pl-10 pr-9 py-2.5
                      rounded-full
                      bg-white/60 dark:bg-slate-800/60
                      hover:bg-white/80 dark:hover:bg-slate-800/80
                      focus:bg-white dark:focus:bg-slate-800
                      border border-slate-200 dark:border-slate-700/60
                      focus:border-indigo-500/50
                      text-sm font-medium
                      text-slate-700 dark:text-slate-200
                      placeholder-slate-400/80
                      focus:outline-none
                      focus:ring-4 focus:ring-indigo-500/10
                      shadow-sm backdrop-blur-md
                    "
                    aria-label="搜索项目"
                />

                {/* Clear Button - Shows only when there is query */}
                <div className={`absolute inset-y-0 right-0 flex items-center pr-2 transition-opacity duration-200 ${searchQuery ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                   <button
                        onClick={() => setSearchQuery('')}
                        className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors"
                        aria-label="清除搜索"
                    >
                        <X className="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>

            {/* Separator (visible on desktop) */}
            <div className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700/50 mx-1"></div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700/60 backdrop-blur-md shadow-sm hover:shadow active:scale-95 group/theme"
              title={`当前模式: ${theme === 'system' ? '自动' : theme === 'dark' ? '深色' : '浅色'}`}
              aria-label="切换主题"
            >
              <div className="relative w-5 h-5">
                 {theme === 'light' && <Sun className="w-5 h-5 absolute inset-0 rotate-0 transition-transform duration-500" />}
                 {theme === 'dark' && <Moon className="w-5 h-5 absolute inset-0 rotate-0 transition-transform duration-500" />}
                 {theme === 'system' && <Monitor className="w-5 h-5 absolute inset-0 rotate-0 transition-transform duration-500" />}
              </div>
            </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 text-center z-10 pt-8 sm:pt-0">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8 backdrop-blur-sm shadow-sm hover:scale-105 transition-transform cursor-default"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>BornForThis AI 实验室</span>
        </motion.div>
        
        <motion.h1 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
        >
          构建 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">未来</span>, <br className="hidden sm:block" />
          一次一个交互体验。
        </motion.h1>
        
        <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          这里汇总了我基于 Gemini 和最前沿 Web 技术构建的 AI 实验项目、交互界面和创意作品。（含自己研发的有趣项目）
        </motion.p>
      </div>
    </header>
  );
};
