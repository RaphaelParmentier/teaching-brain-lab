export interface BrainNodeData {
  id: string;
  label: string;
  category: string;
  description: string;
  color: string;
  skills: string[];
  missions: string[];
  topics: string[];
}

export const brainNodes: BrainNodeData[] = [
  {
    id: "core",
    label: "Learning by Doing",
    category: "Teaching System",
    description:
      "A project-based teaching philosophy where students build, test, interpret and communicate real analytical outputs.",
    color: "#F97316",
    skills: [
      "Applied Pedagogy",
      "Project-Based Learning",
      "Technical Mentoring",
      "Scientific Rigor",
    ],
    missions: [
      "Design realistic learning situations based on data, statistics, machine learning and AI workflows.",
      "Move students from passive understanding to autonomous analytical production.",
    ],
    topics: [
      "Learning by doing",
      "Case-based teaching",
      "Professional deliverables",
      "Critical reasoning",
    ],
  },
  {
    id: "data-strategy",
    label: "Data Strategy",
    category: "Program",
    description:
      "Teaching students how to clean, structure, explore and use data to support business decisions.",
    color: "#22C55E",
    skills: [
      "Data Cleaning",
      "KPI Design",
      "Visualization",
      "Business Analytics",
      "Storytelling",
    ],
    missions: [
      "FoodTech Expansion Strategy",
      "European Economic Indicators",
      "Renault vs Tesla Analytics",
    ],
    topics: [
      "Data quality",
      "KPIs",
      "Base 100 index",
      "Dashboards",
      "Decision support",
    ],
  },
  {
    id: "statistical-reasoning",
    label: "Statistical Reasoning",
    category: "Program",
    description:
      "Helping students reason under uncertainty and interpret evidence with statistical rigor.",
    color: "#38BDF8",
    skills: [
      "Inference",
      "Hypothesis Testing",
      "Bias Detection",
      "Uncertainty",
      "Interpretation",
    ],
    missions: ["Healthcare Statistical Reasoning"],
    topics: [
      "Sampling",
      "Confidence intervals",
      "P-values",
      "Bias",
      "Scientific interpretation",
    ],
  },
  {
    id: "ml-strategy",
    label: "Machine Learning",
    category: "Program",
    description:
      "Teaching how predictive models are trained, evaluated, compared and interpreted.",
    color: "#A78BFA",
    skills: [
      "Model Training",
      "Cross Validation",
      "Feature Engineering",
      "Overfitting Detection",
      "Model Evaluation",
    ],
    missions: ["Healthcare Prediction"],
    topics: [
      "Train/test split",
      "Cross validation",
      "ROC-AUC",
      "Precision / Recall",
      "Interpretability",
    ],
  },
  {
    id: "ai-workflows",
    label: "AI Workflows",
    category: "Program",
    description:
      "Teaching how modern AI systems work and how to integrate them responsibly into professional workflows.",
    color: "#2DD4BF",
    skills: [
      "Prompt Engineering",
      "AI Evaluation",
      "Knowledge Structuring",
      "Workflow Design",
      "Critical Thinking",
    ],
    missions: ["AI Assistant Design"],
    topics: [
      "LLMs",
      "Transformers",
      "Embeddings",
      "RAG",
      "Hallucinations",
      "Human-in-the-loop",
    ],
  },
  {
    id: "communication",
    label: "Professional Communication",
    category: "Transversal Skill",
    description:
      "Transforming technical analysis into clear deliverables, executive summaries and decision-oriented presentations.",
    color: "#F59E0B",
    skills: [
      "Reporting",
      "Executive Summary",
      "Data Storytelling",
      "Presentation",
      "Stakeholder Communication",
    ],
    missions: [
      "Present across all teaching missions",
      "Turns analytical work into usable recommendations",
    ],
    topics: [
      "Storytelling",
      "Communication",
      "Synthesis",
      "Decision-making",
      "Presentation design",
    ],
  },
];