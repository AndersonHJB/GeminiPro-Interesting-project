
import React from 'react';
import { motion } from 'framer-motion';
import { DanmakuBanner } from './DanmakuBanner';
import { WalineSection } from './WalineSection';
import { MessageCircleHeart } from 'lucide-react';

export const GuestbookPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pb-20"
      // Note: Removed redundant top padding because the banner now has built-in padding
      // and sits seamlessly under the fixed header.
    >
      {/* Banner Section */}
      <section className="w-full border-b border-slate-200 dark:border-slate-800 relative z-0">
        <DanmakuBanner />
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        
        {/* Intro Text */}
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl mb-4 shadow-inner">
                <MessageCircleHeart className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                留言墙
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed text-lg">
                在这里留下你的足迹，分享你的想法，或者只是简单的打个招呼。<br/>
                你的每一条评论，都将成为这面墙上独特的风景。
            </p>
        </div>

        {/* Waline Comments */}
        <div className="bg-white dark:bg-slate-900/50 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm">
             <WalineSection path="/guestbook" />
        </div>

      </div>
    </motion.div>
  );
};
