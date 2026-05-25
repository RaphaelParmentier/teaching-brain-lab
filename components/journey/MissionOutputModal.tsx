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
    <div className="fixed inset-0 z-[100] bg-black/80 p-3 backdrop-blur-md sm:p-6">
      <section className="mx-auto flex max-h-[94dvh] w-full max-w-7xl flex-col overflow-hidden rounded-[1.5rem] border border-orange-400/20 bg-[#080D1C] shadow-[0_0_90px_rgba(0,0,0,0.9)] sm:rounded-[2rem]">
        <header className="sticky top-0 z-10 border-b border-white/10 bg-[#080D1C]/95 p-5 backdrop-blur-md sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-300">
                Student outputs
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                {mission.title}
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
                Examples of what students build during the mission: RMarkdown
                chunks, console outputs, visualisation code and analytical
                conclusions.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-orange-400/40 hover:text-orange-200"
            >
              Close
            </button>
          </div>
        </header>

        <div className="overflow-y-auto p-5 sm:p-8">
          {previews.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <p className="text-sm leading-6 text-slate-300">
                Student output previews are being prepared for this mission.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 xl:grid-cols-2">
              {previews.map((preview) => (
                <article
                  key={`${preview.missionId}-${preview.title}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-300">
                    {preview.format}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                    {preview.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {preview.subtitle}
                  </p>

                  {preview.code && (
                    <pre className="mt-5 max-h-[420px] overflow-auto rounded-xl border border-white/10 bg-black/55 p-4 text-[0.72rem] leading-6 text-slate-200 sm:p-5 sm:text-xs">
                      <code>{preview.code}</code>
                    </pre>
                  )}

                  {preview.output && (
                    <pre className="mt-5 max-h-[320px] overflow-auto rounded-xl border border-white/10 bg-black/35 p-4 text-[0.72rem] leading-6 text-slate-300 sm:p-5 sm:text-xs">
                      <code>{preview.output}</code>
                    </pre>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}