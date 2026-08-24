'use client';

import React from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/data/types';
import { Sparkles, Globe, Lock } from 'lucide-react';

interface ProjectMockupFrameProps {
  project: ProjectItem;
  lang?: string;
}

export default function ProjectMockupFrame({ project, lang = 'pt' }: ProjectMockupFrameProps) {
  const isPt = lang === 'pt';

  // 1. bidbento.lol: Interactive Canvas Preview with Official Cutout Badge & Looping Mascot
  if (project.id === 'bidbento') {
    return (
      <div className="w-full bg-[#05181D] border border-[#00595B]/40 rounded-xl overflow-hidden shadow-2xl">
        {/* Browser Top Chrome */}
        <div className="bg-[#082229] border-b border-[#003338] px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#05181D] border border-[#003338] rounded-md text-[11px] font-mono text-[#73D1E0]">
            <Lock className="w-3 h-3 text-[#73D1E0]" />
            <span>https://bidbento.lol</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{isPt ? 'WS AO VIVO' : 'WS LIVE'}</span>
          </div>
        </div>

        {/* Mockup Canvas */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-[#082229] via-[#05181D] to-[#0A2830] relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#73D1E0]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Logo Badge Cutout */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#003338] relative z-10">
            <div className="relative w-40 sm:w-48 h-10 sm:h-12">
              <Image
                src="/projects/bidbento-badge-cutout.png"
                alt="bidbento.lol Badge"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <span className="text-xs font-mono text-[#73D1E0] hidden sm:inline-block">
              {isPt ? 'Visibilidade proporcional em tempo real' : 'Proportional screen visibility in real time'}
            </span>
          </div>

          {/* Main Showcase Grid: Mascot on Left, Stats & Bidding on Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            {/* Left: Mascot Box */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#05181D]/80 border border-[#00595B]/40 text-center relative group shadow-lg">
              <div className="w-36 h-36 relative flex items-center justify-center">
                <Image
                  src="/projects/bidbento-mascot-transparent.svg"
                  alt="bidbento.lol Mascot"
                  width={140}
                  height={140}
                  className="animate-mascot-float drop-shadow-[0_0_20px_rgba(115,209,224,0.35)]"
                />
              </div>
              <span className="mt-3 text-xs font-mono text-[#73D1E0] font-bold">
                {isPt ? 'Mascote Oficial bidbento.lol' : 'Official bidbento.lol Mascot'}
              </span>
              <span className="text-[10px] text-[#8EACB4] font-mono">
                SVG Animado • High Concurrency
              </span>
            </div>

            {/* Right: Live Proportional Grid Preview */}
            <div className="md:col-span-7 space-y-3">
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 rounded-xl bg-[#0B2A32] border border-[#73D1E0]/30 text-center space-y-1">
                  <span className="text-[10px] font-mono text-[#8EACB4] uppercase block">
                    {isPt ? 'Espaço #01' : 'Slot #01'}
                  </span>
                  <span className="text-sm font-bold text-white font-mono">48.5%</span>
                  <span className="text-[9px] text-emerald-400 font-mono block">R$ 240,00</span>
                </div>
                <div className="p-3 rounded-xl bg-[#082229] border border-[#00595B] text-center space-y-1">
                  <span className="text-[10px] font-mono text-[#8EACB4] uppercase block">
                    {isPt ? 'Espaço #02' : 'Slot #02'}
                  </span>
                  <span className="text-sm font-bold text-white font-mono">31.2%</span>
                  <span className="text-[9px] text-emerald-400 font-mono block">R$ 155,00</span>
                </div>
                <div className="p-3 rounded-xl bg-[#082229] border border-[#00595B] text-center space-y-1">
                  <span className="text-[10px] font-mono text-[#8EACB4] uppercase block">
                    {isPt ? 'Espaço #03' : 'Slot #03'}
                  </span>
                  <span className="text-sm font-bold text-white font-mono">20.3%</span>
                  <span className="text-[9px] text-emerald-400 font-mono block">R$ 100,00</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#05181D] border border-[#003338] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8EACB4]">
                    {isPt ? 'Lance Mínimo Dinâmico:' : 'Minimum Dynamic Bid:'}
                  </span>
                  <span className="text-emerald-400 font-bold">{isPt ? 'A partir de R$ 1,00' : 'From $1.00'}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8EACB4]">
                    {isPt ? 'Motor de Concorrência:' : 'Concurrency Engine:'}
                  </span>
                  <span className="text-[#73D1E0] font-bold">PostgreSQL ACID + Lock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. INTERFUSÃO Group: Clean First-Fold Screenshot
  if (project.id === 'interfusao') {
    return (
      <div className="w-full bg-[#05181D] border border-[#78B13F]/40 rounded-xl overflow-hidden shadow-2xl">
        {/* Browser Top Chrome */}
        <div className="bg-[#082229] border-b border-[#003338] px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#05181D] border border-[#003338] rounded-md text-[11px] font-mono text-[#78B13F]">
            <Globe className="w-3 h-3 text-[#78B13F]" />
            <span>https://www.interfusao.com.br</span>
          </div>
          <span className="text-[10px] font-mono text-[#78B13F]">Core Web Vitals 98</span>
        </div>

        {/* Clean Webpage Image */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] bg-[#05181D]">
          <Image
            src="/projects/interfusao-clean.png"
            alt="INTERFUSÃO Primeira Dobra Oficial"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    );
  }

  // 3. Clínica Muricy: Clean First-Fold Screenshot
  if (project.id === 'clinica-muricy') {
    return (
      <div className="w-full bg-[#05181D] border border-[#D4AF37]/40 rounded-xl overflow-hidden shadow-2xl">
        {/* Browser Top Chrome */}
        <div className="bg-[#082229] border-b border-[#003338] px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#05181D] border border-[#003338] rounded-md text-[11px] font-mono text-[#D4AF37]">
            <Globe className="w-3 h-3 text-[#D4AF37]" />
            <span>https://clinicamuricy.com</span>
          </div>
          <span className="text-[10px] font-mono text-[#D4AF37]">WCAG 2.1 AAA</span>
        </div>

        {/* Clean Webpage Image */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] bg-[#05181D]">
          <Image
            src="/projects/clinica-muricy-clean.png"
            alt="Clínica Muricy Primeira Dobra Oficial"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    );
  }

  // 4. Creative Cases: High-Resolution Artwork Cover
  return (
    <div className="w-full aspect-[16/10] sm:aspect-[16/9] relative bg-[#082229] rounded-xl overflow-hidden border border-[#003338] group">
      {project.coverImage && (
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
        <span className="px-2.5 py-1 rounded bg-[#05181D]/80 backdrop-blur-md border border-[#003338]">
          {project.type}
        </span>
        <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#05181D]/80 backdrop-blur-md border border-[#003338]">
          <Sparkles className="w-3 h-3 text-[#73D1E0]" />
          <span>Case Study</span>
        </span>
      </div>
    </div>
  );
}
