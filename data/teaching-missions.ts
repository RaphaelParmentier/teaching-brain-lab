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
      "Students identify the most promising European city for market expansion.",

    objective:
      "Transform raw data into a strategic recommendation.",

    tools: [
      "R",
      "Data Cleaning",
      "Visualization",
      "Decision Making",
    ],
  },

  {
    id: "health",

    title: "Healthcare Analytics",

    description:
      "Detect anomalies and extract insights from health datasets.",

    objective:
      "Apply statistical reasoning to real-world health data.",

    tools: [
      "Statistics",
      "R",
      "Data Quality",
    ],
  },

  {
    id: "ai",

    title: "Generative AI Workshop",

    description:
      "Design and evaluate AI assistants using modern LLM techniques.",

    objective:
      "Understand practical AI workflows and limitations.",

    tools: [
      "LLM",
      "Prompt Engineering",
      "Evaluation",
    ],
  },
];