"use client";

import React, { useMemo, useState } from "react";
import ReactFlow, { Background, Edge, Node, Position } from "reactflow";
import "reactflow/dist/style.css";

import { brainNodes } from "@/data/brain-nodes";
import type { BrainNodeData } from "@/data/brain-nodes";
import BrainPanel from "@/components/brain/BrainPanel";
import LearningJourney from "@/components/journey/LearningJourney";

const graphOffset = { x: 0, y: 135 };
const graphScale = 1.9;

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

  const activeNodeId = selectedNode?.id ?? null;
  const activeRouteIds = activeNodeId ? routes[activeNodeId] ?? [] : [];

  const nodes: Node[] = useMemo(
    () =>
      brainNodes.map((node) => {
        const isActive = activeNodeId === node.id;

        return {
          id: node.id,
          position: {
            x: node.x * graphScale + graphOffset.x,
            y: node.y * graphScale + graphOffset.y,
          },
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
          data: {
            label: (
              <button
                type="button"
                className="group relative flex h-28 w-28 items-center justify-center rounded-full"
                aria-label={node.label}
              >
                <span
                  className="absolute h-28 w-28 rounded-full opacity-25 blur-2xl transition duration-300"
                  style={{
                    backgroundColor: node.color,
                    opacity: isActive ? 0.55 : 0.22,
                  }}
                />

                <span
                  className="absolute h-16 w-16 rounded-full border transition duration-300"
                  style={{
                    borderColor: isActive ? `${node.color}AA` : `${node.color}55`,
                    backgroundColor: `${node.color}14`,
                    boxShadow: isActive
                      ? `0 0 38px ${node.color}AA, inset 0 0 24px ${node.color}35`
                      : `0 0 18px ${node.color}55, inset 0 0 18px ${node.color}20`,
                  }}
                />

                <span
                  className="relative h-4 w-4 rounded-full transition duration-300"
                  style={{
                    backgroundColor: node.color,
                    boxShadow: `0 0 24px ${node.color}`,
                  }}
                />

                <span className="absolute top-[78px] w-[220px] text-center text-lg font-semibold tracking-[-0.04em] text-white">
                  {node.label}
                </span>

                <span
                  className="absolute top-[108px] w-[220px] text-center text-xs font-bold uppercase tracking-[0.24em]"
                  style={{ color: node.color }}
                >
                  Click to explore
                </span>
              </button>
            ),
          },
          style: {
            background: "transparent",
            border: "none",
            padding: 0,
          },
        };
      }),
    [activeNodeId]
  );

  const edges: Edge[] = [
    { id: "teaching-statistics", source: "teaching", target: "statistics" },
    { id: "teaching-data-science", source: "teaching", target: "data-science" },
    { id: "teaching-ai", source: "teaching", target: "ai" },
    { id: "teaching-development", source: "teaching", target: "development" },
    { id: "teaching-healthcare", source: "teaching", target: "healthcare" },
    { id: "statistics-healthcare", source: "statistics", target: "healthcare" },
    { id: "ai-development", source: "ai", target: "development" },
    { id: "data-development", source: "data-science", target: "development" },
  ].map((edge) => {
    const isActive = activeRouteIds.includes(edge.id);

    return {
      ...edge,
      animated: true,
      className: "neural-edge",
      style: {
        stroke: isActive
          ? "rgba(125, 211, 252, 1)"
          : "rgba(125, 211, 252, 0.16)",
        strokeWidth: isActive ? 5 : 1.5,
        strokeDasharray: "8 8",
        filter: isActive
          ? "drop-shadow(0 0 18px rgba(56, 189, 248, 1))"
          : "drop-shadow(0 0 3px rgba(56, 189, 248, 0.18))",
      },
    };
  });

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

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.25)_60%,rgba(0,0,0,0.92)_100%)]" />

      <div className="pointer-events-none absolute left-[35%] top-[12%] h-[70vh] w-[42vw] rounded-[50%] border border-white/5 opacity-30 blur-[1px]" />
      <div className="pointer-events-none absolute left-[41%] top-[18%] h-[54vh] w-[30vw] rounded-[50%] border border-orange-300/10 opacity-40 blur-[2px]" />

      <div className="absolute left-12 top-10 z-10 max-w-[560px]">
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

      <div className="absolute right-10 top-10 z-20">
        <LearningJourney />
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        defaultViewport={{ x: 1350, y: 400, zoom: 1.2 }}
        minZoom={1.2}
        maxZoom={1.2}
        nodesDraggable={false}
        nodesConnectable={false}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        proOptions={{ hideAttribution: true }}
        onNodeClick={(_, node) => {
          const clickedNode = brainNodes.find((item) => item.id === node.id);
          setSelectedNode(clickedNode ?? null);
        }}
      >
        <Background color="#1f2937" gap={32} />
      </ReactFlow>

      <BrainPanel selectedNode={selectedNode} />
    </section>
  );
}