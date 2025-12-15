import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

// Define the shape of the global BFTCounter object
declare global {
  interface Window {
    BFTCounter?: {
      get: () => Promise<{ total: number; online?: number; domain: string }>;
    };
  }
}

export const VisitCounter: React.FC = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchCount = async () => {
        // Retry loop: try finding the window object for up to 10 seconds
        for (let i = 0; i < 20; i++) {
            if (!mounted) return;

            if (window.BFTCounter) {
                try {
                    const data = await window.BFTCounter.get();
                    if (mounted) {
                        setCount(data.total);
                        setLoading(false);
                    }
                    return; // Success
                } catch (err) {
                   console.warn("BFTCounter fetch failed:", err);
                   // Don't return, maybe retry? Usually if get() fails it's network/server error.
                   // We'll stop trying to avoid spamming errors.
                   if (mounted) setLoading(false);
                   return;
                }
            }
            // Wait 500ms before next check
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        
        // Timeout
        if (mounted) setLoading(false);
    };
    
    fetchCount();

    return () => { mounted = false; };
  }, []);

  return (
    <div 
        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs font-medium text-slate-500 dark:text-slate-400 shadow-sm transition-all hover:bg-white dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-default group animate-in fade-in duration-700"
        title="总访问量"
    >
      <Eye className={`w-3.5 h-3.5 group-hover:text-indigo-500 transition-colors ${loading ? 'animate-pulse' : ''}`} />
      <span className="hidden sm:inline">本站总访问量:</span>
      <span className={`tabular-nums tracking-wide ${loading ? 'animate-pulse' : ''}`}>
        {count !== null ? count.toLocaleString() : '-'}
      </span>
    </div>
  );
};