'use client';

import React from 'react';
import { PortfolioDictionary } from '@/data/types';
import { Mail, Printer, ArrowLeft, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import Link from 'next/link';

interface ResumeViewProps {
  dict: PortfolioDictionary;
  lang: string;
}

export default function ResumeView({ dict, lang }: ResumeViewProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#05181D] text-[#F7F7F8] py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Top Controls (Hidden in Print) */}
        <div className="no-print flex items-center justify-between gap-4 mb-8 pb-4 border-b border-[#003338]">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#8EACB4] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#73D1E0]" />
            <span>{lang === 'pt' ? 'Voltar ao Portfólio' : 'Back to Portfolio'}</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-[#082229] hover:bg-[#0B2A32] text-[#F7F7F8] border border-[#00595B] transition-colors"
            >
              <Printer className="w-4 h-4 text-[#73D1E0]" />
              <span>{lang === 'pt' ? 'Imprimir / Salvar PDF' : 'Print / Save PDF'}</span>
            </button>
            <a
              href={dict.profile.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#05181D] bg-gradient-to-r from-[#73D1E0] to-[#358A90] hover:opacity-95 transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'pt' ? 'Baixar Currículo (PDF)' : 'Download Resume (PDF)'}</span>
            </a>
          </div>
        </div>

        {/* ATS-Friendly CV Sheet Container */}
        <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 sm:p-12 text-sm leading-normal print:p-0 print:shadow-none print:rounded-none">
          {/* Header */}
          <div className="border-b border-gray-300 pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">
              {dict.profile.name}
            </h1>
            <p className="text-base font-semibold text-[#00595B] mb-3">
              {dict.profile.role}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-600 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#00595B]" />
                <a href={`mailto:${dict.profile.email}`} className="hover:underline">
                  {dict.profile.email}
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-[#00595B]" />
                <a href={dict.profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  linkedin.com/in/victorgrcabral
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-[#00595B]" />
                <a href={dict.profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  github.com/victorgrcabral
                </a>
              </span>
              <span>São Paulo, SP (Remoto / Híbrido)</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-2">
              {lang === 'pt' ? 'Resumo Profissional' : 'Professional Summary'}
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              {dict.profile.heroBio}
            </p>
          </div>

          {/* Core Technical & Design Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-3">
              {lang === 'pt' ? 'Projetos em Destaque (Engenharia & Design)' : 'Featured Engineering & Design Projects'}
            </h2>

            {/* bidbento.lol */}
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-gray-900 text-xs">
                  {dict.featuredProject.title} — {dict.featuredProject.tagline}
                </span>
                <span className="text-[11px] font-mono text-gray-500">{dict.featuredProject.type}</span>
              </div>
              <p className="text-xs text-gray-700 mb-1">{dict.featuredProject.summary}</p>
              <p className="text-[11px] text-gray-600">
                <strong>Stack:</strong> {dict.featuredProject.stack.join(', ')}
              </p>
            </div>

            {/* Web Projects */}
            {dict.webProjects.map((proj) => (
              <div key={proj.id} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-gray-900 text-xs">{proj.title} — {proj.tagline}</span>
                  <span className="text-[11px] font-mono text-gray-500">{proj.type}</span>
                </div>
                <p className="text-xs text-gray-700 mb-1">{proj.summary}</p>
                <p className="text-[11px] text-gray-600">
                  <strong>Stack:</strong> {proj.stack.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Professional Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-3">
              {lang === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
            </h2>

            {dict.experiences.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-gray-900 text-xs">
                    {exp.role} — <span className="font-normal text-gray-700">{exp.company}</span>
                  </span>
                  <span className="text-[11px] font-mono text-gray-500">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-xs text-gray-700 mt-1 space-y-1">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Competencies */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-2">
              {lang === 'pt' ? 'Competências & Ferramentas' : 'Core Competencies & Tools'}
            </h2>
            <div className="space-y-1.5 text-xs text-gray-700">
              <p><strong>Front-end:</strong> React, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, Three.js, HTML5, CSS3, WCAG.</p>
              <p><strong>Back-end & Dados:</strong> PostgreSQL, Python, FastAPI, Node.js, REST APIs, Modelagem Relacional, JWT Auth, Docker.</p>
              <p><strong>Product Design & UX:</strong> Figma, Design Systems, Wireframing, UI/UX, Prototipagem de Alta Fidelidade.</p>
              <p><strong>Branding & Direção de Arte:</strong> Adobe Photoshop, Illustrator, InDesign, Premiere Pro, Identidade Visual, Key Visuals.</p>
            </div>
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-2">
                {lang === 'pt' ? 'Formação Acadêmica' : 'Education'}
              </h2>
              {dict.educationList.map((edu) => (
                <div key={edu.id} className="mb-2 text-xs text-gray-700">
                  <div className="font-semibold text-gray-900">{edu.degree}</div>
                  <div className="text-gray-600">{edu.institution} ({edu.period})</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-1 mb-2">
                {lang === 'pt' ? 'Idiomas' : 'Languages'}
              </h2>
              <div className="space-y-1 text-xs text-gray-700">
                {dict.languagesList.map((langItem, idx) => (
                  <div key={idx}>
                    <span className="font-semibold">{langItem.language}:</span> {langItem.proficiency}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
