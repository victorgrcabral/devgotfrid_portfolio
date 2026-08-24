'use client';

import React, { useState } from 'react';
import { ArchitectureNode } from '@/data/types';
import { Layers, Server, Database, ShieldCheck, Cpu, CheckCircle2 } from 'lucide-react';

interface ArchitectureInspectorProps {
  nodes: ArchitectureNode[];
  lang: string;
}

export default function ArchitectureInspector({ nodes, lang }: ArchitectureInspectorProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(nodes[0]?.id || 'node-fe');

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  const getNodeIcon = (category: ArchitectureNode['category']) => {
    switch (category) {
      case 'frontend':
        return <Layers className="w-4 h-4 text-[#73D1E0]" />;
      case 'api':
        return <Server className="w-4 h-4 text-[#358A90]" />;
      case 'database':
        return <Database className="w-4 h-4 text-[#73D1E0]" />;
      case 'security':
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      default:
        return <Cpu className="w-4 h-4 text-[#73D1E0]" />;
    }
  };

  return (
    <div className="bg-[#082229] border border-[#003338] rounded-2xl p-5 sm:p-6 shadow-xl">
      {/* Header Prompt */}
      <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-[#003338]">
        <div>
          <span className="text-xs font-mono text-[#73D1E0] uppercase tracking-wider block font-bold">
            {lang === 'pt' ? 'Inspetor de Sistema Interativo' : 'Interactive System Inspector'}
          </span>
          <p className="text-xs text-[#8EACB4] mt-0.5">
            {lang === 'pt'
              ? 'Selecione uma camada do sistema para explorar as decisões de engenharia:'
              : 'Select a system layer to explore architectural decisions and code guarantees:'}
          </p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-[#5C7B83] px-2.5 py-1 rounded-lg bg-[#05181D] border border-[#003338]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#73D1E0] animate-pulse" />
          Live Inspector
        </span>
      </div>

      {/* Interactive Node Graph Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
        {nodes.map((node) => {
          const isSelected = node.id === selectedNodeId;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition-all duration-150 active:scale-[0.97] cursor-pointer min-w-0 w-full overflow-hidden ${
                isSelected
                  ? 'bg-[#0B2A32] border-[#73D1E0] shadow-md shadow-[#73D1E0]/15'
                  : 'bg-[#05181D] border-[#003338] hover:border-[#00595B] hover:bg-[#082229]'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5 w-full min-w-0">
                <span className="shrink-0">{getNodeIcon(node.category)}</span>
                <span className="text-xs font-semibold text-[#F7F7F8] truncate block w-full">{node.title}</span>
              </div>
              <span className="text-[11px] font-mono text-[#8EACB4] truncate w-full block">{node.tech}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Node Deep Dive Inspector Card (with smooth 180ms transition bridge) */}
      {selectedNode && (
        <div
          key={selectedNode.id}
          className="bg-[#05181D] border border-[#003338] rounded-xl p-5 space-y-4 transition-all duration-200 animate-in fade-in slide-in-from-bottom-1"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#73D1E0]/15 text-[#73D1E0] border border-[#73D1E0]/30 font-semibold">
                {selectedNode.category.toUpperCase()}
              </span>
              <h4 className="text-sm font-bold text-white">{selectedNode.title}</h4>
            </div>
            <span className="text-xs font-mono text-[#8EACB4] bg-[#082229] px-2.5 py-1 rounded-lg border border-[#003338]">
              {selectedNode.tech}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#8EACB4] leading-relaxed">
            {selectedNode.description}
          </p>

          <div className="space-y-2 pt-3 border-t border-[#003338]">
            <span className="text-[11px] font-mono text-[#73D1E0] uppercase tracking-wider block font-bold">
              {lang === 'pt' ? 'Decisões Técnicas Aplicadas:' : 'Applied Technical Rationale:'}
            </span>
            <ul className="space-y-1.5">
              {selectedNode.decisions.map((decision, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#F7F7F8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#73D1E0] shrink-0 mt-0.5" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
