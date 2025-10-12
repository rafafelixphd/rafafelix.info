export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ResearchContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  researchAreas: ResearchArea[];
  publications: {
    title: string;
    description: string;
  };
  timeline: {
    title: string;
    description: string;
  };
  stats: {
    totalPublications: string;
    totalCitations: string;
    hIndex: string;
    venues: string;
  };
}

export const researchContent: ResearchContent = {
  hero: {
    title: "Research & Publications",
    subtitle: "Academic contributions and research work in computer science, machine learning, and software engineering.",
    description: "Academic contributions and research work in computer science, machine learning, and software engineering."
  },
  researchAreas: [
    {
      id: "multimodal-understanding",
      title: "Multimodal Understanding",
      description:
        "Developing models that interpret vision, language, and context together, enabling AI to reason about complex real-world environments.",
      icon: "M12 3v2m6.364 1.636l-1.414 1.414M21 12h-2m-7 7v2m-7.364-3.636l1.414-1.414M4 12H2m9.172-4.828a4 4 0 015.656 5.656L12 20l-6.828-7.172a4 4 0 015.656-5.656z"
    },
    {
      id: "embodied-intelligence",
      title: "Embodied Intelligence",
      description:
        "Applying multimodal learning to robotics, teaching systems to perceive, act, and audit their own behavior in dynamic environments.",
      icon: "M12 2a10 10 0 00-3 19.478V22h6v-.522A10 10 0 0012 2zm0 8a2 2 0 110 4 2 2 0 010-4zm-1 9h2v2h-2v-2z"
    },
    {
      id: "ai-safety-alignment",
      title: "AI Safety & Alignment",
      description:
        "Designing safe and interpretable AI systems that detect, resist, and explain harmful or ambiguous instructions through contextual reasoning and human feedback.",
      icon: "M12 2L2 7v6c0 5.25 3.438 10.063 10 13 6.562-2.938 10-7.75 10-13V7l-10-5zm0 7a3 3 0 110 6 3 3 0 010-6z"
    }
  ],
  publications: {
    title: "Publications",
    description: "Peer-reviewed papers, conference proceedings, and academic contributions"
  },
  timeline: {
    title: "Research Timeline",
    description: "Key milestones and contributions over the years"
  },
  stats: {
    totalPublications: "Total Publications",
    totalCitations: "Total Citations",
    hIndex: "H-index",
    venues: "Venues"
  }
};
