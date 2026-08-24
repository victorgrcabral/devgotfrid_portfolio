'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProjectItem, PortfolioDictionary } from '@/data/types';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import ProjectMockupFrame from '@/components/ui/ProjectMockupFrame';
import DistortedHeadline from '@/components/ui/DistortedHeadline';

interface ProjectsSectionProps {
  projects?: ProjectItem[];
  dict: PortfolioDictionary;
  lang: string;
}

export default function ProjectsSection({
  projects,
  dict,
  lang,
}: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'software' | 'web' | 'design'>('all');
  const isPt = lang === 'pt';

  const webProjects = dict.webProjects || [];
  const designProjects = dict.designProjects || [];

  const allProjects = projects && projects.length > 0
    ? projects
    : [dict.featuredProject, ...webProjects, ...designProjects].filter(Boolean);

  const filteredProjects = activeTab === 'all'
    ? allProjects
    : allProjects.filter((p) => p.category === activeTab);

  const tabs: Array<{ id: 'all' | 'software' | 'web' | 'design'; label: string }> = [
    { id: 'all', label: dict.projects.tabs.all },
    { id: 'software', label: dict.projects.tabs.software },
    { id: 'web', label: dict.projects.tabs.web },
    { id: 'design', label: dict.projects.tabs.design },
  ];

  return (
    <section id="projects" className="relative z-10 py-20 border-t border-[#003338] bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#73D1E0]/10 text-[#73D1E0] border border-[#73D1E0]/30">
            <Layers className="w-3.5 h-3.5" />
            <span>{dict.projects.sectionTag}</span>
          </div>
          <DistortedHeadline
            text={dict.projects.sectionTitle}
            as="h2"
            align="center"
            className="text-3xl sm:text-4xl"
          />
          <p className="text-sm sm:text-base text-[#8EACB4]">
            {dict.projects.sectionSubtitle}
          </p>
        </div>

        {/* Symmetrical Balanced Filter Tabs Grid (4-col on desktop, 2x2 on mobile, ZERO horizontal scroll) */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-[#082229] border border-[#003338] shadow-lg">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-mono text-center transition-all duration-150 active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${
                    isSelected
                      ? 'bg-[#0B2A32] text-white border border-[#73D1E0]/50 shadow-md shadow-[#73D1E0]/15 font-semibold'
                      : 'text-[#8EACB4] hover:text-white hover:bg-white/5 border border-transparent font-medium'
                  }`}
                >
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#73D1E0] shadow-[0_0_6px_#73D1E0] shrink-0" />
                  )}
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with Smooth Fade-in on tab change */}
        <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-200">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#73D1E0]/50 transition-all duration-300 shadow-lg relative border-[#003338]"
            >
              <div className="flex-1 flex flex-col">
                {/* Mockup Frame / Artwork Container */}
                <div className="relative overflow-hidden bg-[#05181D]">
                  <ProjectMockupFrame project={project} lang={lang} />

                  {/* High-Contrast Hover Overlay */}
                  <Link
                    href={`/${lang}/projetos/${project.id}`}
                    className="absolute inset-0 bg-[#05181D]/88 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-6 text-center z-30"
                    aria-label={`Ver case de ${project.title}`}
                  >
                    <span className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#73D1E0] to-[#358A90] text-[#05181D] flex items-center justify-center shadow-lg shadow-[#73D1E0]/30 scale-90 group-hover:scale-100 transition-transform font-bold">
                      <ArrowRight className="w-6 h-6" />
                    </span>
                    <span className="text-sm font-bold text-white font-mono tracking-tight drop-shadow-md">
                      {dict.projects.caseStudyButton}
                    </span>
                    <span className="text-xs text-[#8EACB4] max-w-xs drop-shadow">
                      {isPt
                        ? 'Explorar decisões de design, arquitetura e direção de arte'
                        : 'Explore technical architecture, decisions and art direction'}
                    </span>
                  </Link>
                </div>

                {/* Card Content Info */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#082229] text-[#73D1E0] border border-[#00595B]/40">
                        {project.type}
                      </span>
                      <span className="text-xs font-mono text-[#5C7B83] uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#73D1E0] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs font-mono text-[#73D1E0]">
                      {project.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-[#8EACB4] leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  {/* Applied Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.stack.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[11px] font-mono bg-[#082229] text-[#8EACB4] border border-[#003338] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 5 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono bg-[#082229] text-[#5C7B83] border border-[#003338] rounded">
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer with Clean Vertical Alignment */}
              <div className="px-6 py-4 sm:px-7 flex items-center justify-between border-t border-[#003338] bg-[#061C22]">
                <Link
                  href={`/${lang}/projetos/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#73D1E0] hover:text-white transition-colors group/link"
                >
                  <span>{dict.projects.caseStudyButton}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>

                <div className="flex items-center gap-1.5 shrink-0">
                  {project.links?.live && project.links.live !== '#' && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#082229] hover:bg-[#0B2A32] active:scale-95 text-[#8EACB4] hover:text-white border border-[#003338] transition-all flex items-center justify-center"
                      title={dict.projects.viewSite}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#082229] hover:bg-[#0B2A32] active:scale-95 text-[#8EACB4] hover:text-white border border-[#003338] transition-all flex items-center justify-center"
                      title={dict.projects.sourceCode}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
