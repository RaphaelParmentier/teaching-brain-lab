"use client";

import { useMemo, useState } from "react";

import { learningPhilosophy } from "@/data/learning-philosophy";
import { teachingMissions } from "@/data/teaching-missions";
import type { TeachingMission } from "@/data/teaching-missions";
import { teachingPrograms } from "@/data/teaching-programs";
import MissionOutputModal from "@/components/journey/MissionOutputModal";

export default function ResponsiveTeachingLab() {
  const [selectedProgramId, setSelectedProgramId] = useState(
    teachingPrograms[0].id,
  );
  const [selectedMission, setSelectedMission] =
    useState<TeachingMission | null>(null);

  const selectedProgram = useMemo(
    () =>
      teachingPrograms.find((program) => program.id === selectedProgramId) ??
      teachingPrograms[0],
    [selectedProgramId],
  );

  const relatedMissions = useMemo(
    () =>
      teachingMissions.filter((mission) =>
        selectedProgram.missionIds.includes(mission.id),
      ),
    [selectedProgram],
  );

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden px-5 pb-10 pt-8 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_38%)]" />

        <div className="relative mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
            <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.95)]" />
            RP Systems • Teaching
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl">
            Teaching data and AI through real projects.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Students learn by cleaning data, building analyses, comparing
            models and explaining decisions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-8 lg:px-12">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_70px_rgba(0,0,0,0.55)] sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-orange-300">
            Choose a program
          </p>

          <select
            value={selectedProgramId}
            onChange={(event) => setSelectedProgramId(event.target.value)}
            className="mt-5 w-full rounded-2xl border border-white/10 bg-[#080D1C] px-4 py-4 text-base font-semibold text-white outline-none"
          >
            {teachingPrograms.map((program) => (
              <option key={program.id} value={program.id}>
                {program.title}
              </option>
            ))}
          </select>

          <h2 className="mt-7 text-3xl font-semibold tracking-[-0.055em] text-white sm:text-5xl">
            {selectedProgram.title}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            {selectedProgram.tagline}
          </p>

          <div className="mt-6 rounded-2xl border border-orange-400/15 bg-orange-400/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-300">
              During the course
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              {selectedProgram.objective}
            </p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <ChipBlock title="Practiced skills" items={selectedProgram.skills} />
            <ChipBlock title="Key ideas" items={selectedProgram.concepts} />
            <ChipBlock title="Tools used" items={selectedProgram.tools} />
          </div>
        </section>

        <section className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-orange-300">
            What students build
          </p>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {relatedMissions.map((mission) => (
              <article
                key={mission.id}
                className="rounded-[1.75rem] border border-orange-400/15 bg-white/[0.04] p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-orange-200">
                    {mission.category}
                  </span>

                  <span className="text-xs uppercase tracking-[0.16em] text-slate-400">
                    {mission.duration}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.045em] text-white">
                  {mission.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {mission.context}
                </p>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-300">
                    Outputs
                  </p>

                  <ul className="mt-3 space-y-2">
                    {mission.deliverables.slice(0, 4).map((item) => (
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
                  onClick={() => setSelectedMission(mission)}
                  className="mt-6 rounded-full border border-orange-400/30 bg-orange-400/10 px-5 py-2 text-sm font-semibold text-orange-200 transition hover:bg-orange-400/20"
                >
                  View student outputs
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-cyan-200">
            How I teach
          </p>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {learningPhilosophy.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-cyan-400/15 bg-cyan-400/10 p-5"
              >
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>

      {selectedMission && (
        <MissionOutputModal
          mission={selectedMission}
          onClose={() => setSelectedMission(null)}
        />
      )}
    </main>
  );
}

function ChipBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
        {title}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.slice(0, 6).map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
