
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Github, Globe, Tag, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { marked } from 'marked';
import { Project } from '../types';
import { WalineSection } from './WalineSection';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Ensure we stop propagation on the modal content to prevent closing when clicking inside
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Safe parsing of markdown content
  // Fallback to description if content is missing
  const rawContent = project.content || project.description || '暂无详细介绍';
  
  // Configure marked to handle line breaks similar to GitHub flavor
  const htmlContent = marked.parse(rawContent, { breaks: true }) as string;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
        onClick={handleContentClick}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-800"
      >
        {/* Header (Sticky) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-10 sticky top-0">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white truncate pr-4 flex items-center gap-2">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 custom-scrollbar">
          
          {/* Thumbnail (if exists) */}
          {project.thumbnailUrl && (
            <div className="w-full h-48 sm:h-80 rounded-2xl overflow-hidden mb-8 border border-slate-100 dark:border-slate-800 shadow-md">
              <img 
                src={project.thumbnailUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Meta Info & Actions Area */}
          <div className="flex flex-col gap-6 mb-8">
            
            {/* 1. Tags Row */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* 2. Action Buttons Row - Redesigned */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                
                {/* Primary: Visit Project */}
                <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 group"
                >
                    <Globe className="w-4 h-4" />
                    <span>访问项目</span>
                    <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary: GitHub */}
                {project.githubUrl && (
                    <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-200"
                    >
                        <Github className="w-4 h-4" />
                        <span>源码</span>
                    </a>
                )}

                {/* Tertiary: Article */}
                {project.articleUrl && (
                    <a 
                        href={project.articleUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-medium hover:border-indigo-500 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 bg-white dark:bg-transparent transition-all duration-200"
                    >
                        <BookOpen className="w-4 h-4" />
                        <span>文章</span>
                    </a>
                )}
            </div>
          </div>

          {/* Main Content (Markdown Rendered as HTML) */}
          <div 
             className="prose prose-slate dark:prose-invert max-w-none markdown-body"
             dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Divider */}
          <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-10" />

          {/* Comments Section */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                💬 评论与讨论
            </h3>
            {/* Using project.id as part of the path to ensure unique comments per project */}
            <WalineSection path={`/project/${project.id}`} />
          </div>

        </div>
      </motion.div>
    </div>
  );
};
