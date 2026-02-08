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
  images: string[];
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
    headline: "Senior Fractional AI/ML Technical Lead",
    subheading:
      "Bridging the gap between 'broken' R&D prototypes and commercially viable perception assets. Prevent expensive rework and compress delivery timelines.",
    proof:
      "Trusted by leaders from TikTok, Motorola, Lenovo, and the University of Adelaide, delivering impact from billion-scale deployments to lean startup pilots.",
    ctaPrimary: "Book a Discovery Call",
    ctaSecondary: "View Service Tiers"
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
      id: "tier-1-pulse",
      title: "Tier I: Strategic Pulse",
      duration: "Bi-weekly oversight · Monthly Retainer",
      description:
        "Prevent wrong decisions. High-level review of roadmap directions to prevent long-term technical debt and ensure feasibility.",
      deliverables: [
        "Architecture & roadmap review",
        "Written feedback on sprint plans",
        "Bounded async Q&A window",
        "Early risk flags on CV/ML feasibility",
        "Monthly leadership sync"
      ],
      outcome:
        "Reduced execution risk and fewer wasted cycles.",
      ctaText: "Enquire for Tier I"
    },
    {
      id: "tier-2-logic",
      title: "Tier II: Architecture Logic",
      duration: "Weekly design cycles · Monthly Retainer",
      description:
        "Make the team effective. Providing blueprints for scalable MLOps and latest AI/ML techniques. Objective verification of engineering work.",
      deliverables: [
        "Architectural design leadership",
        "Sprint direction & validation",
        "Selective high-impact code reviews",
        "Design docs & technical decision-making",
        "Bi-weekly leadership syncs"
      ],
      outcome:
        "Clarity, velocity, and reduced rework.",
      ctaText: "Enquire for Tier II"
    },
    {
      id: "tier-3-orchestration",
      title: "Tier III: Technical Orchestration",
      duration: "Daily tactical engagement · Monthly Retainer",
      description:
        "Drive outcomes. Architecting the technical strategy and end-to-end AI/ML roadmap to drive commercial value.",
      deliverables: [
        "End-to-end technical leadership",
        "Task planning & prioritization",
        "Deep code reviews & PR contributions",
        "Production-readiness enforcement",
        "Active technical course correction"
      ],
      outcome:
        "Delivery and risk transfer. Faster execution.",
      ctaText: "Enquire for Tier III"
    },
    {
      id: "tier-4-mvp",
      title: "The MVP (Tier IV)",
      duration: "3-month contract minimum",
      description:
        "Outcome-based production managed by a specialized external unit. Full-cycle production and delivery of perception modules.",
      deliverables: [
        "End-to-end delivery of perception modules",
        "Vetted engineering squad",
        "Full SDLC management",
        "R&D to Deployment ownership"
      ],
      outcome:
        "Launch with confidence. A production-grade asset ready for market.",
      ctaText: "Discuss MVP Build"
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
      id: "engage",
      title: "Engagement",
      duration: "Week 1",
      images: ["/images/landing/mvp_1.1.webp"],
      description:
        "We align on the tier that fits your needs. Whether it's strategic oversight or full orchestration, we set the ground rules and communication channels.",
      deliverables: [
        "Contract & IP agreement",
        "Access to repositories & tools",
        "Initial roadmap review",
        "Communication cadence setup"
      ]
    },
    {
      id: "audit-plan",
      title: "Audit & Plan",
      duration: "Weeks 2-4",
      images: ["/images/landing/mvp_2.3.webp"],
      description:
        "I dive into your architecture, code, and team dynamics. We identify bottlenecks, technical debt, and immediate risks.",
      deliverables: [
        "Architectural audit report",
        "Risk mitigation plan",
        "Refined technical roadmap",
        "Immediate 'quick wins' identification"
      ]
    },
    {
      id: "execute",
      title: "Execution & Oversight",
      duration: "Ongoing",
      images: ["/images/landing/mvp_3.2.webp"],
      description:
        "I work alongside your team (or as the lead) to execute the roadmap. Regular syncs, code reviews, and strategic adjustments ensure we stay on track.",
      deliverables: [
        "Regular code & design reviews",
        "Sprint planning & retrospective participation",
        "Problem-solving & unblocking",
        "Continuous alignment with business goals"
      ]
    },
    {
      id: "delivery",
      title: "Delivery & Transfer",
      duration: "Milestone-based",
      images: ["/images/landing/mvp_4.1.webp"],
      description:
        "Ensuring the delivered systems are production-ready, documented, and maintainable. Knowledge transfer to your internal team.",
      deliverables: [
        "Production-ready code delivery",
        "System documentation",
        "Team training & knowledge transfer",
        "Post-delivery support plan"
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