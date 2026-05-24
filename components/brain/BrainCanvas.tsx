"use client";

import { useState } from "react";

import { brainNodes } from "@/data/brain-nodes";
import type { BrainNodeData } from "@/data/brain-nodes";
import BrainPanel from "@/components/brain/BrainPanel";
import LearningJourney from "@/components/journey/LearningJourney";

const nodePositions: Record<string, { x: number; y: number }> = {
  teaching: { x: 49, y: 42 },
  statistics: { x: 28, y: 24 },
  "data-science": { x: 28, y: 58 },
  ai: { x: 67, y: 24 },
  development: { x: 67, y: 58 },
  healthcare: { x: 49, y: 78 },
};

const edges = [
  { id: "teaching-statistics", from: "teaching", to: "statistics" },
  { id: "teaching-data-science", from: "teaching", to: "data-science" },
  { id: "teaching-ai", from: "teaching", to: "ai" },
  { id: "teaching-development", from: "teaching", to: "development" },
  { id: "teaching-healthcare", from: "teaching", to: "healthcare" },
  { id: "statistics-healthcare", from: "statistics", to: "healthcare" },
  { id: "ai-development", from: "ai", to: "development" },
  { id: "data-development", from: "data-science", to: "development" },
];

const routes: Record<string, string[]> = {
  teaching: [
    "teaching-statistics",
    "teaching-data-science",
    "teaching-ai",
    "teaching-development",
    "teaching-healthcare",
  ],
  statistics: ["teaching-statistics", "statistics-healthcare"],
  "data-science": ["teaching-data-science", "data-development"],
  ai: ["teaching-ai", "ai-development"],
  development: ["teaching-development", "ai-development", "data-development"],
  healthcare: ["teaching-healthcare", "statistics-healthcare"],
};

function getCurve(from: { x: number; y: number }, to: { x: number; y: number }) {
  const midX = (from.x + to.x) / 2;
  const bend = Math.abs(from.y - to.y) > 25 ? 8 : 4;

  return `M ${from.x} ${from.y} C ${midX} ${from.y - bend}, ${midX} ${
    to.y + bend
  }, ${to.x} ${to.y}`;
}

export default function BrainCanvas() {
  const [selectedNode, setSelectedNode] = useState<BrainNodeData | null>(
    brainNodes[0]
  );
  const [mouse, setMouse] = useState({ x: 1200, y: 420 });

  const activeNodeId = selectedNode?.id ?? "teaching";
  const activeRouteIds = routes[activeNodeId] ?? [];

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
            radial-gradient(460px circle at ${mouse.x}px ${mouse.y}px, rgba(249,115,22,0.09), transparent 62%),
            radial-gradient(680px circle at 49% 48%, rgba(14,165,233,0.08), transparent 58%),
            radial-gradient(760px circle at 52% 52%, rgba(249,115,22,0.06), transparent 62%)
          `,
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0.92)_100%)]" />

      <div className="absolute left-12 top-10 z-20 max-w-[560px]">
        <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-300 shadow-[0_0_35px_rgba(249,115,22,0.18)]">
          <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.95)]" />
          RP Systems • Teaching
        </div>

        <h1 className="mt-7 max-w-[520px] text-[4.6rem] font-semibold leading-[0.9] tracking-[-0.065em] text-white">
          Designing learning systems with data, AI and scientific rigor.
        </h1>

        <p className="mt-7 max-w-[430px] text-base leading-7 text-slate-300">
          Interactive teaching architecture connecting statistical reasoning,
          analytics, AI systems, software engineering and research-oriented
          thinking.
        </p>
      </div>

      <div className="absolute right-10 top-10 z-30">
        <LearningJourney />
      </div>

      <div className="absolute inset-0 z-10">
        <div className="pointer-events-none absolute left-[49%] top-[48%] h-[52vh] w-[38vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-3xl" />
        <div className="pointer-events-none absolute left-[49%] top-[48%] h-[38vh] w-[28vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/5 blur-3xl" />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {edges.map((edge) => {
            const from = nodePositions[edge.from];
            const to = nodePositions[edge.to];
            const isActive = activeRouteIds.includes(edge.id);
            const path = getCurve(from, to);

            return (
              <g key={edge.id}>
                <path
                  d={path}
                  fill="none"
                  stroke={
                    isActive
                      ? "rgba(125, 211, 252, 0.25)"
                      : "rgba(125, 211, 252, 0.08)"
                  }
                  strokeWidth={isActive ? 0.62 : 0.22}
                  strokeLinecap="round"
                  style={{
                    filter: isActive
                      ? "drop-shadow(0 0 10px rgba(56,189,248,0.65))"
                      : "none",
                  }}
                />

                <path
                  className={isActive ? "neural-route-active" : "neural-route"}
                  d={path}
                  fill="none"
                  stroke={
                    isActive
                      ? "rgba(125, 211, 252, 0.95)"
                      : "rgba(125, 211, 252, 0.15)"
                  }
                  strokeWidth={isActive ? 0.2 : 0.09}
                  strokeDasharray="0.8 1.35"
                  strokeLinecap="round"
                />

                {isActive && (
                  <circle r="0.42" fill="rgba(186,230,253,0.95)">
                    <animateMotion dur="2.2s" repeatCount="indefinite" path={path} />
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
            isCore={node.id === "teaching"}
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
  position: { x: number; y: number };
  isActive: boolean;
  isCore: boolean;
  onClick: () => void;
}) {
  const size = isCore ? "h-24 w-24" : "h-16 w-16";
  const haloSize = isCore ? "h-44 w-44" : "h-28 w-28";
  const dotSize = isCore ? "h-5 w-5" : "h-4 w-4";

  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute flex h-36 w-72 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center outline-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      aria-label={node.label}
    >
      <span
        className={`absolute top-0 rounded-full blur-3xl transition duration-500 ${haloSize}`}
        style={{
          backgroundColor: node.color,
          opacity: isActive ? 0.58 : 0.18,
        }}
      />

      <span
        className={`relative flex items-center justify-center rounded-full border transition duration-500 ${size}`}
        style={{
          borderColor: isActive ? `${node.color}CC` : `${node.color}55`,
          background: `radial-gradient(circle at 35% 30%, ${node.color}35, rgba(8,13,28,0.92) 58%)`,
          boxShadow: isActive
            ? `0 0 48px ${node.color}AA, inset 0 0 28px ${node.color}35`
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

        {isCore && (
          <span className="absolute inset-[-10px] rounded-full border border-orange-300/20" />
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