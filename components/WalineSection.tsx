
import React, { useEffect, useRef } from 'react';
import { init } from '@waline/client';

interface WalineSectionProps {
  path: string;
}

export const WalineSection: React.FC<WalineSectionProps> = ({ path }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const walineInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Waline
    walineInstanceRef.current = init({
      el: containerRef.current,
      serverURL: 'https://comment.bornforthis.cn/',
      path: path, // Use project ID or unique path
      dark: 'html.dark', // Match Tailwind's dark mode selector
      emoji: [
        '//unpkg.com/@waline/emojis@1.2.0/weibo',
        '//unpkg.com/@waline/emojis@1.2.0/bilibili',
      ],
      comment: true,
      pageview: true, 
      reaction: true,
      noCopyright: true, 
      requiredMeta: ['nick', 'mail'],
      search: false,
    });

    return () => {
      // Destroy instance on unmount to prevent memory leaks or duplicate renders
      if (walineInstanceRef.current && typeof walineInstanceRef.current.destroy === 'function') {
        walineInstanceRef.current.destroy();
      }
    };
  }, [path]);

  return <div ref={containerRef} className="waline-container mt-8" />;
};
