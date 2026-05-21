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
    label: "Teaching Architecture",
    category: "core",
    description:
      "Designing learning systems that connect statistical reasoning, data analysis, AI workflows and applied software engineering.",
    x: 0,
    y: 0,
    color: "#F97316",
    skills: [
      "Curriculum Design",
      "Applied Pedagogy",
      "Data Literacy",
      "Technical Mentoring",
    ],
    courses: [
      "Marketing Analytics",
      "Big Data Healthcare",
      "Introduction to R",
      "Data Visualization",
    ],
    missions: [
      "Transform complex technical topics into applied learning experiences.",
      "Build practical workshops based on real datasets and business cases.",
    ],
    topics: [
      "Learning-by-doing",
      "Case-based teaching",
      "Scientific rigor",
      "Project supervision",
    ],
  },
  {
    id: "statistics",
    label: "Statistical Thinking",
    category: "data",
    description:
      "Teaching students how to reason under uncertainty: inference, experimental design, modelling, interpretation and critical thinking.",
    x: -250,
    y: -120,
    color: "#38BDF8",
    skills: [
      "Hypothesis Testing",
      "Regression",
      "Experimental Design",
      "Biostatistics",
    ],
    missions: [
      "Move students from formula application to statistical reasoning.",
      "Explain what results mean, not only how to compute them.",
    ],
    topics: [
      "Inference",
      "Sampling",
      "Bias",
      "Uncertainty",
      "Model interpretation",
    ],
  },
  {
    id: "data-science",
    label: "Data & Analytics",
    category: "data",
    description:
      "Teaching the full analytical workflow: importing, cleaning, exploring, visualizing and communicating data-driven decisions.",
    x: -250,
    y: 120,
    color: "#22C55E",
    skills: [
      "Data Cleaning",
      "EDA",
      "Visualization",
      "Storytelling",
      "KPIs",
    ],
    courses: [
      "Marketing Analytics",
      "Data Visualization",
      "R Programming",
    ],
    missions: [
      "Guide students through messy datasets and real-world analytical constraints.",
      "Use data visualization to support clear business recommendations.",
    ],
    topics: [
      "Data quality",
      "Base 100 indexes",
      "Dashboards",
      "Decision support",
    ],
  },
  {
    id: "ai",
    label: "AI Systems",
    category: "ai",
    description:
      "Teaching modern AI through practical workflows: LLMs, prompt engineering, RAG, evaluation and responsible use.",
    x: 250,
    y: -120,
    color: "#A78BFA",
    skills: [
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "AI Evaluation",
      "Automation",
    ],
    missions: [
      "Help learners understand what generative AI can and cannot do.",
      "Turn AI concepts into usable workflows and product ideas.",
    ],
    topics: [
      "Agents",
      "Retrieval",
      "Hallucinations",
      "Evaluation",
      "Human-in-the-loop",
    ],
  },
  {
    id: "development",
    label: "Software Engineering",
    category: "development",
    description:
      "Connecting data and AI concepts to real applications through Python, APIs, full-stack development and automation.",
    x: 250,
    y: 120,
    color: "#F59E0B",
    skills: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Automation",
    ],
    projects: [
      "AI Data Quality Auditor",
      "Teaching Brain Lab",
    ],
    missions: [
      "Show how analytical work becomes usable software.",
      "Teach maintainable workflows rather than isolated scripts.",
    ],
    topics: [
      "APIs",
      "Frontend",
      "Backend",
      "Deployment",
      "Product thinking",
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare & Research",
    category: "domain",
    description:
      "Bridging pharmaceutical statistics, bioinformatics and health data to teach applied analytics in scientific contexts.",
    x: 0,
    y: 260,
    color: "#FB7185",
    skills: [
      "Biostatistics",
      "Bioinformatics",
      "Clinical Research",
      "Health Data",
    ],
    courses: [
      "Big Data Healthcare",
      "Health Analytics",
    ],
    missions: [
      "Bring scientific rigor into data and AI education.",
      "Use healthcare examples to teach data quality, uncertainty and interpretation.",
    ],
    topics: [
      "Pharma",
      "Preclinical statistics",
      "Research data",
      "Regulated environments",
    ],
  },
];