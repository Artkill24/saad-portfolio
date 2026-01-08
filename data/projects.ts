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
  // AI & Automation Projects
  {
    id: 'pipeline-ai',
    title: 'Pipeline AI',
    description: 'Comprehensive SDR platform with Claude Sonnet 4 integration for AI-powered email generation and advanced lead management system.',
    category: 'AI & Automation',
    tech: ['Next.js', 'TypeScript', 'Claude API', 'Lead Management'],
    featured: true,
    image: '/projects/pipeline-ai.png'
  },
  {
    id: 'ai-book-generator',
    title: 'AI Book Generator',
    description: 'Multi-genre AI-powered book generation platform with authentication, payment processing, and automated content creation.',
    category: 'AI & Automation',
    tech: ['Next.js', 'AI APIs', 'Stripe', 'Authentication'],
    featured: true,
    image: '/projects/book-gen.png'
  },
  {
    id: 'sunotube-ai',
    title: 'SunoTube AI',
    description: 'Automated YouTube music generation system that creates, processes and publishes music content automatically.',
    category: 'AI & Automation',
    tech: ['Python', 'YouTube API', 'AI Music Generation', 'Automation'],
    featured: true,
    image: '/projects/sunotube.png'
  },
  {
    id: 'affiliate-automation',
    title: 'Affiliate Marketing Automation',
    description: 'Automated Amazon Associates system with smart product selection and content generation.',
    category: 'AI & Automation',
    tech: ['Python', 'Amazon API', 'Web Scraping', 'Automation'],
    featured: false
  },
  {
    id: 'social-automation',
    title: 'Social Media Automation Suite',
    description: 'Comprehensive automation system for managing multiple social media platforms with AI-powered content creation.',
    category: 'AI & Automation',
    tech: ['Node.js', 'Social APIs', 'AI Content', 'Scheduling'],
    featured: false
  },

  // Blockchain & Crypto Projects
  {
    id: 'supra-projects',
    title: 'Supra Platform Development',
    description: 'Multiple blockchain projects built on Supra platform with smart contract integration and DeFi features.',
    category: 'Blockchain',
    tech: ['Solidity', 'Smart Contracts', 'Supra', 'Web3'],
    featured: true,
    image: '/projects/supra.png'
  },
  {
    id: 'meme-coin',
    title: 'Meme Coin Creator',
    description: 'Token creation and management system for meme coins with automated deployment and liquidity management.',
    category: 'Blockchain',
    tech: ['Solidity', 'Web3.js', 'Token Standards', 'DeFi'],
    featured: false
  },
  {
    id: 'token-systems',
    title: 'Custom Token Systems',
    description: 'Blockchain token creation frameworks with customizable tokenomics and distribution mechanisms.',
    category: 'Blockchain',
    tech: ['Ethereum', 'Smart Contracts', 'Tokenomics', 'Web3'],
    featured: false
  },

  // Cybersecurity Projects
  {
    id: 'network-security',
    title: 'Network Security Monitor',
    description: 'Real-time network monitoring system with threat detection and automated response capabilities.',
    category: 'Cybersecurity',
    tech: ['Python', 'Network Analysis', 'Security', 'Monitoring'],
    featured: true,
    image: '/projects/network-sec.png'
  },
  {
    id: 'browser-security',
    title: 'Browser Security Extension',
    description: 'Browser extension for enhanced security with real-time threat detection and privacy protection.',
    category: 'Cybersecurity',
    tech: ['JavaScript', 'Browser APIs', 'Security', 'Extensions'],
    featured: false
  },
  {
    id: 'ai-threat-detection',
    title: 'AI Threat Detection System',
    description: 'Machine learning powered security system for detecting and preventing cyber threats in real-time.',
    category: 'Cybersecurity',
    tech: ['Python', 'Machine Learning', 'Security', 'AI'],
    featured: true,
    image: '/projects/threat-ai.png'
  }
];

export const categories = [
  'All',
  'AI & Automation',
  'Blockchain',
  'Cybersecurity'
];
