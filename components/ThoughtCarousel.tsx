
import React, { useState } from 'react';
import { Quote, BrainCircuit, Lightbulb, ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data Structure ---
interface Thought {
  id: number;
  date: string;
  title: string;
  content: React.ReactNode;
  highlight?: string;
}

const THOUGHTS: Thought[] = [
  {
    id: 1,
    date: '2024.05.20',
    title: '真正的第一步',
    content: (
      <>
        <p>
          不要一味的去想：“哇，这么厉害！这个项目的提示词，跪求！”<br/>
          不要这样，而是要想想：
          <span className="text-slate-900 dark:text-white font-bold decoration-indigo-500/30 underline decoration-2 underline-offset-4">观察、体验这个项目</span>，
          自己能不能表达出来，做出一个小 Demo 出来。这才是有效的练习、学习、体验。
        </p>

        <div className="my-6 pl-4 border-l-4 border-indigo-500/30 italic text-slate-500 dark:text-slate-400 text-sm sm:text-base bg-indigo-50/50 dark:bg-indigo-900/10 py-3 rounded-r-lg">
           “你要原版提示词干什么？是为了做一个一模一样的？那倒不用，全部代码开源、全部部署上线，你都可以用！”
        </div>

        <p className="mt-4">
          一个好的提示词，或许可以快速复现，或者是成功的第一步。但不是你真正拥抱未来科技的第一步，真正的第一步是：
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 font-bold mx-1">
             体验 · 探索 · 观察 · 表达
          </span>
          ！
        </p>

        <p className="mt-4">
          AI 再厉害也没有什么“神词”，一下就得到一个很复杂的项目。而是通过观察，<span className="text-slate-900 dark:text-white font-semibold">一次次的表达去修正</span>，以至于达到自己想要的功能。
        </p>

        <p className="mt-6 font-handwriting text-xl text-indigo-600 dark:text-indigo-400 text-center sm:text-left rotate-[-1deg]">
          愿你我皆能把自己心中所想，所思表达好～
        </p>

        <p className="mt-6">
          你要通过我的项目，触发属于自己的 <span className="font-bold text-slate-900 dark:text-white">idea💡</span>。去用 AI 创造属于你的创作，这才是<span className="font-bold text-slate-900 dark:text-white">破圈</span>！
        </p>

        <div className="mt-8 p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl border border-indigo-100 dark:border-slate-700/50 text-sm sm:text-base shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-300 font-bold">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs">🚀</span>
                本网站支持投稿
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                可以把你觉得有意思的项目源代码提交给我。我会进行评估，评估通过，我会帮你进行部署。<br/>
                <span className="block mt-2 font-medium text-indigo-600/80 dark:text-indigo-400/80">欢迎投稿～（本网站非盈利性，愿我们一起共创！）</span>
            </p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    date: '2024.05.22',
    title: 'AI 是能力的放大器',
    content: (
      <>
        <p>
          很多人担心 AI 会取代自己，但 AI 本质上是一个<span className="font-bold text-slate-900 dark:text-white">“乘法器”</span>。
          如果你的基数是 0，乘以再强大的 AI 依然是 0。
        </p>
        <p className="mt-4">
          只有当你拥有了核心的逻辑思维、审美能力和解决问题的框架，AI 才能将你的能力放大 10 倍、100 倍。
          <span className="italic text-slate-500 dark:text-slate-400">不要试图用 AI 掩盖懒惰，而要用 AI 武装你的勤奋。</span>
        </p>
      </>
    ),
    highlight: 'AI 不会淘汰人，但会使用 AI 的人将淘汰不会使用 AI 的人。'
  },
  {
    id: 3,
    date: '2024.05.25',
    title: '代码的审美',
    content: (
      <>
        <p>
          代码不仅仅是给机器执行的指令，更是写给人看的逻辑诗篇。
          一段优秀的代码，应当像一篇结构严谨的文章：<span className="font-bold text-slate-900 dark:text-white">变量名是角色的名字，函数是剧情的转折。</span>
        </p>
        <p className="mt-4">
          当你开始在意代码的缩进、命名的准确性、架构的整洁度时，你就从“码农”进阶为了“工程师”。
          美感，是技术高阶的必经之路。
        </p>
      </>
    ),
    highlight: 'Clean Code 是一种信仰，也是一种对他人的尊重。'
  },
  {
    id: 4,
    date: '2024.06.01',
    title: '构建者思维 (Builder\'s Mindset)',
    content: (
      <>
        <p>
          在这个时代，消费内容很容易，但<span className="font-bold text-slate-900 dark:text-white">创造内容</span>才具有稀缺性。
          当你看到一个很酷的网站，不要只停留在“点赞”，去 F12 看看它的源码，去思考它的实现逻辑。
        </p>
        <p className="mt-4">
          从 Consumer（消费者）转变为 Creator（创造者），你会发现世界不再是黑盒，而是由无数个可以被重组的积木构成的。
        </p>
      </>
    ),
    highlight: 'Hands dirty, mind clear. 只有脏了手，才能清了脑。'
  },
  {
    id: 5,
    date: '2024.06.08',
    title: '失败的调试价值',
    content: (
      <>
        <p>
          新手最怕报错 (Error)，高手最爱报错。因为每一个红色的 Error，都是系统在诚实地告诉你：<span className="font-bold text-slate-900 dark:text-white">你的认知与现实存在偏差。</span>
        </p>
        <p className="mt-4">
          调试 (Debugging) 的过程，就是修正认知的过程。你解决的每一个 Bug，都会内化为你下一次直觉的一部分。
          不要因为失败而沮丧，那是成长的入场券。
        </p>
      </>
    ),
    highlight: 'The bug is not in the code, it is in your mental model.'
  },
  {
    id: 6,
    date: '2024.06.15',
    title: '全栈的真正含义',
    content: (
      <>
        <p>
          全栈 (Full Stack) 不代表你要精通所有语言。它的真正含义是：
          <span className="font-bold text-slate-900 dark:text-white">具备独立解决问题的完整闭环能力。</span>
        </p>
        <p className="mt-4">
          从需求分析，到前端交互，再到后端逻辑，最后部署上线。无论你用什么技术栈，重要的是你有能力把一个“想法”变成一个可用的“产品”。
        </p>
      </>
    ),
    highlight: '技术栈是工具，解决问题才是目的。'
  },
  {
    id: 7,
    date: '2024.06.22',
    title: '守·破·离',
    content: (
      <>
        <p>
          学习任何技术都遵循东方哲学的“守破离”：<br/>
          <span className="font-bold">守</span>：严格模仿最好的范例，不求甚解但求精确。<br/>
          <span className="font-bold">破</span>：在熟练后加入自己的思考，尝试修改和优化。<br/>
          <span className="font-bold">离</span>：融会贯通，开创属于自己的风格。
        </p>
        <p className="mt-4">
          很多初学者跳过了“守”的枯燥，直接想“离”，结果往往是空中楼阁。
        </p>
      </>
    ),
  },
  {
    id: 8,
    date: '2024.07.05',
    title: '输出倒逼输入',
    content: (
      <>
        <p>
          觉得自己学不会？试着去教别人。
          <span className="font-bold text-slate-900 dark:text-white">费曼学习法</span>告诉我们，如果你不能简单地把一个概念讲清楚，说明你还没有真正理解它。
        </p>
        <p className="mt-4">
          写博客、做视频、开源项目，这些“输出”行为会强迫你把碎片化的知识体系化。
          最好的学习方式，就是公开地学习。
        </p>
      </>
    ),
    highlight: 'Teach everything you know.'
  },
  {
    id: 9,
    date: '2024.07.12',
    title: '长期主义 vs 短期快感',
    content: (
      <>
        <p>
          互联网充满了“3天速成”、“7天精通”的诱惑。但真正的技术护城河，是那些需要<span className="font-bold text-slate-900 dark:text-white">漫长积累</span>的基础学科：算法、数据结构、网络协议、操作系统。
        </p>
        <p className="mt-4">
          框架年年变，但底层逻辑五十年不变。做难而正确的事，做时间的朋友。
        </p>
      </>
    ),
  },
  {
    id: 10,
    date: '2024.08.01',
    title: 'Stay Hungry, Stay Foolish',
    content: (
      <>
        <p>
          这是乔布斯的名言，也是技术人的座右铭。
          <span className="font-bold text-slate-900 dark:text-white">求知若饥</span>，保持对新技术的渴望；
          <span className="font-bold text-slate-900 dark:text-white">虚心若愚</span>，永远承认自己的无知。
        </p>
        <p className="mt-4">
          在这个技术爆炸的时代，保持空杯心态，是我们对抗焦虑的唯一武器。
          愿你我皆能保持这份初心。
        </p>
      </>
    ),
    highlight: 'Keep coding, keep creating.'
  }
];

export const ThoughtCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % THOUGHTS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + THOUGHTS.length) % THOUGHTS.length);
  };

  const currentThought = THOUGHTS[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
      filter: 'blur(4px)',
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 20 : -20,
      opacity: 0,
      filter: 'blur(4px)',
    }),
  };

  return (
    <section className="py-12 relative group/carousel">
      <div className="relative rounded-3xl overflow-hidden bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/50 dark:hover:bg-slate-900/50">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-purple-500/10 rounded-full blur-[60px]" />
        
        {/* Large Background Quote Icon */}
        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 text-slate-900/[0.03] dark:text-white/[0.03] pointer-events-none select-none transition-transform duration-700 group-hover/carousel:scale-110">
          <Quote className="w-32 h-32 sm:w-48 sm:h-48 transform -scale-x-100" />
        </div>

        {/* --- Header: Date & Navigation --- */}
        <div className="relative z-20 flex items-center justify-between px-8 pt-8 sm:px-16 sm:pt-10">
            {/* Date Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm">
                <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                    {currentThought.date}
                </span>
            </div>

            {/* Nav Buttons */}
            <div className="flex gap-2">
                <button 
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                    aria-label="Previous thought"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 transition-all text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                    aria-label="Next thought"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>

        <div className="relative z-10 px-8 py-8 sm:p-16 flex flex-col md:flex-row gap-10 items-center md:items-start min-h-[400px]">
          
          {/* Left: Visual Icon/Badge (Static) */}
          <div className="flex-shrink-0 hidden md:block">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 transform rotate-3 group-hover/carousel:rotate-6 transition-transform duration-500">
                <BrainCircuit className="w-8 h-8 text-white" />
             </div>
          </div>

          {/* Right: Text Content (Animated) */}
          <div className="flex-1 w-full overflow-hidden relative">
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="space-y-8"
                >
                    {/* Title */}
                    <div className="flex items-center gap-3">
                         {/* Mobile Icon shown here */}
                         <div className="md:hidden w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                            <BrainCircuit className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                        {currentThought.title}
                        <span className="hidden sm:inline-block w-12 h-px bg-slate-300 dark:bg-slate-700"></span>
                        </h2>
                    </div>

                    {/* Content Body */}
                    <div className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-medium tracking-wide">
                        {currentThought.content}
                    </div>
                    
                    {/* Highlight Box (Conditional Rendering) */}
                    {currentThought.highlight && (
                        <div className="pl-4 border-l-4 border-indigo-500/30 italic text-slate-500 dark:text-slate-400 text-sm sm:text-base bg-indigo-50/50 dark:bg-indigo-900/10 py-2 rounded-r-lg">
                            “{currentThought.highlight}”
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Footer / Signature */}
            <div className="pt-10 mt-2 border-t border-slate-200 dark:border-slate-800/50 flex items-center justify-between">
               <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                  <Lightbulb className="w-4 h-4" />
                  <span>BornForThis 思考</span>
               </div>
               
               <div className="flex items-center gap-4">
                   <div className="font-handwriting text-lg sm:text-xl text-slate-800 dark:text-slate-200 opacity-90">
                        愿你有所收获 ~
                   </div>
                   <div className="text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                       {String(currentIndex + 1).padStart(2, '0')} / {THOUGHTS.length}
                   </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
