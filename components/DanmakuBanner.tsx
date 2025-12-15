
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, Heart, Star, Zap, Coffee, Code, ThumbsUp, Rocket } from 'lucide-react';

// --- Data Generation Helpers ---

const PREFIXES = ["哇，", "天哪，", "不得不说，", "真的是，", "听说", "前排", "Mark，", "打卡，", "支持", "推荐"];
const SUBJECTS = ["这个项目", "AI悦创", "博主", "设计", "代码", "体验", "思路", "教程", "Waline", "React", "Gemini", "UI", "Tailwind", "全栈", "文章"];
const VERBS = ["太强了", "好用", "yyds", "真不错", "爱了", "厉害", "牛逼", "666", "绝绝子", "超乎想象", "丝滑", "有创意", "干货满满", "学到了", "很细节"];
const SUFFIXES = ["！", "！！", "👍", "🔥", "❤️", "🚀", "💡", "😂", "~", "...", "！！！"];

// Generate ~3000 pseudo-random unique comments
const generateLargeCommentPool = (count: number): string[] => {
  const pool: string[] = [];
  const set = new Set<string>();
  
  // Specific hardcoded ones for variety
  const specials = [
    "AI悦创太棒了！", "BornForThis!", "Hello World", "Hack the planet", 
    "Stay Hungry Stay Foolish", "前排围观大神", "求源码！", "如何联系博主？",
    "这个动效是用Framer Motion写的吗？", "Tailwind CSS 真香", "Gemini API 能力很强",
    "期待更多更新", "催更催更！", "Keep Coding", "Make something wonderful",
    "在这里链接未来", "构建者思维", "守破离", "长期主义", "输出倒逼输入"
  ];

  specials.forEach(s => { pool.push(s); set.add(s); });

  while (pool.length < count) {
    const prefix = Math.random() > 0.7 ? PREFIXES[Math.floor(Math.random() * PREFIXES.length)] : "";
    const subject = SUBJECTS[Math.floor(Math.random() * SUBJECTS.length)];
    const verb = VERBS[Math.floor(Math.random() * VERBS.length)];
    
    // Mix parts
    const p = Math.random();
    let text = "";
    if (p < 0.3) text = `${subject}${verb}`;
    else if (p < 0.6) text = `${prefix}${subject}${verb}`;
    else text = `${verb}！${subject}`;

    const suffix = SUFFIXES[Math.floor(Math.random() * SUFFIXES.length)];
    text += suffix;
    
    // Add random ID suffix to ensure uniqueness if needed
    if (!set.has(text)) {
      set.add(text);
      pool.push(text);
    }
  }
  return pool;
};

// Static Icon list for variety
const Icons = [Sparkles, MessageCircle, Heart, Star, Zap, Coffee, Code, ThumbsUp, Rocket];

interface DanmakuRowProps {
  messages: string[];
  speed: number;
  direction: 'left' | 'right';
  className?: string;
}

const DanmakuRow: React.FC<DanmakuRowProps> = ({ messages, speed, direction, className }) => {
  // We duplicate the list once to create a seamless loop effect.
  const content = [...messages, ...messages];
  
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`flex gap-4 sm:gap-6 px-4 ${animationClass} pause-on-hover`}
        style={{ animationDuration: `${speed}s` }}
      >
        {content.map((msg, idx) => {
          const IconComp = Icons[idx % Icons.length];
          // Randomize styles slightly
          const isHighlight = idx % 5 === 0;
          const bgClass = isHighlight
            ? 'bg-indigo-500/10 dark:bg-indigo-400/20 text-indigo-700 dark:text-indigo-300 border-indigo-200/50 dark:border-indigo-700/50' 
            : 'bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-white/20 dark:border-slate-700/50';

          return (
            <span
              key={idx}
              className={`inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full backdrop-blur-md border shadow-sm whitespace-nowrap select-none hover:scale-110 transition-transform duration-200 cursor-default ${bgClass}`}
            >
              <IconComp className={`w-3.5 h-3.5 ${isHighlight ? 'text-indigo-500' : 'text-slate-400'}`} />
              {msg}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export const DanmakuBanner: React.FC = () => {
  // Use useMemo to generate data once, preventing re-generation on re-renders
  const { row1, row2, row3, row4 } = useMemo(() => {
    const fullPool = generateLargeCommentPool(3000);
    // Shuffle
    const shuffled = fullPool.sort(() => Math.random() - 0.5);
    
    // Pick subsets for display
    const sliceSize = 60; 
    
    return {
      row1: shuffled.slice(0, sliceSize),
      row2: shuffled.slice(sliceSize, sliceSize * 2),
      row3: shuffled.slice(sliceSize * 2, sliceSize * 3),
      row4: shuffled.slice(sliceSize * 3, sliceSize * 4),
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 pt-24 pb-12 sm:pt-32 sm:pb-16 flex flex-col gap-8 select-none">
        
        {/* Background Decor */}
        <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/30 via-transparent to-transparent dark:from-indigo-900/10"></div>
             <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
             <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
        </div>

        {/* 1. Header Text Section (Now physically above the tracks) */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
             {/* Badge */}
             <div className="inline-block mb-4">
                 <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold border border-indigo-500/20 backdrop-blur-md shadow-sm"
                 >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    3000+ 条评论接入中
                 </motion.div>
             </div>

             {/* Main Title */}
             <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-5xl sm:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-4 drop-shadow-sm"
             >
                听见 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">你的声音</span>
             </motion.h1>

             {/* Subtitle */}
             <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-base sm:text-lg font-medium"
             >
                这里汇聚了来自五湖四海的想法与灵感。<br className="hidden sm:block"/>每一条弹幕都是一次思想的碰撞。
             </motion.p>
        </div>

        {/* 2. Danmaku Tracks Section (Below the text) */}
        <div className="relative z-10 flex flex-col gap-5 mask-image-gradient py-4">
            {/* Gradient Masks for edges */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-20 pointer-events-none" />

            {/* Rows - Increased speed (duration) slightly for smoother feel with CSS */}
            {/* Note: In CSS animation, larger duration = slower speed. Previous speeds were ~100s. */}
            <DanmakuRow messages={row1} speed={120} direction="left" className="opacity-60 scale-95 blur-[0.5px]" />
            <DanmakuRow messages={row2} speed={160} direction="right" className="opacity-90 scale-100 font-medium" />
            <DanmakuRow messages={row3} speed={200} direction="left" className="opacity-100 scale-105 z-10 font-bold my-1" />
            <DanmakuRow messages={row4} speed={140} direction="right" className="opacity-60 scale-95 blur-[0.5px]" />
        </div>
        
    </div>
  );
};
