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
        {
        title: 'WebScout',
        slug: 'webscout',
        liveUrl: 'https://web-scout-alpha.vercel.app/',
        sourceCode: 'https://github.com/IronwallxR5/WebScout',
        year: 2026,
        description: `
      Built WebScout, an AI-powered research assistant that autonomously answers complex questions by planning, searching, filtering, and synthesizing answers from the web. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>Intelligent Query Planning - Breaks vague queries into specific, searchable sub-questions</li>
        <li>Real-Time Web Search - Fetches live data from the web using Tavily API</li>
        <li>LLM-Based Content Filtering - Uses batch processing to identify relevant sources efficiently</li>
        <li>Comprehensive Synthesis - Generates well-structured reports with verifiable citations</li>
        <li>Hallucination Prevention - Grounds responses in real-time web data for accuracy</li>
        <li>Intent Classification - Differentiates between research queries and small talk to optimize API usage</li>
        <li>Sequential Search Design - Intentional approach for better relevance and control</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Backend built with Python and FastAPI for high-performance API endpoints</li>
        <li>Modern React frontend for seamless user experience</li>
        <li>Tavily API integration for real-time web search capabilities</li>
        <li>Pydantic for structured outputs and data validation</li>
        <li>Stateless architecture for scalability and reliability</li>
        <li>Batch filtering optimization for efficient source evaluation</li>
      </ul>
      `,
        role: `
      Full-Stack AI Developer <br/>
      <ul>
        <li>Backend: Built FastAPI-based research agent with query planning system</li>
        <li>Search Integration: Implemented Tavily API for real-time web data retrieval</li>
        <li>AI Pipeline: Designed LLM-based content filtering and synthesis workflow</li>
        <li>Intent System: Created intent classifier to differentiate research from chat</li>
        <li>Frontend: Developed modern React/Next.js interface for research interactions</li>
        <li>Architecture: Implemented stateless, scalable design with separation of concerns</li>
        <li>Optimization: Built batch filtering system for efficient source evaluation</li>
      </ul>
      `,
        techStack: [
            'Python',
            'FastAPI',
            'React',
        ],
        thumbnail: '/projects/images/webscout-1.png',
        longThumbnail: '/projects/images/webscout-1.png',
        images: [
            '/projects/images/webscout-1.png',
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
        title: 'LinkUp.AI',
        slug: 'linkup-ai',
        liveUrl: 'https://link-upfork-one.vercel.app',
        sourceCode: 'https://github.com/nst-sdc/LinkUp.AI.git',
        year: 2024,
        description: `
      Built LinkUp.AI, a revolutionary AI-powered platform for students to build, organize, and showcase their academic journey with smart tools and meaningful connections. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>AI-Powered Profile Management - Generate compelling bios, smart resumes, and project summaries with one click</li>
        <li>Interactive Portfolio Timeline - Track academic journey with courses, internships, projects, and certifications</li>
        <li>Student Collaboration Hub - Connect with coding partners, mentors, and teammates for group projects</li>
        <li>Smart Resume Builder - Convert achievements into professional, downloadable resumes</li>
        <li>AI Bio Generator - Let AI craft the perfect professional bio with power, precision, and style</li>
        <li>IT Career Certification Guide - Discover valuable certifications to boost your IT career</li>
        <li>Latest Tech News - Stay updated with AI, coding, and technology developments</li>
        <li>Personalized AI Recommendations - Tailored courses, certifications, and job opportunities</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Full-stack application with modern React architecture</li>
        <li>AI integration for intelligent content generation</li>
        <li>Beautiful, responsive UI with purple-themed design system</li>
        <li>Real-time tech news aggregation</li>
        <li>Deployed on Vercel for fast, reliable hosting</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      <ul>
        <li>Frontend: Built modern, responsive UI with React and elegant design system</li>
        <li>AI Features: Implemented AI-powered bio generator and profile management</li>
        <li>Content: Created interactive portfolio timeline and certification guide</li>
        <li>Integration: Connected tech news API for latest updates</li>
        <li>Collaboration: Built student hub for peer connections</li>
        <li>Deployment: Configured Vercel for production hosting</li>
      </ul>
      `,
        techStack: [
            'React',
            'JavaScript',
            'AI/ML',
            'Tailwind CSS',
            'Node.js',
            'Vercel',
        ],
        thumbnail: '/projects/images/linkup-1.png',
        longThumbnail: '/projects/images/linkup-1.png',
        images: [
            '/projects/images/linkup-1.png',
            '/projects/images/linkup-2.png',
            '/projects/images/linkup-3.png',
            '/projects/images/linkup-4.png',
            '/projects/images/linkup-5.png',
            '/projects/images/linkup-6.png',
        ],
    },
    {
        title: 'JARVIS ChatBot',
        slug: 'jarvis-chatbot',
        liveUrl: 'https://jarvis-chat-bot-bice.vercel.app',
        sourceCode: 'https://github.com/IronwallxR5/JARVIS--ChatBot',
        year: 2025,
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
        <li>React frontend with modern React patterns</li>
        <li>Google Gemini 2.0 API integration for AI capabilities</li>
        <li>Responsive design for seamless mobile and desktop experience</li>
        <li>Optimized performance with efficient state management</li>
        <li>Deployed on Vercel for fast, reliable hosting</li>
      </ul>
      `,
        role: `
      Full-Stack AI Developer <br/>
      <ul>
        <li>Frontend: Built modern chat interface with React</li>
        <li>AI Integration: Implemented Google Gemini 2.0 API for intelligent responses</li>
        <li>UI/UX: Designed sleek dark-themed interface for optimal user experience</li>
        <li>Architecture: Created clean, maintainable codebase structure</li>
        <li>Deployment: Configured Vercel for production hosting</li>
      </ul>
      `,
        techStack: [
            'Node.js',
            'React',
            'JavaScript',
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
        title: 'Retro Games',
        slug: 'retro-games',
        liveUrl: 'https://retrogames-kappa.vercel.app',
        sourceCode: 'https://github.com/IronwallxR5/retrogames',
        year: 2024,
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
            'JavaScript',
            'CSS',
            "HTML",
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
        title: 'Pixel Square',
        slug: 'pixel-square',
        liveUrl: 'https://freelancing-website-psi.vercel.app',
        sourceCode: 'https://github.com/IronwallxR5/Freelancing-Website.git',
        year: 2024,
        description: `
      Built Pixel Square, a comprehensive freelancing platform connecting talented freelancers with businesses and clients worldwide. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>Freelancer Marketplace - Browse and hire top-tier freelancers across multiple categories</li>
        <li>Service Categories - Development & IT, Graphics Designing, Digital Marketing, Financial Services</li>
        <li>Freelancer Profiles - Detailed profiles with ratings, skills, and hire functionality</li>
        <li>Join as Freelancer - Easy registration with skill-based onboarding</li>
        <li>Service Pages - Dedicated pages for Website, Software, App, and Blockchain Development</li>
        <li>Platform Stats - 5K+ Active Freelancers, 10K+ Completed Projects, 95% Client Satisfaction</li>
        <li>Team Section - Meet the founders and their mission</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Modern, responsive UI with elegant green-themed design</li>
        <li>Multi-page architecture with smooth navigation</li>
        <li>Interactive freelancer cards with ratings and hire buttons</li>
        <li>Dynamic service category pages</li>
        <li>Deployed on Vercel for fast, reliable hosting</li>
      </ul>
      `,
        role: `
      <ul>
        <li>Frontend: Built modern, responsive UI with elegant design system</li>
        <li>Features: Implemented freelancer profiles, hiring system, and service pages</li>
        <li>Navigation: Created multi-page architecture with Home, About, Hire, Join, and Services</li>
        <li>Design: Crafted cohesive green-themed visual identity</li>
        <li>Deployment: Configured Vercel for production hosting</li>
      </ul>
      `,
        techStack: [
            'JavaScript',
            'CSS',
            'HTML',
            'Vercel',
        ],
        thumbnail: '/projects/images/pixelsquare-1.png',
        longThumbnail: '/projects/images/pixelsquare-1.png',
        images: [
            '/projects/images/pixelsquare-1.png',
            '/projects/images/pixelsquare-2.png',
            '/projects/images/pixelsquare-3.png',
            '/projects/images/pixelsquare-4.png',
            '/projects/images/pixelsquare-5.png',
            '/projects/images/pixelsquare-6.png',
        ],
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
