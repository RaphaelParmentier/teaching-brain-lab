"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { artifactMissionFilters, teachingArtifacts } from "@/data/teaching-artifacts";

const kindLabels = {
  notebook: "Notebook",
  dashboard: "Dashboard",
  report: "Report",
  matrix: "Matrix",
  workflow: "Workflow",
  executive: "Executive brief",
};

export default function TeachingArtifactsSection() {
  const [activeMission, setActiveMission] = useState("all");

  const visibleArtifacts = useMemo(() => {
    if (activeMission === "all") return teachingArtifacts;
    return teachingArtifacts.filter((artifact) => artifact.missionId === activeMission);
  }, [activeMission]);

  return (
    <section id="artifacts" className="relative overflow-hidden bg-[#080D1C] px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(249,115,22,0.20),transparent_34%),radial-gradient(circle_at_15%_30%,rgba(59,130,246,0.12),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">
            Teaching proof system
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            From pedagogical concepts to professional-grade student deliverables.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
            Each mission is documented through concrete artifacts: analytical notebooks, quality audits,
            dashboards, evaluation matrices and executive recommendations. The goal is to show what learners
            can actually produce after the training sequence.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {artifactMissionFilters.map((filter) => {
            const isActive = activeMission === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveMission(filter.id)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-orange-400 bg-orange-500/20 text-orange-100 shadow-[0_0_30px_rgba(249,115,22,0.18)]"
                    : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-orange-400/50 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {visibleArtifacts.map((artifact) => (
            <article
              key={artifact.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/30 backdrop-blur"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-950">
                <Image
                  src={artifact.image}
                  alt={`${artifact.title} mockup`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.025]"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-200">
                    {kindLabels[artifact.kind]}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                    {artifact.program}
                  </span>
                </div>

                <p className="text-sm font-medium text-orange-300">{artifact.missionTitle}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{artifact.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{artifact.description}</p>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {artifact.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/20 p-3">
                      <p className="text-xs text-slate-400">{metric.label}</p>
                      <p className="mt-1 text-lg font-semibold text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {artifact.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="mt-5 border-t border-white/10 pt-4 text-sm text-slate-400">
                  <span className="text-slate-200">Proof:</span> {artifact.proofLabel}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
