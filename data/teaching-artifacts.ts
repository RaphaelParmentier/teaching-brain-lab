export type ArtifactKind =
  | "notebook"
  | "dashboard"
  | "report"
  | "matrix"
  | "workflow"
  | "executive";

export interface TeachingArtifact {
  id: string;
  missionId: string;
  missionTitle: string;
  title: string;
  kind: ArtifactKind;
  program: string;
  proofLabel: string;
  description: string;
  image: string;
  metrics: Array<{ label: string; value: string }>;
  skills: string[];
}

export const teachingArtifacts: TeachingArtifact[] = [
  {
    id: "foodtech-quality-audit",
    missionId: "foodtech",
    missionTitle: "FoodTech Expansion Strategy",
    title: "Operational Data Quality Audit",
    kind: "report",
    program: "Data Strategy & Management",
    proofLabel: "Excel + R audit workflow",
    description:
      "Students identify duplicates, missing values, delivery outliers and category issues before creating a reproducible clean dataset.",
    image: "/artifacts/foodtech/quality-audit.svg",
    metrics: [
      { label: "Raw rows", value: "500" },
      { label: "Removed", value: "14" },
      { label: "Clean rows", value: "486" },
    ],
    skills: ["Data cleaning", "Quality rules", "Traceability", "Excel formulas"],
  },
  {
    id: "foodtech-decision-dashboard",
    missionId: "foodtech",
    missionTitle: "FoodTech Expansion Strategy",
    title: "Expansion Decision Dashboard",
    kind: "dashboard",
    program: "Data Strategy & Management",
    proofLabel: "KPI dashboard + weighted decision model",
    description:
      "Students compare cities using satisfaction, repeat rate, delivery time, cancellation and order value to support an expansion recommendation.",
    image: "/artifacts/foodtech/decision-dashboard.svg",
    metrics: [
      { label: "Top city", value: "Nantes" },
      { label: "Score", value: "0.873" },
      { label: "Repeat", value: "46.1%" },
    ],
    skills: ["KPIs", "Normalization", "Decision scoring", "Business recommendation"],
  },
  {
    id: "eurostat-base100",
    missionId: "eurostat",
    missionTitle: "European Economic Indicators",
    title: "Base 100 Economic Comparison",
    kind: "dashboard",
    program: "Data Strategy & Management",
    proofLabel: "Open data transformation + normalized visual comparison",
    description:
      "Students transform public economic data into comparable time series and explain why base 100 indexing clarifies relative evolution.",
    image: "/artifacts/eurostat/base100-comparison.svg",
    metrics: [
      { label: "Focus", value: "EU vs France" },
      { label: "Period", value: "2020–2025" },
      { label: "Method", value: "Base 100" },
    ],
    skills: ["Open data", "Reshaping", "Time series", "Economic interpretation"],
  },
  {
    id: "renault-tesla-market-shift",
    missionId: "renault-tesla",
    missionTitle: "Renault vs Tesla Analytics",
    title: "EV Market Shift Dashboard",
    kind: "dashboard",
    program: "Data Strategy & Management",
    proofLabel: "Automotive KPI comparison + analytical narrative",
    description:
      "Students compare Tesla and Renault registrations, identify trend reversals and formulate cautious business interpretations.",
    image: "/artifacts/renault-tesla/market-shift.svg",
    metrics: [
      { label: "Tesla 2025", value: "25k" },
      { label: "Renault 2025", value: "80k" },
      { label: "Signal", value: "Reversal" },
    ],
    skills: ["EDA", "Base 100", "Comparative KPIs", "Data storytelling"],
  },
  {
    id: "healthcare-prediction-performance",
    missionId: "healthcare-prediction",
    missionTitle: "Healthcare Prediction",
    title: "Predictive Model Performance Board",
    kind: "matrix",
    program: "Machine Learning Strategy",
    proofLabel: "Model comparison + ROC-AUC + clinical recall framing",
    description:
      "Students compare logistic regression, random forest and gradient boosting, then justify model choice using performance, stability and interpretability.",
    image: "/artifacts/healthcare-prediction/performance-board.svg",
    metrics: [
      { label: "Dataset", value: "569 cases" },
      { label: "Best ROC-AUC", value: "0.99" },
      { label: "Priority", value: "Recall" },
    ],
    skills: ["Model evaluation", "Cross-validation", "ROC-AUC", "Interpretability"],
  },
  {
    id: "healthcare-statistics-evidence",
    missionId: "healthcare-statistics",
    missionTitle: "Healthcare Statistical Reasoning",
    title: "Clinical Evidence Interpretation Report",
    kind: "report",
    program: "Statistical Reasoning",
    proofLabel: "Hypothesis test + CI95 + bias analysis",
    description:
      "Students distinguish statistical significance from practical interpretation and produce a cautious evidence-based conclusion.",
    image: "/artifacts/healthcare-statistics/evidence-report.svg",
    metrics: [
      { label: "Effect", value: "−8.4 min" },
      { label: "CI95", value: "[−12.1; −4.7]" },
      { label: "p-value", value: "<0.001" },
    ],
    skills: ["Inference", "Confidence intervals", "Bias", "Scientific communication"],
  },
  {
    id: "ai-assistant-evaluation",
    missionId: "ai-assistant-design",
    missionTitle: "AI Assistant Design",
    title: "AI Assistant Evaluation Matrix",
    kind: "workflow",
    program: "AI-Augmented Workflows",
    proofLabel: "RAG workflow + prompt architecture + hallucination checks",
    description:
      "Students design an assistant, structure its knowledge base and evaluate factuality, usefulness, traceability and failure modes.",
    image: "/artifacts/ai-assistant-design/evaluation-matrix.svg",
    metrics: [
      { label: "Criteria", value: "6" },
      { label: "Eval cases", value: "24" },
      { label: "Risk", value: "Hallucination" },
    ],
    skills: ["Prompt design", "RAG", "Evaluation", "Human-in-the-loop"],
  },
];

export const artifactMissionFilters = [
  { id: "all", label: "All missions" },
  { id: "foodtech", label: "FoodTech" },
  { id: "eurostat", label: "Eurostat" },
  { id: "renault-tesla", label: "Renault vs Tesla" },
  { id: "healthcare-prediction", label: "Healthcare Prediction" },
  { id: "healthcare-statistics", label: "Healthcare Statistics" },
  { id: "ai-assistant-design", label: "AI Assistant Design" },
] as const;
