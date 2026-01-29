import { IProject } from '@/types';

export const GENERAL_INFO = {
    name: 'Padam Rathi',
    phone: '',
    email: 'rathipadamr5@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Padam, I am reaching out to you because...',

    professionalSummary: `I build things that live on the internet. Full Stack Developer crafting sleek, high-performance web apps with React, Node.js & AI. Turning caffeine into code, one commit at a time.`,
};

export const SOCIAL_LINKS = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/padam-rathi-00b4b533b' },
    { name: 'Github', url: 'https://github.com/IronwallxR5' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/ironwallxr5' },
    { name: 'Codeforces', url: 'https://codeforces.com/profile/IronwallxR5' },
    { name: 'Leetcode', url: 'https://leetcode.com/u/ironwallxr5/' },
];

export const MY_STACK = {
    languages: [
        {
            name: 'TypeScript',
            category: 'Languages',
        },
        {
            name: 'JavaScript',
            category: 'Languages',
        },
        {
            name: 'Python',
            category: 'Languages',
        },
        {
            name: 'HTML',
            category: 'Languages',
        },
        {
            name: 'CSS',
            category: 'Languages',
        },
    ],
    frontend: [
        {
            name: 'React',
            category: 'Frontend',
        },
        {
            name: 'Tailwind CSS',
            category: 'Frontend',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            category: 'Backend',
        },
        {
            name: 'Express.js',
            category: 'Backend',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            category: 'Database',
        },
        {
            name: 'MySQL',
            category: 'Database',
        },
        {
            name: 'Prisma ORM',
            category: 'Database',
        },
    ],
    dataTools: [
        {
            name: 'NumPy',
            category: 'Data Tools',
        },
        {
            name: 'Pandas',
            category: 'Data Tools',
        },
        {
            name: 'Scikit-learn',
            category: 'Data Tools',
        },
        {
            name: 'Machine Learning',
            category: 'Data Tools',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Retro Games',
        slug: 'retro-games',
        liveUrl: 'https://retrogames-kappa.vercel.app',
        sourceCode: 'https://github.com/IronwallxR5/retrogames',
        year: 2026,
        description: `
      Built Retro Games, a nostalgic e-commerce platform celebrating the golden era of gaming with vintage games and merchandise. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>Vintage Gaming Catalog - Browse classic consoles like Atari, NES, and Sega Genesis</li>
        <li>Game Library - Explore platformers, RPGs, shooters from the 8-bit era</li>
        <li>Retro Merchandise - Posters, T-shirts, mugs for gaming enthusiasts</li>
        <li>Retro Revival Section - Featured classics like Pac-Man and Mario</li>
        <li>Community Spotlights - User testimonials and gaming stories</li>
        <li>Blog Section - Articles on retro gaming history and best consoles</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Clean, nostalgic UI design with retro color palette</li>
        <li>Responsive layout for seamless desktop and mobile experience</li>
        <li>Smooth navigation with Home, About, and Retro Revival sections</li>
        <li>Pixel-perfect styling honoring classic gaming aesthetics</li>
        <li>Deployed on Vercel for fast, reliable hosting</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      <ul>
        <li>UI Design: Created nostalgic retro-themed interface with vintage aesthetics</li>
        <li>Product Catalog: Built browsable sections for consoles, games, and merchandise</li>
        <li>Responsive Design: Ensured seamless experience across all devices</li>
        <li>Content Sections: Implemented blog, community spotlights, and featured products</li>
        <li>Deployment: Configured Vercel for production hosting</li>
      </ul>
      `,
        techStack: [
            'React',
            'JavaScript',
            'CSS',
            'Vercel',
        ],
        thumbnail: '/projects/images/retrogames-1.png',
        longThumbnail: '/projects/images/retrogames-1.png',
        images: [
            '/projects/images/retrogames-1.png',
            '/projects/images/retrogames-2.png',
            '/projects/images/retrogames-3.png',
        ],
    },
    {
        title: 'JARVIS ChatBot',
        slug: 'jarvis-chatbot',
        liveUrl: 'https://jarvis-chat-bot-bice.vercel.app',
        sourceCode: 'https://github.com/IronwallxR5/JARVIS--ChatBot',
        year: 2026,
        description: `
      Built JARVIS, an advanced AI-powered chatbot assistant using Google's Gemini 2.0 technology for intelligent, conversational interactions. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>Advanced AI Conversations - Powered by Google Gemini 2.0 for natural, context-aware responses</li>
        <li>Real-time Chat Interface - Smooth, responsive messaging experience</li>
        <li>Modern UI Design - Sleek dark theme with intuitive user experience</li>
        <li>Multi-purpose Assistant - Answers questions, generates content, helps with coding, and provides information</li>
        <li>Clean Architecture - Well-structured codebase for maintainability</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Next.js frontend with modern React patterns</li>
        <li>Google Gemini 2.0 API integration for AI capabilities</li>
        <li>Responsive design for seamless mobile and desktop experience</li>
        <li>Optimized performance with efficient state management</li>
        <li>Deployed on Vercel for fast, reliable hosting</li>
      </ul>
      `,
        role: `
      Full-Stack AI Developer <br/>
      <ul>
        <li>Frontend: Built modern chat interface with Next.js and React</li>
        <li>AI Integration: Implemented Google Gemini 2.0 API for intelligent responses</li>
        <li>UI/UX: Designed sleek dark-themed interface for optimal user experience</li>
        <li>Architecture: Created clean, maintainable codebase structure</li>
        <li>Deployment: Configured Vercel for production hosting</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Google Gemini',
            'Tailwind CSS',
            'Vercel',
        ],
        thumbnail: '/projects/images/jarvis-1.png',
        longThumbnail: '/projects/images/jarvis-1.png',
        images: [
            '/projects/images/jarvis-1.png',
        ],
    },
    {
        title: 'Yoga RAG',
        slug: 'yoga-rag',
        liveUrl: 'https://yoga-y5yy.vercel.app',
        sourceCode: 'https://github.com/IronwallxR5/yoga',
        year: 2026,
        description: `
      Built an AI-powered Yoga Assistant using RAG (Retrieval-Augmented Generation) architecture for intelligent, context-aware yoga guidance with safety-first recommendations. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>Unified LLM Review - Single point checks topic, safety, and intent</li>
        <li>Smart Query Classification - Handles greetings, off-topic, and medical queries</li>
        <li>Safety-First Design - Detects medical conditions with LLM + keyword fallback</li>
        <li>Source Attribution - Every answer shows which articles were used</li>
        <li>Real-time Vector Search - Fast semantic search using Pinecone</li>
        <li>Zen Visual Theme - Calming Sage Green/Tan palette for stress-free UX</li>
        <li>User Feedback System - Thumbs up/down to rate answers</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Full-stack RAG pipeline with React frontend and Node.js backend</li>
        <li>Pinecone vector database for efficient 384-dimensional embeddings</li>
        <li>Transformers.js for local, privacy-first embedding generation</li>
        <li>Google Gemini 1.5 Flash for intelligent response generation</li>
        <li>MongoDB for query logging and analytics</li>
        <li>97% faster rejection of invalid queries (50ms vs 1500ms)</li>
      </ul>
      `,
        role: `
      Full-Stack AI Developer <br/>
      <ul>
        <li>Backend: Built unified query review system with LLM-based safety detection</li>
        <li>RAG Pipeline: Implemented vector search with Pinecone and Transformers.js</li>
        <li>Safety System: Created medical condition detection with keyword fallback</li>
        <li>Frontend: Designed calming Zen-themed React UI for yoga guidance</li>
        <li>Database: Integrated MongoDB for comprehensive query analytics</li>
        <li>API: Developed RESTful endpoints for Q&A, feedback, and stats</li>
      </ul>
      `,
        techStack: [
            'React',
            'Node.js',
            'Pinecone',
            'MongoDB',
            'Transformers.js',
            'Google Gemini',
            'RAG',
            'Express.js',
        ],
        thumbnail: '/projects/images/yogaflow-1.png',
        longThumbnail: '/projects/images/yogaflow-1.png',
        images: [
            '/projects/images/yogaflow-1.png',
            '/projects/images/yogaflow-2.png',
            '/projects/images/yogaflow-3.png',
        ],
    },
    {
        title: 'Lets Collab',
        slug: 'letscollab',
        techStack: [
            'React',
            'Node.js',
            'Prisma',
            'Excalidraw',
            'JWT',
            'WebSockets',
        ],
        thumbnail: '/projects/images/lets-collab-1.png',
        longThumbnail: '/projects/images/lets-collab-1.png',
        images: [
            '/projects/images/lets-collab-1.png',
            '/projects/images/lets-collab-2.png',
            '/projects/images/lets-collab-3.png',
            '/projects/images/lets-collab-4.png',
        ],
        liveUrl: 'https://let-s-collab.vercel.app',
        sourceCode: 'https://github.com/IronwallxR5/Let-s_Collab.git',
        year: 2025,
        description: `Built Let's Collab using React, Node.js, and Prisma, implementing live Excalidraw whiteboard integration, secure authentication, and real-time synchronization for an interactive, smooth, and intuitive collaborative user experience. <br/><br/>
        
        Developed a robust full-stack web platform for real-time visual brainstorming and idea sharing with team collaboration. Features secure JWT auth, workspace management, and a sleek, developer-friendly, modern interactive UI.`,
        role: `As the full-stack developer, I:<br/>
        - Built the entire platform using React, Node.js, and Prisma.<br/>
        - Integrated live Excalidraw whiteboard for real-time collaboration.<br/>
        - Implemented secure JWT authentication and authorization system.<br/>
        - Developed real-time synchronization using WebSockets.<br/>
        - Created workspace management system for team collaboration.<br/>
        - Designed modern, developer-friendly interactive UI.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Bachelor of Technology (AI ML)',
        company: 'Newton School of Technology (ADYPU), Pune',
        duration: 'Present',
    },
    {
        title: 'Intermediate',
        company: 'School of Scholars, Gadchiroli',
        duration: 'Grade: 75%',
    },
    {
        title: 'Matriculation',
        company: 'School of Scholars, Gadchiroli',
        duration: 'Grade: 89%',
    },
];
