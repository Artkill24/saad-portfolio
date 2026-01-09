export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'pipeline-ai',
    title: 'Pipeline AI',
    description: 'Comprehensive SDR platform with Claude Sonnet 4 integration for AI-powered email generation and advanced lead management system.',
    category: 'AI & Automation',
    tech: ['Next.js', 'TypeScript', 'Claude API', 'Lead Management'],
    demo: 'https://pipeline-ai-i31d.vercel.app',
    featured: true,
    image: '/projects/pipeline-ai.png'
  },
  {
    id: 'agentstudio',
    title: 'AgentStudio',
    description: 'AI platform for Italian professional studios featuring client communication agents and document generation capabilities with Supabase authentication and Stripe payment processing.',
    category: 'AI & Automation',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'AI Agents'],
    demo: 'https://agentstudio-v2.vercel.app',
    featured: true,
    image: '/projects/agentstudio.png'
  }
];

export const categories = [
  'All',
  'AI & Automation',
  'Blockchain',
  'Cybersecurity'
];
