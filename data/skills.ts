export interface Skill {
  id: string;

  title: string;

  level: number;

  description: string;
}

export const skills: Skill[] = [
  {
    id: "python",
    title: "Python",
    level: 90,
    description:
      "Data science, machine learning, APIs and automation.",
  },

  {
    id: "r",
    title: "R",
    level: 95,
    description:
      "Statistical analysis, teaching and reproducible reporting.",
  },

  {
    id: "sql",
    title: "SQL",
    level: 80,
    description:
      "Data extraction and analytical workflows.",
  },

  {
    id: "nextjs",
    title: "Next.js",
    level: 75,
    description:
      "Modern frontend development and portfolio applications.",
  },

  {
    id: "llm",
    title: "Generative AI",
    level: 85,
    description:
      "Prompt engineering, RAG and AI-assisted products.",
  },
];