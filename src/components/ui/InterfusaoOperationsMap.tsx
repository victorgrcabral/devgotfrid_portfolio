'use client';

import React, { useState } from 'react';
import { Globe } from 'lucide-react';

interface WorldLocation {
  id: string;
  name: string;
  country: string;
  role: 'headquarters' | 'office' | 'partner';
  flag: string;
  label: string;
  x: number; // percentage in viewBox
  y: number;
}

const locations: WorldLocation[] = [
  // Headquarters & Offices (Green)
  {
    id: 'sp',
    name: 'INTERFUSÃO',
    country: 'São Paulo, Brasil',
    role: 'headquarters',
    flag: '🇧🇷',
    label: 'SEDE',
    x: 275,
    y: 310,
  },
  {
    id: 'be',
    name: 'INTERFUSÃO Europe',
    country: 'Bélgica / Holanda',
    role: 'office',
    flag: '🇪🇺',
    label: 'ESCRITÓRIO',
    x: 440,
    y: 160,
  },
  {
    id: 'sg',
    name: 'INTERFUSÃO Asia Hub',
    country: 'Singapura',
    role: 'office',
    flag: '🇸🇬',
    label: 'ESCRITÓRIO',
    x: 720,
    y: 270,
  },

  // Strategic Partners (Yellow)
  {
    id: 'us',
    name: 'North America Distribution',
    country: 'Estados Unidos & Canadá',
    role: 'partner',
    flag: '🇺🇸',
    label: 'PARCEIRO',
    x: 230,
    y: 175,
  },
  {
    id: 'cl',
    name: 'Andean Mining Supply',
    country: 'Antofagasta / Chile',
    role: 'partner',
    flag: '🇨🇱',
    label: 'PARCEIRO',
    x: 240,
    y: 280,
  },
  {
    id: 'pe',
    name: 'Southern Pacific Mining',
    country: 'Peru',
    role: 'partner',
    flag: '🇵🇪',
    label: 'PARCEIRO',
    x: 215,
    y: 250,
  },
  {
    id: 'de',
    name: 'Central Europe Heavy Tech',
    country: 'Alemanha',
    role: 'partner',
    flag: '🇩🇪',
    label: 'PARCEIRO',
    x: 480,
    y: 180,
  },
  {
    id: 'za',
    name: 'African Mining Corridor',
    country: 'África do Sul',
    role: 'partner',
    flag: '🇿🇦',
    label: 'PARCEIRO',
    x: 505,
    y: 330,
  },
  {
    id: 'in',
    name: 'South Asian Mineral Hub',
    country: 'Índia',
    role: 'partner',
    flag: '🇮🇳',
    label: 'PARCEIRO',
    x: 645,
    y: 235,
  },
  {
    id: 'au',
    name: 'Oceania Mining Partner',
    country: 'Austrália (Perth & Sydney)',
    role: 'partner',
    flag: '🇦🇺',
    label: 'PARCEIRO',
    x: 790,
    y: 335,
  },
];

export default function InterfusaoOperationsMap({ lang }: { lang: string }) {
  const [activeLoc, setActiveLoc] = useState<WorldLocation>(locations[0]);
  const isPt = lang === 'pt';

  return (
    <div className="rounded-2xl border border-[#003338] bg-[#03130E] p-6 sm:p-10 space-y-8 shadow-2xl relative overflow-hidden">
      {/* Background Dark Forest Radial Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#78B13F]/06 rounded-full blur-[140px] pointer-events-none" />

      {/* Header matching authentic website */}
      <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold bg-[#14492A] text-[#4ADE80] uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5" />
          <span>{isPt ? 'PRESENÇA GLOBAL' : 'GLOBAL PRESENCE'}</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
          {isPt ? 'ATUAÇÃO EM TODOS OS CONTINENTES' : 'OPERATING ACROSS ALL CONTINENTS'}
        </h3>

        <p className="text-xs sm:text-sm text-[#A3B899] leading-relaxed max-w-2xl mx-auto">
          {isPt
            ? 'Com sede no Brasil e presença internacional, a INTERFUSÃO leva soluções de alta performance para operações de mineração ao redor do mundo.'
            : 'Headquartered in Brazil with international presence, INTERFUSÃO delivers high-performance solutions for mining operations worldwide.'}
        </p>
      </div>

      {/* Isometric 3D Dotted World Map Graphic */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] max-w-5xl mx-auto flex items-center justify-center p-2">
        <svg
          viewBox="100 80 800 350"
          className="w-full h-full filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] select-none"
        >
          <defs>
            <radialGradient id="greenPulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="yellowPulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#EAB308" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Dotted Continents Grid Silhouette */}
          <g fill="#78B13F" opacity="0.32">
            {/* North America Dotted Cluster */}
            <circle cx="160" cy="130" r="2.2" /><circle cx="175" cy="130" r="2.2" /><circle cx="190" cy="130" r="2.2" /><circle cx="205" cy="130" r="2.2" /><circle cx="220" cy="130" r="2.2" />
            <circle cx="150" cy="145" r="2.2" /><circle cx="165" cy="145" r="2.2" /><circle cx="180" cy="145" r="2.2" /><circle cx="195" cy="145" r="2.2" /><circle cx="210" cy="145" r="2.2" /><circle cx="225" cy="145" r="2.2" /><circle cx="240" cy="145" r="2.2" />
            <circle cx="160" cy="160" r="2.2" /><circle cx="175" cy="160" r="2.2" /><circle cx="190" cy="160" r="2.2" /><circle cx="205" cy="160" r="2.2" /><circle cx="220" cy="160" r="2.2" /><circle cx="235" cy="160" r="2.2" /><circle cx="250" cy="160" r="2.2" /><circle cx="265" cy="160" r="2.2" />
            <circle cx="175" cy="175" r="2.2" /><circle cx="190" cy="175" r="2.2" /><circle cx="205" cy="175" r="2.2" /><circle cx="220" cy="175" r="2.2" /><circle cx="235" cy="175" r="2.2" /><circle cx="250" cy="175" r="2.2" />
            <circle cx="190" cy="190" r="2.2" /><circle cx="205" cy="190" r="2.2" /><circle cx="220" cy="190" r="2.2" /><circle cx="235" cy="190" r="2.2" />
            <circle cx="205" cy="205" r="2.2" /><circle cx="220" cy="205" r="2.2" />

            {/* South America Dotted Cluster */}
            <circle cx="230" cy="235" r="2.2" /><circle cx="245" cy="235" r="2.2" /><circle cx="260" cy="235" r="2.2" />
            <circle cx="225" cy="250" r="2.2" /><circle cx="240" cy="250" r="2.2" /><circle cx="255" cy="250" r="2.2" /><circle cx="270" cy="250" r="2.2" /><circle cx="285" cy="250" r="2.2" />
            <circle cx="235" cy="265" r="2.2" /><circle cx="250" cy="265" r="2.2" /><circle cx="265" cy="265" r="2.2" /><circle cx="280" cy="265" r="2.2" /><circle cx="295" cy="265" r="2.2" />
            <circle cx="240" cy="280" r="2.2" /><circle cx="255" cy="280" r="2.2" /><circle cx="270" cy="280" r="2.2" /><circle cx="285" cy="280" r="2.2" />
            <circle cx="245" cy="295" r="2.2" /><circle cx="260" cy="295" r="2.2" /><circle cx="275" cy="295" r="2.2" />
            <circle cx="250" cy="310" r="2.2" /><circle cx="265" cy="310" r="2.2" />
            <circle cx="255" cy="325" r="2.2" />

            {/* Europe Dotted Cluster */}
            <circle cx="430" cy="140" r="2.2" /><circle cx="445" cy="140" r="2.2" /><circle cx="460" cy="140" r="2.2" /><circle cx="475" cy="140" r="2.2" />
            <circle cx="420" cy="155" r="2.2" /><circle cx="435" cy="155" r="2.2" /><circle cx="450" cy="155" r="2.2" /><circle cx="465" cy="155" r="2.2" /><circle cx="480" cy="155" r="2.2" /><circle cx="495" cy="155" r="2.2" />
            <circle cx="430" cy="170" r="2.2" /><circle cx="445" cy="170" r="2.2" /><circle cx="460" cy="170" r="2.2" /><circle cx="475" cy="170" r="2.2" /><circle cx="490" cy="170" r="2.2" /><circle cx="505" cy="170" r="2.2" />

            {/* Africa Dotted Cluster */}
            <circle cx="440" cy="195" r="2.2" /><circle cx="455" cy="195" r="2.2" /><circle cx="470" cy="195" r="2.2" /><circle cx="485" cy="195" r="2.2" /><circle cx="500" cy="195" r="2.2" /><circle cx="515" cy="195" r="2.2" />
            <circle cx="445" cy="210" r="2.2" /><circle cx="460" cy="210" r="2.2" /><circle cx="475" cy="210" r="2.2" /><circle cx="490" cy="210" r="2.2" /><circle cx="505" cy="210" r="2.2" /><circle cx="520" cy="210" r="2.2" /><circle cx="535" cy="210" r="2.2" />
            <circle cx="450" cy="225" r="2.2" /><circle cx="465" cy="225" r="2.2" /><circle cx="480" cy="225" r="2.2" /><circle cx="495" cy="225" r="2.2" /><circle cx="510" cy="225" r="2.2" /><circle cx="525" cy="225" r="2.2" /><circle cx="540" cy="225" r="2.2" />
            <circle cx="470" cy="240" r="2.2" /><circle cx="485" cy="240" r="2.2" /><circle cx="500" cy="240" r="2.2" /><circle cx="515" cy="240" r="2.2" /><circle cx="530" cy="240" r="2.2" />
            <circle cx="480" cy="255" r="2.2" /><circle cx="495" cy="255" r="2.2" /><circle cx="510" cy="255" r="2.2" /><circle cx="525" cy="255" r="2.2" />
            <circle cx="485" cy="270" r="2.2" /><circle cx="500" cy="270" r="2.2" /><circle cx="515" cy="270" r="2.2" />
            <circle cx="490" cy="285" r="2.2" /><circle cx="505" cy="285" r="2.2" /><circle cx="520" cy="285" r="2.2" />
            <circle cx="500" cy="300" r="2.2" /><circle cx="515" cy="300" r="2.2" />
            <circle cx="505" cy="315" r="2.2" /><circle cx="515" cy="315" r="2.2" />
            <circle cx="505" cy="330" r="2.2" />

            {/* Asia & Middle East Dotted Cluster */}
            <circle cx="530" cy="140" r="2.2" /><circle cx="545" cy="140" r="2.2" /><circle cx="560" cy="140" r="2.2" /><circle cx="575" cy="140" r="2.2" /><circle cx="590" cy="140" r="2.2" /><circle cx="605" cy="140" r="2.2" /><circle cx="620" cy="140" r="2.2" /><circle cx="635" cy="140" r="2.2" /><circle cx="650" cy="140" r="2.2" /><circle cx="665" cy="140" r="2.2" /><circle cx="680" cy="140" r="2.2" /><circle cx="695" cy="140" r="2.2" />
            <circle cx="520" cy="155" r="2.2" /><circle cx="535" cy="155" r="2.2" /><circle cx="550" cy="155" r="2.2" /><circle cx="565" cy="155" r="2.2" /><circle cx="580" cy="155" r="2.2" /><circle cx="595" cy="155" r="2.2" /><circle cx="610" cy="155" r="2.2" /><circle cx="625" cy="155" r="2.2" /><circle cx="640" cy="155" r="2.2" /><circle cx="655" cy="155" r="2.2" /><circle cx="670" cy="155" r="2.2" /><circle cx="685" cy="155" r="2.2" /><circle cx="700" cy="155" r="2.2" /><circle cx="715" cy="155" r="2.2" />
            <circle cx="540" cy="170" r="2.2" /><circle cx="555" cy="170" r="2.2" /><circle cx="570" cy="170" r="2.2" /><circle cx="585" cy="170" r="2.2" /><circle cx="600" cy="170" r="2.2" /><circle cx="615" cy="170" r="2.2" /><circle cx="630" cy="170" r="2.2" /><circle cx="645" cy="170" r="2.2" /><circle cx="660" cy="170" r="2.2" /><circle cx="675" cy="170" r="2.2" /><circle cx="690" cy="170" r="2.2" /><circle cx="705" cy="170" r="2.2" /><circle cx="720" cy="170" r="2.2" /><circle cx="735" cy="170" r="2.2" />
            <circle cx="560" cy="185" r="2.2" /><circle cx="575" cy="185" r="2.2" /><circle cx="590" cy="185" r="2.2" /><circle cx="605" cy="185" r="2.2" /><circle cx="620" cy="185" r="2.2" /><circle cx="635" cy="185" r="2.2" /><circle cx="650" cy="185" r="2.2" /><circle cx="665" cy="185" r="2.2" /><circle cx="680" cy="185" r="2.2" /><circle cx="695" cy="185" r="2.2" /><circle cx="710" cy="185" r="2.2" /><circle cx="725" cy="185" r="2.2" /><circle cx="740" cy="185" r="2.2" />
            <circle cx="610" cy="200" r="2.2" /><circle cx="625" cy="200" r="2.2" /><circle cx="640" cy="200" r="2.2" /><circle cx="655" cy="200" r="2.2" /><circle cx="670" cy="200" r="2.2" /><circle cx="685" cy="200" r="2.2" /><circle cx="700" cy="200" r="2.2" /><circle cx="715" cy="200" r="2.2" /><circle cx="730" cy="200" r="2.2" />
            <circle cx="630" cy="215" r="2.2" /><circle cx="645" cy="215" r="2.2" /><circle cx="660" cy="215" r="2.2" /><circle cx="675" cy="215" r="2.2" /><circle cx="690" cy="215" r="2.2" /><circle cx="705" cy="215" r="2.2" /><circle cx="720" cy="215" r="2.2" />
            <circle cx="640" cy="230" r="2.2" /><circle cx="655" cy="230" r="2.2" /><circle cx="670" cy="230" r="2.2" /><circle cx="685" cy="230" r="2.2" /><circle cx="700" cy="230" r="2.2" />
            <circle cx="710" cy="250" r="2.2" /><circle cx="725" cy="250" r="2.2" /><circle cx="740" cy="250" r="2.2" />
            <circle cx="705" cy="265" r="2.2" /><circle cx="720" cy="265" r="2.2" /><circle cx="735" cy="265" r="2.2" /><circle cx="750" cy="265" r="2.2" />

            {/* Australia / Oceania Dotted Cluster */}
            <circle cx="750" cy="300" r="2.2" /><circle cx="765" cy="300" r="2.2" /><circle cx="780" cy="300" r="2.2" /><circle cx="795" cy="300" r="2.2" /><circle cx="810" cy="300" r="2.2" />
            <circle cx="740" cy="315" r="2.2" /><circle cx="755" cy="315" r="2.2" /><circle cx="770" cy="315" r="2.2" /><circle cx="785" cy="315" r="2.2" /><circle cx="800" cy="315" r="2.2" /><circle cx="815" cy="315" r="2.2" />
            <circle cx="750" cy="330" r="2.2" /><circle cx="765" cy="330" r="2.2" /><circle cx="780" cy="330" r="2.2" /><circle cx="795" cy="330" r="2.2" /><circle cx="810" cy="330" r="2.2" />
            <circle cx="765" cy="345" r="2.2" /><circle cx="780" cy="345" r="2.2" /><circle cx="795" cy="345" r="2.2" />
          </g>

          {/* Interactive Glowing Location Pins */}
          {locations.map((loc) => {
            const isGreen = loc.role === 'headquarters' || loc.role === 'office';
            const isSelected = activeLoc.id === loc.id;
            const primaryColor = isGreen ? '#22C55E' : '#EAB308';

            return (
              <g
                key={loc.id}
                transform={`translate(${loc.x}, ${loc.y})`}
                onClick={() => setActiveLoc(loc)}
                onMouseEnter={() => setActiveLoc(loc)}
                className="cursor-pointer group"
              >
                {/* Glowing Pulse Aura */}
                <circle
                  r={isSelected ? 18 : 11}
                  fill={primaryColor}
                  opacity={isSelected ? 0.35 : 0.2}
                  className={isSelected ? 'animate-ping' : ''}
                />

                {/* Core Glowing Dot */}
                <circle
                  r={isSelected ? 6.5 : 4.5}
                  fill={primaryColor}
                  stroke="#03130E"
                  strokeWidth={1.5}
                  className="transition-transform group-hover:scale-125"
                />
              </g>
            );
          })}
        </svg>

        {/* Selected Hub Floating Overlay Card (Matching Authentic UI) */}
        {activeLoc && (
          <div className="absolute left-6 bottom-6 sm:left-12 sm:bottom-10 bg-[#062118]/95 border border-[#14492A] rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md max-w-[280px] sm:max-w-xs animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start gap-3">
              <span className="text-2xl select-none">{activeLoc.flag}</span>
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono font-bold text-[#4ADE80] uppercase tracking-wider block">
                  {activeLoc.label}
                </span>
                <h4 className="font-extrabold text-sm sm:text-base text-white leading-tight">
                  {activeLoc.name}
                </h4>
                <p className="text-xs text-[#A3B899]">
                  {activeLoc.country}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Official Bottom Legend */}
      <div className="flex flex-wrap items-center justify-center gap-6 pt-2 border-t border-[#14492A]/50 text-xs font-mono text-[#A3B899]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E]" />
          <span className="text-white font-bold">{isPt ? 'ESCRITÓRIOS INTERFUSÃO' : 'INTERFUSÃO OFFICES'}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#EAB308] shadow-[0_0_10px_#EAB308]" />
          <span className="text-white font-bold">{isPt ? 'PARCEIROS ESTRATÉGICOS' : 'STRATEGIC PARTNERS'}</span>
        </div>
      </div>
    </div>
  );
}
