import { BrainNodeData } from "@/data/brain-nodes";

type BrainPanelProps = {
  selectedNode: BrainNodeData | null;
};

export default function BrainPanel({ selectedNode }: BrainPanelProps) {
  if (!selectedNode) {
    return null;
  }

  return (
    <aside className="absolute bottom-10 right-10 z-20 max-h-[78vh] w-[470px] overflow-y-auto rounded-[2rem] border border-white/10 bg-[#080D1C]/95 p-8 text-white shadow-[0_0_80px_rgba(0,0,0,0.65)] backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <span
          className="h-3 w-3 rounded-full"
          style={{
            backgroundColor: selectedNode.color,
            boxShadow: `0 0 22px ${selectedNode.color}`,
          }}
        />
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
          {selectedNode.category}
        </p>
      </div>

      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
        {selectedNode.label}
      </h2>

      <p className="mt-5 text-base leading-7 text-slate-300">
        {selectedNode.description}
      </p>

      {selectedNode.skills && (
        <div className="mt-6 flex flex-wrap gap-2">
          {selectedNode.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/8 px-3.5 py-1.5 text-xs font-medium text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {selectedNode.missions && (
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Teaching Missions
          </p>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            {selectedNode.missions.map((mission) => (
              <li key={mission} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
                <span>{mission}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedNode.courses && (
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Courses
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {selectedNode.courses.map((course) => (
              <li key={course}>• {course}</li>
            ))}
          </ul>
        </div>
      )}

      {selectedNode.topics && (
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Related Topics
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {selectedNode.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-medium text-cyan-200"
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