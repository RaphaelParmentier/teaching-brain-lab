import { learningPath } from "@/data/learning-path";

export default function ActiveLearningRoute({
  currentStepId,
}: {
  currentStepId: string;
}) {
  const currentIndex = learningPath.findIndex(
    (step) => step.id === currentStepId
  );

  return (
    <div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
        Active Learning Route
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        {learningPath.map((step, index) => {
          const active = index <= currentIndex;

          return (
            <div
              key={step.id}
              className="flex items-center gap-3"
            >
              <span
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  active
                    ? "border-cyan-300/40 bg-cyan-300/15 text-cyan-100"
                    : "border-white/10 bg-white/5 text-slate-500"
                }`}
              >
                {step.title}
              </span>

              {index < learningPath.length - 1 && (
                <span
                  className={
                    active
                      ? "text-cyan-300"
                      : "text-slate-700"
                  }
                >
                  →
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}