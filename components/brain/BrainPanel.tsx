import { BrainNodeData } from "@/data/brain-nodes";

type BrainPanelProps = {
  selectedNode: BrainNodeData | null;
};

export default function BrainPanel({ selectedNode }: BrainPanelProps) {
  if (!selectedNode) {
    return null;
  }

  return (
    <aside
      className="absolute bottom-10 right-10 z-20 max-h-[82vh] w-[560px] overflow-y-auto rounded-[2rem] border bg-[#080D1C]/96 p-9 text-white shadow-[0_0_90px_rgba(0,0,0,0.72)] backdrop-blur-xl"
      style={{
        borderColor: `${selectedNode.color}35`,
        boxShadow: `0 0 80px rgba(0,0,0,0.72), 0 0 52px ${selectedNode.color}18`,
      }}
    >
      <div className="flex items-center gap-3">
        <span
          className="h-3.5 w-3.5 rounded-full"
          style={{
            backgroundColor: selectedNode.color,
            boxShadow: `0 0 24px ${selectedNode.color}`,
          }}
        />
        <p
          className="text-xs font-bold uppercase tracking-[0.34em]"
          style={{ color: selectedNode.color }}
        >
          {selectedNode.category}
        </p>
      </div>

      <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-white">
        {selectedNode.label}
      </h2>

      <p className="mt-5 text-base leading-7 text-slate-300">
        {selectedNode.description}
      </p>

      {selectedNode.skills && (
        <div className="mt-7 flex flex-wrap gap-2.5">
          {selectedNode.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border px-4 py-1.5 text-xs font-semibold"
              style={{
                borderColor: `${selectedNode.color}42`,
                backgroundColor: `${selectedNode.color}18`,
                color: selectedNode.color,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {selectedNode.missions && (
        <div className="mt-9">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
            Teaching Missions
          </p>

          <ul className="mt-4 space-y-3.5 text-[0.95rem] leading-7 text-slate-300">
            {selectedNode.missions.map((mission) => (
              <li key={mission} className="flex items-start gap-3">
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{
                    backgroundColor: selectedNode.color,
                    boxShadow: `0 0 14px ${selectedNode.color}`,
                  }}
                />
                <span>{mission}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedNode.courses && (
        <div className="mt-9">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
            Courses
          </p>

          <ul className="mt-4 grid grid-cols-1 gap-2 text-[0.95rem] text-slate-300">
            {selectedNode.courses.map((course) => (
              <li key={course} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedNode.topics && (
        <div className="mt-9">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
            Related Topics
          </p>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {selectedNode.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border px-4 py-1.5 text-xs font-semibold"
                style={{
                  borderColor: `${selectedNode.color}42`,
                  backgroundColor: `${selectedNode.color}18`,
                  color: selectedNode.color,
                }}
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