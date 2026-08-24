'use client';

import React from 'react';
import { EducationItem, LanguageItem, PortfolioDictionary } from '@/data/types';
import { GraduationCap, Languages, Award } from 'lucide-react';
import DistortedHeadline from '@/components/ui/DistortedHeadline';

interface EducationSectionProps {
  educationList: EducationItem[];
  languagesList: LanguageItem[];
  dict: PortfolioDictionary;
  lang?: string;
}

export default function EducationSection({
  educationList,
  languagesList,
  dict,
}: EducationSectionProps) {

  return (
    <section id="education" className="relative z-10 py-20 border-t border-[#003338] bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Academic Foundation */}
        <div>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#73D1E0]/10 text-[#73D1E0] border border-[#73D1E0]/30 mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{dict.education.sectionTag}</span>
            </div>
            <DistortedHeadline
              text={dict.education.sectionTitle}
              as="h2"
              className="text-3xl sm:text-4xl mb-2"
            />
            <p className="text-sm sm:text-base text-[#8EACB4]">
              {dict.education.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationList.map((edu) => (
              <div
                key={edu.id}
                className="glass-panel rounded-2xl p-6 border-[#003338] hover:border-[#73D1E0]/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#082229] text-[#73D1E0] border border-[#00595B]/40">
                      {edu.status}
                    </span>
                    <span className="text-xs font-mono text-[#5C7B83]">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-white">
                    {edu.degree}
                  </h3>

                  <p className="text-xs font-medium text-[#73D1E0]">
                    {edu.institution}
                  </p>

                  {edu.details && (
                    <p className="text-xs text-[#8EACB4] leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Languages className="w-4 h-4 text-[#73D1E0]" />
            <h3 className="text-lg font-bold text-white tracking-tight">
              {dict.education.languagesHeading}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {languagesList.map((langItem, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#082229] border border-[#003338] space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white">
                    {langItem.language}
                  </span>
                  <Award className="w-3.5 h-3.5 text-[#73D1E0]" />
                </div>
                <span className="text-xs font-mono text-[#73D1E0] block">
                  {langItem.proficiency}
                </span>
                <p className="text-[11px] text-[#5C7B83] leading-relaxed">
                  {langItem.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
