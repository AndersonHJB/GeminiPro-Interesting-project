
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ChevronRight, ChevronLeft, Megaphone, Info, Sparkles, X } from 'lucide-react';

// --- Data Structure ---
type NoticeType = 'new' | 'update' | 'alert' | 'info';

interface Notice {
  id: string;
  type: NoticeType;
  content: string;
  link?: string;
  linkText?: string;
}

const NOTICES: Notice[] = [
  {
    id: '1',
    type: 'new',
    content: '🎉 网站全新上线！欢迎投稿你的创意 AI 项目。',
    link: 'https://comment.bornforthis.cn/',
    linkText: '立即投稿'
  },
  {
    id: '2',
    type: 'update',
    content: '⚡️ 2025.12.24 更新：新增“思考”板块，支持手势滑动切换。',
  },
  {
    id: '3',
    type: 'info',
    content: '💡 想要系统学习编程？添加微信 Jiabcdefh 咨询一对一私教。',
  }
];

const getTypeStyles = (type: NoticeType) => {
  switch (type) {
    case 'new':
      return {
        bg: 'bg-indigo-100 dark:bg-indigo-500/20',
        text: 'text-indigo-600 dark:text-indigo-300',
        icon: <Sparkles className="w-3 h-3" />,
        label: '置顶'
      };
    case 'update':
      return {
        bg: 'bg-emerald-100 dark:bg-emerald-500/20',
        text: 'text-emerald-600 dark:text-emerald-300',
        icon: <Sparkles className="w-3 h-3" />, // Can vary
        label: '更新'
      };
    case 'alert':
      return {
        bg: 'bg-rose-100 dark:bg-rose-500/20',
        text: 'text-rose-600 dark:text-rose-300',
        icon: <Megaphone className="w-3 h-3" />,
        label: '注意'
      };
    default:
      return {
        bg: 'bg-slate-100 dark:bg-slate-700',
        text: 'text-slate-600 dark:text-slate-300',
        icon: <Info className="w-3 h-3" />,
        label: '消息'
      };
  }
};

export const NoticeBoard: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Track direction for animation: 1 = down/next, -1 = up/prev
  const [direction, setDirection] = useState(1); 
  
  // Touch handling
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const minSwipeDistance = 50;

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % NOTICES.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % NOTICES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + NOTICES.length) % NOTICES.length);
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true); // Pause while touching
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart.current || !touchEnd.current) return;
    
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const currentNotice = NOTICES[index];
  const style = getTypeStyles(currentNotice.type);

  // Animation Variants
  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -20 : 20,
      opacity: 0,
    }),
  };

  if (NOTICES.length === 0) return null;

  return (
    <div className="w-full mb-8 z-20 relative">
      <div 
        className="relative flex items-center gap-3 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 shadow-lg rounded-2xl py-3 px-4 sm:py-3 sm:px-5 overflow-hidden transition-all hover:shadow-xl hover:bg-white/80 dark:hover:bg-slate-900/70 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        
        {/* Left Icon (Fixed) */}
        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
           <Bell className="w-4 h-4" />
        </div>

        {/* Separator */}
        <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>

        {/* Content Area (Animated) */}
        <div className="flex-1 h-6 relative overflow-hidden flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentNotice.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute w-full flex items-center gap-3"
            >
              {/* Type Badge */}
              <span className={`hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${style.bg} ${style.text}`}>
                 {style.icon}
                 {style.label}
              </span>

              {/* Text */}
              <div className="flex-1 truncate text-sm font-medium text-slate-700 dark:text-slate-200">
                <span className={`sm:hidden inline-flex mr-2 items-center px-1.5 py-0.5 rounded text-[10px] font-bold ${style.bg} ${style.text}`}>
                    {style.label}
                </span>
                {currentNotice.content}
              </div>

              {/* Link (if any) */}
              {currentNotice.link && (
                 <a 
                   href={currentNotice.link} 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hidden sm:flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                 >
                   {currentNotice.linkText || '查看详情'}
                   <ChevronRight className="w-3 h-3" />
                 </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls (Right) */}
        <div className="flex items-center gap-1 pl-2 border-l border-slate-200 dark:border-slate-800 ml-2">
            <button 
                onClick={handlePrev}
                className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                aria-label="Previous Notice"
            >
                <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
                onClick={handleNext}
                className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                aria-label="Next Notice"
            >
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>

      </div>
    </div>
  );
};
