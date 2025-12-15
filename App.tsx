
import React, { useEffect, useState, useMemo } from 'react';
import { Header } from './components/Header';
import { ProjectCard } from './components/ProjectCard';
import { Footer } from './components/Footer';
import { SocialProfile } from './components/SocialProfile';
import { ThoughtCarousel } from './components/ThoughtCarousel';
import { NoticeBoard } from './components/NoticeBoard';
import { ProjectModal } from './components/ProjectModal';
import { GuestbookPage } from './components/GuestbookPage';
import { PROJECTS } from './constants';
import { ThemeMode, Project } from './types';
import { ChevronLeft, ChevronRight, ArrowUp, ArrowDown, Search } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ITEMS_PER_PAGE = 6;
type ViewState = 'home' | 'guestbook';

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>('system');
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [currentPage, setCurrentPage] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Search Filter Logic
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return PROJECTS;
    const lowerQuery = searchQuery.toLowerCase().trim();
    return PROJECTS.filter(project => 
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }, [searchQuery]);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Auto switch to home if search is active
  useEffect(() => {
    if (searchQuery.trim().length > 0 && currentView !== 'home') {
        setCurrentView('home');
    }
  }, [searchQuery, currentView]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const grid = document.getElementById('project-grid');
    if (grid) {
      const headerOffset = 100;
      const elementPosition = grid.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  // Theme Logic
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (mode: ThemeMode) => {
      if (mode === 'dark') root.classList.add('dark');
      else if (mode === 'light') root.classList.remove('dark');
      else {
        if (mediaQuery.matches) root.classList.add('dark');
        else root.classList.remove('dark');
      }
    };

    applyTheme(theme);
    
    if (theme === 'system') localStorage.removeItem('theme');
    else localStorage.setItem('theme', theme);

    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        if (e.matches) root.classList.add('dark');
        else root.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  };

  const handleNavigate = (view: ViewState) => {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-200">
      
      {/* --- Tech Background System --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900" />
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.4] dark:opacity-[0.2]" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-[100%] blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[4000ms]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent dark:from-slate-950" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header 
            theme={theme} 
            toggleTheme={toggleTheme} 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            currentView={currentView}
            onNavigate={handleNavigate}
        />
        
        <main className="flex-grow w-full">
            {currentView === 'home' ? (
                // --- HOME VIEW ---
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                     <NoticeBoard />
                     <div id="project-grid" className="scroll-mt-32 min-h-[400px]">
                        {filteredProjects.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                            <AnimatePresence mode="popLayout">
                                {currentProjects.map((project, index) => (
                                    <ProjectCard 
                                        key={project.id} 
                                        project={project} 
                                        index={index} 
                                        onClick={setSelectedProject}
                                    />
                                ))}
                            </AnimatePresence>
                            </div>
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col items-center justify-center py-20 text-center"
                            >
                                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
                                    <Search className="w-8 h-8 text-slate-300 dark:text-slate-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">没有找到相关项目</h3>
                                <p className="text-slate-500 dark:text-slate-400 max-w-md">尝试更换关键词，或者看看其他的项目吧。</p>
                                <button onClick={() => setSearchQuery('')} className="mt-6 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500 transition-colors shadow-sm">
                                    清除搜索
                                </button>
                            </motion.div>
                        )}
                    </div>
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4 mb-20">
                            <button onClick={() => handlePageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-white dark:hover:bg-slate-900 disabled:opacity-50 transition-all backdrop-blur-sm bg-white/50 dark:bg-slate-900/50"><ChevronLeft className="w-5 h-5" /></button>
                            <div className="flex gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button key={page} onClick={() => handlePageChange(page)} className={`w-10 h-10 rounded-lg font-medium transition-all backdrop-blur-sm ${currentPage === page ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105' : 'bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900'}`}>{page}</button>
                                ))}
                            </div>
                            <button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-white dark:hover:bg-slate-900 disabled:opacity-50 transition-all backdrop-blur-sm bg-white/50 dark:bg-slate-900/50"><ChevronRight className="w-5 h-5" /></button>
                        </div>
                    )}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent mb-12 opacity-50"></div>
                    <ThoughtCarousel />
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent my-12 opacity-50"></div>
                    <SocialProfile />
                </div>
            ) : (
                // --- GUESTBOOK VIEW ---
                <GuestbookPage />
            )}
        </main>

        <Footer />
        
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal key="project-modal" project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>

        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
          <button onClick={scrollToTop} className={`p-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-all transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}><ArrowUp className="w-5 h-5" /></button>
          <button onClick={scrollToBottom} className="p-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-all transform hover:scale-105"><ArrowDown className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
};

export default App;
