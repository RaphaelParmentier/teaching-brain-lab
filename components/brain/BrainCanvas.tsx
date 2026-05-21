"use client";

import React, { useMemo, useState } from "react";
import ReactFlow, {
  Background,
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

const graphOffset = { x: 580, y: 110 };
const graphScale = 1.75;

export default function BrainCanvas() {
  const [selectedNode, setSelectedNode] = useState<BrainNodeData | null>(null);
  const [mouse, setMouse] = useState({ x: 1100, y: 420 });

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
            <div className="group min-w-[330px] rounded-[2rem] border border-white/10 bg-[#080D1C]/95 px-8 py-7 shadow-[0_0_60px_rgba(0,0,0,0.65)] backdrop-blur-xl transition duration-300 hover:scale-[1.035] hover:border-orange-300/50 hover:shadow-[0_0_75px_rgba(249,115,22,0.24)]">
              <div
                className="mb-5 h-3 w-3 rounded-full"
                style={{
                  backgroundColor: node.color,
                  boxShadow: `0 0 26px ${node.color}`,
                }}
              />

              <p className="text-sm font-semibold uppercase tracking-[0.38em] text-slate-400">
                {categoryLabels[node.category]}
              </p>

              <p className="mt-4 text-[1.8rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
                {node.label}
              </p>

              {node.skills && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {node.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/12 bg-white/8 px-3.5 py-1 text-xs font-medium text-slate-200"
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
      stroke: "rgba(125, 211, 252, 0.92)",
      strokeWidth: 3,
      strokeDasharray: "8 8",
      filter: "drop-shadow(0 0 10px rgba(56, 189, 248, 0.85))",
    },
  }));

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-[#050505] text-white"
      onMouseMove={(event) => setMouse({ x: event.clientX, y: event.clientY })}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div
        className="pointer-events-none absolute inset-0 transition duration-300"
        style={{
          background: `
            radial-gradient(620px circle at ${mouse.x}px ${mouse.y}px, rgba(249,115,22,0.30), transparent 44%),
            radial-gradient(circle at 68% 42%, rgba(249,115,22,0.34), transparent 31%),
            radial-gradient(circle at 72% 68%, rgba(124,45,18,0.24), transparent 37%),
            radial-gradient(circle at 52% 52%, rgba(15,23,42,0.88), transparent 42%)
          `,
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,transparent_0%,rgba(5,5,5,0.18)_42%,rgba(5,5,5,0.94)_90%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/90 to-transparent" />

      <div className="absolute left-12 top-10 z-10 max-w-[680px]">
        <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-orange-300 shadow-[0_0_35px_rgba(249,115,22,0.18)]">
          <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.95)]" />
          RP Systems • Teaching
        </div>

        <h1 className="mt-7 max-w-[640px] text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">
          Designing learning systems with data, AI and scientific rigor.
        </h1>

        <p className="mt-7 max-w-[460px] text-base leading-7 text-slate-300 md:text-lg">
          Interactive teaching architecture connecting statistical reasoning,
          analytics, AI systems, software engineering and research-oriented
          thinking.
        </p>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.08 }}
        minZoom={0.34}
        maxZoom={1.05}
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