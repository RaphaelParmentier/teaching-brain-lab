import { missionPreviews } from "@/data/mission-previews";

type MissionOutputModalProps = {
  mission: any;
  onClose: () => void;
};

export default function MissionOutputModal({
  mission,
  onClose,
}: MissionOutputModalProps) {
  const previews = missionPreviews.filter(
    (preview) => preview.missionId === mission.id,
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-md">
      <section className="max-h-[88vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-orange-400/20 bg-[#080D1C] p-8 shadow-[0_0_80px_rgba(0,0,0,0.85)]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-300">
              Student outputs
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">
              {mission.title}
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
              Realistic examples of what students are expected to produce after
              completing this applied teaching mission.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:border-orange-400/40 hover:text-orange-200"
          >
            Close
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {previews.map((preview) => (
            <article
              key={`${preview.missionId}-${preview.title}`}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-300">
                {preview.format}
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                {preview.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {preview.subtitle}
              </p>

              {preview.code && (
                <pre className="mt-5 max-h-[320px] overflow-auto rounded-xl border border-white/10 bg-black/50 p-5 text-xs leading-6 text-slate-200">
                  <code>{preview.code}</code>
                </pre>
              )}

              {preview.table && (
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="text-slate-400">
                      <tr>
                        {preview.table.headers.map((header) => (
                          <th
                            key={header}
                            className="border-b border-white/10 py-3 pr-4"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {preview.table.rows.map((row) => (
                        <tr key={row.join("-")} className="text-slate-200">
                          {row.map((cell) => (
                            <td
                              key={cell}
                              className="border-b border-white/5 py-3 pr-4"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <p className="mt-5 text-sm leading-6 text-slate-300">
                {preview.insight}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}