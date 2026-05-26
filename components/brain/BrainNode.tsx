export type BrainCategory =
  | "core"
  | "teaching"
  | "data"
  | "ai"
  | "development"
  | "domain";

export interface BrainNodeData {
  id: string;
  label: string;
  category: BrainCategory;
  description: string;
  x: number;
  y: number;
  color: string;
  skills?: string[];
  projects?: string[];
  courses?: string[];
  missions?: string[];
  topics?: string[];
}

export const brainNodes: BrainNodeData[] = [
  {
    id: "teaching",
    label: "Teaching",
    category: "core",
    description:
      "Students learn by solving realistic data problems rather than watching theory passively.",
    x: 0,
    y: 0,
    color: "#60A5FA",
    courses: [
      "Marketing Analytics",
      "Big Data Healthcare",
      "Introduction to R",
      "Data Visualization",
    ],
    missions: [
      "Start from a concrete business or analytical question.",
      "Build the workflow step by step using practical tools.",
      "Finish with something students can explain and defend.",
    ],
    topics: ["Real projects", "Workflows", "Student outputs"],
  },
  {
    id: "statistics",
    label: "Statistics",
    category: "data",
    description:
      "Can we trust the result? Students learn how to evaluate uncertainty, detect bias and challenge assumptions.",
    x: -250,
    y: -120,
    color: "#34D399",
    skills: ["Hypothesis Testing", "Regression", "Experimental Design", "Biostatistics"],
    missions: [
      "Interpret uncertainty correctly.",
      "Evaluate evidence critically.",
      "Avoid common analytical mistakes.",
    ],
    topics: ["Bias", "Confidence Intervals", "Evidence"],
  },
  {
    id: "data-science",
    label: "Data Science",
    category: "data",
    description:
      "Before dashboards come questions. Students learn how to structure messy data and turn it into actionable decisions.",
    x: -250,
    y: 120,
    color: "#34D399",
    skills: ["EDA", "Feature Engineering", "Visualization", "Storytelling"],
    missions: [
      "Define useful KPIs.",
      "Explore business opportunities.",
      "Support recommendations with evidence.",
    ],
    topics: ["Decision Support", "KPIs", "Business Analytics"],
  },
  {
    id: "ai",
    label: "Artificial Intelligence",
    category: "ai",
    description:
      "Using AI professionally. Students learn how modern AI systems work and how to integrate them into real workflows.",
    x: 250,
    y: -120,
    color: "#A78BFA",
    skills: ["Prompt Engineering", "RAG", "LLMs", "AI Evaluation"],
    missions: [
      "Design prompts and assistants.",
      "Evaluate outputs critically.",
      "Build reliable AI-supported workflows.",
    ],
    topics: ["Prompt Design", "RAG", "AI Evaluation"],
  },
  {
    id: "development",
    label: "Development",
    category: "development",
    description:
      "Building production-ready web applications and AI products.",
    x: 250,
    y: 120,
    color: "#F472B6",
    skills: ["Next.js", "FastAPI", "TypeScript", "Python"],
    missions: [
      "Develop maintainable and scalable code.",
      "Integrate APIs and AI systems.",
      "Deliver functional prototypes.",
    ],
    topics: ["Web apps", "API integration", "Full-stack development"],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    category: "domain",
    description:
      "Analysis has no value if nobody understands it. Students learn how to transform insights into decisions.",
    x: 0,
    y: 260,
    color: "#FBBF24",
    skills: ["Clinical Research", "Biostatistics", "Bioinformatics"],
    missions: [
      "Structure analytical narratives.",
      "Present recommendations clearly.",
      "Adapt communication to stakeholders.",
    ],
    topics: ["Storytelling", "Reporting", "Decision Making"],
  },
];