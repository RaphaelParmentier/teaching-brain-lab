"use client";

import { useState } from "react";

import { brainNodes } from "@/data/brain-nodes";
import type { BrainNodeData } from "@/data/brain-nodes";
import BrainPanel from "@/components/brain/BrainPanel";
import LearningJourney from "@/components/journey/LearningJourney";

type Position = { x: number; y: number };

const nodePositions: Record<string, Position> = {
  core: { x: 47, y: 44 },
  "data-strategy": { x: 28, y: 50 },
  "statistical-reasoning": { x: 37, y: 27 },
  "ml-strategy": { x: 59, y: 25 },
  "ai-workflows": { x: 70, y: 48 },
  communication: { x: 54, y: 72 },
};

const microNodes = [
  { id: "kpi", x: 23, y: 36, color: "#22C55E" },
  { id: "cleaning", x: 31, y: 63, color: "#22C55E" },
  { id: "eda", x: 39, y: 48, color: "#22C55E" },
  { id: "bias", x: 33, y: 22, color: "#38BDF8" },
  { id: "inference", x: 44, y: 31, color: "#38BDF8" },
  { id: "validation", x: 53, y: 34, color: "#A78BFA" },
  { id: "features", x: 63, y: 34, color: "#A78BFA" },
  { id: "llm", x: 74, y: 36, color: "#2DD4BF" },
  { id: "rag", x: 77, y: 58, color: "#2DD4BF" },
  { id: "reporting", x: 46, y: 67, color: "#F59E0B" },
  { id: "storytelling", x: 60, y: 64, color: "#F59E0B" },
  { id: "decision", x: 51, y: 56, color: "#F97316" },
];

const edges = [
  { id: "core-data-strategy", from: "core", to: "data-strategy", type: "core" },
  { id: "core-statistical-reasoning", from: "core", to: "statistical-reasoning", type: "core" },
  { id: "core-ml-strategy", from: "core", to: "ml-strategy", type: "core" },
  { id: "core-ai-workflows", from: "core", to: "ai-workflows", type: "core" },
  { id: "core-communication", from: "core", to: "communication", type: "core" },

  { id: "data-statistics", from: "data-strategy", to: "statistical-reasoning", type: "pedagogy" },
  { id: "statistics-ml", from: "statistical-reasoning", to: "ml-strategy", type: "pedagogy" },
  { id: "ml-ai", from: "ml-strategy", to: "ai-workflows", type: "pedagogy" },

  { id: "communication-data", from: "communication", to: "data-strategy", type: "communication" },
  { id: "communication-statistics", from: "communication", to: "statistical-reasoning", type: "communication" },
  { id: "communication-ml", from: "communication", to: "ml-strategy", type: "communication" },
  { id: "communication-ai", from: "communication", to: "ai-workflows", type: "communication" },
];

const routes: Record<string, string[]> = {
  core: [
    "core-data-strategy",
    "core-statistical-reasoning",
    "core-ml-strategy",
    "core-ai-workflows",
    "core-communication",
  ],
  "data-strategy": ["core-data-strategy", "data-statistics", "communication-data"],
  "statistical-reasoning": [
    "core-statistical-reasoning",
    "data-statistics",
    "statistics-ml",
    "communication-statistics",
  ],
  "ml-strategy": [
    "core-ml-strategy",
    "statistics-ml",
    "ml-ai",
    "communication-ml",
  ],
  "ai-workflows": ["core-ai-workflows", "ml-ai", "communication-ai"],
  communication: [
    "core-communication",
    "communication-data",
    "communication-statistics",
    "communication-ml",
    "communication-ai",
  ],
};

const activeMicroNodes: Record<string, string[]> = {
  core: ["decision", "eda", "validation", "storytelling"],
  "data-strategy": ["kpi", "cleaning", "eda", "decision"],
  "statistical-reasoning": ["bias", "inference", "decision"],
  "ml-strategy": ["features", "validation", "inference"],
  "ai-workflows": ["llm", "rag", "decision"],
  communication: ["reporting", "storytelling", "decision"],
};

function getCurve(from: Position, to: Position) {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const verticalBend = Math.abs(from.y - to.y) > 22 ? 7 : 4;
  const horizontalBend = from.x < to.x ? 3 : -3;

  return `M ${from.x} ${from.y} C ${midX + horizontalBend} ${
    from.y - verticalBend
  }, ${midX - horizontalBend} ${to.y + verticalBend}, ${to.x} ${to.y}`;
}

export default function BrainCanvas() {
  const [selectedNode, setSelectedNode] = useState<BrainNodeData | null>(
    brainNodes[0]
  );
  const [mouse, setMouse] = useState({ x: 1200, y: 420 });

  const activeNodeId = selectedNode?.id ?? "core";
  const activeRouteIds = routes[activeNodeId] ?? [];
  const activeMicroIds = activeMicroNodes[activeNodeId] ?? [];

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
            radial-gradient(720px circle at 50% 48%, rgba(14,165,233,0.07), transparent 58%),
            radial-gradient(820px circle at 48% 52%, rgba(249,115,22,0.055), transparent 64%)
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
          Interactive teaching architecture built around learning by doing,
          evidence-based thinking and professional data workflows.
        </p>
      </div>

      <div className="absolute right-10 top-10 z-30">
        <LearningJourney />
      </div>

      <div className="absolute inset-0 z-10">
        <div className="pointer-events-none absolute left-[50%] top-[48%] h-[58vh] w-[42vw] -translate-x-1/2 -translate-y-1/2 rounded-[45%_55%_52%_48%] border border-white/5 bg-orange-500/5 blur-[1px]" />
        <div className="pointer-events-none absolute left-[50%] top-[48%] h-[42vh] w-[32vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/5 blur-3xl" />

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
                      ? "rgba(125, 211, 252, 0.22)"
                      : "rgba(125, 211, 252, 0.07)"
                  }
                  strokeWidth={isActive ? 0.72 : 0.2}
                  strokeLinecap="round"
                  style={{
                    filter: isActive
                      ? "drop-shadow(0 0 12px rgba(56,189,248,0.7))"
                      : "none",
                  }}
                />

                <path
                  className={isActive ? "neural-route-active" : "neural-route"}
                  d={path}
                  fill="none"
                  stroke={
                    isActive
                      ? "rgba(186,230,253,0.95)"
                      : "rgba(125, 211, 252, 0.13)"
                  }
                  strokeWidth={isActive ? 0.22 : 0.08}
                  strokeDasharray="0.8 1.35"
                  strokeLinecap="round"
                />

                {isActive && (
                  <circle r="0.42" fill="rgba(186,230,253,0.95)">
                    <animateMotion
                      dur="2.15s"
                      repeatCount="indefinite"
                      path={path}
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {microNodes.map((micro) => {
          const isActive = activeMicroIds.includes(micro.id);

          return (
            <span
              key={micro.id}
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition duration-500"
              style={{
                left: `${micro.x}%`,
                top: `${micro.y}%`,
                width: isActive ? 9 : 5,
                height: isActive ? 9 : 5,
                backgroundColor: micro.color,
                opacity: isActive ? 0.95 : 0.28,
                boxShadow: isActive
                  ? `0 0 24px ${micro.color}, 0 0 54px ${micro.color}55`
                  : `0 0 12px ${micro.color}55`,
              }}
            />
          );
        })}

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
  const haloSize = isCore ? "h-48 w-48" : "h-30 w-30";
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
          opacity: isActive ? 0.6 : 0.17,
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