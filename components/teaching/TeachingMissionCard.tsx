import type { TeachingMission } from "@/data/teaching-missions";

type TeachingMissionCardProps = {
  mission: TeachingMission;
};

export default function TeachingMissionCard({
  mission,
}: TeachingMissionCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-orange-400/20 bg-[#080D1C]/95 p-6 shadow-[0_0_45px_rgba(0,0,0,0.55)] backdrop-blur-xl">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-300">
        Teaching Mission
      </p>

      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
        {mission.title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-slate-300">
        {mission.description}
      </p>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          Objective
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          {mission.objective}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {mission.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-orange-400/25 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-200"
          >
            {tool}
          </span>
        ))}
      </div>
    </article>
  );
}