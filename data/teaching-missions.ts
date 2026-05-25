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
      "Help a FoodTech company choose where to expand next using sales, customer and operational data.",
    challenge:
      "Which city should the company prioritise, and what evidence supports that choice?",
    context:
      "Students clean order data, compare cities, calculate business KPIs and defend a market expansion recommendation.",
    skills: [
      "Data Cleaning",
      "Business KPIs",
      "Market Analysis",
      "Data Visualisation",
      "Decision Support",
    ],
    concepts: [
      "KPI Design",
      "Market Opportunity",
      "Customer Behaviour",
      "Operational Performance",
      "Business Recommendation",
    ],
    tools: ["Excel", "Power BI", "R", "tidyverse"],
    deliverables: [
      "Clean Order Dataset",
      "City KPI Table",
      "Market Opportunity Analysis",
      "Expansion Recommendation",
    ],
    outcomes: [
      "Clean and structure commercial data",
      "Compare cities using relevant indicators",
      "Identify the strongest expansion opportunity",
      "Defend a recommendation with evidence",
    ],
    difficulty: 3,
  },
  {
    id: "eurostat",
    title: "European Economic Indicators",
    category: "Economic Analytics",
    level: "Intermediate",
    duration: "8–12 hours",
    objective:
      "Compare European countries through public economic indicators and explain what the trends mean.",
    challenge:
      "How does France evolve compared with other European countries when indicators are normalised?",
    context:
      "Students prepare Eurostat-style datasets, build base 100 comparisons and turn macroeconomic trends into readable conclusions.",
    skills: [
      "Data Wrangling",
      "Open Data Analysis",
      "Trend Visualisation",
      "Economic Interpretation",
      "Communication",
    ],
    concepts: [
      "Open Data",
      "Base 100 Comparison",
      "Normalisation",
      "Country Benchmarking",
      "Economic Indicators",
    ],
    tools: ["R", "tidyverse", "ggplot2", "Eurostat"],
    deliverables: [
      "Data Preparation Workflow",
      "Base 100 Comparison Chart",
      "Country Benchmark Report",
      "Economic Insight Summary",
    ],
    outcomes: [
      "Prepare public economic datasets",
      "Build comparable indicators across countries",
      "Interpret macroeconomic differences",
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
      "Compare Renault and Tesla through business indicators, visual exploration and structured interpretation.",
    challenge:
      "What do the data suggest about the strategic position of a traditional manufacturer versus a tech-driven car company?",
    context:
      "Students explore automotive datasets, create comparative visualisations and build a clear analytical narrative.",
    skills: [
      "Exploratory Analysis",
      "KPI Comparison",
      "Visualisation",
      "Critical Thinking",
      "Business Storytelling",
    ],
    concepts: [
      "Exploratory Analysis",
      "Business Performance",
      "Trend Comparison",
      "Market Positioning",
      "Analytical Narrative",
    ],
    tools: ["R", "tidyverse", "ggplot2"],
    deliverables: [
      "Exploratory Notebook",
      "KPI Comparison Table",
      "Comparative Visualisations",
      "Business Interpretation Summary",
    ],
    outcomes: [
      "Explore real business indicators",
      "Compare companies with relevant metrics",
      "Identify meaningful patterns",
      "Turn analysis into a business narrative",
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
      "Teach students how to interpret healthcare evidence without overstating what the data can prove.",
    challenge:
      "Which statistical conclusion is justified, and where should we remain cautious?",
    context:
      "Students work through healthcare-inspired questions, select appropriate statistical methods and communicate uncertainty clearly.",
    skills: [
      "Statistical Reasoning",
      "Hypothesis Testing",
      "Uncertainty Interpretation",
      "Bias Detection",
      "Scientific Communication",
    ],
    concepts: [
      "Sampling",
      "Confidence Intervals",
      "Hypothesis Testing",
      "Bias",
      "Uncertainty",
    ],
    tools: ["R", "Python", "Jupyter Notebook"],
    deliverables: [
      "Research Question Definition",
      "Statistical Analysis Notebook",
      "Uncertainty Interpretation",
      "Evidence-Based Conclusion",
    ],
    outcomes: [
      "Choose appropriate statistical methods",
      "Interpret uncertainty correctly",
      "Avoid common analytical mistakes",
      "Communicate cautious scientific conclusions",
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
      "Build and evaluate predictive models on healthcare data while keeping performance, robustness and interpretation in balance.",
    challenge:
      "Which model performs best, and can its predictions be explained responsibly?",
    context:
      "Students build a complete machine learning workflow: exploration, feature engineering, model comparison, validation and final recommendation.",
    skills: [
      "Machine Learning",
      "Feature Engineering",
      "Cross Validation",
      "Model Evaluation",
      "Interpretability",
    ],
    concepts: [
      "Train/Test Split",
      "Cross Validation",
      "Overfitting",
      "ROC-AUC",
      "Precision / Recall",
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
      "Feature Engineering Summary",
      "Model Comparison Matrix",
      "Performance Evaluation Report",
      "Executive Recommendation",
    ],
    outcomes: [
      "Train and compare predictive models",
      "Evaluate generalisation performance",
      "Detect overfitting and weak metrics",
      "Explain model outputs to stakeholders",
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
      "Design an AI assistant that supports a realistic professional workflow and evaluate whether it can be trusted.",
    challenge:
      "How do we turn a business need into a useful AI workflow without ignoring hallucinations, context limits or evaluation?",
    context:
      "Students define a use case, structure prompts, organise knowledge, test outputs and document the limits of the assistant.",
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
      "Assistant Workflow",
      "Knowledge Base Structure",
      "Evaluation Matrix",
      "User Documentation",
    ],
    outcomes: [
      "Translate business needs into AI workflows",
      "Design prompts and context structures",
      "Evaluate assistant quality",
      "Identify practical AI limitations",
    ],
    difficulty: 4,
  },
];