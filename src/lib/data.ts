import { ProfileData, SocialLink, Publication } from '@/models/types';
import { FloatingCardData } from '@/components/ui/FloatingCard';
import { getProjects } from './projects';

// Site-wide constants
export const siteConfig = {
  name: "Rafael Felix",
  title: "Research Scientist",
  tagline: "Multimodal Safety in Robotics",
  domain: "rafafelix.info",
  email: "contact@rafafelix.info",
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
    "Multimodal Machine Learning for Safety and robotic applications and VLA",
    "Human-in-the-loop learning that ensures responsible feedback loops between model and society",
    "Gen AI for data augmentation for Embodied environment",
    "Efficient model deployment that balances latency, accuracy, and cost at planetary scale"
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

// Export projects from separate file
// Note: This will be empty on client-side until projects are loaded
export const projects = getProjects();

export const floatingCards: FloatingCardData[] = [
  {
    id: 'phd-achievement',
    image: '/images/album/complete-phd-2.jpg',
    alt: 'PhD Completion',
    title: 'PhD Achievement',
    description: 'Celebrating doctoral research achievement in computer science and AI.',
  },
  {
    id: 'acrv-research',
    image: '/images/album/acrv_image_2018.png',
    alt: 'ACRV Research',
    title: 'ACRV Research',
    description: 'Advanced computer vision and robotics research at Australian Centre for Robotic Vision.',
  },
  {
    id: 'ai-innovation',
    image: '/images/album/amplified-intelligence-open-camera-demo.jpg',
    alt: 'AI Demo',
    title: 'AI Innovation',
    description: 'Demonstrating advanced AI systems and computer vision applications.',
  },
  {
    id: 'robotics-innovation',
    image: '/images/album/vex-meeting-dog-bot.jpg',
    alt: 'Robotics Innovation',
    title: 'Robotics Innovation',
    description: 'Exploring robotics solutions and human-robot interaction.',
  },
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
