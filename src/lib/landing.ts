export interface Collaboration {
  id: string;
  name: string;
  type: "affiliation" | "collaboration" | "client";
  logo?: string;
  description?: string;
  url?: string;
}

export interface LandingData {
  hero: HeroSection;
  about: AboutSection;
  promise: PromiseSection;
  services: ServiceCard[];
  results: ResultsSection;
  timeline: TimelineStep[];
  workshops: WorkshopModule[];
  testimonials: Testimonial[];
  cta: CTASection;
  images: ImageAssets;
  collaborations: Collaboration[];
}

export interface ImageAssets {
  placeholder: string;
}

export interface HeroSection {
  headline: string;
  subheading: string;
  proof: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface AboutSection {
  headline: string;
  bio: string;
  facts: Array<{
    icon: string;
    text: string;
  }>;
}

export interface PromiseSection {
  headline: string;
  description: string;
  questions: string[];
  process: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  outcome: string;
  ctaText: string;
}

export interface ResultsSection {
  tagline: string;
  metrics: Array<{
    icon: string;
    value: string;
    label: string;
  }>;
}

export interface TimelineStep {
  id: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface WorkshopModule {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface CTASection {
  headline: string;
  subheading: string;
  ctaText: string;
  footer: string;
}

export const landingContent: LandingData = {
  images: {
    placeholder: "/images/landing/placeholder.1.webp"
  },
  collaborations: [
    // Research & Academic Affiliations
    { id: "aiml", name: "Australian Institute for Machine Learning", type: "affiliation", logo: "/images/icons/aiml.jpg" },
    { id: "adelaide", name: "University of Adelaide", type: "affiliation", logo: "/images/icons/university-pf-adelaide.png" },
    { id: "acrv", name: "Australian Centre for Robotic Vision", type: "affiliation", logo: "/images/icons/acrv.png" },
    { id: "mackenzie", name: "Mackenzie University", type: "affiliation", logo: "/images/icons/mackenzie.png" },
    { id: "vex-robotics", name: "VEX Robotics", type: "affiliation", logo: "/images/icons/vex-robotics.png" },
    // Industry Collaborations & Clients
    { id: "tiktok", name: "TikTok", type: "collaboration", logo: "/images/icons/tiktok.png" },
    { id: "amplified-intelligence", name: "Amplified Intelligence", type: "collaboration", logo: "/images/icons/amplified-intelligence.png" },
    { id: "north-of-zero", name: "North of Zero", type: "collaboration", logo: "/images/icons/north_of_zero_logo.jpeg" },
    { id: "lenovo", name: "Lenovo", type: "client", logo: "/images/icons/lenovo.svg" },
    { id: "motorola", name: "Motorola", type: "client", logo: "/images/icons/motorola.png" },
    { id: "sincronica", name: "Sincronica", type: "client", logo: "/images/icons/sincronica.png" },
    { id: "autoownit", name: "Autoownit", type: "client", logo: "/images/icons/autoownit.png" },
    { id: "autoshare", name: "Autoshare", type: "client", logo: "/images/icons/autoshare.png" },
    { id: "trellis", name: "Trellis", type: "client", logo: "/images/icons/trellis.svg" },
    { id: "dstg", name: "DSTG (Australian Defence)", type: "collaboration", logo: "/images/icons/dstg.png" }
  ],
  hero: {
    headline: "Build Useful, Safe AI That Pays for Itself.",
    subheading:
      "I help founders, researchers, and organizations turn ambitious AI ideas into systems that actually work — fast, ethical, and scalable.",
    proof:
      "Trusted by leaders from TikTok, Motorola, Lenovo, and the University of Adelaide, delivering impact from billion-scale deployments to lean startup pilots.",
    ctaPrimary: "Book a Free Fit Call",
    ctaSecondary: "Explore Services"
  },
  about: {
    headline: "More than a decade turning research into real-world AI",
    bio:
      "I’ve spent over ten years bridging research and industry — scaling multimodal systems that safeguard over a billion users, mentoring teams, and helping startups go from concept to product-market fit. My mission is simple: make AI that works in practice, not just in theory.",
    facts: [
      { icon: "⚙️", text: "Deployed Systems Serving 1B+ Daily Users" },
      { icon: "🧠", text: "10+ Years in AI, Robotics & Multimodal Learning" },
      { icon: "🧩", text: "Mentor & Advisor to 60+ Founders and Researchers" }
    ]
  },
  promise: {
    headline: "Why I Collaborate Differently",
    description:
      "True innovation doesn’t happen through handoffs — it happens through collaboration. I partner with founders and teams to explore bold ideas, test assumptions, and turn uncertainty into structure. Each collaboration blends scientific rigor with creative problem-solving and mutual learning.",
    questions: [
      "Can we design this responsibly?",
      "Can we scale it sustainably?",
      "Can we make it meaningful for users?"
    ],
    process:
      "Our work moves from shared discovery → aligned experimentation → reliable delivery — with transparency, trust, and measurable impact at every stage."
  },
  services: [
    {
      id: "feasibility-sprint",
      title: "AI Feasibility Sprint",
      duration: "2 Days · Remote or On-site",
      description:
        "For founders with a big AI vision but unclear execution. We turn ambiguity into a concrete, buildable roadmap.",
      deliverables: [
        "Feasibility grid with build vs buy analysis",
        "Trimmed MVP specification",
        "ROI and risk model",
        "Hiring or vendor plan",
        "Starter safety checklist"
      ],
      outcome:
        "A go/no-go decision within one week — with a validated backlog and clear next steps.",
      ctaText: "Run My Sprint"
    },
    {
      id: "safety-audit",
      title: "Trust & Safety Audit",
      duration: "2 Weeks · Light-touch Review",
      description:
        "For teams close to launch who want confidence that their AI is compliant, fair, and resilient before scaling.",
      deliverables: [
        "Risk and compliance map",
        "Policy and accountability matrix",
        "Red-team prompt suite",
        "Incident escalation playbook",
        "Final safety readiness checklist"
      ],
      outcome:
        "Launch with confidence — documented guardrails, mitigation strategy, and peace of mind.",
      ctaText: "Request Audit"
    },
    {
      id: "founder-coach",
      title: "Founder AI Coach",
      duration: "Monthly Retainer · 2 Calls + Async Support",
      description:
        "For founders navigating AI strategy, product decisions, or vendor chaos — get a clear technical sounding board and roadmap alignment.",
      deliverables: [
        "Decision memos and prioritization frameworks",
        "Quarterly roadmap reviews",
        "Vendor and tooling shortlists",
        "Tailored guidance on build, scale, and safety"
      ],
      outcome:
        "Faster, safer decisions with fewer false starts — and a strategy you can defend to investors and your team.",
      ctaText: "Apply for Coaching"
    }
  ],
  results: {
    tagline:
      "Real-world impact — from billion-scale AI systems to startup product launches worldwide.",
    metrics: [
      {
        icon: "🌍",
        value: "1B+",
        label: "Users served daily through deployed AI platforms"
      },
      {
        icon: "💾",
        value: ">2PB",
        label: "Data processed in real time across global production systems"
      },
      {
        icon: "🏢",
        value: "10+",
        label: "Companies transformed through applied multimodal AI research"
      },
      {
        icon: "🚀",
        value: "25+",
        label: "Startups and enterprise teams guided from prototype to full product lifecycle"
      },
      {
        icon: "🧭",
        value: "Global",
        label: "Led AI roadmaps, compliance, and research-to-market strategy across regions"
      }
    ]
  },
  timeline: [
    {
      id: "lean-prototype",
      title: "Prototype",
      duration: "1–2 Weeks",
      description:
        "Start lean. Validate your idea fast using low-code tools and hosted AI models — no heavy engineering required.",
      deliverables: [
        "Rapid proof of concept",
        "Core user flow mapped and tested",
        "Basic prompt and response evaluation",
        "Clear next-step recommendations"
      ]
    },
    {
      id: "core-mvp",
      title: "Core MVP",
      duration: "4–6 Weeks",
      description:
        "Build your first working product using reliable, off-the-shelf AI systems. Test real behaviour with real users.",
      deliverables: [
        "Functional MVP with basic AI behaviour",
        "Integrations with your existing tools or APIs",
        "Performance and reliability metrics",
        "User feedback loop for early learning"
      ]
    },
    {
      id: "specialized-mvp",
      title: "The MVP",
      duration: "6–10 Weeks",
      description:
        "Specialize your AI by adapting existing models to your domain. Create clear differentiation and measurable ROI.",
      deliverables: [
        "Domain-tuned AI components",
        "Advanced evaluation and safety checks",
        "Custom dashboards or retrieval pipelines",
        "Production-ready deployment plan"
      ]
    },
    {
      id: "beast-mvp",
      title: "Beast MVP",
      duration: "3+ Months",
      description:
        "Scale the vision. Coordinate the full product lifecycle — from data pipelines and compliance to continuous improvement.",
      deliverables: [
        "End-to-end lifecycle strategy and documentation",
        "Cross-team roadmap and compliance workflows",
        "Monitoring and iteration infrastructure",
        "Post-launch governance and performance review"
      ]
    }
  ],
  workshops: [
    {
      id: "ai-pitfalls",
      title: "AI Pitfalls to Avoid",
      description:
        "The most common design, data, and deployment mistakes that derail AI projects — and how to avoid them."
    },
    {
      id: "research-to-mvp",
      title: "From Research to MVP",
      description:
        "A clear playbook for translating academic ideas into working, monetizable products."
    },
    {
      id: "build-vs-buy",
      title: "Build vs Buy Decisions",
      description:
        "A decision framework to evaluate whether to develop in-house or leverage existing AI solutions."
    },
    {
      id: "hidden-costs",
      title: "Hidden Costs & How to Budget",
      description:
        "Understand compute, data, and human-in-the-loop costs — and how to build sustainable AI economics."
    }
  ],
  
  testimonials: [
    {
      id: "john-smith",
      quote:
        "Rafa’s mentorship reshaped how our team approached AI production — a rare mix of technical depth and business clarity.",
      author: "Dr. John Smith",
      role: "University of Adelaide"
    },
    {
      id: "ai-startup-ceo",
      quote:
        "His roadmap clarity helped us go from concept to live prototype in just six weeks — with confidence and precision.",
      author: "CEO",
      role: "AI Startup Client"
    },
    {
      id: "autoownit-partner",
      quote:
        "Rafa brings clarity to chaos — exactly what early-stage founders need to scale AI safely and effectively.",
      author: "Founding Partner",
      role: "Autoownit"
    }
  ],

  cta: {
    headline: "Ready to Build AI That Delivers Real Results?",
    subheading:
      "Let’s find the fastest, safest path from idea to impact — and create something that scales responsibly.",
    ctaText: "Book a Free Fit Call",
    footer: "Advising globally · Remote or On-site"
  }
};