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

  const navItems = [
    { targetId: '#bidbento', label: dict.nav.projects },
    { targetId: '#skills', label: dict.nav.skills },
    { targetId: '#experience', label: dict.nav.experience },
    { targetId: '#contact', label: dict.nav.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === `/${lang}` || pathname === `/${lang}/` || pathname === '/') {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/${lang}${targetId}`);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#05181D]/90 backdrop-blur-md border-b border-[#003338] shadow-lg shadow-black/40 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brandmark / Persona — Links to top anchor (#about) */}
        <Link
          href={`/${lang}#about`}
          onClick={(e) => handleNavClick(e, '#about')}
          className="flex items-center gap-3 p-1.5 -ml-1.5 rounded-xl hover:bg-[#082229]/60 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#73D1E0]"
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

        {/* Generous Click Area Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 text-xs font-medium text-[#8EACB4]">
          {navItems.map((item) => (
            <Link
              key={item.targetId}
              href={`/${lang}${item.targetId}`}
              onClick={(e) => handleNavClick(e, item.targetId)}
              className="px-3.5 py-2 rounded-lg hover:text-[#F7F7F8] hover:bg-[#082229] border border-transparent hover:border-[#00595B]/50 transition-all cursor-pointer select-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions: Language Switcher & Clean Resume Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Switch */}
          <Link
            href={targetPath}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono bg-[#082229] hover:bg-[#0B2A32] text-[#8EACB4] hover:text-[#F7F7F8] border border-[#003338] hover:border-[#00595B] transition-colors"
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
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-[#0B2A32] hover:bg-[#0F3742] text-[#F7F7F8] border border-[#00595B] hover:border-[#73D1E0]/50 transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-[#73D1E0]" />
            <span>{dict.nav.resumeButton}</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href={targetPath}
            className="px-2.5 py-2 rounded-lg text-xs font-mono bg-[#082229] text-[#8EACB4] border border-[#003338]"
          >
            {nextLang.toUpperCase()}
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#082229] text-[#8EACB4] hover:text-[#F7F7F8] border border-[#003338] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#05181D]/98 backdrop-blur-md border-b border-[#003338] px-6 py-5 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1.5 text-sm font-medium text-[#8EACB4]">
            {navItems.map((item) => (
              <Link
                key={item.targetId}
                href={`/${lang}${item.targetId}`}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, item.targetId);
                }}
                className="px-3.5 py-2.5 rounded-lg hover:text-white hover:bg-[#082229] border border-transparent hover:border-[#00595B]/40 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#003338]">
            <a
              href={dict.profile.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium bg-[#0B2A32] hover:bg-[#0F3742] text-[#F7F7F8] border border-[#00595B]"
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
