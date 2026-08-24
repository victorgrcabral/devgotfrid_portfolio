'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/data/types';
import { X, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

interface LightboxModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  lang: string;
}

export default function LightboxModal({
  project,
  isOpen,
  onClose,
  lang,
}: LightboxModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#05181D]/90 backdrop-blur-md transition-opacity duration-200 animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog with calibrated spring-like entrance */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#082229] border border-[#00595B]/50 rounded-2xl shadow-2xl overflow-y-auto flex flex-col z-10 custom-scrollbar animate-in zoom-in-95 fade-in slide-in-from-bottom-2 duration-200 ease-out">
        {/* Header Bar */}
        <div className="sticky top-0 bg-[#082229]/95 backdrop-blur border-b border-[#003338] px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#0B2A32] text-[#73D1E0] border border-[#00595B]/40">
              {project.type}
            </span>
            <h3 id="modal-title" className="text-lg font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8EACB4] hover:text-white hover:bg-[#0B2A32] active:scale-90 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Visual Image */}
          {project.coverImage && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#003338] bg-[#05181D]">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Subtitle / Tagline */}
          <p className="text-base sm:text-lg font-medium text-[#73D1E0]">
            {project.tagline}
          </p>

          {/* Context, Problem & Role */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#05181D] border border-[#003338] space-y-1">
              <span className="text-xs font-mono text-[#73D1E0] font-semibold block uppercase">
                {lang === 'pt' ? 'Contexto' : 'Context'}
              </span>
              <p className="text-xs text-[#8EACB4] leading-relaxed">
                {project.context}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#05181D] border border-[#003338] space-y-1">
              <span className="text-xs font-mono text-[#73D1E0] font-semibold block uppercase">
                {lang === 'pt' ? 'Problema' : 'Problem'}
              </span>
              <p className="text-xs text-[#8EACB4] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#05181D] border border-[#003338] space-y-1">
              <span className="text-xs font-mono text-[#73D1E0] font-semibold block uppercase">
                {lang === 'pt' ? 'Escopo & Atuação' : 'Role & Scope'}
              </span>
              <p className="text-xs text-[#8EACB4] leading-relaxed">
                {project.role}
              </p>
            </div>
          </div>

          {/* Key Decisions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#5C7B83]">
              {lang === 'pt' ? 'Decisões Técnicas & Design' : 'Key Engineering Decisions'}
            </h4>
            <ul className="space-y-2">
              {project.keyDecisions.map((decision, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#8EACB4]">
                  <Sparkles className="w-4 h-4 text-[#73D1E0] shrink-0 mt-0.5" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applied Stack */}
          <div className="space-y-2 pt-2 border-t border-[#003338]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#5C7B83] block">
              {lang === 'pt' ? 'Tecnologias Utilizadas' : 'Technologies Used'}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-[#05181D] text-[#F7F7F8] border border-[#003338] rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-[#082229]/95 backdrop-blur border-t border-[#003338] px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.links?.live && project.links.live !== '#' && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#05181D] bg-gradient-to-r from-[#73D1E0] to-[#358A90] hover:opacity-95 active:scale-95 transition-all shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{lang === 'pt' ? 'Acessar Site / App' : 'Visit Live Project'}</span>
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-[#F7F7F8] bg-[#05181D] hover:bg-[#0B2A32] active:scale-95 border border-[#00595B] transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#73D1E0]" />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-[#8EACB4] hover:text-white bg-[#05181D] hover:bg-[#0B2A32] active:scale-95 border border-[#003338] transition-all cursor-pointer"
          >
            {lang === 'pt' ? 'Fechar' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
