"use client";

import { useMemo, useState } from "react";

import { learningPhilosophy } from "@/data/learning-philosophy";
import { teachingMissions } from "@/data/teaching-missions";
import type { TeachingMission } from "@/data/teaching-missions";
import { teachingPrograms } from "@/data/teaching-programs";
import type { TeachingProgram } from "@/data/teaching-programs";
import MissionOutputModal from "@/components/journey/MissionOutputModal";

type LearningJourneyProps = {
  onOpen?: () => void;
};

export default function LearningJourney({ onOpen }: LearningJourneyProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<TeachingProgram>(
    teachingPrograms[0],
  );
  const [selectedMission, setSelectedMission] =
    useState<TeachingMission | null>(null);

  const relatedMissions = useMemo(
    () =>
      teachingMissions.filter((mission) =>
        selectedProgram.missionIds.includes(mission.id),
      ),
    [selectedProgram],
  );

  const handleOpen = () => {
    onOpen?.();
    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="rounded-[1.35rem] border border-orange-400/45 bg-gradient-to-r from-orange-500/25 to-orange-400/10 px-9 py-4 text-[clamp(0.85rem,0.72vw,1.05rem)] font-bold uppercase tracking-[0.22em] text-orange-100 shadow-[0_0_50px_rgba(249,115,22,0.32)] transition-all duration-300 hover:scale-[1.025] hover:border-orange-300 hover:shadow-[0_0_75px_rgba(249,115,22,0.5)]"
      >
        See What Students Build
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-[clamp(1rem,2vw,2rem)] backdrop-blur-md">
          <div className="grid h-[88vh] w-[94vw] max-w-[1840px] grid-cols-[clamp(330px,23vw,410px)_1fr] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080D1C]/96 shadow-[0_0_110px_rgba(0,0,0,0.88)]">
            <aside className="border-r border-white/10 p-[clamp(1.5rem,1.5vw,2rem)]">
              <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
                RP Systems • Teaching
              </div>

              <h2 className="mt-7 text-[clamp(2.5rem,2.6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
                Teaching through real work.
              </h2>

              <p className="mt-5 text-[clamp(1rem,0.9vw,1.25rem)] leading-8 text-slate-300">
                Pick a program and see what students actually practice,
                produce and explain.
              </p>

              <div className="mt-8 space-y-3">
                {teachingPrograms.map((program, index) => (
                  <button
                    key={program.id}
                    type="button"
                    onClick={() => setSelectedProgram(program)}
                    className={`flex w-full items-start gap-4 rounded-2xl border px-4 py-4 text-left transition ${
                      selectedProgram.id === program.id
                        ? "border-orange-400/50 bg-orange-400/14"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/30 text-sm font-semibold text-orange-200">
                      {index + 1}
                    </span>

                    <div>
                      <p className="text-base font-semibold text-white">
                        {program.title}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                        {program.level}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </aside>

            <main className="relative overflow-y-auto p-[clamp(2rem,2.4vw,3.25rem)]">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-8 top-8 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 hover:bg-white/10"
              >
                Close
              </button>

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
                What students learn
              </p>

              <h3 className="mt-4 max-w-5xl text-[clamp(4rem,4.25vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white">
                {selectedProgram.title}
              </h3>

              <p className="mt-6 max-w-4xl text-[clamp(1.35rem,1.35vw,2rem)] leading-[1.55] text-slate-300">
                {selectedProgram.tagline}
              </p>

              <section className="mt-9 rounded-[1.75rem] border border-orange-400/18 bg-orange-400/10 p-7">
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-orange-300">
                  During this program
                </p>

                <p className="mt-4 max-w-5xl text-[clamp(1.1rem,1vw,1.45rem)] leading-8 text-slate-200">
                  {selectedProgram.objective}
                </p>
              </section>

              <section className="mt-10">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
                  Real student projects
                </p>

                <p className="mt-3 max-w-3xl text-[clamp(1rem,0.9vw,1.25rem)] leading-8 text-slate-400">
                  Students work on realistic analytical problems and produce
                  the same types of deliverables expected in professional
                  environments.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-6">
                  {relatedMissions.map((mission) => (
                    <MissionPreview
                      key={mission.id}
                      mission={mission}
                      onOpenOutputs={() => setSelectedMission(mission)}
                    />
                  ))}
                </div>
              </section>

              <section className="mt-12 grid grid-cols-3 gap-5">
                <InfoBlock title="Practiced skills" items={selectedProgram.skills} />
                <InfoBlock title="Key ideas" items={selectedProgram.concepts} />
                <InfoBlock title="Tools used" items={selectedProgram.tools} />
              </section>

              <section className="mt-12">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
                  How I teach
                </p>

                <div className="mt-5 grid grid-cols-3 gap-5">
                  {learningPhilosophy.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-cyan-400/15 bg-cyan-400/10 p-6"
                    >
                      <h4 className="text-[clamp(1.35rem,1.25vw,2rem)] font-semibold tracking-[-0.04em] text-white">
                        {item.title}
                      </h4>

                      <p className="mt-4 text-[clamp(0.95rem,0.8vw,1.1rem)] leading-7 text-slate-300">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </main>
          </div>

          {selectedMission && (
            <MissionOutputModal
              mission={selectedMission}
              onClose={() => setSelectedMission(null)}
            />
          )}
        </div>
      )}
    </>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="min-h-[170px] rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
        {title}
      </p>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-sm font-semibold text-cyan-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function MissionPreview({
  mission,
  onOpenOutputs,
}: {
  mission: TeachingMission;
  onOpenOutputs: () => void;
}) {
  return (
    <article className="rounded-[1.75rem] border border-orange-400/15 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:border-orange-400/35 hover:bg-white/[0.06]">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
          {mission.category}
        </span>

        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
          {mission.level}
        </span>
      </div>

      <h4 className="mt-5 text-[clamp(1.8rem,1.65vw,2.6rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
        {mission.title}
      </h4>

      <p className="mt-5 text-[clamp(1rem,0.9vw,1.25rem)] leading-8 text-slate-300">
        {mission.challenge}
      </p>

      <p className="mt-3 text-[clamp(0.92rem,0.8vw,1.1rem)] leading-7 text-slate-400">
        {mission.context}
      </p>

      <div className="mt-7">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
          Students produce
        </p>

        <ul className="mt-4 space-y-2.5">
          {mission.deliverables.slice(0, 4).map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-[clamp(0.95rem,0.8vw,1.1rem)] text-slate-300"
            >
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={onOpenOutputs}
        className="mt-7 rounded-full border border-orange-400/30 bg-orange-400/10 px-6 py-3 text-base font-semibold text-orange-200 transition hover:border-orange-300 hover:bg-orange-400/20"
      >
        View student outputs
      </button>
    </article>
  );
}
