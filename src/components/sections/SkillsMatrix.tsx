'use client';

import React from 'react';
import { SkillCategory, PortfolioDictionary } from '@/data/types';
import { Code2, Server, Layout, Sparkles, Cpu, Bot, Wand2 } from 'lucide-react';
import DistortedHeadline from '@/components/ui/DistortedHeadline';

interface SkillsMatrixProps {
  skillsList: SkillCategory[];
  dict: PortfolioDictionary;
}

export default function SkillsMatrix({ skillsList, dict }: SkillsMatrixProps) {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-4 h-4 text-[#73D1E0]" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-[#73D1E0]" />;
      case 'Server':
        return <Server className="w-4 h-4 text-[#358A90]" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-[#73D1E0]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      default:
        return <Cpu className="w-4 h-4 text-[#73D1E0]" />;
    }
  };

  const standardCategories = skillsList.slice(0, 4);
  const aiCategory = skillsList[4];

  return (
    <section id="skills" className="relative z-10 py-20 border-t border-[#003338] bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#73D1E0]/10 text-[#73D1E0] border border-[#73D1E0]/30 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{dict.skills.sectionTag}</span>
          </div>
          <DistortedHeadline
            text={dict.skills.sectionTitle}
            as="h2"
            className="text-3xl sm:text-4xl mb-2"
          />
          <p className="text-sm sm:text-base text-[#8EACB4] max-w-xl">
            {dict.skills.sectionSubtitle}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Standard 2x2 Bento Cards */}
          {standardCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 flex flex-col justify-between border-[#003338]"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#003338]">
                  <div className="w-8 h-8 rounded-lg bg-[#05181D] border border-[#00595B]/40 flex items-center justify-center shadow-inner">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="font-bold text-sm text-[#F7F7F8] tracking-tight">
                    {category.category}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        skill.focus
                          ? 'bg-[#0B2A32] text-[#F7F7F8] border border-[#73D1E0]/40 shadow-sm shadow-[#73D1E0]/10'
                          : 'bg-[#05181D] text-[#8EACB4] border border-[#003338]'
                      }`}
                    >
                      {skill.focus && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#73D1E0] mr-1.5" />}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* 2. Full-Width Rectangle Bento Card for AI & LLM Toolchain */}
          {aiCategory && (
            <div className="col-span-1 md:col-span-2 glass-panel rounded-2xl p-6 sm:p-7 border-[#00595B]/60 bg-gradient-to-br from-[#082229]/95 via-[#05181D]/90 to-[#0A262E]/95 relative overflow-hidden shadow-xl shadow-[#73D1E0]/5">
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute top-0 right-1/4 w-72 h-36 bg-[#73D1E0]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#00595B]/40">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#05181D] border border-[#73D1E0]/40 flex items-center justify-center text-[#73D1E0] shadow-sm">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-white tracking-tight flex items-center gap-2">
                        <span>{aiCategory.category}</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#73D1E0]/10 text-[#73D1E0] border border-[#73D1E0]/30">
                          AI Toolchain & Autonomous Agents
                        </span>
                      </h3>
                      <span className="text-[11px] text-[#8EACB4]">
                        Desenvolvimento acelerado, orquestração de agentes autônomos, fine-tuning e engenharia de contexto
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#73D1E0] bg-[#05181D] border border-[#00595B] px-3 py-1 rounded-lg self-start sm:self-auto">
                    <Wand2 className="w-3.5 h-3.5" />
                    <span>Active Workflow</span>
                  </div>
                </div>

                {/* AI & LLM Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {aiCategory.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                        skill.focus
                          ? 'bg-[#0B2A32] text-teal-100 border border-[#73D1E0]/50 shadow-sm shadow-[#73D1E0]/10 hover:border-[#73D1E0] hover:bg-[#0F3742]'
                          : 'bg-[#05181D] text-[#8EACB4] border border-[#003338] hover:border-white/20'
                      }`}
                    >
                      {skill.focus && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#73D1E0] mr-1.5 animate-pulse" />}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
