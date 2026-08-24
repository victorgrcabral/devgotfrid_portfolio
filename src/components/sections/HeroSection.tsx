'use client';

import React from 'react';
import Link from 'next/link';
import { PortfolioDictionary } from '@/data/types';
import { FileText, ArrowRight, Mail, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import GlassCard3D from '@/components/canvas/GlassCard3D';
import DistortedHeadline from '@/components/ui/DistortedHeadline';

interface HeroSectionProps {
  dict: PortfolioDictionary;
  lang: string;
}

export default function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section id="about" className="relative z-10 min-h-screen flex items-center pt-28 pb-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Persona, Bio, Stack & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Badge & Location Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#73D1E0]/10 border border-[#73D1E0]/30 text-[#73D1E0] shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{dict.profile.availabilityBadge}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#082229]/80 border border-[#003338] text-[#8EACB4]">
                <MapPin className="w-3.5 h-3.5 text-[#358A90]" />
                <span>{dict.profile.location}</span>
              </div>
            </div>

            {/* Main Hero Headline (Interactive Mouse Distortion) */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#73D1E0] block">
                {dict.profile.name} • {lang === 'pt' ? 'Design & Tecnologia' : 'Design & Technology'}
              </span>

              <DistortedHeadline
                text={dict.hero.headline}
                as="h1"
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12]"
              />

              <p className="text-base sm:text-lg text-[#8EACB4] font-normal leading-relaxed">
                {dict.hero.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#5C7B83] leading-relaxed max-w-2xl">
                {dict.profile.heroBio}
              </p>
            </div>

            {/* Core Tech & Design Stack Badges */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#5C7B83] block mb-2.5">
                {lang === 'pt' ? 'Especialidades & Ecossistema:' : 'Core Stack & Toolchain:'}
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {dict.profile.stackHighlights.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono bg-[#082229]/90 text-[#F7F7F8] border border-[#003338] rounded-md hover:border-[#73D1E0]/50 hover:bg-[#0B2A32] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs & Social Connections */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary CTA: Resume with active press scale */}
              <a
                href={dict.profile.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-[#05181D] bg-gradient-to-r from-[#73D1E0] to-[#358A90] hover:opacity-95 active:scale-[0.97] transition-all duration-150 shadow-lg shadow-[#73D1E0]/20"
              >
                <FileText className="w-4 h-4" />
                <span>{dict.hero.ctaPrimary}</span>
              </a>

              {/* Secondary CTA: Links to #bidbento with active press scale */}
              <Link
                href={`/${lang}#bidbento`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-medium text-[#F7F7F8] bg-[#082229]/80 hover:bg-[#0B2A32] active:scale-[0.97] border border-[#00595B]/40 hover:border-[#73D1E0]/50 transition-all duration-150"
              >
                <span>{dict.hero.ctaProjects}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#73D1E0]" />
              </Link>

              {/* Direct Social Links */}
              <div className="flex items-center gap-1.5 pl-2 border-l border-[#003338]">
                <a
                  href={dict.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#082229]/80 hover:bg-[#0B2A32] active:scale-95 text-[#8EACB4] hover:text-white border border-[#003338] hover:border-[#73D1E0]/40 transition-all duration-150"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={dict.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#082229]/80 hover:bg-[#0B2A32] active:scale-95 text-[#8EACB4] hover:text-white border border-[#003338] hover:border-[#73D1E0]/40 transition-all duration-150"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${dict.profile.email}`}
                  className="p-2.5 rounded-xl bg-[#082229]/80 hover:bg-[#0B2A32] active:scale-95 text-[#8EACB4] hover:text-white border border-[#003338] hover:border-[#73D1E0]/40 transition-all duration-150"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Hero 3D Tilt Monolith (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <GlassCard3D className="w-full max-w-[420px] p-6 sm:p-7 space-y-6">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#73D1E0] shadow-[0_0_12px_#73D1E0]" />
                  <span className="text-xs font-mono font-semibold text-white tracking-wider">
                    VICTOR GOTFRID
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono text-[#73D1E0] bg-[#73D1E0]/10 border border-[#73D1E0]/30">
                  Mackenzie • Senac
                </span>
              </div>

              {/* Core Skill Matrix Visual Preview */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">Product Design & UI/UX</span>
                    <span className="text-[10px] font-mono text-[#73D1E0]">Figma • Design Systems</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#73D1E0] to-[#358A90] w-[96%] rounded-full" />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">Full-Stack Architecture</span>
                    <span className="text-[10px] font-mono text-[#358A90]">React • Next.js • Python</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#358A90] to-[#00595B] w-[94%] rounded-full" />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">AI Tools & Autonomous Agents</span>
                    <span className="text-[10px] font-mono text-teal-300">Codex • Antigravity • Claude</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-400 to-[#73D1E0] w-[93%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Monolith Clean Footer */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#8EACB4]">
                <span>Product & Web Designer</span>
                <span className="text-[#73D1E0]">São Paulo, Brasil</span>
              </div>
            </GlassCard3D>
          </div>
        </div>
      </div>
    </section>
  );
}
