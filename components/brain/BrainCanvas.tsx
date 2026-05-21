"use client";

import React, { useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  Edge,
  Node,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";

import { brainNodes } from "@/data/brain-nodes";
import type { BrainNodeData } from "@/data/brain-nodes";
import BrainPanel from "@/components/brain/BrainPanel";

const categoryLabels: Record<string, string> = {
  core: "Core identity",
  teaching: "Teaching",
  data: "Data",
  ai: "AI",
  development: "Development",
  domain: "Domain expertise",
};

const graphOffset = {
  x: 520,
  y: 80,
};

const graphScale = 1.45;

export default function BrainCanvas() {
  const [selectedNode, setSelectedNode] = useState<BrainNodeData | null>(null);

  const nodes: Node[] = useMemo(
    () =>
      brainNodes.map((node) => ({
        id: node.id,
        position: {
          x: node.x * graphScale + graphOffset.x,
          y: node.y * graphScale + graphOffset.y,
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: {
          label: (
            <div className="group min-w-[310px] rounded-[1.8rem] border border-white/10 bg-[#0A0E1C]/95 px-8 py-7 shadow-[0_0_55px_rgba(0,0,0,0.55)] backdrop-blur-xl transition duration-300 hover:scale-[1.035] hover:border-orange-300/45 hover:shadow-[0_0_70px_rgba(249,115,22,0.22)]">
              <div
                className="mb-5 h-3 w-3 rounded-full"
                style={{
                  backgroundColor: node.color,
                  boxShadow: `0 0 24px ${node.color}`,
                }}
              />

              <p className="text-sm font-semibold uppercase tracking-[0.36em] text-slate-400">
                {categoryLabels[node.category]}
              </p>

              <p className="mt-4 text-[1.65rem] font-semibold leading-[1.05] tracking-[-0.045em] text-white">
                {node.label}
              </p>

              {node.skills && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {node.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/12 bg-white/8 px-3.5 py-1 text-xs font-medium text-slate-200 shadow-inner"
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
    { id: "teaching-statistics", source: "teaching", target: "statistics" },
    { id: "teaching-data-science", source: "teaching", target: "data-science" },
    { id: "teaching-ai", source: "teaching", target: "ai" },
    { id: "teaching-development", source: "teaching", target: "development" },
    { id: "teaching-healthcare", source: "teaching", target: "healthcare" },
    { id: "statistics-healthcare", source: "statistics", target: "healthcare" },
    { id: "ai-development", source: "ai", target: "development" },
    { id: "data-development", source: "data-science", target: "development" },
  ].map((edge) => ({
    ...edge,
    animated: true,
    className: "neural-edge",
    style: {
      stroke: "rgba(125, 211, 252, 0.88)",
      strokeWidth: 3,
      strokeDasharray: "8 8",
      filter: "drop-shadow(0 0 9px rgba(56, 189, 248, 0.8))",
    },
  }));

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.038)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.038)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_64%_43%,rgba(249,115,22,0.34),transparent_30%),radial-gradient(circle_at_72%_60%,rgba(234,88,12,0.20),transparent_34%),radial-gradient(circle_at_58%_76%,rgba(124,45,18,0.22),transparent_34%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_64%_46%,transparent_0%,rgba(5,5,5,0.18)_38%,rgba(5,5,5,0.90)_86%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/85 to-transparent" />

      <div className="absolute left-10 top-10 z-10 max-w-[500px]">
        <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-300 shadow-[0_0_35px_rgba(249,115,22,0.18)]">
          <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.95)]" />
          RP Systems • Teaching
        </div>

        <h1 className="mt-7 text-6xl font-semibold leading-[0.88] tracking-[-0.065em] text-white md:text-8xl">
          Designing learning systems with data, AI and scientific rigor.
        </h1>

        <p className="mt-7 max-w-md text-base leading-7 text-slate-300 md:text-lg">
          Interactive teaching architecture connecting statistical reasoning,
          analytics, AI systems, software engineering and research-oriented
          thinking.
        </p>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{
          padding: 0.11,
        }}
        minZoom={0.34}
        maxZoom={1.15}
        nodesDraggable={false}
        nodesConnectable={false}
        panOnScroll
        zoomOnScroll
        onNodeClick={(_, node) => {
          const clickedNode = brainNodes.find((item) => item.id === node.id);
          setSelectedNode(clickedNode ?? null);
        }}
      >
        <Background color="#1f2937" gap={32} />
        <Controls />
      </ReactFlow>

      <BrainPanel selectedNode={selectedNode} />
    </section>
  );
}