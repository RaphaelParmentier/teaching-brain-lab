export interface TeachingMission {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  objective: string;
  challenge: string;
  context: string;
  skills: string[];
  concepts: string[];
  tools: string[];
  deliverables: string[];
  outcomes: string[];
  difficulty: number;
}

export const teachingMissions: TeachingMission[] = [
  {
    id: "foodtech",
    title: "FoodTech Expansion Strategy",
    category: "Business Analytics",
    level: "Intermediate",
    duration: "10–15 hours",
    objective:
      "Transform commercial and market data into evidence-based strategic recommendations.",
    challenge:
      "Students investigate the expansion opportunities of a FoodTech company using analytical reasoning and business intelligence techniques.",
    context:
      "Learners work with sales, customer and market indicators to identify growth opportunities, prioritize recommendations and communicate findings to decision-makers.",
    skills: [
      "Data Analysis",
      "Business Intelligence",
      "Data Visualization",
      "Strategic Thinking",
      "Decision Support",
    ],
    concepts: [
      "KPIs",
      "Base 100 Index",
      "Benchmarking",
      "Trend Analysis",
      "Market Segmentation",
      "Storytelling",
    ],
    tools: ["Excel", "Power BI", "R", "tidyverse"],
    deliverables: [
      "Clean Dataset",
      "KPI Dashboard",
      "Base 100 Comparison",
      "Market Opportunity Assessment",
      "Executive Recommendation",
    ],
    outcomes: [
      "Transform raw data into business insights",
      "Identify strategic opportunities",
      "Build decision-oriented dashboards",
      "Present analytical recommendations",
    ],
    difficulty: 3,
  },
  {
    id: "eurostat",
    title: "European Economic Indicators",
    category: "Data Analytics",
    level: "Intermediate",
    duration: "8–12 hours",
    objective:
      "Explore, compare and interpret macroeconomic indicators using open European datasets.",
    challenge:
      "Students investigate economic trends across European countries and produce data-driven conclusions supported by visual evidence.",
    context:
      "Using Eurostat data, learners perform imports, cleaning, transformation and visualization workflows before interpreting economic differences between countries.",
    skills: [
      "Data Wrangling",
      "Visualization",
      "Analytical Reasoning",
      "Interpretation",
      "Communication",
    ],
    concepts: [
      "Open Data",
      "Data Cleaning",
      "Normalization",
      "Comparative Analysis",
      "Time Series",
      "Economic Indicators",
    ],
    tools: ["R", "tidyverse", "ggplot2", "Eurostat"],
    deliverables: [
      "Data Preparation Workflow",
      "Visualization Portfolio",
      "Country Comparison Report",
      "Insight Presentation",
    ],
    outcomes: [
      "Handle public datasets",
      "Produce reproducible analyses",
      "Interpret economic indicators",
      "Communicate evidence-based conclusions",
    ],
    difficulty: 3,
  },
  {
    id: "renault-tesla",
    title: "Renault vs Tesla Analytics",
    category: "Exploratory Analytics",
    level: "Intermediate",
    duration: "8–12 hours",
    objective:
      "Develop exploratory data analysis skills through the comparison of two major automotive companies.",
    challenge:
      "Students investigate business performance indicators and identify meaningful patterns hidden within financial and operational datasets.",
    context:
      "Learners practice data exploration, visualization and interpretation before presenting a structured analytical narrative.",
    skills: [
      "EDA",
      "Visualization",
      "Critical Thinking",
      "Data Storytelling",
      "Business Analysis",
    ],
    concepts: [
      "Exploratory Analysis",
      "KPIs",
      "Distributions",
      "Trends",
      "Comparative Analysis",
    ],
    tools: ["R", "tidyverse", "ggplot2"],
    deliverables: [
      "Exploratory Notebook",
      "Visualization Dashboard",
      "KPI Comparison",
      "Analytical Presentation",
    ],
    outcomes: [
      "Perform exploratory analysis",
      "Identify relevant patterns",
      "Create meaningful visualizations",
      "Build analytical narratives",
    ],
    difficulty: 3,
  },
  {
    id: "healthcare-statistics",
    title: "Healthcare Statistical Reasoning",
    category: "Statistics",
    level: "Advanced",
    duration: "12–18 hours",
    objective:
      "Apply statistical reasoning to healthcare-related questions and interpret evidence with scientific rigor.",
    challenge:
      "Students must select appropriate statistical approaches, justify methodological choices and critically interpret results.",
    context:
      "Inspired by real-world healthcare and research scenarios, the mission focuses on evidence evaluation and statistical decision-making.",
    skills: [
      "Statistical Reasoning",
      "Hypothesis Testing",
      "Critical Thinking",
      "Interpretation",
      "Scientific Communication",
    ],
    concepts: [
      "Sampling",
      "Confidence Intervals",
      "Hypothesis Testing",
      "Bias",
      "Statistical Significance",
      "Uncertainty",
    ],
    tools: ["R", "Python", "Jupyter Notebook"],
    deliverables: [
      "Research Question Definition",
      "Statistical Analysis Report",
      "Interpretation Summary",
      "Evidence-Based Recommendation",
    ],
    outcomes: [
      "Choose appropriate statistical methods",
      "Interpret uncertainty correctly",
      "Avoid common analytical mistakes",
      "Communicate statistical findings",
    ],
    difficulty: 4,
  },
  {
    id: "healthcare-prediction",
    title: "Healthcare Prediction",
    category: "Machine Learning",
    level: "Advanced",
    duration: "12–18 hours",
    objective:
      "Build, validate and interpret a predictive healthcare model using modern machine learning methodologies.",
    challenge:
      "Students compare multiple algorithms and determine which model best balances performance, robustness and interpretability.",
    context:
      "Using anonymized healthcare datasets, learners develop predictive models, evaluate generalization performance and communicate actionable conclusions.",
    skills: [
      "Machine Learning",
      "Feature Engineering",
      "Cross Validation",
      "Model Evaluation",
      "Interpretability",
      "Statistical Reasoning",
    ],
    concepts: [
      "Train/Test Split",
      "Cross Validation",
      "Overfitting",
      "Underfitting",
      "ROC-AUC",
      "Precision",
      "Recall",
      "Feature Importance",
    ],
    tools: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Jupyter Notebook",
      "Matplotlib",
    ],
    deliverables: [
      "Exploratory Analysis Notebook",
      "Feature Engineering Report",
      "Model Comparison Matrix",
      "Cross Validation Assessment",
      "Performance Dashboard",
      "Executive Recommendation",
    ],
    outcomes: [
      "Select appropriate predictive models",
      "Evaluate generalization performance",
      "Detect overfitting",
      "Interpret model outputs",
      "Present technical results to stakeholders",
    ],
    difficulty: 5,
  },
  {
    id: "ai-assistant-design",
    title: "AI Assistant Design",
    category: "Applied AI",
    level: "Advanced",
    duration: "8–12 hours",
    objective:
      "Design, configure and evaluate an AI assistant capable of supporting a realistic business workflow.",
    challenge:
      "Students must transform a business need into an operational AI workflow while assessing quality, reliability and limitations.",
    context:
      "Learners experiment with prompting strategies, knowledge organization and evaluation frameworks to create useful AI assistants.",
    skills: [
      "Prompt Engineering",
      "Workflow Design",
      "AI Evaluation",
      "Knowledge Structuring",
      "Critical Thinking",
    ],
    concepts: [
      "Prompt Architecture",
      "Context Management",
      "Hallucination Risks",
      "Evaluation",
      "Knowledge Bases",
      "Human-in-the-Loop",
    ],
    tools: ["ChatGPT", "Claude", "NotebookLM", "Perplexity"],
    deliverables: [
      "Prompt Framework",
      "Assistant Configuration",
      "Knowledge Base Structure",
      "Evaluation Matrix",
      "User Documentation",
    ],
    outcomes: [
      "Design effective AI workflows",
      "Evaluate assistant quality",
      "Identify AI limitations",
      "Deploy practical business use cases",
    ],
    difficulty: 4,
  },
];