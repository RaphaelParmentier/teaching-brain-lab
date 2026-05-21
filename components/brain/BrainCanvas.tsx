"use client";

import React, { useMemo, useState } from "react";
import ReactFlow, { Background, Edge, Node, Position } from "reactflow";
import "reactflow/dist/style.css";
import { teachingMissions } from "@/data/teaching-missions";
import TeachingMissionCard from "@/components/teaching/TeachingMissionCard";
import LearningJourney from "@/components/journey/LearningJourney";

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

const graphOffset = { x: -100, y: 135 };
const graphScale = 1.9;

export default function BrainCanvas() {
  const [selectedNode, setSelectedNode] = useState<BrainNodeData | null>(null);
  const [mouse, setMouse] = useState({ x: 1150, y: 420 });

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
            <div
              className="group min-w-[360px] rounded-[2rem] border bg-[#080D1C]/96 px-9 py-8 shadow-[0_0_65px_rgba(0,0,0,0.72)] backdrop-blur-xl transition duration-300 hover:scale-[1.035]"
              style={{
                borderColor: `${node.color}33`,
                boxShadow: `0 0 55px rgba(0,0,0,0.72), 0 0 42px ${node.color}18`,
              }}
            >
              <div
                className="mb-5 h-3.5 w-3.5 rounded-full"
                style={{
                  backgroundColor: node.color,
                  boxShadow: `0 0 28px ${node.color}`,
                }}
              />

              <p
                className="text-sm font-bold uppercase tracking-[0.38em]"
                style={{ color: `${node.color}` }}
              >
                {categoryLabels[node.category]}
              </p>

              <p className="mt-4 text-[2rem] font-semibold leading-[1.02] tracking-[-0.055em] text-white">
                {node.label}
              </p>

              {node.skills && (
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {node.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border px-3.5 py-1.5 text-xs font-semibold"
                      style={{
                        borderColor: `${node.color}40`,
                        backgroundColor: `${node.color}18`,
                        color: node.color,
                      }}
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
            radial-gradient(560px circle at ${mouse.x}px ${mouse.y}px, rgba(249,115,22,0.26), transparent 44%),
            radial-gradient(circle at 63% 43%, rgba(249,115,22,0.30), transparent 33%),
            radial-gradient(circle at 72% 66%, rgba(124,45,18,0.22), transparent 38%),
            radial-gradient(circle at 58% 52%, rgba(15,23,42,0.70), transparent 44%)
          `,
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,transparent_0%,rgba(5,5,5,0.14)_44%,rgba(5,5,5,0.94)_92%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/90 to-transparent" />

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
      <div className="absolute right-8 top-8 z-20 grid w-[900px] grid-cols-3 gap-5">
        {teachingMissions.map((mission) => (
          <TeachingMissionCard key={mission.id} mission={mission} />
        ))}
      </div>
    <LearningJourney />
  </section>
  );
}