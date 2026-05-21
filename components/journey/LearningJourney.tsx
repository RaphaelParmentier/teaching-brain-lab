"use client";

import { useState } from "react";
import { learningPath } from "@/data/learning-path";

export default function LearningJourney() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(learningPath[0]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute bottom-10 left-12 z-30 rounded-full border border-orange-400/30 bg-orange-400/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-200 shadow-[0_0_35px_rgba(249,115,22,0.18)] backdrop-blur-xl transition hover:bg-orange-400/20"
      >
        Explore Learning Journey
      </button>

      {isOpen && (
        <div className="absolute inset-0 z-40 bg-black/70 backdrop-blur-md">
          <div className="absolute left-1/2 top-1/2 flex h-[78vh] w-[86vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/10 bg-[#080D1C]/95 shadow-[0_0_100px_rgba(0,0,0,0.8)]">
            <div className="w-[42%] border-r border-white/10 p-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
                RP Systems • Journey
              </div>

              <h2 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white">
                From data literacy to applied AI systems.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
                A structured progression designed to move learners from basic
                analytical intuition to autonomous project delivery.
              </p>

              <div className="mt-8 space-y-3">
                {learningPath.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setSelectedStep(step)}
                    className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition ${
                      selectedStep.id === step.id
                        ? "border-orange-400/40 bg-orange-400/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/30 text-sm font-semibold text-orange-200">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {step.title}
                      </p>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        {step.level}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 p-8">
              <button
                onClick={() => setIsOpen(false)}
                className="float-right rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 hover:bg-white/10"
              >
                Close
              </button>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">
                {selectedStep.level}
              </p>

              <h3 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-white">
                {selectedStep.title}
              </h3>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                {selectedStep.description}
              </p>

              <div className="mt-10 grid grid-cols-3 gap-5">
                <InfoBlock title="Concepts" items={selectedStep.concepts} />
                <InfoBlock title="Tools" items={selectedStep.tools} />
                <InfoBlock title="Projects" items={selectedStep.projects} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function InfoBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
        {title}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
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