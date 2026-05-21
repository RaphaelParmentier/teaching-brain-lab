"use client";

import { useState } from "react";
import BrainPanel from "@/components/brain/BrainPanel";
import type { BrainNodeData } from "@/data/brain-nodes";
import React, { useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  Edge,
  Node,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";

import { brainNodes } from "@/data/brain-nodes";

const categoryLabels: Record<string, string> = {
  core: "Core identity",
  teaching: "Teaching",
  data: "Data",
  ai: "AI",
  development: "Development",
  domain: "Domain expertise",
};

export default function BrainCanvas() {
  const [selectedNode, setSelectedNode] = useState<BrainNodeData | null>(null);
  const nodes: Node[] = useMemo(
    () =>
      brainNodes.map((node) => ({
        id: node.id,
        position: { x: node.x, y: node.y },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: {
          label: (
            <div className="group min-w-[220px] rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl backdrop-blur transition hover:scale-105 hover:border-cyan-300/60">
              <div
                className="mb-3 h-2 w-2 rounded-full shadow-lg"
                style={{ backgroundColor: node.color }}
              />
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                {categoryLabels[node.category]}
              </p>

              <p className="mt-2 text-base font-semibold leading-tight text-white">
                {node.label}
              </p>

              {node.skills && (
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {node.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ),
        },
        style: {
          background: "transparent",
          border: "none",
          padding: 0,
        },
      })),
    []
  );

  const edges: Edge[] = [
    {
      id: "teaching-statistics",
      source: "teaching",
      target: "statistics",
      animated: true,
    },
    {
      id: "teaching-data-science",
      source: "teaching",
      target: "data-science",
      animated: true,
    },
    {
      id: "teaching-ai",
      source: "teaching",
      target: "ai",
      animated: true,
    },
    {
      id: "teaching-development",
      source: "teaching",
      target: "development",
      animated: true,
    },
    {
      id: "teaching-healthcare",
      source: "teaching",
      target: "healthcare",
      animated: true,
    },
    {
      id: "statistics-healthcare",
      source: "statistics",
      target: "healthcare",
      animated: true,
    },
    {
      id: "ai-development",
      source: "ai",
      target: "development",
      animated: true,
    },
    {
      id: "data-development",
      source: "data-science",
      target: "development",
      animated: true,
    },
  ].map((edge) => ({
    ...edge,
    animated: true,
    className: "neural-edge",
    style: {
      stroke: "rgba(125, 211, 252, 0.75)",
      strokeWidth: 2.5,
      strokeDasharray: "8 8",
      filter: "drop-shadow(0 0 6px rgba(56, 189, 248, 0.75))",
    },
  }));

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#05060A] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.10),transparent_30%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="absolute left-8 top-8 z-10 max-w-xl">
        <div className="absolute left-8 top-8 z-10 max-w-2xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-orange-300 shadow-[0_0_30px_rgba(249,115,22,0.12)]">
            <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_16px_rgba(249,115,22,0.9)]" />
            RP Systems • Teaching
          </div>

          <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
            Designing learning systems with data, AI and scientific rigor.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
            An interactive teaching architecture connecting statistical reasoning,
            analytics, AI systems, software engineering and research-oriented thinking.
          </p>
        </div>
      </div>

      <ReactFlow
        onNodeClick={(_, node) => {
          const clickedNode = brainNodes.find((item) => item.id === node.id);
          setSelectedNode(clickedNode ?? null);
        }}
        nodes={nodes}
        edges={edges}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        panOnScroll
        zoomOnScroll
      >
        <Background color="#334155" gap={28} />
        <Controls />
      </ReactFlow>
      <BrainPanel selectedNode={selectedNode} />
    </section>
  );
}