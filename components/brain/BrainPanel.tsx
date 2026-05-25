import { BrainNodeData } from "@/data/brain-nodes";

type BrainPanelProps = {
  selectedNode: BrainNodeData | null;
  onClose: () => void;
};

const panelCopy: Record<
  string,
  {
    title: string;
    description: string;
    bullets: string[];
    tags: string[];
  }
> = {
  core: {
    title: "How I teach",
    description:
      "Students learn by solving realistic data problems, not by watching theory passively.",
    bullets: [
      "Start from a concrete business or analytical question.",
      "Build the workflow step by step with practical tools.",
      "Finish with something students can explain and defend.",
    ],
    tags: ["Real projects", "Workflows", "Student outputs"],
  },
  "data-strategy": {
    title: "From messy data to decisions",
    description:
      "Students clean datasets, build indicators and turn analysis into recommendations.",
    bullets: [
      "Structure raw files into usable datasets.",
      "Build KPIs that support a real decision.",
      "Explain what the numbers mean in plain language.",
    ],
    tags: ["Data cleaning", "KPIs", "Decision support"],
  },
  "statistical-reasoning": {
    title: "Thinking with evidence",
    description:
      "Students learn how to question results, interpret uncertainty and avoid misleading conclusions.",
    bullets: [
      "Understand what the data can and cannot prove.",
      "Use statistical tests without overclaiming.",
      "Communicate uncertainty clearly.",
    ],
    tags: ["Inference", "Bias", "Uncertainty"],
  },
  "ml-strategy": {
    title: "Building trustworthy models",
    description:
      "Students train predictive models, compare approaches and understand why a model works or fails.",
    bullets: [
      "Prepare features and split data correctly.",
      "Compare models with meaningful metrics.",
      "Explain performance, limits and trade-offs.",
    ],
    tags: ["Validation", "Evaluation", "Interpretability"],
  },
  "ai-workflows": {
    title: "Using AI professionally",
    description:
      "Students learn how modern AI systems work and how to integrate them into useful workflows.",
    bullets: [
      "Understand prompts, context and model limitations.",
      "Design AI-assisted workflows for real tasks.",
      "Evaluate outputs instead of trusting them blindly.",
    ],
    tags: ["Prompting", "RAG", "Evaluation"],
  },
  communication: {
    title: "Turning analysis into action",
    description:
      "Students learn how to present findings clearly and support decisions with evidence.",
    bullets: [
      "Adapt the message to the audience.",
      "Separate results, interpretation and recommendation.",
      "Turn technical work into a professional deliverable.",
    ],
    tags: ["Storytelling", "Reporting", "Decision support"],
  },
};

export default function BrainPanel({ selectedNode, onClose }: BrainPanelProps) {
  if (!selectedNode) {
    return null;
  }

  const copy = panelCopy[selectedNode.id] ?? {
    title: selectedNode.label,
    description: selectedNode.description,
    bullets: selectedNode.missions ?? [],
    tags: selectedNode.skills ?? selectedNode.topics ?? [],
  };

  return (
    <aside
      onClick={(event) => event.stopPropagation()}
      className="absolute bottom-10 right-10 z-30 w-[clamp(600px,32vw,760px)] max-h-[62vh] overflow-y-auto rounded-[2.25rem] border border-white/10 bg-[#080D1C]/95 p-10 shadow-[0_0_80px_rgba(0,0,0,0.78)] backdrop-blur-xl"
      style={{
        borderColor: `${selectedNode.color}35`,
        boxShadow: `0 0 80px rgba(0,0,0,0.72), 0 0 52px ${selectedNode.color}18`,
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close panel"
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
      >
        ×
      </button>

      <div className="flex items-center gap-3 pr-12">
        <span
          className="h-4 w-4 rounded-full"
          style={{
            backgroundColor: selectedNode.color,
            boxShadow: `0 0 24px ${selectedNode.color}`,
          }}
        />

        <p
          className="text-sm font-bold uppercase tracking-[0.32em]"
          style={{ color: selectedNode.color }}
        >
          {selectedNode.category}
        </p>
      </div>

      <h2 className="mt-6 pr-12 text-[clamp(2.5rem,2.2vw,3.6rem)] font-semibold tracking-[-0.06em] text-white">
        {copy.title}
      </h2>

      <p className="mt-6 text-[clamp(1.15rem,1vw,1.45rem)] leading-[1.65] text-slate-300">
        {copy.description}
      </p>

      <ul className="mt-8 space-y-4 text-[clamp(1rem,0.85vw,1.25rem)] leading-8 text-slate-300">
        {copy.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <span
              className="mt-3 h-2 w-2 shrink-0 rounded-full"
              style={{
                backgroundColor: selectedNode.color,
                boxShadow: `0 0 14px ${selectedNode.color}`,
              }}
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        {copy.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border px-5 py-2.5 text-[clamp(0.9rem,0.75vw,1.05rem)] font-semibold"
            style={{
              borderColor: `${selectedNode.color}42`,
              backgroundColor: `${selectedNode.color}18`,
              color: selectedNode.color,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </aside>
  );
}