'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectItem, PortfolioDictionary } from '@/data/types';
import ArchitectureInspector from './ArchitectureInspector';
import DistortedHeadline from '@/components/ui/DistortedHeadline';
import { Sparkles, ExternalLink, ArrowRight, Layers, ShieldCheck, Database, Server, Code2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

interface BidBentoSpotlightProps {
  project: ProjectItem;
  dict: PortfolioDictionary;
  lang: string;
}

export default function BidBentoSpotlight({ project, dict, lang }: BidBentoSpotlightProps) {
  const isPt = lang === 'pt';

  return (
    <section id="bidbento" className="relative z-10 py-20 border-t border-[#003338] bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#73D1E0]/10 text-[#73D1E0] border border-[#73D1E0]/30 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{dict.bidbento.sectionTag}</span>
          </div>
          <DistortedHeadline
            text={dict.bidbento.sectionTitle}
            as="h2"
            className="text-3xl sm:text-4xl mb-2"
          />
          <p className="text-sm sm:text-base text-[#8EACB4] max-w-2xl">
            {dict.bidbento.sectionSubtitle}
          </p>
        </div>

        {/* Featured Showcase Monolith */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border-[#00595B]/40 relative overflow-hidden mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Metadata & Value Prop (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#73D1E0]/15 text-[#73D1E0] border border-[#73D1E0]/30 font-semibold">
                    {project.type}
                  </span>
                  <span className="text-xs font-mono text-[#5C7B83]">•</span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live in Production</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {project.tagline}
                </h3>

                <p className="text-xs sm:text-sm text-[#8EACB4] leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Architectural Strengths Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-[#082229] border border-[#003338] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#73D1E0] font-bold">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Next.js 15 App Router</span>
                  </div>
                  <span className="text-[11px] text-[#5C7B83] block leading-tight">
                    {isPt ? 'Renderização e hidratação seletiva' : 'Server rendering & fast hydration'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#082229] border border-[#003338] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#358A90] font-bold">
                    <Server className="w-3.5 h-3.5" />
                    <span>Python & FastAPI</span>
                  </div>
                  <span className="text-[11px] text-[#5C7B83] block leading-tight">
                    {isPt ? 'Validação estrita com Pydantic' : 'Strict schema typing via Pydantic'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#082229] border border-[#003338] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#73D1E0] font-bold">
                    <Database className="w-3.5 h-3.5" />
                    <span>PostgreSQL ACID</span>
                  </div>
                  <span className="text-[11px] text-[#5C7B83] block leading-tight">
                    {isPt ? 'Integridade relacional contra conflitos' : 'Row locking preventing bid races'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#082229] border border-[#003338] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>JWT & Bcrypt</span>
                  </div>
                  <span className="text-[11px] text-[#5C7B83] block leading-tight">
                    {isPt ? 'Autenticação e segurança defensiva' : 'Defensive session handling'}
                  </span>
                </div>
              </div>

              {/* Stack Chips */}
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono bg-[#082229] text-[#F7F7F8] border border-[#003338] rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={`/${lang}/projetos/bidbento`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#05181D] bg-gradient-to-r from-[#73D1E0] via-[#358A90] to-[#00595B] hover:opacity-95 transition-opacity shadow-md"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isPt ? 'Ver Estudo de Caso Completo' : 'View Full Case Study'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={project.links?.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-[#F7F7F8] bg-[#082229] hover:bg-[#0B2A32] border border-[#00595B] transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-[#73D1E0]" />
                  <span>{dict.bidbento.viewLive}</span>
                </a>

                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#082229] hover:bg-[#0B2A32] text-[#8EACB4] hover:text-white border border-[#00595B] transition-colors"
                    title={dict.bidbento.viewCode}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Right: Authentic Purple Brand Showcase Card for bidbento.lol */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#130A24] via-[#0E061A] to-[#1A0C30] border border-purple-500/30 shadow-2xl relative group">
              {/* Authentic Cutout Badge Header with Purple Border */}
              <div className="w-full flex justify-center mb-6">
                <div className="p-2 sm:p-2.5 rounded-2xl bg-[#07030F]/90 border border-purple-500/40 shadow-inner flex items-center justify-center">
                  <div className="relative w-48 sm:w-56 h-12 sm:h-14">
                    <Image
                      src="/projects/bidbento-badge-cutout.png"
                      alt="bidbento.lol Official Badge"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Looping Robot Mascot with Authentic Purple Glow */}
              <div className="relative w-40 sm:w-52 h-40 sm:h-52 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/35 via-fuchsia-500/25 to-indigo-500/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />
                <Image
                  src="/projects/bidbento-mascot-transparent.svg"
                  alt="bidbento.lol Animated Robot Mascot"
                  width={180}
                  height={180}
                  className="relative z-10 animate-mascot-float drop-shadow-[0_10px_25px_rgba(168,85,247,0.5)]"
                />
              </div>

              {/* Live Status Ticker */}
              <div className="mt-6 flex items-center gap-3 px-4 py-2 rounded-xl bg-black/70 border border-purple-500/40 text-xs font-mono shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-purple-300 font-semibold">bidbento.lol</span>
                <span className="text-[#5C7B83]">•</span>
                <span className="text-purple-200/80">{isPt ? 'Concorrência ACID + Lock Ativa' : 'ACID Concurrency Active'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Architecture Breakdown */}
        {project.architecture && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#73D1E0]" />
              <h3 className="text-xl font-bold text-white">
                {dict.bidbento.architectureTab}
              </h3>
            </div>
            <p className="text-xs text-[#5C7B83]">
              {dict.bidbento.inspectNodePrompt}
            </p>
            <ArchitectureInspector nodes={project.architecture.nodes} lang={lang} />
          </div>
        )}
      </div>
    </section>
  );
}
