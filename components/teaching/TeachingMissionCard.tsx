import type { TeachingMission } from "@/data/teaching-missions";

type TeachingMissionCardProps = {
  mission: TeachingMission;
};

export default function TeachingMissionCard({
  mission,
}: TeachingMissionCardProps) {
  return (
    <article className="min-h-[430px] rounded-[1.6rem] border border-orange-400/25 bg-[#080D1C]/96 p-6 text-white shadow-[0_0_45px_rgba(0,0,0,0.65)] backdrop-blur-xl">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-300">
        Teaching Mission
      </p>

      <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em]">
        {mission.title}
      </h3>

      <p className="mt-4 text-base leading-7 text-slate-300">
        {mission.objective}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {mission.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-200"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
          Student deliverables
        </p>

        <div className="mt-3 grid gap-2">
          {mission.deliverables.map((deliverable) => (
            <div
              key={deliverable}
              className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-200"
            >
              {deliverable}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}