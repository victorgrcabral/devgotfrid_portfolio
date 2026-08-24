'use client';

import React from 'react';
import { ExperienceItem, PortfolioDictionary } from '@/data/types';
import { Briefcase, Calendar, MapPin, Sparkles, History } from 'lucide-react';
import DistortedHeadline from '@/components/ui/DistortedHeadline';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  dict: PortfolioDictionary;
  lang: string;
}

export default function ExperienceSection({
  experiences,
  dict,
  lang,
}: ExperienceSectionProps) {
  const isPt = lang === 'pt';

  return (
    <section id="experience" className="relative z-10 py-24 border-t border-[#003338] bg-transparent scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#73D1E0]/10 text-[#73D1E0] border border-[#73D1E0]/30 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{dict.experience.sectionTag}</span>
          </div>
          <DistortedHeadline
            text={dict.experience.sectionTitle}
            as="h2"
            align="center"
            className="text-3xl sm:text-4xl mb-2"
          />
          <p className="text-sm sm:text-base text-[#8EACB4]">
            {dict.experience.sectionSubtitle}
          </p>
        </div>

        {/* Creative Vertical Timeline Stream */}
        <div className="relative">
          {/* Central Luminous Spine (Desktop: center, Mobile: left) */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#73D1E0] via-[#358A90]/60 to-[#003338] shadow-[0_0_12px_rgba(115,209,224,0.4)] pointer-events-none" />

          {/* Timeline Nodes */}
          <div className="space-y-12 md:space-y-16 relative">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-12 pl-10 md:pl-0 group`}
                >
                  {/* Glowing Timeline Marker Node on the Central Spine */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="relative">
                      {exp.isCurrent && (
                        <span className="absolute -inset-2 rounded-full bg-emerald-400/30 animate-ping" />
                      )}
                      <div className="w-8 h-8 rounded-full bg-[#05181D] border-2 border-[#73D1E0] group-hover:border-white group-hover:shadow-[0_0_16px_#73D1E0] transition-all flex items-center justify-center text-[10px] font-mono font-bold text-[#73D1E0] group-hover:text-white shadow-lg">
                        0{idx + 1}
                      </div>
                    </div>
                  </div>

                  {/* Experience Card (Left or Right on desktop) */}
                  <div className="w-full md:w-[calc(50%-2.5rem)]">
                    <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-[#003338] hover:border-[#73D1E0]/60 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-[#73D1E0]/10 space-y-4 relative">
                      {/* Card Header */}
                      <div className="pb-3.5 border-b border-[#003338]">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-[#73D1E0] transition-colors">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span>{isPt ? 'Posição Atual' : 'Current Role'}</span>
                            </span>
                          )}
                        </div>

                        <span className="text-sm font-semibold text-[#73D1E0] block font-mono">
                          {exp.company}
                        </span>

                        <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs font-mono text-[#8EACB4]">
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05181D] border border-[#003338]">
                            <Calendar className="w-3.5 h-3.5 text-[#73D1E0]" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05181D] border border-[#003338]">
                            <MapPin className="w-3.5 h-3.5 text-[#358A90]" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities List */}
                      <ul className="space-y-2 text-xs sm:text-sm text-[#8EACB4]">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#73D1E0] shrink-0 mt-1" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#003338]/60">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#05181D] text-[#F7F7F8] border border-[#003338] group-hover:border-[#00595B] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Prior Experience Footnote Notice */}
        <div className="mt-14 p-4 rounded-xl bg-[#082229]/60 border border-[#003338] flex items-center justify-center sm:justify-start gap-3 text-xs font-mono text-[#8EACB4] text-center sm:text-left">
          <History className="w-4 h-4 text-[#73D1E0] shrink-0" />
          <span>
            {isPt
              ? '✦ Trajetória anterior consolidada com experiências adicionais em design gráfico, criação e comunicação corporativa iniciadas em 2018.'
              : '✦ Prior career background with additional formative experiences in graphic design, art direction, and marketing communications dating back to 2018.'}
          </span>
        </div>
      </div>
    </section>
  );
}
