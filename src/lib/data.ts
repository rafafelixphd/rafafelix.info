import { ProfileData, SocialLink } from '@/models/types';
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
  twitter: "@rafafelixphd",
  linkedin: "rafafelixphd",
  github: "rfelixmg",
  googleScholar: "nijDcmQAAAAJ",
  instagram: "rafafelix.phd",
};

export const profileData: ProfileData = {
  name: siteConfig.name,
  title: siteConfig.title,
  bio: "Rafael Felix, Ph.D. is a Research Scientist specializing in AI and Robotics, with a focus on multimodal learning, embodied intelligence, and safety-critical systems. His work bridges academic research and real-world impact, designing AI technologies that perceive, reason, and act responsibly in complex environments.\n\nRafael has led initiatives that translate advanced machine learning research into production-scale AI pipelines serving over one billion daily users with p99 latency under two seconds, a rare blend of scientific rigor and engineering scalability.\n\nHis previous research contributions span gaze estimation, zero-shot learning, and vision-language models, with publications at ICCV, ECCV, and WACV.\n\nToday, his research explores safe, context-aware robotics, where AI systems are capable of understanding not just what they see, but why they act. Through this work, Rafael aims to push the frontier of trustworthy, embodied AI that meaningfully interacts with the physical world.",
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
      category: "Machine Learning",
      items: ["Transformers", "Diffusion", "GANs", "ViTs", "Robotics", "Zero-Shot Learning"]
    },
    {
      category: "Applied Research",
      items: ["Real-time scalability", "Dataset Collection", "RLHF", "Product Lifecycle"]
    },
    {
      category: "Leadership & Mentorship",
      items: ["Cross-team alignment", "Research Roadmap", "Training and documentation"]
    },
    {
      category: "Engineering & Deployment",
      items: ["PyTorch", "TensorFlow", "CUDA", "TensorRT", "ONNX", "Docker", "Kubernetes", "C++", "Spark", "SQL"]
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

// Import publications from JSON file
import publicationsData from '../../public/data/publications.json';
import { Publication } from '@/models/types';

// Convert JSON data to Publication interface
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const publications: Publication[] = publicationsData.map((pub: any) => ({
  id: pub.id,
  title: pub.title,
  authors: pub.authors,
  venue: pub.venue,
  year: pub.year || 0,
  citations: pub.citations || 0,
  url: pub.url,
  abstract: pub.abstract,
  category: pub.category as 'journal' | 'conference' | 'workshop' | 'preprint' | 'book',
  doi: pub.doi
}));

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Connect", href: "/connect" },
  { label: "Work", href: "/work" },
  { label: "Research", href: "/research" }
];
