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
}

export const brainNodes: BrainNodeData[] = [
  {
    id: "teaching",
    label: "Teaching",
    category: "core",

    description:
      "University lecturer focused on data literacy, analytics and AI.",

    x: 0,
    y: 0,

    color: "#60A5FA",

    courses: [
      "Marketing Analytics",
      "Big Data Healthcare",
      "Introduction to R",
      "Data Visualization",
    ],
  },

  {
    id: "statistics",
    label: "Statistics",
    category: "data",

    description:
      "Experimental design, hypothesis testing, statistical modelling and inference.",

    x: -250,
    y: -120,

    color: "#34D399",

    skills: [
      "Hypothesis Testing",
      "Regression",
      "Experimental Design",
      "Biostatistics",
    ],
  },

  {
    id: "data-science",
    label: "Data Science",
    category: "data",

    description:
      "Data cleaning, exploration, modelling and communication.",

    x: -250,
    y: 120,

    color: "#34D399",

    skills: [
      "EDA",
      "Feature Engineering",
      "Visualization",
      "Storytelling",
    ],
  },

  {
    id: "ai",
    label: "Artificial Intelligence",
    category: "ai",

    description:
      "Generative AI, prompt engineering, RAG systems and evaluation.",

    x: 250,
    y: -120,

    color: "#A78BFA",

    skills: [
      "Prompt Engineering",
      "RAG",
      "LLMs",
      "AI Evaluation",
    ],
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

    skills: [
      "Next.js",
      "FastAPI",
      "TypeScript",
      "Python",
    ],
  },

  {
    id: "healthcare",
    label: "Healthcare",
    category: "domain",

    description:
      "Pharmaceutical industry, bioinformatics and health analytics.",

    x: 0,
    y: 260,

    color: "#FBBF24",

    skills: [
      "Clinical Research",
      "Biostatistics",
      "Bioinformatics",
    ],
  },
];