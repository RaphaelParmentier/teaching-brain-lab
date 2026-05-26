import { BrainNodeData } from "@/data/brain-nodes";

type BrainPanelProps = {
  selectedNode: BrainNodeData | null;
  onClose: () => void;
};

type ExtendedBrainNodeData = BrainNodeData & {
  missions?: string[];
  topics?: string[];
};

export default function BrainPanel({
  selectedNode,
  onClose,
}: BrainPanelProps) {
  if (!selectedNode) return null;

  const node = selectedNode as ExtendedBrainNodeData;

  return (
    <aside
      className="absolute bottom-8 right-8 z-40 w-[clamp(420px,30vw,560px)] max-h-[64vh] overflow-y-auto rounded-[2rem] border bg-[#080D1C]/96 p-[clamp(1.6rem,1.55vw,2rem)] backdrop-blur-xl"
      style={{
        borderColor: `${node.color}35`,
        boxShadow: `0 0 80px rgba(0,0,0,0.75), 0 0 50px ${node.color}15`,
      }}
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close node details"
        className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-400 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
      >
        ×
      </button>

      <div className="flex items-center gap-3 pr-14">
        <span
          className="h-4 w-4 shrink-0 rounded-full"
          style={{
            backgroundColor: node.color,
            boxShadow: `0 0 20px ${node.color}`,
          }}
        />

        <p
          className="text-xs font-bold uppercase tracking-[0.34em]"
          style={{ color: node.color }}
        >
          {node.category}
        </p>
      </div>

      <h2 className="mt-6 pr-12 text-[clamp(2.4rem,2.25vw,3.25rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
        {node.label}
      </h2>

      <p className="mt-5 text-[clamp(1.05rem,0.95vw,1.35rem)] leading-[1.62] text-slate-200">
        {node.description}
      </p>

      {node.missions && node.missions.length > 0 && (
        <div className="mt-8">
          <p
            className="text-xs font-bold uppercase tracking-[0.28em]"
            style={{ color: node.color }}
          >
            What students actually do
          </p>

          <div className="mt-5 space-y-3">
            {node.missions.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/5 bg-white/[0.025] px-5 py-4"
              >
                <p className="text-[clamp(0.95rem,0.82vw,1.05rem)] leading-7 text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {node.topics && node.topics.length > 0 && (
        <div className="mt-8">
          <p
            className="text-xs font-bold uppercase tracking-[0.28em]"
            style={{ color: node.color }}
          >
            Key concepts
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {node.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border px-4 py-2 text-sm font-medium"
                style={{
                  borderColor: `${node.color}35`,
                  backgroundColor: `${node.color}10`,
                  color: node.color,
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
