import { Project } from '@/models/types';

export const projects: Project[] = [
  {
    id: "age-across-multiple-frames",
    title: "Age Across Multiple Frames",
    description: "Reduced moderation inconsistency by stabilizing age estimation across billions of short videos, improving benchmark accuracy by +12%.",
    longDescription: "This project focused on achieving temporal stability in age estimation for video moderation at global scale. By integrating temporal reasoning into Vision Transformers and deploying optimized inference pipelines, the system ensured consistent, fair, and compliant decisions across over one billion short-form videos daily.",
    technologies: ["Python", "PyTorch", "CUDA", "TensorRT", "ONNX", "RPC", "Vision Transformers"],
    status: "completed",
    featured: true,
    images: ["/images/illustration.jpg"],
    demoUrl: "",
    githubUrl: "",
    startDate: "2023-01-01",
    endDate: "2024-06-30",
    outcomes: [
      "Improved benchmark accuracy by +12%",
      "Stabilized age predictions across billions of video frames",
      "Achieved p99 < 2s latency at 11K QPS",
      "Enabled compliant moderation for 1B+ daily videos",
      "Defined new internal standard for temporal consistency in safety models"
    ],
    challenge: "The Challenge: Frame-by-frame age estimations fluctuated drastically, producing 'age jittering' that led to inconsistent safety enforcement across billions of videos. Ensuring temporal consistency was critical to fairness, compliance, and trust in large-scale moderation pipelines.",
    solution: "The Solution: Introduced temporal embeddings into Vision Transformer architectures to reason across consecutive frames, trained on a 100K+ individual dataset expanding by 5K weekly. Deployed via RPC-based inference optimized with CUDA, TensorRT, and ONNX quantization to maintain p99 latency under 2 seconds at 11K QPS. This design balanced temporal accuracy with real-time responsiveness.",
    results: "The Results: Improved benchmark accuracy by +12%, stabilized predictions for over 1 billion daily videos, and reduced moderation inconsistency worldwide. The approach established a new internal standard for ethical, temporally consistent computer-vision safety models.",
    technicalHighlights: [
      "Integrated temporal embeddings into Vision Transformer (ViT) models for frame-level consistency",
      "Built and maintained a 100K+ individual dataset expanding 5K weekly to combat drift",
      "Achieved p99 < 2s latency at 11K QPS via RPC-based inference pipelines",
      "Optimized model deployment using CUDA kernels, TensorRT, and ONNX quantization",
      "Implemented compliance-aware data workflows aligned with regional safety standards"
    ]
  }
];
