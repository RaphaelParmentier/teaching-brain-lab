export interface LearningStep {
  id: string;
  title: string;
  level: string;
  description: string;
  concepts: string[];
  tools: string[];
  projects: string[];
  relatedMissionIds: string[];
}

export const learningPath: LearningStep[] = [
  {
    id: "literacy",
    title: "Data Literacy",
    level: "Foundation",
    description:
      "Understand datasets, variables, indicators and basic reasoning.",
    concepts: [
      "Variables",
      "Data Types",
      "KPIs",
      "Data Quality",
    ],
    tools: [
      "Excel",
      "Google Sheets",
    ],
    projects: [
      "Business Metrics",
    ],
    relatedMissionIds: ["foodtech"],
  },

  {
    id: "statistics",
    title: "Statistical Thinking",
    level: "Intermediate",
    description:
      "Reason under uncertainty and interpret evidence correctly.",
    concepts: [
      "Sampling",
      "Inference",
      "Hypothesis Testing",
      "Confidence Intervals",
    ],
    tools: [
      "R",
      "Python",
      "Jupyter",
    ],
    projects: [
      "Healthcare Analytics",
    ],
    relatedMissionIds: ["healthcare"],
  },

  {
    id: "analytics",
    title: "Data Analytics",
    level: "Intermediate",
    description:
      "Transform raw data into actionable insights.",
    concepts: [
      "EDA",
      "Visualization",
      "Storytelling",
      "Decision Making",
    ],
    tools: [
      "R",
      "Python",
      "Power BI",
    ],
    projects: [
      "FoodTech Expansion",
    ],
    relatedMissionIds: ["foodtech"],
  },

  {
    id: "ml",
    title: "Machine Learning",
    level: "Advanced",
    description:
      "Build predictive models and evaluate performance.",
    concepts: [
      "Classification",
      "Regression",
      "Validation",
      "Overfitting",
    ],
    tools: [
      "Scikit-Learn",
      "Python",
    ],
    projects: [
      "Predictive Analytics",
    ],
    relatedMissionIds: ["healthcare"],
  },

  {
    id: "ai",
    title: "AI Systems",
    level: "Advanced",
    description:
      "Use and evaluate modern generative AI systems.",
    concepts: [
      "Prompting",
      "RAG",
      "Agents",
      "Evaluation",
    ],
    tools: [
      "OpenAI",
      "LangChain",
      "Vector DB",
    ],
    projects: [
      "Generative AI Workshop",
    ],
    relatedMissionIds: ["genai"],
  },

  {
    id: "projects",
    title: "Applied Projects",
    level: "Professional",
    description:
      "Combine technical skills into real-world deliverables.",
    concepts: [
      "Problem Solving",
      "Communication",
      "Deployment",
      "Product Thinking",
    ],
    tools: [
      "Git",
      "FastAPI",
      "Next.js",
    ],
    projects: [
      "AI Data Quality Auditor",
      "Teaching Brain",
    ],
    relatedMissionIds: ["foodtech", "healthcare", "genai"],
  },
];