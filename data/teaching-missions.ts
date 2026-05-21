export interface TeachingMission {
  id: string;
  title: string;
  description: string;
  objective: string;
  tools: string[];
}

export const teachingMissions: TeachingMission[] = [
  {
    id: "foodtech",
    title: "FoodTech Expansion",
    description:
      "Students identify the most promising European city for market expansion using heterogeneous public datasets.",
    objective:
      "Transform messy data into a strategic recommendation supported by clear indicators and visualizations.",
    tools: ["R", "Data Cleaning", "Visualization", "Decision Making"],
  },
  {
  id: "healthcare",
  title: "Healthcare Analytics with Python",
  description:
    "Students explore healthcare datasets using Python and Jupyter notebooks to clean, analyze and communicate findings from real-world data.",
  objective:
    "Develop analytical thinking through reproducible workflows, exploratory analysis, visualization and critical interpretation of healthcare indicators.",
  tools: [
    "Python",
    "Jupyter Notebook",
    "Pandas",
    "Matplotlib",
    "Healthcare Data",
  ],
},
  {
    id: "genai",
    title: "Generative AI Workshop",
    description:
      "Students design, test and critique AI-assisted workflows using modern LLM techniques.",
    objective:
      "Understand practical AI use cases, limitations, hallucination risks and evaluation principles.",
    tools: ["LLMs", "Prompt Engineering", "RAG", "Evaluation"],
  },
];