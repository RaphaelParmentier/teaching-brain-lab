export interface TeachingProgram {
  id: string;
  title: string;
  tagline: string;
  level: string;
  format: string;
  objective: string;
  entryProfile: string;
  expectedOutcome: string;
  skills: string[];
  concepts: string[];
  tools: string[];
  missionIds: string[];
}

export const teachingPrograms: TeachingProgram[] = [
  {
    id: "data-strategy",
    title: "Data Strategy & Management",
    tagline: "From raw data to actionable business insights.",
    level: "Beginner → Intermediate",
    format: "Academic module, workshop or custom training",
    objective:
      "Teach students how to structure, clean, analyze and communicate data to support strategic decisions.",
    entryProfile:
      "Basic spreadsheet literacy. No advanced programming background required.",
    expectedOutcome:
      "Students can independently clean a dataset, identify relevant KPIs, build visualizations and defend a data-driven recommendation.",
    skills: [
      "Data Cleaning",
      "KPI Design",
      "Data Visualization",
      "Business Analytics",
      "Storytelling",
    ],
    concepts: [
      "Data Quality",
      "Indicators",
      "Base 100 Index",
      "Benchmarking",
      "Decision Support",
    ],
    tools: ["Excel", "Power BI", "R", "tidyverse"],
    missionIds: ["foodtech", "eurostat", "renault-tesla"],
  },
  {
    id: "statistical-reasoning",
    title: "Statistical Reasoning",
    tagline: "Evidence-based thinking under uncertainty.",
    level: "Intermediate",
    format: "Academic module or applied case study",
    objective:
      "Develop rigorous analytical reasoning by teaching students how to interpret uncertainty, bias and statistical evidence.",
    entryProfile:
      "Basic analytical literacy. Prior exposure to descriptive statistics is helpful.",
    expectedOutcome:
      "Students can formulate statistical questions, select relevant methods and communicate uncertainty without overclaiming.",
    skills: [
      "Hypothesis Testing",
      "Inference",
      "Bias Detection",
      "Interpretation",
      "Scientific Communication",
    ],
    concepts: [
      "Sampling",
      "Confidence Intervals",
      "P-values",
      "Bias",
      "Uncertainty",
    ],
    tools: ["R", "Python", "Jupyter Notebook"],
    missionIds: ["healthcare-statistics"],
  },
  {
    id: "ml-strategy",
    title: "Machine Learning Strategy",
    tagline: "Build, validate and explain predictive models.",
    level: "Intermediate → Advanced",
    format: "Technical module, bootcamp sequence or project-based course",
    objective:
      "Help students understand how machine learning models are trained, evaluated and interpreted in realistic analytical contexts.",
    entryProfile:
      "Basic Python or data analysis experience. Statistical foundations recommended.",
    expectedOutcome:
      "Students can train predictive models, detect overfitting, compare algorithms and explain model performance.",
    skills: [
      "Model Training",
      "Cross Validation",
      "Feature Engineering",
      "Model Evaluation",
      "Interpretability",
    ],
    concepts: [
      "Train/Test Split",
      "Overfitting",
      "Underfitting",
      "ROC-AUC",
      "Precision / Recall",
    ],
    tools: ["Python", "Pandas", "Scikit-Learn", "Jupyter Notebook"],
    missionIds: ["healthcare-prediction"],
  },
  {
    id: "ai-workflows",
    title: "AI-Augmented Workflows",
    tagline: "Understand and use modern AI systems effectively.",
    level: "Beginner → Advanced",
    format: "Workshop, executive training or applied AI module",
    objective:
      "Teach students how AI systems work, where they fail, and how to integrate them into professional workflows.",
    entryProfile:
      "No coding required for the introductory format. Technical extensions possible.",
    expectedOutcome:
      "Students can design AI-assisted workflows, evaluate outputs, manage context and identify limitations.",
    skills: [
      "Prompt Engineering",
      "AI Evaluation",
      "Knowledge Structuring",
      "Workflow Design",
      "Critical Thinking",
    ],
    concepts: [
      "What is AI?",
      "Machine Learning vs Deep Learning",
      "LLMs",
      "Transformers",
      "Embeddings",
      "RAG",
      "Hallucinations",
      "Human-in-the-Loop",
    ],
    tools: ["ChatGPT", "Claude", "NotebookLM", "Perplexity"],
    missionIds: ["ai-assistant-design"],
  },
];