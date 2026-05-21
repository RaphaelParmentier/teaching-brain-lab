import { BrainNodeData } from "@/data/brain-nodes";

type BrainPanelProps = {
  selectedNode: BrainNodeData | null;
};

export default function BrainPanel({ selectedNode }: BrainPanelProps) {
  if (!selectedNode) {
    return (
      <aside className="absolute bottom-8 right-8 z-20 w-[360px] rounded-2xl border border-white/10 bg-slate-900/80 p-6 text-white shadow-2xl backdrop-blur">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
          Explore
        </p>
        <h2 className="mt-3 text-2xl font-semibold">Select a node</h2>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          Click a knowledge node to reveal how this area contributes to my
          teaching approach.
        </p>
      </aside>
    );
  }

  return (
    <aside className="absolute bottom-8 right-8 z-20 w-[360px] rounded-2xl border border-white/10 bg-slate-900/80 p-6 text-white shadow-2xl backdrop-blur">
      <div className="flex items-center gap-3">
        <span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: selectedNode.color }}
        />
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
          {selectedNode.category}
        </p>
      </div>

      <h2 className="mt-4 text-2xl font-semibold">{selectedNode.label}</h2>

      <p className="mt-4 text-sm leading-6 text-slate-300">
        {selectedNode.description}
      </p>

      {selectedNode.skills && (
        <div className="mt-5 flex flex-wrap gap-2">
          {selectedNode.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {selectedNode.missions && (
        <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Teaching Missions
            </p>

            <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {selectedNode.missions.map((mission) => (
                <li
                key={mission}
                className="flex items-start gap-2"
                >
                <span className="mt-1 text-cyan-300">●</span>
                <span>{mission}</span>
                </li>
            ))}
            </ul>
        </div>
        )}

      {selectedNode.courses && (
        <div className="mt-5">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Courses
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {selectedNode.courses.map((course) => (
              <li key={course}>• {course}</li>
            ))}
          </ul>
        </div>
      )}

      {selectedNode.topics && (
        <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Related Topics
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
            {selectedNode.topics.map((topic) => (
                <span
                key={topic}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200"
                >
                {topic}
                </span>
            ))}
            </div>
        </div>
        )}

    </aside>
  );
}