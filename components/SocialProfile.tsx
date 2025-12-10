
import React, { useState } from 'react';
import { Youtube, MonitorPlay, Copy, Check, ArrowRight, QrCode, ExternalLink } from 'lucide-react';
import { BornForThisLogo } from './BornForThisLogo';

interface SocialImageCardProps {
  title: string;
  value: string;
  imageSrc: string;
  colorClass: string;
  bgClass: string;
  linkUrl?: string;
}

const SocialImageCard: React.FC<SocialImageCardProps> = ({ title, value, imageSrc, colorClass, bgClass, linkUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative group">
        
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                    {title}
                </h4>
                
                {/* QR Hover Trigger */}
                <div className="relative group/qr">
                    <div className={`cursor-help flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${bgClass} ${colorClass} transition-transform hover:scale-105`}>
                        <QrCode className="w-3.5 h-3.5" />
                        <span>扫码</span>
                    </div>

                    {/* Floating QR Popover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-700 opacity-0 invisible group-hover/qr:opacity-100 group-hover/qr:visible transition-all duration-300 transform origin-bottom translate-y-2 group-hover/qr:translate-y-0 z-50 pointer-events-none">
                        <div className="relative w-full aspect-square bg-white rounded-lg overflow-hidden mb-1">
                             <img 
                                src={imageSrc} 
                                alt={`${title} QR`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <p className="text-center text-xs text-slate-400">使用 App 扫一扫</p>
                        
                        {/* Little arrow at bottom */}
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-b border-r border-slate-100 dark:border-slate-700 transform rotate-45"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800 rounded-xl p-3 pl-4 hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-colors">
            <code className={`font-mono font-medium ${colorClass}`}>{value}</code>
            
            <div className="flex items-center gap-1">
                {linkUrl && (
                    <a 
                        href={linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-all shadow-sm border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
                        title="访问主页"
                    >
                        <ExternalLink className="w-4 h-4" />
                    </a>
                )}
                <button 
                    onClick={handleCopy}
                    className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-all shadow-sm border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
                    title="点击复制"
                >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>
        </div>
    </div>
  );
};

interface SocialLinkCardProps {
  title: string;
  url: string;
  icon: React.ReactNode;
  bgClass: string;
  textClass: string;
}

const SocialLinkCard: React.FC<SocialLinkCardProps> = ({ title, url, icon, bgClass, textClass }) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl hover:shadow-md transition-all duration-300 hover:border-indigo-500/20"
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgClass} ${textClass} font-bold text-xl transition-transform duration-300 group-hover:scale-110`}>
          {icon}
        </div>
        <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white text-lg transition-colors">
          {title}
        </span>
      </div>
      <div className="p-2 rounded-full text-slate-300 group-hover:text-indigo-600 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-all">
        <ExternalLink className="w-5 h-5" />
      </div>
    </a>
  );
};

export const SocialProfile: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    关于 <span className="text-indigo-600 dark:text-indigo-400">AI悦创</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                    不止于代码，更是思维的碰撞。提供一对一编程辅导、技术咨询及全方位的学习资源。
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                
                {/* 1. Official Website (Primary - Spans 2 cols on Desktop) */}
                <a 
                  href="https://bornforthis.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative lg:col-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-8 sm:p-10 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[240px]"
                >
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-56 h-56 bg-indigo-500/30 rounded-full blur-3xl" />
                    
                    <div className="relative z-10">
                        <div className="flex items-start justify-between mb-8">
                            {/* Direct Logo Display */}
                            <div className="rounded-full shadow-lg">
                                <BornForThisLogo className="w-14 h-14" />
                            </div>

                            <span className="flex items-center gap-1 text-sm font-medium text-indigo-200 group-hover:text-white transition-colors">
                                访问官网 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                        
                        <h3 className="text-3xl font-bold mb-3">AI悦创编程私教官网</h3>
                        <p className="text-indigo-100/90 text-lg max-w-md leading-relaxed">
                             系统化学习路径 · 职业规划 · 编程 1v1 
                        </p>
                    </div>

                    <div className="relative z-10 mt-8 self-start">
                        <span className="inline-block px-6 py-2.5 bg-white text-indigo-600 font-bold rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">
                            bornforthis.cn
                        </span>
                    </div>
                </a>

                {/* 2. Video Platforms (Stacked vertically on Desktop) */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col justify-between h-full min-h-[240px]">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <MonitorPlay className="w-6 h-6 text-indigo-500" />
                            视频教程
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                            关注我的频道，获取最新 AI 与编程实战教程。
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        <a href="https://space.bilibili.com/405961705" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#00AEEC]/5 text-[#00AEEC] hover:bg-[#00AEEC] hover:text-white transition-all duration-300 font-medium group">
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.758v6.844c-.054 1.51-.578 2.769-1.574 3.773-.995 1.004-2.249 1.524-3.758 1.56H5.354c-1.51-.054-2.769-.578-3.773-1.574-.994-.995-1.514-2.249-1.55-3.758V9.985c.054-1.51.578-2.769 1.574-3.773.995-1.004 2.249-1.524 3.758-1.56h.854l-2.043-2.315 1.491-1.325L8.336 4.31l3.664.032 2.628-3.003 1.49 1.325-2.042 2.315 3.737-.326zM5.373 6.476c-1.025.025-1.859.366-2.5 1.025-.64.659-.974 1.514-.999 2.565v6.786c.025 1.026.359 1.859.999 2.5 1.019h13.275c1.026-.025 1.859-.359 2.5-1.019.659-.641.994-1.475 1.019-2.5V10.066c-.025-1.025-.366-1.859-1.025-2.5-.659-.64-1.514-.974-2.565-.999L5.373 6.476zm2.344 3.719a2.03 2.03 0 1 1 0 4.062 2.03 2.03 0 0 1 0-4.062zm8.594 0a2.03 2.03 0 1 1 0 4.062 2.03 2.03 0 0 1 0-4.062z"/></svg>
                                Bilibili
                            </span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="https://www.youtube.com/@aiyuechuang" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#FF0000]/5 text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all duration-300 font-medium group">
                            <span className="flex items-center gap-2">
                                <Youtube className="w-5 h-5" />
                                YouTube
                            </span>
                             <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>
            </div>

            {/* 3. Social Media Grid (WeChat / Public Account / RedNote / Video Channel / Store) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SocialImageCard 
                    title="微信 (WeChat)"
                    value="Jiabcdefh"
                    imageSrc="https://cdn.bornforthis.cn/images/03-%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.JPG"
                    bgClass="bg-[#28C445]/10"
                    colorClass="text-[#28C445]"
                />
                 <SocialImageCard 
                    title="公众号"
                    value="AI悦创"
                    imageSrc="https://cdn.bornforthis.cn/images/02-%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.JPG"
                    bgClass="bg-[#28C445]/10"
                    colorClass="text-[#28C445]"
                />
                 <SocialImageCard 
                    title="小红书"
                    value="AI悦创"
                    imageSrc="https://cdn.bornforthis.cn/images/01-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E4%BA%8C%E7%BB%B4%E7%A0%81.JPG"
                    bgClass="bg-[#FF2442]/10"
                    colorClass="text-[#FF2442]"
                    linkUrl="https://www.xiaohongshu.com/user/profile/5e413a430000000001000f4c"
                />
                <SocialImageCard 
                    title="微信视频号"
                    value="AI悦创"
                    imageSrc="https://cdn.bornforthis.cn/images/05-%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%91%E5%8F%B7.JPG"
                    bgClass="bg-[#FA9D3B]/10"
                    colorClass="text-[#FA9D3B]"
                />
                <SocialImageCard 
                    title="微信小店"
                    value="AI悦创"
                    imageSrc="https://cdn.bornforthis.cn/images/04-%E5%BE%AE%E4%BF%A1%E5%B0%8F%E5%BA%97.jpg"
                    bgClass="bg-[#28C445]/10"
                    colorClass="text-[#28C445]"
                />
            </div>

            {/* 4. Social Links Grid (Zhihu / Weibo / CSDN) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <SocialLinkCard 
                    title="知乎"
                    url="https://www.zhihu.com/people/aiyuechuang"
                    icon="知"
                    bgClass="bg-[#0084FF]/10"
                    textClass="text-[#0084FF]"
                />
                <SocialLinkCard 
                    title="微博"
                    url="https://weibo.com/u/5673898686"
                    icon="微"
                    bgClass="bg-[#E6162D]/10"
                    textClass="text-[#E6162D]"
                />
                 <SocialLinkCard 
                    title="CSDN"
                    url="https://www.csdn.net/"
                    icon="C"
                    bgClass="bg-[#FC5531]/10"
                    textClass="text-[#FC5531]"
                />
            </div>
        </div>
      </div>
    </section>
  );
};
