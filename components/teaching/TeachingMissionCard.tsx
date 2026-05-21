import type { TeachingMission } from "@/data/teaching-missions";

type TeachingMissionCardProps = {
  mission: TeachingMission;
};

export default function TeachingMissionCard({
  mission,
}: TeachingMissionCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-orange-400/25 bg-[#080D1C]/96 p-5 text-white shadow-[0_0_45px_rgba(0,0,0,0.65)] backdrop-blur-xl">
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-orange-300">
        Teaching Mission
      </p>

      <div className="mt-3 grid grid-cols-[1fr_1.15fr] gap-5">
        <div>
          <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em]">
            {mission.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            {mission.description}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-slate-400">
            Objective
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            {mission.objective}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {mission.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}