import { BrainNodeData } from "@/data/brain-nodes";

type BrainPanelProps = {
  selectedNode: BrainNodeData | null;
  onClose: () => void;
};

export default function BrainPanel({
  selectedNode,
  onClose,
}: BrainPanelProps) {
  if (!selectedNode) return null;

  return (
    <aside
      className="absolute right-8 bottom-8 z-40 w-[480px] rounded-[2rem] border bg-[#080D1C]/96 p-8 backdrop-blur-xl"
      style={{
        borderColor: `${selectedNode.color}35`,
        boxShadow: `0 0 80px rgba(0,0,0,0.75),
                    0 0 50px ${selectedNode.color}15`,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:text-white"
      >
        ×
      </button>

      <div className="flex items-center gap-3">
        <span
          className="h-4 w-4 rounded-full"
          style={{
            backgroundColor: selectedNode.color,
            boxShadow: `0 0 20px ${selectedNode.color}`,
          }}
        />

        <p
          className="text-xs font-bold uppercase tracking-[0.35em]"
          style={{ color: selectedNode.color }}
        >
          {selectedNode.category}
        </p>
      </div>

      <h2 className="mt-6 text-[3rem] font-semibold tracking-[-0.05em] text-white">
        {selectedNode.label}
      </h2>

      <p className="mt-5 text-[1.3rem] leading-9 text-slate-200">
        {selectedNode.description}
      </p>

      {selectedNode.missions && (
        <div className="mt-10">
          <p
            className="text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: selectedNode.color }}
          >
            What students actually do
          </p>

          <div className="mt-5 space-y-4">
            {selectedNode.missions.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4"
              >
                <p className="text-base leading-7 text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedNode.topics && (
        <div className="mt-10">
          <p
            className="text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: selectedNode.color }}
          >
            Key concepts
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {selectedNode.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border px-4 py-2 text-sm font-medium"
                style={{
                  borderColor: `${selectedNode.color}35`,
                  backgroundColor: `${selectedNode.color}10`,
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