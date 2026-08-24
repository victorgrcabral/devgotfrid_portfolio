'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PortfolioDictionary } from '@/data/types';
import { FileText, Globe, Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  dict: PortfolioDictionary;
  lang: string;
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const nextLang = lang === 'pt' ? 'en' : 'pt';
  const targetPath = pathname.replace(`/${lang}`, `/${nextLang}`) || `/${nextLang}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#05181D]/90 backdrop-blur-md border-b border-[#003338] shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brandmark / Persona — Links to top anchor (#about) */}
        <Link
          href={`/${lang}#about`}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#73D1E0] rounded"
          title={dict.nav.about}
        >
          <div className="w-9 h-9 rounded-xl bg-[#082229] border border-[#00595B]/40 flex items-center justify-center group-hover:border-[#73D1E0]/60 transition-colors shadow-inner shrink-0">
            <Terminal className="w-4 h-4 text-[#73D1E0]" />
          </div>
          <div className="flex flex-col justify-center space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm tracking-tight text-[#F7F7F8] group-hover:text-white transition-colors leading-tight">
                Victor Gotfrid
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#73D1E0]/10 text-[#73D1E0] border border-[#73D1E0]/30 leading-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#73D1E0] animate-pulse" />
                <span>Design Engineer</span>
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#8EACB4] block leading-tight pt-0.5">
              {dict.profile.role}
            </span>
          </div>
        </Link>

        {/* Streamlined Desktop Navigation Links (Projetos links to #bidbento, first project) */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#8EACB4]">
          <Link href={`/${lang}#bidbento`} className="hover:text-white transition-colors">
            {dict.nav.projects}
          </Link>
          <Link href={`/${lang}#skills`} className="hover:text-white transition-colors">
            {dict.nav.skills}
          </Link>
          <Link href={`/${lang}#experience`} className="hover:text-white transition-colors">
            {dict.nav.experience}
          </Link>
          <Link href={`/${lang}#contact`} className="hover:text-white transition-colors">
            {dict.nav.contact}
          </Link>
        </nav>

        {/* Right Actions: Language Switcher & Clean Resume Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switch */}
          <Link
            href={targetPath}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono bg-[#082229] hover:bg-[#0B2A32] text-[#8EACB4] hover:text-[#F7F7F8] border border-[#003338] transition-colors"
            title="Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-[#73D1E0]" />
            <span>{lang.toUpperCase()}</span>
            <span className="text-[#5C7B83]">/</span>
            <span className="text-[#5C7B83] hover:text-white">{nextLang.toUpperCase()}</span>
          </Link>

          {/* Clean PDF Resume Link */}
          <a
            href={dict.profile.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0B2A32] hover:bg-[#0F3742] text-[#F7F7F8] border border-[#00595B] hover:border-[#73D1E0]/50 transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-[#73D1E0]" />
            <span>{dict.nav.resumeButton}</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href={targetPath}
            className="p-2 rounded-lg text-xs font-mono bg-[#082229] text-[#8EACB4] border border-[#003338]"
          >
            {nextLang.toUpperCase()}
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#082229] text-[#8EACB4] hover:text-[#F7F7F8] border border-[#003338]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#05181D]/98 border-b border-[#003338] px-6 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-[#8EACB4]">
            <Link
              href={`/${lang}#bidbento`}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white"
            >
              {dict.nav.projects}
            </Link>
            <Link
              href={`/${lang}#skills`}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white"
            >
              {dict.nav.skills}
            </Link>
            <Link
              href={`/${lang}#experience`}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white"
            >
              {dict.nav.experience}
            </Link>
            <Link
              href={`/${lang}#contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white"
            >
              {dict.nav.contact}
            </Link>
          </nav>
          <div className="pt-3 border-t border-[#003338]">
            <a
              href={dict.profile.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium bg-[#0B2A32] text-[#F7F7F8] border border-[#00595B]"
            >
              <FileText className="w-4 h-4 text-[#73D1E0]" />
              <span>{dict.nav.resumeButton} (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
