
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'jarvis-ui',
    title: 'Jarvis 全息界面',
    description: '受钢铁侠启发的沉浸式全息 UI 体验，展示了未来的 Web 交互设计。',
    url: 'https://gemini.bornforthis.cn/jarvis-holographic-ui/',
    githubUrl: 'https://github.com', // Replace with actual
    articleUrl: 'https://bornforthis.cn', // Replace with actual
    thumbnailUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Framer Motion', 'UI/UX'],
    iconName: 'Cpu',
    status: 'live',
    featured: true,
  },
  {
    id: 'gemini-chat',
    title: 'Gemini 智能助手',
    description: '基于 Google Gemini API 构建的下一代对话式 AI 助手，支持多模态输入。',
    url: '#',
    githubUrl: 'https://github.com',
    tags: ['AI', 'Gemini API', 'Chat'],
    iconName: 'Sparkles',
    status: 'beta',
    thumbnailUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'vision-analyzer',
    title: '视觉分析实验室',
    description: '上传图片即可获得深度分析，利用最新的视觉识别模型识别物体与场景。',
    url: '#',
    articleUrl: 'https://bornforthis.cn',
    tags: ['Computer Vision', 'Analysis'],
    iconName: 'Eye',
    status: 'concept',
  }
];
