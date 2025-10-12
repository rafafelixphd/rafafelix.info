export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  profileImage: string;
  resumeUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  googleScholarUrl?: string;
  instagramUrl?: string;
  skills: SkillCategory[];
  interests: string[];
  experience?: Experience[];
  education?: Education[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'web' | 'research' | 'mobile' | 'other';
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  startDate: string;
  endDate?: string;
  outcomes?: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  citations?: number;
  url?: string;
  abstract?: string;
  category: 'journal' | 'conference' | 'workshop' | 'preprint' | 'book';
  doi?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}
