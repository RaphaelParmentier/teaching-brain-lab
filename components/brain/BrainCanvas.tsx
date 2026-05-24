"use client";

import { useState } from "react";

import { brainNodes } from "@/data/brain-nodes";
import type { BrainNodeData } from "@/data/brain-nodes";
import BrainPanel from "@/components/brain/BrainPanel";
import LearningJourney from "@/components/journey/LearningJourney";

type Position = { x: number; y: number };

const nodePositions: Record<string, Position> = {
  core: { x: 50, y: 45 },
  "data-strategy": { x: 32, y: 52 },
  "statistical-reasoning": { x: 39, y: 30 },
  "ml-strategy": { x: 58, y: 30 },
  "ai-workflows": { x: 69, y: 52 },
  communication: { x: 53, y: 70 },
};

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

const routes = [
  { id: "core-data", from: "core", to: "data-strategy", meaning: "Project-based data foundations" },
  { id: "core-stats", from: "core", to: "statistical-reasoning", meaning: "Evidence-based reasoning" },
  { id: "core-ml", from: "core", to: "ml-strategy", meaning: "Applied model building" },
  { id: "core-ai", from: "core", to: "ai-workflows", meaning: "Responsible AI usage" },
  { id: "core-communication", from: "core", to: "communication", meaning: "Professional deliverables" },

  { id: "data-stats", from: "data-strategy", to: "statistical-reasoning", meaning: "Clean data enables sound inference" },
  { id: "stats-ml", from: "statistical-reasoning", to: "ml-strategy", meaning: "Statistics supports robust ML evaluation" },
  { id: "ml-ai", from: "ml-strategy", to: "ai-workflows", meaning: "ML concepts clarify modern AI systems" },

  { id: "data-communication", from: "data-strategy", to: "communication", meaning: "Dashboards and business recommendations" },
  { id: "stats-communication", from: "statistical-reasoning", to: "communication", meaning: "Explain uncertainty clearly" },
  { id: "ml-communication", from: "ml-strategy", to: "communication", meaning: "Translate model results into decisions" },
  { id: "ai-communication", from: "ai-workflows", to: "communication", meaning: "Document and evaluate AI workflows" },
];

const circuitNodes = [
  { x: 25, y: 36 }, { x: 30, y: 28 }, { x: 35, y: 41 },
  { x: 43, y: 22 }, { x: 51, y: 25 }, { x: 64, y: 22 },
  { x: 74, y: 34 }, { x: 78, y: 47 }, { x: 73, y: 64 },
  { x: 62, y: 72 }, { x: 46, y: 75 }, { x: 33, y: 67 },
  { x: 24, y: 52 }, { x: 39, y: 56 }, { x: 61, y: 55 },
];

function getCurve(from: Position, to: Position) {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const bend = Math.abs(from.x - to.x) > 20 ? 6 : 4;

  return `M ${from.x} ${from.y} Q ${midX} ${midY - bend}, ${to.x} ${to.y}`;
}

export default function BrainCanvas() {
  const [selectedNode, setSelectedNode] = useState<BrainNodeData | null>(brainNodes[0]);
  const [mouse, setMouse] = useState({ x: 1200, y: 420 });

  const activeNodeId = selectedNode?.id ?? "core";
  const activeRouteIds = semanticRoutes[activeNodeId] ?? [];

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-[#050505] text-white"
      onMouseMove={(event) => setMouse({ x: event.clientX, y: event.clientY })}
    >
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
            radial-gradient(460px circle at ${mouse.x}px ${mouse.y}px, rgba(249,115,22,0.08), transparent 62%),
            radial-gradient(760px circle at 50% 48%, rgba(14,165,233,0.06), transparent 58%)
          `,
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_58%,rgba(0,0,0,0.94)_100%)]" />

      <div className="absolute left-12 top-10 z-20 max-w-[560px]">
        <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-300 shadow-[0_0_35px_rgba(249,115,22,0.18)]">
          <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.95)]" />
          RP Systems • Teaching
        </div>

        <h1 className="mt-7 max-w-[520px] text-[4.6rem] font-semibold leading-[0.9] tracking-[-0.065em] text-white">
          Designing learning systems with data, AI and scientific rigor.
        </h1>

        <p className="mt-7 max-w-[430px] text-base leading-7 text-slate-300">
          Interactive teaching architecture built around learning by doing,
          evidence-based thinking and professional data workflows.
        </p>
      </div>

      <div className="absolute right-10 top-10 z-30">
        <LearningJourney />
      </div>

      <div className="absolute inset-0 z-10">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="
              M 21 50
              C 18 36, 28 20, 43 18
              C 48 11, 61 12, 66 20
              C 82 22, 88 36, 84 51
              C 90 65, 78 78, 62 77
              C 54 85, 39 82, 35 73
              C 23 70, 16 60, 21 50
              Z
            "
            fill="rgba(8,13,28,0.58)"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.18"
          />

          {circuitNodes.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="0.36"
              fill="rgba(125,211,252,0.22)"
            />
          ))}

          {routes.map((route) => {
            const from = nodePositions[route.from];
            const to = nodePositions[route.to];
            const isActive = activeRouteIds.includes(route.id);
            const path = getCurve(from, to);

            return (
              <g key={route.id}>
                <path
                  d={path}
                  fill="none"
                  stroke={isActive ? "rgba(125,211,252,0.30)" : "rgba(125,211,252,0.075)"}
                  strokeWidth={isActive ? 0.64 : 0.18}
                  strokeLinecap="round"
                  filter={isActive ? "url(#softGlow)" : undefined}
                />

                <path
                  className={isActive ? "neural-route-active" : "neural-route"}
                  d={path}
                  fill="none"
                  stroke={isActive ? "rgba(186,230,253,0.98)" : "rgba(125,211,252,0.14)"}
                  strokeWidth={isActive ? 0.22 : 0.075}
                  strokeDasharray="0.9 1.3"
                  strokeLinecap="round"
                />

                {isActive && (
                  <circle r="0.42" fill="rgba(186,230,253,0.95)">
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
            onClick={() => setSelectedNode(node)}
          />
        ))}
      </div>

      <BrainPanel selectedNode={selectedNode} />
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
          opacity: isActive ? 0.6 : 0.16,
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

      <span className="mt-4 text-xl font-semibold leading-tight tracking-[-0.04em] text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]">
        {node.label}
      </span>

      <span
        className="mt-2 text-xs font-bold uppercase tracking-[0.24em]"
        style={{ color: node.color }}
      >
        Click to explore
      </span>
    </button>
  );
}