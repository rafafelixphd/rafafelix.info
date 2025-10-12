# Copywriter Field Guide: Project Data Structure

## Overview
This guide explains what content is expected for each field in the Project data structure. Use this as a reference when creating content for Rafael Felix's work portfolio.

## Required Fields

### `id: string`
- **Purpose:** Unique identifier for the project
- **Format:** kebab-case (e.g., "age-across-multiple-frames")
- **Example:** "computer-vision-research", "mobile-app-development"
- **Note:** Used in URLs, must be unique across all projects

### `title: string`
- **Purpose:** Project name/title
- **Format:** Title case, descriptive
- **Example:** "Age Across Multiple Frames", "Real-time Object Detection"
- **Note:** Should be clear and professional

### `description: string`
- **Purpose:** Short project summary
- **Length:** 1-2 sentences
- **Focus:** Key achievement and impact
- **Example:** "Reduced moderation inconsistency by stabilizing age estimation across billions of short videos, improving benchmark accuracy by +12%"

### `longDescription?: string`
- **Purpose:** Detailed project description
- **Length:** 2-3 paragraphs
- **Focus:** Technical details, methodology, context
- **Note:** Optional field, used for detailed project pages

## New Content Fields (from copywriter)

### `challenge?: string`
- **Purpose:** The problem that needed solving
- **Length:** 40-60 words
- **Format:** "The Challenge: [Problem statement]. [Why it was critical]. [Scale/impact context]."
- **Focus:** Specific challenge, why it mattered, scale/impact

### `solution?: string`
- **Purpose:** The approach and methodology used
- **Length:** 60-80 words
- **Format:** "The Solution: [Approach overview]. [Key innovation/method]. [Technical implementation]. [Why this approach was chosen]."
- **Focus:** How the problem was solved, innovative approach, key methods

### `results?: string`
- **Purpose:** Achievements and impact metrics
- **Length:** 40-60 words
- **Format:** "The Results: [Key achievement]. [Quantifiable impact]. [Real-world significance]."
- **Focus:** What was achieved, key metrics, real-world impact

### `technicalHighlights?: string[]`
- **Purpose:** Technical details for technical audiences
- **Format:** Array of 5 strings
- **Length:** 15-25 words per bullet point
- **Focus:** Specific technologies, methods, innovations

## Existing Fields

### `technologies: string[]`
- **Purpose:** Technologies used in the project
- **Format:** Array of technology names
- **Example:** ["Python", "PyTorch", "CUDA", "ONNX", "TensorRT"]
- **Note:** Use standard technology names

### `category: 'web' | 'research' | 'mobile' | 'other'`
- **Purpose:** Project category
- **Options:** web, research, mobile, other
- **Note:** Determines project filtering and display

### `status: 'completed' | 'in-progress' | 'planned'`
- **Purpose:** Project status
- **Options:** completed, in-progress, planned
- **Note:** Affects visual indicators and filtering

### `featured: boolean`
- **Purpose:** Whether to highlight this project
- **Values:** true, false
- **Note:** Featured projects get special treatment in UI

### `images: string[]`
- **Purpose:** Project images
- **Format:** Array of image paths
- **Example:** ["/images/project-hero.jpg", "/images/project-detail.jpg"]
- **Note:** First image used as hero image

### `demoUrl?: string`
- **Purpose:** Link to live demo
- **Format:** Full URL
- **Example:** "https://demo.example.com"
- **Note:** Optional field

### `githubUrl?: string`
- **Purpose:** Link to source code
- **Format:** Full URL
- **Example:** "https://github.com/username/repo"
- **Note:** Optional field

### `startDate: string`
- **Purpose:** Project start date
- **Format:** YYYY-MM-DD
- **Example:** "2023-01-01"
- **Note:** Required field

### `endDate?: string`
- **Purpose:** Project end date
- **Format:** YYYY-MM-DD
- **Example:** "2024-06-30"
- **Note:** Optional field, use for completed projects

### `outcomes?: string[]`
- **Purpose:** Key project outcomes
- **Format:** Array of achievement strings
- **Length:** 15-25 words per outcome
- **Focus:** Quantifiable improvements, scale metrics, technical achievements
- **Example:** ["Improved benchmark accuracy by +12%", "Achieved p99 < 2s latency"]

## Content Guidelines

### Tone & Style
- Professional and technical
- Clear and concise
- Focus on impact and innovation
- Suitable for both technical and business audiences
- Emphasize scale and real-world impact

### Key Messages to Convey
- Technical expertise and innovation
- Real-world impact and business value
- Scale and complexity of challenges solved
- Professional achievements and recognition
- Practical applications of research

### Avoid
- Overly technical jargon without context
- Vague statements without metrics
- Long paragraphs without clear structure
- Generic descriptions without specific details
- Academic-only language (make it accessible)

## Project-Specific Requirements

### For AI Development Projects
- Emphasize technical innovation and methodology
- Include specific metrics and benchmarks
- Highlight model performance and accuracy improvements
- Focus on practical applications and real-world deployment
- Mention collaboration or team work

### For Dataset Development Projects
- Highlight dataset quality and size metrics
- Include data collection and curation processes
- Mention scalability and diversity considerations
- Focus on research impact and usage
- Include data augmentation and preprocessing details

### For Hardware + Software Development Projects
- Emphasize system integration and performance
- Include hardware specifications and software optimizations
- Highlight scalability and efficiency improvements
- Focus on practical applications and deployment
- Mention cross-platform compatibility

### For Data Augmentation Development Projects
- Emphasize augmentation techniques and methodologies
- Include performance improvements and metrics
- Highlight data diversity and quality enhancements
- Focus on practical applications and research impact
- Mention scalability and automation features

## Integration Notes

**Important:** All content will be directly integrated into the website's TypeScript data structure. Ensure:
- No special characters that could break TypeScript syntax
- Proper quotation marks (use double quotes)
- No line breaks within string values
- Consistent formatting across all sections
- All content fits within specified word counts

## Example Project Structure

```typescript
{
  id: "age-across-multiple-frames",
  title: "Age Across Multiple Frames",
  description: "Reduced moderation inconsistency by stabilizing age estimation across billions of short videos, improving benchmark accuracy by +12% and ensuring smooth, fair predictions at p99 < 2s latency across 1B+ daily moderation tasks.",
  longDescription: "Age estimation is one of the most sensitive problems in online safety. A single flicker in model prediction across consecutive frames — known as age jittering — can mean the difference between correct moderation and a policy error at scale...",
  technologies: ["Python", "PyTorch", "CUDA", "ONNX", "TensorRT", "Vision Transformers", "RPC"],
  category: "research",
  status: "completed",
  featured: true,
  images: ["/images/illustration.jpg"],
  startDate: "2023-01-01",
  endDate: "2024-06-30",
  outcomes: [
    "Improved benchmark accuracy by +12%",
    "Achieved p99 < 2s latency across 1B+ daily moderation tasks",
    "Deployed RPC-based inference system achieving 11K QPS"
  ],
  challenge: "The Challenge: Age estimation across video frames suffered from inconsistent predictions, known as age jittering. When processing over 1 billion short-form videos daily, these inconsistencies led to policy errors and unfair moderation decisions.",
  solution: "The Solution: We developed a temporal reasoning approach that treats video frames as a continuous sequence rather than independent images. By integrating frame-level temporal embeddings into Vision Transformer architectures, the model learned to infer temporal continuity and identity consistency.",
  results: "The Results: The temporal reasoning model achieved a 12% improvement in benchmark accuracy while maintaining p99 latency under 2 seconds across 1 billion daily moderation tasks. The RPC-based inference system successfully scaled to 11K QPS.",
  technicalHighlights: [
    "Vision Transformer architecture enhanced with frame-level temporal embeddings for video sequence understanding",
    "CUDA acceleration combined with ONNX quantization enabled efficient production deployment",
    "TensorRT optimizations achieved real-time inference performance at scale",
    "RPC-based inference architecture supported 11K QPS with consistent latency",
    "Temporal continuity learning replaced independent frame processing with sequence-aware predictions"
  ]
}
```
