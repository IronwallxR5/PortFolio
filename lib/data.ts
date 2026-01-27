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
