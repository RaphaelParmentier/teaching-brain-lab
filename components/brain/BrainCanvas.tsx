"use client";

import { useState } from "react";

import { brainNodes } from "@/data/brain-nodes";
import type { BrainNodeData } from "@/data/brain-nodes";
import BrainPanel from "@/components/brain/BrainPanel";
import LearningJourney from "@/components/journey/LearningJourney";

const nodePositions: Record<string, { x: number; y: number }> = {
  teaching: { x: 54, y: 43 },
  statistics: { x: 35, y: 25 },
  "data-science": { x: 35, y: 58 },
  ai: { x: 73, y: 25 },
  development: { x: 73, y: 58 },
  healthcare: { x: 54, y: 78 },
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
            radial-gradient(
              420px circle at ${mouse.x}px ${mouse.y}px,
              rgba(249,115,22,0.08),
              transparent 60%
            )
          `,
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_60%,rgba(0,0,0,0.92)_100%)]" />

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
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {edges.map((edge) => {
            const from = nodePositions[edge.from];
            const to = nodePositions[edge.to];
            const isActive = activeRouteIds.includes(edge.id);

            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2;

            return (
              <path
                className={isActive ? "neural-route-active" : "neural-route"}
                key={edge.id}
                d={`M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`}
                fill="none"
                stroke={
                  isActive
                    ? "rgba(125, 211, 252, 0.92)"
                    : "rgba(125, 211, 252, 0.11)"
                }
                strokeWidth={isActive ? 0.22 : 0.08}
                strokeDasharray="0.7 1.4"
                strokeLinecap="round"
                style={{
                  filter: isActive
                    ? "drop-shadow(0 0 8px rgba(56,189,248,1))"
                    : "drop-shadow(0 0 3px rgba(56,189,248,0.25))",
                }}
              />
            );
          })}
        </svg>

        {brainNodes.map((node) => (
          <NeuralNode
            key={node.id}
            node={node}
            position={nodePositions[node.id]}
            isActive={activeNodeId === node.id}
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
  onClick,
}: {
  node: BrainNodeData;
  position: { x: number; y: number };
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute flex h-28 w-64 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
      aria-label={node.label}
    >
      <span
        className="absolute top-0 h-28 w-28 rounded-full blur-2xl transition duration-300"
        style={{
          backgroundColor: node.color,
          opacity: isActive ? 0.55 : 0.22,
        }}
      />

      <span
        className="relative flex h-16 w-16 items-center justify-center rounded-full border transition duration-300"
        style={{
          borderColor: isActive ? `${node.color}AA` : `${node.color}55`,
          backgroundColor: `${node.color}14`,
          boxShadow: isActive
            ? `0 0 42px ${node.color}AA, inset 0 0 24px ${node.color}35`
            : `0 0 18px ${node.color}55, inset 0 0 18px ${node.color}20`,
        }}
      >
        <span
          className="h-4 w-4 rounded-full"
          style={{
            backgroundColor: node.color,
            boxShadow: `0 0 24px ${node.color}`,
          }}
        />
      </span>

      <span className="mt-4 text-xl font-semibold leading-tight tracking-[-0.04em] text-white">
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