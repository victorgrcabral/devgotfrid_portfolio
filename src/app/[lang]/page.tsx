'use client';

import React, { use } from 'react';
import { getDictionary } from '@/data';
import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import BidBentoSpotlight from '@/components/sections/BidBentoSpotlight';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsMatrix from '@/components/sections/SkillsMatrix';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/ui/Footer';
import InteractiveBackground from '@/components/canvas/InteractiveBackground';

export default function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  const dict = getDictionary(lang);

  const allProjects = [
    dict.featuredProject,
    ...dict.webProjects,
    ...dict.designProjects
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-[#F7F7F8] selection:bg-[#73D1E0] selection:text-[#05181D]">
      {/* Interactive Tech Mesh Background with Cursor Spotlight (Fixed throughout the whole page) */}
      <InteractiveBackground />

      {/* Main Content Stream */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar dict={dict} lang={lang} />

        <main className="flex-1">
          <HeroSection dict={dict} lang={lang} />

          <BidBentoSpotlight
            project={dict.featuredProject}
            dict={dict}
            lang={lang}
          />

          <ProjectsSection
            projects={allProjects}
            dict={dict}
            lang={lang}
          />

          <SkillsMatrix
            skillsList={dict.skillsList}
            dict={dict}
          />

          <ExperienceSection
            experiences={dict.experiences}
            dict={dict}
            lang={lang}
          />

          <EducationSection
            educationList={dict.educationList}
            languagesList={dict.languagesList}
            dict={dict}
            lang={lang}
          />

          <ContactSection dict={dict} lang={lang} />
        </main>

        <Footer dict={dict} lang={lang} />
      </div>
    </div>
  );
}
