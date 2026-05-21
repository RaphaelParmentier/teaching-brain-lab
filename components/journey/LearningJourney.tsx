"use client";

import { useState } from "react";
import { learningPath } from "@/data/learning-path";
import { teachingMissions } from "@/data/teaching-missions";

export default function LearningJourney() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(learningPath[0]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-full border border-orange-400/30 bg-orange-400/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-200 shadow-[0_0_35px_rgba(249,115,22,0.18)] backdrop-blur-xl transition hover:bg-orange-400/20"
      >
        Explore Teaching System
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-8 backdrop-blur-md">
          <div className="grid h-[84vh] w-[88vw] max-w-[1720px] grid-cols-[420px_1fr] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080D1C]/96 shadow-[0_0_100px_rgba(0,0,0,0.85)]">
            <aside className="border-r border-white/10 p-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
                RP Systems • Journey
              </div>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white">
                From data literacy to applied AI systems.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-300">
                A structured progression designed to move learners from basic
                analytical intuition to autonomous project delivery.
              </p>

              <div className="mt-7 space-y-3">
                {learningPath.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setSelectedStep(step)}
                    className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition ${
                      selectedStep.id === step.id
                        ? "border-orange-400/45 bg-orange-400/12"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/30 text-sm font-semibold text-orange-200">
                      {index + 1}
                    </span>

                    <div>
                      <p className="text-base font-semibold text-white">
                        {step.title}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                        {step.level}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </aside>

            <main className="relative overflow-y-auto p-10">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-8 top-8 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 hover:bg-white/10"
              >
                Close
              </button>

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
                {selectedStep.level}
              </p>

              <h3 className="mt-4 max-w-4xl text-6xl font-semibold tracking-[-0.06em] text-white">
                {selectedStep.title}
              </h3>

              <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
                {selectedStep.description}
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6">
                <InfoBlock title="Concepts" items={selectedStep.concepts} />
                <InfoBlock title="Tools" items={selectedStep.tools} />
                <InfoBlock title="Projects" items={selectedStep.projects} />
              </div>

              <section className="mt-10">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
                  Teaching Missions
                </p>

                <div className="mt-5 grid grid-cols-3 gap-5">
                  {teachingMissions.map((mission) => (
                    <article
                      key={mission.id}
                      className="rounded-[1.5rem] border border-orange-400/20 bg-white/5 p-6"
                    >
                      <h4 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-white">
                        {mission.title}
                      </h4>

                      <p className="mt-4 text-base leading-7 text-slate-300">
                        {mission.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {mission.tools.slice(0, 4).map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      )}
    </>
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