import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/data';
import { ProjectItem } from '@/data/types';
import ProjectMockupFrame from '@/components/ui/ProjectMockupFrame';
import ArchitectureInspector from '@/components/sections/ArchitectureInspector';
import InterfusaoOperationsMap from '@/components/ui/InterfusaoOperationsMap';
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Layers,
  ArrowRight,
  Palette,
  ImageIcon
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

interface ProjectPageProps {
  params: Promise<{
    lang: string;
    id: string;
  }>;
}

export async function generateStaticParams() {
  const languages = ['pt', 'en'];
  const projectIds = [
    'bidbento',
    'interfusao',
    'clinica-muricy',
    'nerdy',
    'djasco',
    'social-hype',
    'buona-notte'
  ];

  const paths = [];
  for (const lang of languages) {
    for (const id of projectIds) {
      paths.push({ lang, id });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { lang, id } = await params;
  const dict = getDictionary(lang);
  const allProjects: ProjectItem[] = [
    dict.featuredProject,
    ...dict.webProjects,
    ...dict.designProjects
  ];

  const project = allProjects.find((p) => p.id === id);
  if (!project) return { title: 'Projeto | Victor Gotfrid' };

  return {
    title: `${project.title} — Case Study | Victor Gotfrid`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { lang, id } = await params;
  const dict = getDictionary(lang);

  const allProjects: ProjectItem[] = [
    dict.featuredProject,
    ...dict.webProjects,
    ...dict.designProjects
  ];

  const currentIndex = allProjects.findIndex((p) => p.id === id);
  if (currentIndex === -1) {
    notFound();
  }

  const project = allProjects[currentIndex];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const isPt = lang === 'pt';

  return (
    <main className="min-h-screen bg-[#05181D] text-[#F7F7F8] pt-24 pb-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href={`/${lang}#bidbento`}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#73D1E0] hover:text-white bg-[#082229] border border-[#003338] px-3.5 py-2 rounded-xl transition-all shadow-sm group active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{isPt ? 'Voltar para Todos os Cases' : 'Back to All Cases'}</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-[#8EACB4]">
            <span className="hidden sm:inline">{dict.profile.name}</span>
            <span className="hidden sm:inline">•</span>
            <span className="px-2.5 py-0.5 rounded bg-[#082229] text-[#73D1E0] border border-[#00595B]/40">
              {project.type}
            </span>
          </div>
        </div>

        {/* Case Header Hero */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#73D1E0]/10 text-[#73D1E0] border border-[#73D1E0]/30">
            <Layers className="w-3.5 h-3.5" />
            <span>{project.category.toUpperCase()} • CASE STUDY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-[#73D1E0] font-mono">
            {project.tagline}
          </p>

          <p className="text-sm sm:text-base text-[#8EACB4] leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Action Links (Live Site & GitHub) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.links?.live && project.links.live !== '#' && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#05181D] bg-gradient-to-r from-[#73D1E0] to-[#358A90] hover:opacity-95 active:scale-95 rounded-xl transition-all shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{isPt ? 'Acessar Aplicação / Site Oficial' : 'Launch Official Website'}</span>
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#F7F7F8] bg-[#082229] hover:bg-[#0B2A32] active:scale-95 border border-[#00595B] rounded-xl transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#73D1E0]" />
                <span>{isPt ? 'Código no GitHub' : 'GitHub Repository'}</span>
              </a>
            )}
          </div>
        </div>

        {/* High-Fidelity Visual Mockup / Interactive Artwork */}
        <div className="mb-12 shadow-2xl rounded-2xl overflow-hidden border border-[#003338]">
          <ProjectMockupFrame project={project} lang={lang} />
        </div>

        {/* INTERFUSÃO Special Feature: Interactive Operations Map */}
        {project.id === 'interfusao' && (
          <div className="mb-14">
            <InterfusaoOperationsMap lang={lang} />
          </div>
        )}

        {/* Color Palette Tokens Section (if provided) */}
        {project.colorPalette && project.colorPalette.length > 0 && (
          <div className="mb-12 p-6 bg-[#082229] border border-[#003338] rounded-2xl space-y-4 shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-[#003338]">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-[#73D1E0]" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  {isPt ? 'Design System & Paleta de Cores Oficial' : 'Official Design System & Color Tokens'}
                </span>
              </div>
              <span className="text-xs font-mono text-[#5C7B83]">Color Palette</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.colorPalette.map((color, idx) => (
                <div key={idx} className="p-3 bg-[#05181D] border border-[#003338] rounded-xl space-y-2">
                  <div
                    className="h-12 rounded-lg border border-white/10 shadow-inner"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <span className="text-xs font-mono text-white block font-bold">{color.name}</span>
                    <span className="text-[10px] font-mono text-[#73D1E0] block">{color.hex}</span>
                    {color.role && (
                      <span className="text-[10px] text-[#8EACB4] block truncate">{color.role}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* High-Resolution Visual Boards Gallery */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="mb-14 space-y-8">
            <div className="flex items-center justify-between pb-3 border-b border-[#003338]">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#73D1E0]" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {isPt ? 'Pranchas Visuais, Conceito & Aplicações' : 'Visual Boards, Concept & Applications'}
                </h3>
              </div>
              <span className="text-xs font-mono text-[#5C7B83]">
                {project.galleryImages.length} {isPt ? 'pranchas em alta resolução' : 'high-res boards'}
              </span>
            </div>

            {/* Special Mode 1: NERDY CLOTHING — Seamless Continuous Strip (No Gaps, No Captions) */}
            {project.id === 'nerdy' ? (
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#003338] bg-black flex flex-col">
                {project.galleryImages.map((imgSrc, idx) => (
                  <div key={idx} className="w-full block leading-none">
                    <Image
                      src={imgSrc}
                      alt={`${project.title} - Visual Story ${idx + 1}`}
                      width={1400}
                      height={900}
                      className="w-full h-auto block object-cover"
                      priority={idx < 3}
                    />
                  </div>
                ))}
              </div>
            ) : project.id === 'djasco' ? (
              /* Special Mode 2: Djasco Headshop — Balanced Bento Grid Layout */
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
                {/* Hero Main Board (Full Width 12 cols) */}
                {project.galleryImages[0] && (
                  <div className="md:col-span-12 rounded-2xl overflow-hidden border border-[#003338] bg-[#082229] shadow-xl hover:border-[#73D1E0]/50 transition-all p-2 bg-[#05181D]">
                    <Image
                      src={project.galleryImages[0]}
                      alt="Djasco Master Identity Board"
                      width={1400}
                      height={900}
                      className="w-full h-auto object-contain rounded-xl"
                      priority
                    />
                  </div>
                )}

                {/* 2-Column Bento Duo */}
                {project.galleryImages[1] && (
                  <div className="md:col-span-6 rounded-2xl overflow-hidden border border-[#003338] bg-[#082229] shadow-xl hover:border-[#73D1E0]/50 transition-all p-2 bg-[#05181D]">
                    <Image
                      src={project.galleryImages[1]}
                      alt="Djasco Packaging Art"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                )}
                {project.galleryImages[2] && (
                  <div className="md:col-span-6 rounded-2xl overflow-hidden border border-[#003338] bg-[#082229] shadow-xl hover:border-[#73D1E0]/50 transition-all p-2 bg-[#05181D]">
                    <Image
                      src={project.galleryImages[2]}
                      alt="Djasco Brand Pattern"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                )}

                {/* 3-Column Bento Trio */}
                {project.galleryImages[3] && (
                  <div className="md:col-span-4 rounded-2xl overflow-hidden border border-[#003338] bg-[#082229] shadow-xl hover:border-[#73D1E0]/50 transition-all p-2 bg-[#05181D]">
                    <Image
                      src={project.galleryImages[3]}
                      alt="Djasco Illustrations"
                      width={600}
                      height={600}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                )}
                {project.galleryImages[4] && (
                  <div className="md:col-span-4 rounded-2xl overflow-hidden border border-[#003338] bg-[#082229] shadow-xl hover:border-[#73D1E0]/50 transition-all p-2 bg-[#05181D]">
                    <Image
                      src={project.galleryImages[4]}
                      alt="Djasco Merchandise"
                      width={600}
                      height={600}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                )}
                {project.galleryImages[5] && (
                  <div className="md:col-span-4 rounded-2xl overflow-hidden border border-[#003338] bg-[#082229] shadow-xl hover:border-[#73D1E0]/50 transition-all p-2 bg-[#05181D]">
                    <Image
                      src={project.galleryImages[5]}
                      alt="Djasco Typography"
                      width={600}
                      height={600}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                )}

                {/* Remaining Bento Boards */}
                {project.galleryImages.slice(6).map((imgSrc, idx) => (
                  <div
                    key={idx + 6}
                    className="md:col-span-6 rounded-2xl overflow-hidden border border-[#003338] bg-[#082229] shadow-xl hover:border-[#73D1E0]/50 transition-all p-2 bg-[#05181D]"
                  >
                    <Image
                      src={imgSrc}
                      alt={`Djasco Board ${idx + 7}`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* Standard Uncropped Storytelling Layout for Other Projects */
              <div className="space-y-8">
                {project.galleryImages.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl overflow-hidden border border-[#003338] bg-[#082229] shadow-2xl group hover:border-[#73D1E0]/50 transition-all"
                  >
                    <div className="relative w-full bg-[#05181D] flex items-center justify-center p-2 sm:p-4">
                      <Image
                        src={imgSrc}
                        alt={`${project.title} - Prancha Oficial ${idx + 1}`}
                        width={1400}
                        height={900}
                        className="w-full h-auto max-h-none object-contain rounded-xl"
                        priority={idx < 2}
                      />
                    </div>
                    <div className="p-4 bg-[#061C22] border-t border-[#003338] flex items-center justify-between text-xs font-mono text-[#8EACB4]">
                      <span className="font-semibold text-[#F7F7F8]">
                        {isPt ? `Prancha Oficial #${idx + 1}` : `Official Board #${idx + 1}`}
                      </span>
                      <span className="text-[#73D1E0]">
                        {project.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Deep Dive Case Content Sections */}
        <div className="space-y-10">
          {/* Context, Problem & Scope */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-[#082229] border border-[#003338] rounded-2xl space-y-2">
              <span className="text-xs font-mono text-[#73D1E0] font-bold block uppercase tracking-wider">
                {isPt ? '01. Contexto do Projeto' : '01. Project Context'}
              </span>
              <p className="text-xs sm:text-sm text-[#8EACB4] leading-relaxed">
                {project.context}
              </p>
            </div>

            <div className="p-5 bg-[#082229] border border-[#003338] rounded-2xl space-y-2">
              <span className="text-xs font-mono text-[#73D1E0] font-bold block uppercase tracking-wider">
                {isPt ? '02. Problema & Oportunidade' : '02. Problem & Opportunity'}
              </span>
              <p className="text-xs sm:text-sm text-[#8EACB4] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 bg-[#082229] border border-[#003338] rounded-2xl space-y-2">
              <span className="text-xs font-mono text-[#73D1E0] font-bold block uppercase tracking-wider">
                {isPt ? '03. Escopo & Atuação' : '03. Scope & Execution'}
              </span>
              <p className="text-xs sm:text-sm text-[#8EACB4] leading-relaxed">
                {project.role}
              </p>
            </div>
          </div>

          {/* Interactive Architecture Inspector (if software/fullstack) */}
          {project.architecture && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#73D1E0]" />
                <h3 className="text-lg font-bold text-white">
                  {isPt ? 'Arquitetura do Sistema & Decisões Técnicas' : 'System Architecture & Technical Decisions'}
                </h3>
              </div>
              <ArchitectureInspector nodes={project.architecture.nodes} lang={lang} />
            </div>
          )}

          {/* Key Decisions & Technical Highlights */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4 border-[#003338]">
            <h3 className="text-base font-bold text-white uppercase font-mono tracking-wider text-[#73D1E0]">
              {isPt ? 'Decisões de Engenharia & Design' : 'Engineering & Design Rationale'}
            </h3>
            <ul className="space-y-3">
              {project.keyDecisions.map((decision, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#8EACB4]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#73D1E0] mt-2 shrink-0" />
                  <span className="leading-relaxed">{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solved Technical Challenges */}
          <div className="p-6 sm:p-8 bg-[#082229] border border-[#003338] rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-[#73D1E0]">
              <AlertCircle className="w-5 h-5" />
              <h3 className="text-base font-bold text-white uppercase font-mono tracking-wider">
                {isPt ? 'Desafios Superados' : 'Solved Challenges'}
              </h3>
            </div>
            <ul className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#8EACB4]">
                  <span className="text-[#73D1E0] font-bold shrink-0">✓</span>
                  <span className="leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verifiable Outcome */}
          <div className="p-6 sm:p-8 bg-[#73D1E0]/5 border border-[#73D1E0]/30 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-[#73D1E0]">
              <CheckCircle2 className="w-5 h-5" />
              <h3 className="text-base font-bold text-white uppercase font-mono tracking-wider">
                {isPt ? 'Resultado Verificável' : 'Verifiable Outcome'}
              </h3>
            </div>
            <p className="text-sm text-[#F7F7F8] leading-relaxed pt-1">
              {project.verifiableResult}
            </p>
          </div>

          {/* Stack & Tools */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#5C7B83] block">
              {isPt ? 'Ferramentas & Tecnologias Aplicadas:' : 'Applied Tools & Toolchain:'}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 text-xs font-mono bg-[#082229] text-[#F7F7F8] border border-[#003338] rounded-xl hover:border-[#73D1E0]/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Previous / Next Project Navigation Bar */}
        <div className="mt-16 pt-8 border-t border-[#003338] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={`/${lang}/projetos/${prevProject.id}`}
            className="w-full sm:w-auto p-4 rounded-xl bg-[#082229] hover:bg-[#0B2A32] active:scale-95 border border-[#003338] hover:border-[#73D1E0]/50 transition-all flex items-center gap-3 group"
          >
            <ArrowLeft className="w-4 h-4 text-[#73D1E0] transition-transform group-hover:-translate-x-1" />
            <div className="text-left">
              <span className="text-[10px] font-mono text-[#5C7B83] block uppercase">
                {isPt ? 'Projeto Anterior' : 'Previous Project'}
              </span>
              <span className="text-xs font-bold text-white group-hover:text-[#73D1E0] transition-colors">
                {prevProject.title}
              </span>
            </div>
          </Link>

          <Link
            href={`/${lang}/projetos/${nextProject.id}`}
            className="w-full sm:w-auto p-4 rounded-xl bg-[#082229] hover:bg-[#0B2A32] active:scale-95 border border-[#003338] hover:border-[#73D1E0]/50 transition-all flex items-center justify-between sm:justify-end gap-3 group"
          >
            <div className="text-right">
              <span className="text-[10px] font-mono text-[#5C7B83] block uppercase">
                {isPt ? 'Próximo Projeto' : 'Next Project'}
              </span>
              <span className="text-xs font-bold text-white group-hover:text-[#73D1E0] transition-colors">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#73D1E0] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
