import { ProfileData, SocialLink, Project, Publication } from '@/models/types';

// Site-wide constants
export const siteConfig = {
  name: "Rafael Felix",
  title: "Research Scientist",
  tagline: "Multimodal Safety in Robotics",
  domain: "rafafelix.info",
  email: "contact@rafafelix.info",
  location: "San Francisco, CA",
  description: "Personal website of Rafael Felix, Ph.D., Research Scientist specializing in multimodal AI for Trust & Safety and Robotics.",
  keywords: ["Rafael Felix", "Research Scientist", "AI", "Machine Learning", "Multimodal AI", "Robotics", "Trust & Safety"],
  author: "Rafael Felix",
  creator: "Rafael Felix",
  twitter: "@rafafelix",
  linkedin: "in/rafafelixphd",
  github: "rfelixmg",
  googleScholar: "nijDcmQAAAAJ",
  instagram: "rafafelix.phd",
};

export const profileData: ProfileData = {
  name: siteConfig.name,
  title: siteConfig.title,
  bio: "Rafael Felix, Ph.D., is a Research Scientist specializing in multimodal AI for Trust & Safety and Robotics. His work bridges academic rigor and large-scale deployment, shaping AI systems that protect and empower billions of users worldwide. Across industry and research, Rafael has led projects that transform state-of-the-art models into production pipelines serving 1B+ daily users with p99 latency under 2 seconds, a rare balance of scientific precision and real-world scalability.\n\nBefore TikTok, his research advanced gaze estimation, zero-shot learning, and vision-language systems, earning publications at top venues such as ICCV, ECCV, and WACV. With experience spanning academia and high-impact startups, he has cultivated a leadership style rooted in mentorship, technical excellence, and organizational alignment, helping teams deliver research that matters.\n\nDriven by curiosity and responsibility, Rafael's current focus explores safe, context-aware AI that can reason across text, vision, and motion, pushing the frontier of how intelligent systems perceive and interact with the world.",
  location: siteConfig.location,
  email: siteConfig.email,
  phone: "+1 (555) 123-4567",
  profileImage: "/images/profile.png",
  resumeUrl: "/documents/resume.pdf",
  linkedinUrl: `https://www.linkedin.com/in/${siteConfig.linkedin}`,
  githubUrl: `https://github.com/${siteConfig.github}`,
  twitterUrl: `https://x.com/${siteConfig.twitter.replace('@', '')}`,
  googleScholarUrl: `https://scholar.google.com.au/citations?hl=en&user=${siteConfig.googleScholar}`,
  instagramUrl: `https://www.instagram.com/${siteConfig.instagram}/`,
  skills: [
    {
      category: "AI & Machine Learning",
      items: ["Transformers", "Diffusion", "GANs", "ViTs", "LLMs (CLIP, LLaVA, LLaMA, Qwen)", "Zero-Shot Learning"]
    },
    {
      category: "Engineering & Deployment",
      items: ["PyTorch", "TensorFlow", "CUDA", "TensorRT", "ONNX", "Docker", "Kubernetes", "C++", "Spark", "SQL"]
    },
    {
      category: "Applied Research",
      items: ["Real-time inference optimization", "model compression", "multimodal understanding", "RLHF"]
    },
    {
      category: "Leadership & Mentorship",
      items: ["Cross-team alignment", "research enablement", "reproducible pipelines", "workshops"]
    },
    {
      category: "Languages",
      items: ["English (native-professional)", "Portuguese (native)", "Spanish (fluent)", "Japanese"]
    }
  ],
  interests: [
    "Safe multimodal understanding for content integrity, robotics, and assistive AI",
    "Efficient model deployment that balances latency, accuracy, and cost at planetary scale",
    "Human-in-the-loop learning that ensures responsible feedback loops between model and society",
    "Foundation models", "real-time robotics", "AI safety"
  ],
  experience: [
    {
      title: "Research Scientist",
      company: "TikTok",
      duration: "2023 - Present",
      description: [
        "Led projects transforming state-of-the-art models into production pipelines serving 1B+ daily users",
        "Achieved p99 latency under 2 seconds for multimodal AI systems",
        "Specialized in multimodal AI for Trust & Safety and Robotics applications",
        "Focused on safe, context-aware AI that reasons across text, vision, and motion"
      ]
    },
    {
      title: "Research Scientist",
      company: "Previous Research Positions",
      duration: "2020 - 2023",
      description: [
        "Advanced research in gaze estimation, zero-shot learning, and vision-language systems",
        "Published at top venues including ICCV, ECCV, and WACV",
        "Bridged academic rigor with large-scale deployment requirements",
        "Cultivated leadership style rooted in mentorship and technical excellence"
      ]
    }
  ],
  education: [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Research University",
      duration: "2016 - 2020",
      description: "Specialized in multimodal AI, computer vision, and machine learning with focus on real-world applications"
    },
    {
      degree: "M.S. in Computer Science",
      institution: "Research University",
      duration: "2014 - 2016",
      description: "Focused on artificial intelligence, machine learning, and computer vision"
    },
    {
      degree: "B.S. in Computer Science",
      institution: "University",
      duration: "2010 - 2014",
      description: "Foundation in computer science, mathematics, and engineering principles"
    }
  ]
};

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: `https://www.linkedin.com/in/${siteConfig.linkedin}`,
    icon: "linkedin",
    label: "Connect on LinkedIn"
  },
  {
    platform: "GitHub",
    url: `https://github.com/${siteConfig.github}`,
    icon: "github",
    label: "View my code on GitHub"
  },
  {
    platform: "X (Twitter)",
    url: `https://x.com/${siteConfig.twitter.replace('@', '')}`,
    icon: "twitter",
    label: "Follow me on X"
  },
  {
    platform: "Google Scholar",
    url: `https://scholar.google.com.au/citations?hl=en&user=${siteConfig.googleScholar}`,
    icon: "scholar",
    label: "View my publications"
  },
  {
    platform: "Instagram",
    url: `https://www.instagram.com/${siteConfig.instagram}/`,
    icon: "instagram",
    label: "Follow me on Instagram"
  },
  {
    platform: "Email",
    url: `mailto:${siteConfig.email}`,
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
