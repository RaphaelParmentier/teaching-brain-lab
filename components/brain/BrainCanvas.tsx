"use client";

import { useState } from "react";

import { brainNodes } from "@/data/brain-nodes";
import type { BrainNodeData } from "@/data/brain-nodes";
import BrainPanel from "@/components/brain/BrainPanel";
import LearningJourney from "@/components/journey/LearningJourney";

type Position = { x: number; y: number };

const nodePositions: Record<string, Position> = {
  core: { x: 50, y: 45 },
  "data-strategy": { x: 29, y: 53 },
  "statistical-reasoning": { x: 38, y: 31 },
  "ml-strategy": { x: 58, y: 30 },
  "ai-workflows": { x: 70, y: 52 },
  communication: { x: 53, y: 70 },
};

const routes = [
  { id: "data-stats", from: "data-strategy", to: "statistical-reasoning", kind: "progression" },
  { id: "stats-ml", from: "statistical-reasoning", to: "ml-strategy", kind: "progression" },
  { id: "ml-ai", from: "ml-strategy", to: "ai-workflows", kind: "progression" },

  { id: "core-data", from: "core", to: "data-strategy", kind: "core" },
  { id: "core-stats", from: "core", to: "statistical-reasoning", kind: "core" },
  { id: "core-ml", from: "core", to: "ml-strategy", kind: "core" },
  { id: "core-ai", from: "core", to: "ai-workflows", kind: "core" },
  { id: "core-communication", from: "core", to: "communication", kind: "core" },

  { id: "data-communication", from: "data-strategy", to: "communication", kind: "communication" },
  { id: "stats-communication", from: "statistical-reasoning", to: "communication", kind: "communication" },
  { id: "ml-communication", from: "ml-strategy", to: "communication", kind: "communication" },
  { id: "ai-communication", from: "ai-workflows", to: "communication", kind: "communication" },
];

const semanticRoutes: Record<string, string[]> = {
  core: ["core-data", "core-stats", "core-ml", "core-ai", "core-communication"],
  "data-strategy": ["core-data", "data-stats", "data-communication"],
  "statistical-reasoning": ["core-stats", "data-stats", "stats-ml", "stats-communication"],
  "ml-strategy": ["core-ml", "stats-ml", "ml-ai", "ml-communication"],
  "ai-workflows": ["core-ai", "ml-ai", "ai-communication"],
  communication: [
    "core-communication",
    "data-communication",
    "stats-communication",
    "ml-communication",
    "ai-communication",
  ],
};

const routeDescriptions: Record<
  string,
  { label: string; path: string; description: string }
> = {
  core: {
    label: "Teaching System",
    path: "Learning by doing connects every program.",
    description:
      "The central philosophy: students learn by building concrete analytical deliverables.",
  },
  "data-strategy": {
    label: "Data Strategy Route",
    path: "Raw Data → Cleaning → KPIs → Decision Support",
    description:
      "Students learn how to turn messy data into structured business recommendations.",
  },
  "statistical-reasoning": {
    label: "Statistical Reasoning Route",
    path: "Data Strategy → Statistical Reasoning → Machine Learning",
    description:
      "Students learn to interpret evidence, uncertainty and bias before building models.",
  },
  "ml-strategy": {
    label: "Machine Learning Route",
    path: "Statistics → Model Training → Validation → Interpretation",
    description:
      "Students learn how predictive models are trained, evaluated and explained.",
  },
  "ai-workflows": {
    label: "AI Workflow Route",
    path: "Machine Learning → LLMs → AI Assistants → Evaluation",
    description:
      "Students learn how modern AI systems work and how to use them responsibly.",
  },
  communication: {
    label: "Communication Route",
    path: "Analysis → Report → Presentation → Decision",
    description:
      "Students learn to transform technical work into clear professional deliverables.",
  },
};

function getCurve(from: Position, to: Position, kind: string) {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;

  if (kind === "progression") {
    return `M ${from.x} ${from.y} C ${midX} ${from.y - 11}, ${midX} ${
      to.y - 11
    }, ${to.x} ${to.y}`;
  }

  if (kind === "communication") {
    return `M ${from.x} ${from.y} C ${midX} ${midY + 15}, ${midX} ${
      to.y + 10
    }, ${to.x} ${to.y}`;
  }

  return `M ${from.x} ${from.y} C ${midX} ${from.y - 5}, ${midX} ${
    to.y + 5
  }, ${to.x} ${to.y}`;
}

export default function BrainCanvas() {
  const [selectedNode, setSelectedNode] = useState<BrainNodeData | null>(null);

  const activeNodeId = selectedNode?.id ?? "core";
  const activeRouteIds = semanticRoutes[activeNodeId] ?? [];
  const activeColor = selectedNode?.color ?? "#F97316";

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[#050505]" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(720px circle at 50% 48%, rgba(249,115,22,0.075), transparent 58%),
            radial-gradient(640px circle at 57% 48%, ${activeColor}18, transparent 62%)
          `,
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0.94)_100%)]" />

      <div className="absolute left-12 top-10 z-20 max-w-[560px]">
        <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-300 shadow-[0_0_35px_rgba(249,115,22,0.18)]">
          <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.95)]" />
          RP Systems • Teaching
        </div>

        <h1
          className="
            mt-7
            max-w-[760px]
            text-5xl
            sm:text-6xl
            md:text-7xl
            xl:text-8xl
            2xl:text-[8.5rem]
            font-semibold
            leading-[0.9]
            tracking-[-0.075em]
            text-white
          "
        >
          Teaching data and AI through real projects.
        </h1>

        <p className="mt-8 max-w-[620px] text-[clamp(1.25rem,1.15vw,1.75rem)] leading-[1.55] text-slate-300">
          A learning-by-doing architecture where data foundations, statistical
          reasoning, machine learning and AI workflows connect into professional
          deliverables.
        </p>
        <div className="mt-8 max-w-sm">
          <LearningJourney onOpen={() => setSelectedNode(null)} />
          <p className="mt-7 max-w-[560px] text-lg leading-8 text-slate-300">
            Explore real student projects, analytical workflows and professional deliverables.
          </p>
        </div>
      </div>

      <div className="absolute inset-0 z-10">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="brainGlow">
              <feGaussianBlur stdDeviation="1.1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="
              M 22 54
              C 17 45, 20 34, 29 30
              C 29 21, 38 16, 47 19
              C 54 12, 66 15, 69 24
              C 81 25, 86 35, 83 47
              C 91 57, 84 70, 70 72
              C 64 81, 50 82, 43 75
              C 33 78, 23 70, 24 61
              C 19 59, 18 56, 22 54
              Z
            "
            fill="rgba(249,115,22,0.035)"
            stroke="rgba(249,115,22,0.16)"
            strokeWidth="0.18"
          />

          <path
            d="
              M 50 21
              C 49 31, 49 41, 50 52
              C 51 61, 52 68, 53 76
            "
            fill="none"
            stroke="rgba(249,115,22,0.11)"
            strokeWidth="0.12"
          />

          <path
            d="M 28 42 C 37 38, 44 39, 50 45 C 57 39, 67 39, 78 43"
            fill="none"
            stroke="rgba(249,115,22,0.1)"
            strokeWidth="0.12"
          />

          <path
            d="M 30 60 C 40 55, 48 56, 54 63 C 61 56, 70 57, 78 62"
            fill="none"
            stroke="rgba(249,115,22,0.085)"
            strokeWidth="0.11"
          />

          {routes.map((route) => {
            const from = nodePositions[route.from];
            const to = nodePositions[route.to];
            const isActive = activeRouteIds.includes(route.id);
            const path = getCurve(from, to, route.kind);

            return (
              <g key={route.id}>
                <path
                  d={path}
                  fill="none"
                  stroke={
                    isActive
                      ? `${activeColor}55`
                      : "rgba(249,115,22,0.10)"
                  }
                  strokeWidth={isActive ? 0.72 : 0.16}
                  strokeLinecap="round"
                  filter={isActive ? "url(#brainGlow)" : undefined}
                />

                <path
                  className={isActive ? "neural-route-active" : "neural-route"}
                  d={path}
                  fill="none"
                  stroke={
                    isActive
                      ? activeColor
                      : "rgba(249,115,22,0.20)"
                  }
                  strokeWidth={isActive ? 0.22 : 0.07}
                  strokeDasharray="0.9 1.3"
                  strokeLinecap="round"
                />

                {isActive && (
                  <circle r="0.42" fill={activeColor}>
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      path={path}
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {brainNodes.map((node) => (
          <NeuralNode
            key={node.id}
            node={node}
            position={nodePositions[node.id]}
            isActive={activeNodeId === node.id}
            isCore={node.id === "core"}
            onClick={() => setSelectedNode(node)}
          />
        ))}

        <div
          className="absolute bottom-10 left-1/2 z-20 w-[clamp(460px,32vw,620px)] -translate-x-1/2 rounded-[1.5rem] border bg-[#080D1C]/92 p-5 shadow-[0_0_50px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          style={{
            borderColor: `${activeColor}45`,
            boxShadow: `0 0 55px rgba(0,0,0,0.72), 0 0 34px ${activeColor}18`,
          }}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.28em]"
            style={{ color: activeColor }}
          >
            {routeDescriptions[activeNodeId].label}
          </p>

          <p className="mt-3 text-base font-semibold leading-6 text-white">
            {routeDescriptions[activeNodeId].path}
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {routeDescriptions[activeNodeId].description}
          </p>
        </div>
      </div>

      <BrainPanel
        selectedNode={selectedNode}
        onClose={() => setSelectedNode(null)}
      />
    </section>
  );
}

function NeuralNode({
  node,
  position,
  isActive,
  isCore,
  onClick,
}: {
  node: BrainNodeData;
  position: Position;
  isActive: boolean;
  isCore: boolean;
  onClick: () => void;
}) {
  const size = isCore ? "h-24 w-24" : "h-16 w-16";
  const haloSize = isCore ? "h-48 w-48" : "h-28 w-28";
  const dotSize = isCore ? "h-5 w-5" : "h-4 w-4";

  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute flex h-36 w-72 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center outline-none"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      aria-label={node.label}
    >
      <span
        className={`absolute top-0 rounded-full blur-3xl transition duration-500 ${haloSize}`}
        style={{
          backgroundColor: node.color,
          opacity: isActive ? 0.62 : 0.15,
        }}
      />

      <span
        className={`relative flex items-center justify-center rounded-full border transition duration-500 ${size}`}
        style={{
          borderColor: isActive ? `${node.color}CC` : `${node.color}55`,
          background: `radial-gradient(circle at 35% 30%, ${node.color}38, rgba(8,13,28,0.94) 58%)`,
          boxShadow: isActive
            ? `0 0 52px ${node.color}AA, inset 0 0 30px ${node.color}35`
            : `0 0 20px ${node.color}55, inset 0 0 18px ${node.color}20`,
        }}
      >
        <span
          className={`rounded-full ${dotSize}`}
          style={{
            backgroundColor: node.color,
            boxShadow: `0 0 30px ${node.color}`,
          }}
        />

        <span
          className="absolute inset-[-10px] rounded-full border opacity-60"
          style={{ borderColor: `${node.color}33` }}
        />

        {isCore && (
          <span className="absolute inset-[-18px] rounded-full border border-orange-300/15" />
        )}
      </span>

      <span className="mt-4 max-w-[220px] text-center text-[clamp(1rem,0.95vw,1.45rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.95)]">
        {node.label}
      </span>

      <span
        className="mt-2 text-[clamp(0.65rem,0.5vw,0.85rem)] font-bold uppercase tracking-[0.28em]"
        style={{ color: node.color }}
      >
        Click to explore
      </span>
    </button>
  );
}