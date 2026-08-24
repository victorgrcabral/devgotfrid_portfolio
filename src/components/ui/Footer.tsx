'use client';

import React from 'react';
import { PortfolioDictionary } from '@/data/types';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { Mail, Terminal, ArrowUp } from 'lucide-react';

interface FooterProps {
  dict: PortfolioDictionary;
  lang?: string;
}

export default function Footer({ dict }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[#003338] bg-[#030F13] py-12 text-[#8EACB4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#003338]">
          {/* Persona Signature */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#082229] border border-[#00595B]/40 flex items-center justify-center text-[#73D1E0]">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-sm text-white block">
                {dict.profile.name}
              </span>
              <span className="text-xs font-mono text-[#5C7B83]">
                {dict.profile.role}
              </span>
            </div>
          </div>

          {/* Social Profiles (GitHub, LinkedIn, Email) */}
          <div className="flex items-center gap-2">
            <a
              href={dict.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#082229] hover:bg-[#0B2A32] text-[#8EACB4] hover:text-white border border-[#003338] transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={dict.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#082229] hover:bg-[#0B2A32] text-[#8EACB4] hover:text-white border border-[#003338] transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${dict.profile.email}`}
              className="p-2 rounded-lg bg-[#082229] hover:bg-[#0B2A32] text-[#8EACB4] hover:text-white border border-[#003338] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#082229] hover:bg-[#0B2A32] text-[#73D1E0] hover:text-white border border-[#003338] transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* System Status & Technical Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5C7B83]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#73D1E0] animate-pulse" />
            <span>{dict.footer.allSystemsNormal}</span>
          </div>

          <p>{dict.footer.builtWith}</p>
          <p>© {new Date().getFullYear()} {dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
