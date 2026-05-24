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
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-6 backdrop-blur-md">
      <section className="max-h-[88vh] w-full max-w-7xl overflow-y-auto rounded-[2rem] border border-orange-400/20 bg-[#080D1C] p-8 shadow-[0_0_90px_rgba(0,0,0,0.9)]">
        <header className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-300">
              Student outputs
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">
              {mission.title}
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
              Extraits réalistes de livrables étudiants : chunks RMarkdown,
              sorties console, tableaux tibble, notebooks, code de visualisation
              et notes d’interprétation.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-orange-400/40 hover:text-orange-200"
          >
            Close
          </button>
        </header>

        {previews.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <p className="text-sm leading-6 text-slate-300">
              Aucun aperçu n’est encore disponible pour cette mission.
            </p>
          </div>
        ) : (
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
                  <pre className="mt-5 max-h-[360px] overflow-auto rounded-xl border border-white/10 bg-black/55 p-5 text-xs leading-6 text-slate-200">
                    <code>{preview.code}</code>
                  </pre>
                )}

                {preview.output && (
                  <pre className="mt-5 max-h-[300px] overflow-auto rounded-xl border border-white/10 bg-black/35 p-5 text-xs leading-6 text-slate-300">
                    <code>{preview.output}</code>
                  </pre>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
