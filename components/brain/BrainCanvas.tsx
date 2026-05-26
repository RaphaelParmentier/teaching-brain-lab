"use client";

import { useState } from "react";
import type { MouseEvent } from "react";

import { brainNodes } from "@/data/brain-nodes";
import type { BrainNodeData } from "@/data/brain-nodes";
import BrainPanel from "@/components/brain/BrainPanel";
import LearningJourney from "@/components/journey/LearningJourney";

type Position = { x: number; y: number };

const nodePositions: Record<string, Position> = {
  core: { x: 50, y: 45 },
  "data-strategy": { x: 32, y: 53 },
  "statistical-reasoning": { x: 39, y: 31 },
  "ml-strategy": { x: 58, y: 30 },
  "ai-workflows": { x: 69, y: 52 },
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
  communication: ["core-communication", "data-communication", "stats-communication", "ml-communication", "ai-communication"],
};

const routeDescriptions: Record<string, { label: string; path: string; description: string }> = {
  core: {
    label: "Teaching System",
    path: "Learning by doing connects every program.",
    description: "Students learn by building concrete analytical deliverables.",
  },
  "data-strategy": {
    label: "Data Strategy Route",
    path: "Raw Data → Cleaning → KPIs → Decision Support",
    description: "Students turn messy data into structured business recommendations.",
  },
  "statistical-reasoning": {
    label: "Statistical Reasoning Route",
    path: "Evidence → Uncertainty → Interpretation",
    description: "Students learn to interpret results before making claims.",
  },
  "ml-strategy": {
    label: "Machine Learning Route",
    path: "Features → Models → Validation → Explanation",
    description: "Students train, evaluate and explain predictive models.",
  },
  "ai-workflows": {
    label: "AI Workflow Route",
    path: "Context → Prompts → Assistants → Evaluation",
    description: "Students use AI systems productively and critically.",
  },
  communication: {
    label: "Communication Route",
    path: "Analysis → Report → Presentation → Decision",
    description: "Students transform technical work into professional deliverables.",
  },
};

function getCurve(from: Position, to: Position, kind: string) {
  const midX = (from.x + to.x) / 2;

  if (kind === "progression") {
    return `M ${from.x} ${from.y} C ${midX} ${from.y - 11}, ${midX} ${to.y - 11}, ${to.x} ${to.y}`;
  }

  if (kind === "communication") {
    const midY = (from.y + to.y) / 2;
    return `M ${from.x} ${from.y} C ${midX} ${midY + 15}, ${midX} ${to.y + 10}, ${to.x} ${to.y}`;
  }

  return `M ${from.x} ${from.y} C ${midX} ${from.y - 5}, ${midX} ${to.y + 5}, ${to.x} ${to.y}`;
}

export default function BrainCanvas() {
  const [selectedNode, setSelectedNode] = useState<BrainNodeData | null>(null);

  const activeNodeId = selectedNode?.id ?? "core";
  const activeRouteIds = semanticRoutes[activeNodeId] ?? [];
  const activeColor = selectedNode?.color ?? "#F97316";

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-[#050505] text-white"
      onClick={() => setSelectedNode(null)}
    >
      <div className="pointer-events-none absolute inset-0 bg-[#050505]" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at center, black 0%, black 55%, transparent 100%)",
        }}
      />

      <div
        className="absolute left-[clamp(2rem,4vw,7rem)] top-[clamp(2rem,6vh,5rem)] z-20 max-w-[clamp(28rem,35vw,46rem)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
          <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.95)]" />
          RP Systems • Teaching
        </div>

        <h1 className="mt-7 text-[clamp(4.2rem,4.2vw,6.7rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-white">
          Teaching data and AI through real projects.
        </h1>

        <p className="mt-7 max-w-[560px] text-[clamp(1rem,0.9vw,1.3rem)] leading-[1.6] text-slate-300">
          A learning-by-doing architecture where data foundations, statistical
          reasoning, machine learning and AI workflows connect into professional
          deliverables.
        </p>

        <div className="mt-9 max-w-[560px]">
          <LearningJourney onOpen={() => setSelectedNode(null)} />

          <p className="mt-6 max-w-[520px] text-[clamp(0.95rem,0.8vw,1.2rem)] leading-[1.6] text-slate-400">
            Explore real student projects, analytical workflows and professional
            deliverables.
          </p>
        </div>
      </div>

      <div className="absolute inset-0 z-10 origin-center translate-x-[10vw] scale-[0.82] xl:translate-x-[9vw] xl:scale-[0.86] 2xl:translate-x-[4vw] 2xl:scale-100">
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
            d="M 22 54 C 17 45, 20 34, 29 30 C 29 21, 38 16, 47 19 C 54 12, 66 15, 69 24 C 81 25, 86 35, 83 47 C 91 57, 84 70, 70 72 C 64 81, 50 82, 43 75 C 33 78, 23 70, 24 61 C 19 59, 18 56, 22 54 Z"
            fill="rgba(249,115,22,0.035)"
            stroke="rgba(249,115,22,0.16)"
            strokeWidth="0.18"
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
                  stroke={isActive ? `${activeColor}55` : "rgba(249,115,22,0.10)"}
                  strokeWidth={isActive ? 0.72 : 0.16}
                  strokeLinecap="round"
                  filter={isActive ? "url(#brainGlow)" : undefined}
                />

                <path
                  className={isActive ? "neural-route-active" : "neural-route"}
                  d={path}
                  fill="none"
                  stroke={isActive ? activeColor : "rgba(249,115,22,0.20)"}
                  strokeWidth={isActive ? 0.22 : 0.07}
                  strokeDasharray="0.9 1.3"
                  strokeLinecap="round"
                />

                {isActive && (
                  <circle r="0.42" fill={activeColor}>
                    <animateMotion dur="2s" repeatCount="indefinite" path={path} />
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
            onClick={(event) => {
              event.stopPropagation();
              setSelectedNode(node);
            }}
          />
        ))}

        {!selectedNode && (
          <div
            className="absolute bottom-[clamp(1rem,2vh,2.5rem)] left-[52%] z-20 w-[clamp(20rem,30vw,38rem)] -translate-x-1/2 rounded-[1.5rem] border bg-[#080D1C]/92 p-[clamp(1rem,1vw,1.35rem)] shadow-[0_0_50px_rgba(0,0,0,0.7)] backdrop-blur-xl"
            style={{
              borderColor: `${activeColor}45`,
              boxShadow: `0 0 55px rgba(0,0,0,0.72), 0 0 34px ${activeColor}18`,
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <p
              className="text-[clamp(0.65rem,0.5vw,0.8rem)] font-bold uppercase tracking-[0.28em]"
              style={{ color: activeColor }}
            >
              {routeDescriptions[activeNodeId].label}
            </p>

            <p className="mt-3 text-[clamp(0.95rem,0.82vw,1.15rem)] font-semibold leading-6 text-white">
              {routeDescriptions[activeNodeId].path}
            </p>

            <p className="mt-2 text-[clamp(0.78rem,0.68vw,0.95rem)] leading-6 text-slate-400">
              {routeDescriptions[activeNodeId].description}
            </p>
          </div>
        )}
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
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  const size = isCore
    ? "h-[clamp(5rem,5vw,6rem)] w-[clamp(5rem,5vw,6rem)]"
    : "h-[clamp(3.3rem,3.7vw,4.4rem)] w-[clamp(3.3rem,3.7vw,4.4rem)]";

  return (
    <button
      type="button"
      onClick={onClick}
      className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center outline-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      <span
        className={`relative flex items-center justify-center rounded-full border border-white/10 bg-[#080D1C]/92 shadow-[0_0_30px_rgba(0,0,0,0.75)] backdrop-blur-xl transition-all duration-300 group-hover:scale-110 ${size}`}
        style={{
          borderColor: isActive ? `${node.color}75` : `${node.color}28`,
          boxShadow: isActive
            ? `0 0 46px ${node.color}70`
            : `0 0 26px ${node.color}20`,
        }}
      >
        <span
          className="h-[clamp(0.8rem,0.85vw,1rem)] w-[clamp(0.8rem,0.85vw,1rem)] rounded-full"
          style={{
            backgroundColor: node.color,
            boxShadow: `0 0 24px ${node.color}`,
          }}
        />
      </span>

      <span className="mt-4 max-w-[clamp(8rem,8vw,12rem)] text-center text-[clamp(0.95rem,0.9vw,1.45rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.95)]">
        {node.label}
      </span>

      <span
        className="mt-2 text-[clamp(0.6rem,0.48vw,0.78rem)] font-bold uppercase tracking-[0.25em]"
        style={{ color: node.color }}
      >
        Click to explore
      </span>
    </button>
  );
}