
export interface Project {
  id: string;
  title: string;
  description: string;
  content?: string;    // Markdown/Segmented content for the modal
  url: string;         // Deployed Link
  githubUrl?: string;  // GitHub Repository Link
  articleUrl?: string; // Blog/Article Link
  thumbnailUrl?: string;
  tags: string[];
  iconName: string;
  featured?: boolean;
  status: 'live' | 'beta' | 'maintenance' | 'concept';
}

export type ThemeMode = 'light' | 'dark' | 'system';
