
import React, { useState } from 'react';
import { Youtube, MonitorPlay, Copy, Check } from 'lucide-react';

export const SocialProfile: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    关于 <span className="text-indigo-600 dark:text-indigo-400">AI悦创</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                    不止于代码，更是思维的碰撞。私教、咨询、技术分享。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Official Website Card - The Primary CTA */}
                <a 
                  href="https://bornforthis.cn/"
                  className="group relative md:col-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-2">AI悦创编程私教官网</h3>
                            <p className="text-indigo-100">一对一辅导 · 系统化学习 · 职业规划</p>
                        </div>
                        <div className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-sm group-hover:scale-105 transition-transform">
                            bornforthis.cn
                        </div>
                    </div>
                </a>

                {/* Video Platforms */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        视频教程
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <a href="https://space.bilibili.com/405961705" className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#00AEEC]/10 text-[#00AEEC] hover:bg-[#00AEEC] hover:text-white transition-all duration-300 font-medium">
                            <MonitorPlay className="w-5 h-5" />
                            Bilibili
                        </a>
                        <a href="https://www.youtube.com/@aiyuechuang" className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#FF0000]/10 text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all duration-300 font-medium">
                            <Youtube className="w-5 h-5" />
                            YouTube
                        </a>
                    </div>
                </div>

                {/* Social Contacts (WeChat & RedNote) */}
                <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        社交媒体 & 联系
                    </h3>
                    <div className="space-y-3">
                        {/* WeChat */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center text-white">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M8.5,13.5A1.5,1.5 0 0,1 7,15A1.5,1.5 0 0,1 5.5,13.5A1.5,1.5 0 0,1 7,12A1.5,1.5 0 0,1 8.5,13.5M17,7A1.5,1.5 0 0,1 15.5,8.5A1.5,1.5 0 0,1 14,7A1.5,1.5 0 0,1 15.5,5.5A1.5,1.5 0 0,1 17,7M10,7A1.5,1.5 0 0,1 8.5,8.5A1.5,1.5 0 0,1 7,7A1.5,1.5 0 0,1 8.5,5.5A1.5,1.5 0 0,1 10,7M17.5,13C17.5,13.6 17.3,14.1 17,14.6L16.8,16.7L14.9,15.7C14.4,16 13.9,16.1 13.3,16.1C10.5,16.1 8.2,14.5 8.2,12.6C8.2,10.7 10.5,9.1 13.3,9.1C16.1,9.1 18.4,10.7 18.4,12.6V13H17.5M13.3,1.8C6.9,1.8 1.8,5.5 1.8,10.2C1.8,12.9 3.4,15.3 6,16.8L5.5,19.9L8.9,18.1C10.3,18.5 11.8,18.6 13.3,18.6C19.7,18.6 24.8,14.9 24.8,10.2C24.8,5.5 19.7,1.8 13.3,1.8Z" /></svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-500">微信 (WeChat)</span>
                                    <span className="text-sm font-medium text-slate-900 dark:text-slate-200">Jiabcdefh</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => copyToClipboard('Jiabcdefh', 'wechat')}
                                className="p-2 text-slate-400 hover:text-emerald-500 transition-colors"
                                title="复制微信号"
                            >
                                {copiedId === 'wechat' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>

                        {/* XiaoHongShu */}
                        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-red-500 flex items-center justify-center text-white font-bold text-xs">
                                    红
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-500">小红书 / 公众号</span>
                                    <span className="text-sm font-medium text-slate-900 dark:text-slate-200">AI悦创</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => copyToClipboard('AI悦创', 'xhs')}
                                className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                                title="复制名称"
                            >
                                {copiedId === 'xhs' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
