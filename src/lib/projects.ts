import { Project } from '@/models/types';

export const projects: Project[] = [
  {
    id: "age-across-multiple-frames",
    title: "Age Across Multiple Frames",
    description:
      "Stabilized age estimation across billions of short videos, improving temporal consistency by +12% and enabling fair, real-time moderation at global scale.",
    longDescription:
      "This project addressed the challenge of temporal instability in age estimation models used in large-scale video understanding systems. By embedding temporal reasoning into Vision Transformer architectures and deploying optimized inference pipelines, the system achieved smooth, consistent, and fair results across more than a billion short-form video streams daily. The work redefined temporal consistency as a core pillar of trust and compliance in multimodal AI.",
    technologies: [
      "Python",
      "PyTorch",
      "CUDA",
      "TensorRT",
      "ONNX",
      "RPC",
      "Vision Transformers"
    ],
    status: "completed",
    featured: true,
    images: ["/images/illustration.jpg"],
    demoUrl: "",
    githubUrl: "",
    startDate: "2023-01-01",
    endDate: "2024-06-30",
    outcomes: [
      "Improved temporal accuracy by +12% across benchmark datasets",
      "Stabilized predictions over billions of video frames",
      "Achieved p99 < 2s latency at 11K QPS in live inference",
      "Enabled consistent and compliant moderation worldwide",
      "Set a new benchmark for temporal reasoning in computer-vision models"
    ],
    challenge:
      "Traditional age-estimation models process frames independently, causing ‘age jittering’ that leads to inconsistent results across video sequences. Maintaining temporal stability was essential for both fairness and compliance in global, real-time safety applications.",
    solution:
      "Introduced temporal embeddings into Vision Transformer (ViT) models, enabling the network to reason across consecutive frames. Trained on a dataset exceeding 100K individuals, expanding by 5K per week, and deployed through an RPC-based inference pipeline optimized with CUDA, TensorRT, and ONNX quantization to sustain p99 latency under 2 seconds at 11K QPS. The system balanced accuracy, speed, and compliance at planetary scale.",
    results:
      "Delivered +12% accuracy improvement and consistent predictions across billions of short-form videos. The solution became a reference for temporal reasoning in multimodal AI, proving that stability can scale without sacrificing performance or latency.",
    technicalHighlights: [
      "Embedded temporal reasoning in Vision Transformer architectures for cross-frame consistency",
      "Curated and expanded a 100K+ individual dataset to mitigate model and data drift",
      "Achieved p99 < 2s latency at 11K QPS with CUDA, TensorRT, and ONNX optimization",
      "Implemented scalable RPC-based inference pipelines for global deployment",
      "Aligned model training and deployment with international fairness and compliance standards"
    ]
  }
];