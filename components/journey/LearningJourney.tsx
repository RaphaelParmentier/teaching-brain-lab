"use client";

import { useMemo, useState } from "react";

import { learningPhilosophy } from "../../data/learning-philosophy";
import { teachingMissions } from "../../data/teaching-missions";
import { teachingPrograms } from "../../data/teaching-programs";
import MissionOutputModal from "./MissionOutputModal";

type LearningJourneyProps = {
  onOpen?: () => void;
};

export default function LearningJourney({ onOpen }: LearningJourneyProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(teachingPrograms[0]);
  const [selectedMission, setSelectedMission] = useState<any | null>(null);

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
        className="
          group
          rounded-2xl
          border
          border-orange-400/40
          bg-gradient-to-r
          from-orange-500/20
          to-orange-400/10
          px-7
          py-4
          text-sm
          font-bold
          uppercase
          tracking-[0.22em]
          text-orange-100
          shadow-[0_0_40px_rgba(249,115,22,0.28)]
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:border-orange-300
          hover:shadow-[0_0_60px_rgba(249,115,22,0.45)]
        "
      >
        View Programs & Student Deliverables
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-8 backdrop-blur-md">
          <div className="grid h-[86vh] w-[90vw] max-w-[1780px] grid-cols-[430px_1fr] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080D1C]/96 shadow-[0_0_100px_rgba(0,0,0,0.85)]">
            <aside className="border-r border-white/10 p-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
                RP Systems • Teaching
              </div>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white">
                Applied Data & AI Education.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-300">
                Teaching programs designed around realistic projects, rigorous
                reasoning and professional deliverables.
              </p>

              <div className="mt-7 space-y-3">
                {teachingPrograms.map((program, index) => (
                  <button
                    key={program.id}
                    type="button"
                    onClick={() => setSelectedProgram(program)}
                    className={`flex w-full items-start gap-4 rounded-2xl border px-4 py-4 text-left transition ${
                      selectedProgram.id === program.id
                        ? "border-orange-400/45 bg-orange-400/12"
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

            <main className="relative overflow-y-auto p-10">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-8 top-8 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 hover:bg-white/10"
              >
                Close
              </button>

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
                Teaching Program
              </p>

              <h3 className="mt-4 max-w-4xl text-6xl font-semibold tracking-[-0.06em] text-white">
                {selectedProgram.title}
              </h3>

              <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-300">
                {selectedProgram.tagline}
              </p>

              <div className="mt-8 grid grid-cols-3 gap-5">
                <ProgramBlock title="Level" value={selectedProgram.level} />
                <ProgramBlock title="Format" value={selectedProgram.format} />
                <ProgramBlock
                  title="Entry Profile"
                  value={selectedProgram.entryProfile}
                />
              </div>

              <section className="mt-10 rounded-[1.75rem] border border-orange-400/15 bg-orange-400/10 p-7">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
                  Objective
                </p>

                <p className="mt-4 text-lg leading-8 text-slate-200">
                  {selectedProgram.objective}
                </p>

                <p className="mt-5 text-sm font-bold uppercase tracking-[0.3em] text-slate-400">
                  Expected Outcome
                </p>

                <p className="mt-3 text-base leading-7 text-slate-300">
                  {selectedProgram.expectedOutcome}
                </p>
              </section>

              <section className="mt-10">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
                  Teaching Philosophy
                </p>

                <div className="mt-5 grid grid-cols-3 gap-5">
                  {learningPhilosophy.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-cyan-400/15 bg-cyan-400/10 p-6"
                    >
                      <h4 className="text-xl font-semibold tracking-[-0.04em] text-white">
                        {item.title}
                      </h4>

                      <p className="mt-4 text-sm leading-6 text-slate-300">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <InfoBlock title="Skills" items={selectedProgram.skills} />
                <InfoBlock title="Concepts" items={selectedProgram.concepts} />
                <InfoBlock title="Tools" items={selectedProgram.tools} />
              </div>

              <section className="mt-10">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
                  Teaching Missions
                </p>

                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">
                  Practical cases used to turn the program into concrete student
                  work. Each mission is designed around real analytical
                  workflows and professional deliverables.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-5">
                  {relatedMissions.map((mission) => (
                    <MissionPreview
                      key={mission.id}
                      mission={mission}
                      onOpenOutputs={() => setSelectedMission(mission)}
                    />
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

function ProgramBlock({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
        {title}
      </p>

      <p className="mt-3 text-base leading-7 text-slate-200">{value}</p>
    </div>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="min-h-[180px] rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
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
  mission: any;
  onOpenOutputs: () => void;
}) {
  return (
    <article className="rounded-[1.75rem] border border-orange-400/15 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:border-orange-400/35 hover:bg-white/[0.06]">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
          {mission.category}
        </span>

        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
          {mission.level}
        </span>
      </div>

      <h4 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white">
        {mission.title}
      </h4>

      <p className="mt-5 text-base leading-7 text-slate-300">
        {mission.objective}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {mission.skills.slice(0, 4).map((skill: string) => (
          <span
            key={skill}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-7">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
          Student Deliverables
        </p>

        <ul className="mt-4 space-y-2">
          {mission.deliverables.slice(0, 4).map((item: string) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm text-slate-300"
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
        className="mt-6 rounded-full border border-orange-400/30 bg-orange-400/10 px-5 py-2 text-sm font-semibold text-orange-200 transition hover:border-orange-300 hover:bg-orange-400/20"
      >
        View student outputs
      </button>
    </article>
  );
}