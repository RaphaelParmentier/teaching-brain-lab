import type { TeachingMission } from "@/data/teaching-missions";
import { missionPreviews } from "@/data/mission-previews";

type TeachingMissionCardProps = {
  mission: TeachingMission;
};

export default function TeachingMissionCard({
  mission,
}: TeachingMissionCardProps) {
  const previews = missionPreviews.filter(
    (preview) => preview.missionId === mission.id,
  );

  return (
    <article className="min-h-[430px] rounded-[1.6rem] border border-orange-400/25 bg-[#080D1C]/96 p-6 text-white shadow-[0_0_45px_rgba(0,0,0,0.65)] backdrop-blur-xl">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-300">
        Teaching Mission
      </p>

      <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em]">
        {mission.title}
      </h3>

      <p className="mt-4 text-base leading-7 text-slate-300">
        {mission.context}
      </p>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
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
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2"
            >
              <span className="text-sm text-slate-200">{deliverable}</span>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-orange-300">
                Expected
              </span>
            </div>
          ))}
        </div>
      </div>

      {previews.length > 0 && (
        <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-300">
            Realistic student preview
          </p>

          {previews.map((preview) => (
            <section
              key={`${preview.missionId}-${preview.title}`}
              className="rounded-2xl border border-white/10 bg-slate-950/80 p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {preview.format}
                  </p>
                  <h4 className="mt-1 text-base font-semibold text-white">
                    {preview.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    {preview.subtitle}
                  </p>
                </div>
              </div>

              {preview.code && (
                <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-xs leading-5 text-slate-200">
                  <code>{preview.code}</code>
                </pre>
              )}

              {preview.table && (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="text-slate-400">
                      <tr>
                        {preview.table.headers.map((header) => (
                          <th key={header} className="border-b border-white/10 py-2">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {preview.table.rows.map((row) => (
                        <tr key={row.join("-")} className="text-slate-200">
                          {row.map((cell) => (
                            <td key={cell} className="border-b border-white/5 py-2">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {preview.insight}
              </p>
            </section>
          ))}
        </div>
      )}
    </article>
  );
}