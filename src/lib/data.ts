import { ProfileData, SocialLink, Project, Publication } from '@/models/types';

export const profileData: ProfileData = {
  name: "Rafael Felix",
  title: "Software Engineer & Researcher",
  bio: "Passionate software engineer with expertise in full-stack development and academic research. I specialize in creating innovative solutions that bridge the gap between technology and real-world applications. With a strong foundation in computer science and hands-on experience in modern web technologies, I'm dedicated to building impactful digital experiences.",
  location: "San Francisco, CA",
  email: "rafael@rafafelix.info",
  phone: "+1 (555) 123-4567",
  profileImage: "/images/profile.png",
  resumeUrl: "/documents/resume.pdf",
  skills: [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "Python", "Machine Learning", "Data Science", "AWS", "Docker",
    "Git", "Agile", "Research", "Technical Writing"
  ],
  interests: [
    "Artificial Intelligence", "Web Development", "Open Source",
    "Research", "Mentoring", "Technology Innovation"
  ]
};

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/rafafelix",
    icon: "linkedin",
    label: "Connect on LinkedIn"
  },
  {
    platform: "GitHub",
    url: "https://github.com/rafafelix",
    icon: "github",
    label: "View my code on GitHub"
  },
  {
    platform: "X (Twitter)",
    url: "https://x.com/rafafelix",
    icon: "twitter",
    label: "Follow me on X"
  },
  {
    platform: "Email",
    url: "mailto:rafael@rafafelix.info",
    icon: "email",
    label: "Send me an email"
  }
];

export const projects: Project[] = [
  {
    id: "ai-research-platform",
    title: "AI Research Platform",
    description: "A comprehensive platform for machine learning research with collaborative features and experiment tracking.",
    longDescription: "Built a scalable platform that enables researchers to collaborate on machine learning projects, track experiments, and share results. The platform includes real-time collaboration tools, version control for datasets, and automated experiment tracking with visualization dashboards.",
    technologies: ["React", "Node.js", "Python", "TensorFlow", "MongoDB", "Docker"],
    category: "web",
    status: "completed",
    featured: true,
    images: ["/images/project-ai-platform-1.jpg", "/images/project-ai-platform-2.jpg"],
    demoUrl: "https://ai-platform-demo.rafafelix.info",
    githubUrl: "https://github.com/rafafelix/ai-research-platform",
    startDate: "2024-01-01",
    endDate: "2024-06-30",
    outcomes: [
      "Reduced experiment setup time by 60%",
      "Enabled collaboration between 50+ researchers",
      "Processed over 10TB of research data"
    ]
  },
  {
    id: "mobile-health-app",
    title: "Health Tracking Mobile App",
    description: "Cross-platform mobile application for health monitoring with AI-powered insights.",
    longDescription: "Developed a React Native application that tracks various health metrics and provides personalized insights using machine learning. The app integrates with wearable devices and provides real-time health monitoring with privacy-first design.",
    technologies: ["React Native", "TypeScript", "Python", "Firebase", "TensorFlow Lite"],
    category: "mobile",
    status: "completed",
    featured: true,
    images: ["/images/project-health-app-1.jpg"],
    demoUrl: "https://health-app-demo.rafafelix.info",
    githubUrl: "https://github.com/rafafelix/health-tracker",
    startDate: "2023-08-01",
    endDate: "2024-02-28",
    outcomes: [
      "10,000+ active users",
      "4.8/5 app store rating",
      "Featured in health tech publications"
    ]
  },
  {
    id: "data-visualization-tool",
    title: "Interactive Data Visualization Tool",
    description: "Web-based tool for creating interactive data visualizations with drag-and-drop interface.",
    longDescription: "Created a powerful web application that allows users to create interactive data visualizations without coding. Features include drag-and-drop interface, real-time collaboration, and export to multiple formats.",
    technologies: ["Next.js", "D3.js", "TypeScript", "PostgreSQL", "WebSocket"],
    category: "web",
    status: "completed",
    featured: true,
    images: ["/images/project-viz-tool-1.jpg"],
    demoUrl: "https://viz-tool-demo.rafafelix.info",
    githubUrl: "https://github.com/rafafelix/data-viz-tool",
    startDate: "2023-03-01",
    endDate: "2023-12-31",
    outcomes: [
      "Used by 500+ data analysts",
      "Generated 10,000+ visualizations",
      "Featured in data science conferences"
    ]
  },
  {
    id: "blockchain-research",
    title: "Blockchain Consensus Research",
    description: "Research project on improving blockchain consensus mechanisms for better scalability.",
    longDescription: "Conducted academic research on novel consensus mechanisms that improve blockchain scalability while maintaining security. Published findings in top-tier conferences and implemented proof-of-concept.",
    technologies: ["Python", "Solidity", "Rust", "Docker", "AWS"],
    category: "research",
    status: "completed",
    featured: false,
    images: ["/images/project-blockchain-1.jpg"],
    githubUrl: "https://github.com/rafafelix/consensus-research",
    startDate: "2022-09-01",
    endDate: "2023-05-31",
    outcomes: [
      "Published in IEEE Blockchain Conference",
      "50+ citations",
      "Open source implementation"
    ]
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website showcasing projects and professional experience.",
    longDescription: "Designed and developed a modern portfolio website with focus on performance, accessibility, and user experience. Features include project showcase, blog integration, and contact form.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "web",
    status: "in-progress",
    featured: false,
    images: ["/images/project-portfolio-1.jpg"],
    demoUrl: "https://rafafelix.info",
    githubUrl: "https://github.com/rafafelix/portfolio",
    startDate: "2024-12-01",
    outcomes: [
      "Lighthouse score > 95",
      "WCAG 2.1 AA compliant",
      "Mobile-first responsive design"
    ]
  }
];

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Scalable Machine Learning Platforms: A Comprehensive Survey",
    authors: ["Rafael Felix", "Dr. Sarah Johnson", "Prof. Michael Chen"],
    venue: "Journal of Machine Learning Research",
    year: 2024,
    citations: 15,
    url: "https://jmlr.org/papers/v25/24-001.html",
    abstract: "This paper presents a comprehensive survey of scalable machine learning platforms, analyzing their architectures, performance characteristics, and use cases in modern AI research.",
    category: "journal",
    doi: "10.5555/12345678"
  },
  {
    id: "pub-2",
    title: "Novel Consensus Mechanisms for Blockchain Scalability",
    authors: ["Rafael Felix", "Dr. Alex Rodriguez"],
    venue: "IEEE International Conference on Blockchain",
    year: 2023,
    citations: 28,
    url: "https://ieeexplore.ieee.org/document/12345678",
    abstract: "We propose a novel consensus mechanism that significantly improves blockchain scalability while maintaining security guarantees. Our approach reduces transaction confirmation time by 70%.",
    category: "conference",
    doi: "10.1109/ICBC.2023.12345678"
  },
  {
    id: "pub-3",
    title: "Privacy-Preserving Data Analytics in Healthcare",
    authors: ["Dr. Maria Garcia", "Rafael Felix", "Prof. David Kim"],
    venue: "ACM Conference on Health Informatics",
    year: 2023,
    citations: 12,
    url: "https://dl.acm.org/doi/10.1145/12345678",
    abstract: "This work presents a framework for privacy-preserving data analytics in healthcare settings, enabling collaborative research while protecting patient privacy.",
    category: "conference",
    doi: "10.1145/12345678"
  },
  {
    id: "pub-4",
    title: "Real-time Collaborative Data Visualization",
    authors: ["Rafael Felix"],
    venue: "Workshop on Interactive Data Visualization",
    year: 2023,
    citations: 8,
    url: "https://idv-workshop.org/2023/papers/felix.pdf",
    abstract: "We present a system for real-time collaborative data visualization that enables multiple users to work together on complex data analysis tasks.",
    category: "workshop"
  },
  {
    id: "pub-5",
    title: "Edge Computing for IoT Applications: Challenges and Solutions",
    authors: ["Prof. Lisa Wang", "Rafael Felix", "Dr. James Brown"],
    venue: "IEEE Internet of Things Journal",
    year: 2022,
    citations: 45,
    url: "https://ieeexplore.ieee.org/document/98765432",
    abstract: "This paper explores the challenges and solutions in edge computing for IoT applications, providing insights into optimization techniques and deployment strategies.",
    category: "journal",
    doi: "10.1109/JIOT.2022.98765432"
  }
];

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Connect", href: "/connect" },
  { label: "Work", href: "/work" },
  { label: "Research", href: "/research" }
];
