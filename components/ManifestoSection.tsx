
import React from 'react';
import { Sparkles, Quote, BrainCircuit, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export const ManifestoSection: React.FC = () => {
  return (
    <section className="py-12 relative">
      <div className="relative rounded-3xl overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 shadow-xl">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-purple-500/10 rounded-full blur-[60px]" />
        
        {/* Large Background Quote Icon */}
        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 text-slate-900/[0.03] dark:text-white/[0.03] pointer-events-none select-none">
          <Quote className="w-32 h-32 sm:w-48 sm:h-48 transform -scale-x-100" />
        </div>

        <div className="relative z-10 px-8 py-12 sm:p-16 flex flex-col md:flex-row gap-10 items-center md:items-start">
          
          {/* Left: Visual Icon/Badge */}
          <div className="flex-shrink-0">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 transform rotate-3">
                <BrainCircuit className="w-8 h-8 text-white" />
             </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              真正的第一步
              <span className="hidden sm:inline-block w-12 h-px bg-slate-300 dark:bg-slate-700"></span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-medium tracking-wide">
              
              <p>
                不要一味的去想：“哇，这么厉害！这个项目的提示词，跪求！”<br/>
                不要这样，而是要想想：
                <span className="text-slate-900 dark:text-white font-bold decoration-indigo-500/30 underline decoration-2 underline-offset-4">观察、体验这个项目</span>，
                自己能不能表达出来，做出一个小 Demo 出来。这才是有效的练习、学习、体验。
              </p>

              <div className="pl-4 border-l-4 border-indigo-500/30 italic text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                “你要原版提示词干什么？是为了做一个一模一样的？那倒不用，全部代码开源、全部部署上线，你都可以用！”
              </div>

              <p>
                一个好的提示词，或许可以快速复现，或者是成功的第一步。但不是你真正拥抱未来科技的第一步，真正的第一步是：
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 font-bold text-xl mx-1">
                  体验 · 探索 · 观察 · 表达
                </span>
                ！
              </p>

              <p>
                AI 再厉害也没有什么“神词”，一下就得到一个很复杂的项目。而是通过观察，<span className="text-slate-900 dark:text-white font-semibold">一次次的表达去修正</span>，以至于达到自己想要的功能。
              </p>
            </div>

            {/* Footer / Signature */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/50 flex items-center justify-between">
               <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                  <Lightbulb className="w-4 h-4" />
                  <span>BornForThis 思考</span>
               </div>
               <div className="text-right">
                  <p className="font-handwriting text-xl sm:text-2xl text-slate-800 dark:text-slate-200 opacity-90 rotate-[-2deg]">
                    愿你我皆能把自己心中所想，所思表达好～
                  </p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
