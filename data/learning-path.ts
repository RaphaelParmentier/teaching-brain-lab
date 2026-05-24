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
      "Understand datasets, variables, indicators and data quality before performing analytical work.",

    concepts: [
      "Variables",
      "Data Types",
      "KPIs",
      "Data Quality",
      "Data Collection",
    ],

    tools: [
      "Excel",
      "Google Sheets",
    ],

    projects: [
      "FoodTech Expansion Strategy",
    ],

    relatedMissionIds: [
      "foodtech",
    ],
  },

  {
    id: "statistics",

    title: "Statistical Thinking",

    level: "Intermediate",

    description:
      "Reason under uncertainty and learn how to correctly interpret evidence, significance and risk.",

    concepts: [
      "Sampling",
      "Confidence Intervals",
      "Hypothesis Testing",
      "Bias",
      "Inference",
    ],

    tools: [
      "R",
      "Python",
      "Jupyter Notebook",
    ],

    projects: [
      "Healthcare Statistical Reasoning",
    ],

    relatedMissionIds: [
      "healthcare-statistics",
    ],
  },

  {
    id: "analytics",

    title: "Data Analytics",

    level: "Intermediate",

    description:
      "Transform raw data into insights through cleaning, exploration, visualization and storytelling.",

    concepts: [
      "EDA",
      "Visualization",
      "Storytelling",
      "Data Cleaning",
      "Reporting",
    ],

    tools: [
      "R",
      "Power BI",
      "Excel",
      "ggplot2",
    ],

    projects: [
      "European Economic Indicators",
      "Renault vs Tesla Analytics",
    ],

    relatedMissionIds: [
      "eurostat",
      "renault-tesla",
    ],
  },

  {
    id: "ml",

    title: "Machine Learning",

    level: "Advanced",

    description:
      "Design, train and evaluate predictive models while balancing performance, robustness and interpretability.",

    concepts: [
      "Cross Validation",
      "Feature Engineering",
      "Classification",
      "Regression",
      "Overfitting",
    ],

    tools: [
      "Python",
      "Scikit-Learn",
      "Jupyter Notebook",
      "Pandas",
    ],

    projects: [
      "Healthcare Prediction",
    ],

    relatedMissionIds: [
      "healthcare-prediction",
    ],
  },

  {
    id: "ai",

    title: "AI-Augmented Workflows",

    level: "Advanced",

    description:
      "Leverage modern AI systems to improve productivity, research, content generation and decision-making.",

    concepts: [
      "Prompt Engineering",
      "Knowledge Bases",
      "Evaluation",
      "Human-in-the-Loop",
      "Workflow Design",
    ],

    tools: [
      "ChatGPT",
      "Claude",
      "NotebookLM",
      "Perplexity",
    ],

    projects: [
      "AI Assistant Design",
    ],

    relatedMissionIds: [
      "ai-assistant-design",
    ],
  },

  {
    id: "projects",

    title: "Applied Projects",

    level: "Professional",

    description:
      "Combine analytical, technical and communication skills to deliver professional-grade solutions.",

    concepts: [
      "Problem Solving",
      "Project Delivery",
      "Communication",
      "Product Thinking",
      "Presentation",
    ],

    tools: [
      "Git",
      "Python",
      "R",
      "Power BI",
      "AI Systems",
    ],

    projects: [
      "All Teaching Missions",
    ],

    relatedMissionIds: [
      "foodtech",
      "eurostat",
      "renault-tesla",
      "healthcare-statistics",
      "healthcare-prediction",
      "ai-assistant-design",
    ],
  },
];