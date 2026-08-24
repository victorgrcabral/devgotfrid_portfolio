import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateSinglePageResume({ lang, outputPath }) {
  const isPt = lang === 'pt';
  const pdfDoc = await PDFDocument.create();
  
  // Standard A4: 595.28 x 841.89 points
  const width = 595.28;
  const height = 841.89;
  const page = pdfDoc.addPage([width, height]);

  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const leftMargin = 38;
  const rightMargin = width - 38;
  const contentWidth = rightMargin - leftMargin;

  let y = height - 34;

  // 1. Name Centered (Classic Ivy League / Harvard style)
  const name = 'VICTOR GOTFRID';
  const nameSize = 18;
  const nameWidth = helveticaBold.widthOfTextAtSize(name, nameSize);
  page.drawText(name, {
    x: (width - nameWidth) / 2,
    y,
    size: nameSize,
    font: helveticaBold,
    color: rgb(0, 0, 0)
  });
  y -= 13;

  // 2. Title Subtitle Centered
  const title = 'Product & Web Designer';
  const titleSize = 10;
  const titleWidth = helveticaBold.widthOfTextAtSize(title, titleSize);
  page.drawText(title, {
    x: (width - titleWidth) / 2,
    y,
    size: titleSize,
    font: helveticaBold,
    color: rgb(0.2, 0.2, 0.2)
  });
  y -= 12;

  // 3. Contact Line Centered
  const contact = isPt
    ? 'São Paulo, SP • (11) 98765-4321 • victorgrcabral@gmail.com • linkedin.com/in/victorgrcabral • github.com/victorgrcabral'
    : 'São Paulo, Brazil • +55 (11) 98765-4321 • victorgrcabral@gmail.com • linkedin.com/in/victorgrcabral • github.com/victorgrcabral';
  const contactSize = 8.5;
  const contactWidth = helvetica.widthOfTextAtSize(contact, contactSize);
  page.drawText(contact, {
    x: (width - contactWidth) / 2,
    y,
    size: contactSize,
    font: helvetica,
    color: rgb(0.25, 0.25, 0.25)
  });
  y -= 16;

  // Section divider helper
  function drawSection(sectionTitle) {
    y -= 3;
    page.drawText(sectionTitle.toUpperCase(), {
      x: leftMargin,
      y,
      size: 9.5,
      font: helveticaBold,
      color: rgb(0, 0, 0)
    });
    y -= 3;
    page.drawLine({
      start: { x: leftMargin, y },
      end: { x: rightMargin, y },
      thickness: 0.75,
      color: rgb(0, 0, 0)
    });
    y -= 9.5;
  }

  // Bullet helper with clean wrapping
  function drawBullet(text) {
    const bullet = '•  ';
    const bSize = 8;
    const textIndent = leftMargin + 10;
    const maxW = contentWidth - 10;

    const words = text.split(' ');
    let currentLine = '';
    let isFirst = true;

    for (const w of words) {
      const testLine = currentLine ? `${currentLine} ${w}` : w;
      const testW = helvetica.widthOfTextAtSize(testLine, bSize);
      if (testW > maxW) {
        page.drawText(isFirst ? `${bullet}${currentLine}` : `   ${currentLine}`, {
          x: isFirst ? leftMargin : textIndent,
          y,
          size: bSize,
          font: helvetica,
          color: rgb(0.15, 0.15, 0.15)
        });
        y -= 9.5;
        currentLine = w;
        isFirst = false;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      page.drawText(isFirst ? `${bullet}${currentLine}` : `   ${currentLine}`, {
        x: isFirst ? leftMargin : textIndent,
        y,
        size: bSize,
        font: helvetica,
        color: rgb(0.15, 0.15, 0.15)
      });
      y -= 10;
    }
  }

  // --- 1. EDUCATION ---
  drawSection(isPt ? 'Educação' : 'Education');

  // Mackenzie
  page.drawText('Universidade Presbiteriana Mackenzie', { x: leftMargin, y, size: 8.5, font: helveticaBold });
  const mackLoc = isPt ? 'São Paulo, SP' : 'São Paulo, Brazil';
  page.drawText(mackLoc, { x: rightMargin - helvetica.widthOfTextAtSize(mackLoc, 8.5), y, size: 8.5, font: helvetica });
  y -= 9;

  const mackDegree = isPt ? 'Bacharelado em Publicidade, Propaganda e Marketing' : 'Bachelor of Arts in Advertising, Marketing & Communication';
  page.drawText(mackDegree, { x: leftMargin, y, size: 8, font: helveticaOblique, color: rgb(0.25, 0.25, 0.25) });
  page.drawText('2017 — 2021', { x: rightMargin - helvetica.widthOfTextAtSize('2017 — 2021', 8), y, size: 8, font: helvetica });
  y -= 11.5;

  // Senac
  page.drawText('Centro Universitário Senac', { x: leftMargin, y, size: 8.5, font: helveticaBold });
  const senacLoc = isPt ? 'São Paulo, SP' : 'São Paulo, Brazil';
  page.drawText(senacLoc, { x: rightMargin - helvetica.widthOfTextAtSize(senacLoc, 8.5), y, size: 8.5, font: helvetica });
  y -= 9;

  const senacDegree = isPt ? 'Graduação em Análise e Desenvolvimento de Sistemas (ADS / Software Engineering)' : 'Associate Degree in Systems Analysis & Development (Software Engineering)';
  page.drawText(senacDegree, { x: leftMargin, y, size: 8, font: helveticaOblique, color: rgb(0.25, 0.25, 0.25) });
  page.drawText('2026 — 2028', { x: rightMargin - helvetica.widthOfTextAtSize('2026 — 2028', 8), y, size: 8, font: helvetica });
  y -= 12;

  // --- 2. TECHNICAL SKILLS & AI TOOLCHAIN ---
  drawSection(isPt ? 'Competências Técnicas & Ferramentas de IA' : 'Technical Skills & AI Toolchain');

  const skillsList = isPt ? [
    { label: 'Design de Produto & UI/UX:', val: 'Figma (Auto-layout, Tokens, Design Systems, Prototipagem), Adobe Photoshop, Illustrator, InDesign, WCAG' },
    { label: 'Linguagens & Frameworks Web:', val: 'React, Next.js 15 (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, Three.js, Python, FastAPI, Node.js' },
    { label: 'Bancos de Dados & DevOps:', val: 'PostgreSQL, SQL, Modelagem Relacional, RESTful APIs, Docker, JWT & Bcrypt, Git, GitHub' },
    { label: 'IA & Agentes Autônomos:', val: 'Codex, Antigravity, Antigravity IDE, Claude, Claude Code, DeepSeek, Kimi, Hermes, Orca, Prompt Engineering, RAG' }
  ] : [
    { label: 'Product Design & UI/UX:', val: 'Figma (Auto-layout, Tokens, Design Systems, Prototyping), Adobe Photoshop, Illustrator, InDesign, WCAG' },
    { label: 'Languages & Web Frameworks:', val: 'React, Next.js 15 (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, Three.js, Python, FastAPI, Node.js' },
    { label: 'Databases & DevOps:', val: 'PostgreSQL, SQL, Relational Schema Modeling, RESTful APIs, Docker, JWT & Bcrypt, Git, GitHub' },
    { label: 'AI & Autonomous Agents:', val: 'Codex, Antigravity, Antigravity IDE, Claude, Claude Code, DeepSeek, Kimi, Hermes, Orca, Prompt Engineering, RAG' }
  ];

  skillsList.forEach(s => {
    page.drawText(s.label + ' ', { x: leftMargin, y, size: 8, font: helveticaBold, color: rgb(0, 0, 0) });
    const labelW = helveticaBold.widthOfTextAtSize(s.label + ' ', 8);
    page.drawText(s.val, { x: leftMargin + labelW, y, size: 8, font: helvetica, color: rgb(0.15, 0.15, 0.15) });
    y -= 10;
  });
  y -= 2;

  // --- 3. FEATURED TECHNICAL & PRODUCT PROJECTS ---
  drawSection(isPt ? 'Projetos de Produto & Engenharia Web' : 'Featured Product & Engineering Projects');

  // BidBento
  page.drawText('BidBento (bidbento.lol)', { x: leftMargin, y, size: 8.5, font: helveticaBold });
  const bbSub = isPt ? ' — Plataforma de Leilão e Visibilidade Proporcional' : ' — Real-Time Auction & Visibility Platform';
  const bbSubW = helveticaBold.widthOfTextAtSize('BidBento (bidbento.lol)', 8.5);
  page.drawText(bbSub, { x: leftMargin + bbSubW, y, size: 8, font: helveticaOblique, color: rgb(0.3, 0.3, 0.3) });
  const bbStack = 'Next.js, Python, FastAPI, PostgreSQL, Docker';
  page.drawText(bbStack, { x: rightMargin - helvetica.widthOfTextAtSize(bbStack, 7.5), y, size: 7.5, font: helvetica });
  y -= 9.5;

  const bbBullets = isPt ? [
    'Desenvolveu produto web full-stack onde lances simultâneos disputam área proporcional em grade reativa com sincronização em tempo real.',
    'Implementou serviços REST em Python/FastAPI com validação estrita via Pydantic e transações ACID no PostgreSQL com travas anti-concorrência.',
    'Construiu interface no Next.js 15 App Router e Tailwind CSS com renderização sub-segundo e animação vetorial do mascote oficial.'
  ] : [
    'Engineered full-stack real-time web platform where validated bids dynamically claim proportional visual screen space.',
    'Implemented Python/FastAPI REST services with Pydantic validation and PostgreSQL ACID transactions with row-level locks preventing race conditions.',
    'Built responsive frontend with Next.js App Router and Tailwind CSS, achieving sub-second rendering and animated SVG mascot interaction.'
  ];
  bbBullets.forEach(b => drawBullet(b));
  y -= 2;

  // INTERFUSÃO
  page.drawText('INTERFUSÃO Group (interfusao.com.br)', { x: leftMargin, y, size: 8.5, font: helveticaBold });
  const ifSub = isPt ? ' — Portal Corporativo & Design System' : ' — Corporate Web Portal & Design System';
  const ifSubW = helveticaBold.widthOfTextAtSize('INTERFUSÃO Group (interfusao.com.br)', 8.5);
  page.drawText(ifSub, { x: leftMargin + ifSubW, y, size: 8, font: helveticaOblique, color: rgb(0.3, 0.3, 0.3) });
  const ifStack = 'React, TypeScript, Figma, SEO';
  page.drawText(ifStack, { x: rightMargin - helvetica.widthOfTextAtSize(ifStack, 7.5), y, size: 7.5, font: helvetica });
  y -= 9.5;

  const ifBullets = isPt ? [
    'Liderou o redesign de identidade visual e portal corporativo oficial para grupo industrial com mais de 40 anos de mercado na mineração.',
    'Desenvolveu componentes web modulares e responsivos alcançando nota 98 no Core Web Vitals e práticas estruturadas de SEO.'
  ] : [
    'Spearheaded brand identity system and corporate web portal evolution for an industrial engineering group with 40+ years in mining.',
    'Developed modular responsive frontend components achieving 98 Core Web Vitals score and structured technical SEO.'
  ];
  ifBullets.forEach(b => drawBullet(b));
  y -= 2;

  // --- 4. PROFESSIONAL EXPERIENCE ---
  drawSection(isPt ? 'Experiência Profissional' : 'Professional Experience');

  // Interfusão
  page.drawText('Interfusão Group', { x: leftMargin, y, size: 8.5, font: helveticaBold });
  const ifLoc = isPt ? 'São Paulo, SP' : 'São Paulo, Brazil';
  page.drawText(ifLoc, { x: rightMargin - helvetica.widthOfTextAtSize(ifLoc, 8.5), y, size: 8.5, font: helvetica });
  y -= 9;
  const ifRole = isPt ? 'Marketing & Brand Analyst (Identidade Visual & Web UX)' : 'Marketing & Brand Analyst (Visual Identity & Web UX)';
  page.drawText(ifRole, { x: leftMargin, y, size: 8, font: helveticaOblique, color: rgb(0.25, 0.25, 0.25) });
  const ifPeriod = isPt ? 'Maio 2025 — Presente' : 'May 2025 — Present';
  page.drawText(ifPeriod, { x: rightMargin - helvetica.widthOfTextAtSize(ifPeriod, 8), y, size: 8, font: helvetica });
  y -= 9;

  const expIfBullets = isPt ? [
    'Padronizou mais de 20 touchpoints de comunicação industrial e desenvolveu o portal corporativo oficial com foco em conversão B2B.',
    'Implementou princípios de design centrado no usuário e interfaces digitais de alta performance.'
  ] : [
    'Unified 20+ industrial brand touchpoints and engineered the official corporate web portal focused on B2B lead generation.',
    'Applied user-centered design systems and high-performance digital interfaces across company assets.'
  ];
  expIfBullets.forEach(b => drawBullet(b));
  y -= 2;

  // Agência RC
  page.drawText('Agência RC Marketing', { x: leftMargin, y, size: 8.5, font: helveticaBold });
  const rcLoc = isPt ? 'São Paulo, SP' : 'São Paulo, Brazil';
  page.drawText(rcLoc, { x: rightMargin - helvetica.widthOfTextAtSize(rcLoc, 8.5), y, size: 8.5, font: helvetica });
  y -= 9;
  const rcRole = isPt ? 'Diretor de Arte Criativo' : 'Creative Art Director';
  page.drawText(rcRole, { x: leftMargin, y, size: 8, font: helveticaOblique, color: rgb(0.25, 0.25, 0.25) });
  const rcPeriod = isPt ? 'Fevereiro 2025 — Maio 2025' : 'February 2025 — May 2025';
  page.drawText(rcPeriod, { x: rightMargin - helvetica.widthOfTextAtSize(rcPeriod, 8), y, size: 8, font: helvetica });
  y -= 9;

  const expRcBullets = isPt ? [
    'Direção criativa de campanhas de ponto de venda (POS) e varejo para marcas líderes como Aurora Alimentos.',
    'Liderança de equipe criativa de 4 pessoas com fechamento de arquivos em grande escala e conformidade de marca.'
  ] : [
    'Directed creative execution for retail and point-of-sale campaigns for major brands including Aurora Foods.',
    'Led a 4-person creative team, ensuring press-ready production files and strict brand guideline compliance.'
  ];
  expRcBullets.forEach(b => drawBullet(b));
  y -= 2;

  // LIV Marketing
  page.drawText('LIV Marketing', { x: leftMargin, y, size: 8.5, font: helveticaBold });
  const livLoc = isPt ? 'São Paulo, SP' : 'São Paulo, Brazil';
  page.drawText(livLoc, { x: rightMargin - helvetica.widthOfTextAtSize(livLoc, 8.5), y, size: 8.5, font: helvetica });
  y -= 9;
  const livRole = isPt ? 'Head of Design / Designer Jr.' : 'Head of Design / Junior Designer';
  page.drawText(livRole, { x: leftMargin, y, size: 8, font: helveticaOblique, color: rgb(0.25, 0.25, 0.25) });
  const livPeriod = isPt ? 'Outubro 2022 — Junho 2024' : 'October 2022 — June 2024';
  page.drawText(livPeriod, { x: rightMargin - helvetica.widthOfTextAtSize(livPeriod, 8), y, size: 8, font: helvetica });
  y -= 9;

  const expLivBullets = isPt ? [
    'Gestão da visão criativa e entrega de branding, identidades visuais completas e interfaces web para clientes corporativos.'
  ] : [
    'Managed creative vision and delivery across branding, digital identity systems, and web interfaces for corporate clients.'
  ];
  expLivBullets.forEach(b => drawBullet(b));
  y -= 2;

  // --- 5. LANGUAGES & CERTIFICATIONS ---
  drawSection(isPt ? 'Idiomas & Certificações' : 'Languages & Certifications');

  const langLine = isPt
    ? 'Idiomas: Português (Nativo), Inglês (Fluente / C1 — Proficiência completa em reuniões e documentação), Espanhol (Profissional / B2)'
    : 'Languages: Portuguese (Native), English (Fluent / C1 — Full professional proficiency in meetings and docs), Spanish (Professional / B2)';
  page.drawText(langLine, { x: leftMargin, y, size: 7.8, font: helvetica, color: rgb(0.15, 0.15, 0.15) });
  y -= 9.5;

  const certLine = isPt
    ? 'Certificações: Especialização Pacote Adobe (Senac, 2017) • Formação Completa em Inglês (CCAA, 2013)'
    : 'Certifications: Adobe Suite Specialization (Senac, 2017) • Complete English Program (CCAA, 2013)';
  page.drawText(certLine, { x: leftMargin, y, size: 7.8, font: helvetica, color: rgb(0.15, 0.15, 0.15) });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Generated single-page PDF: ${outputPath}`);
}

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');

await generateSinglePageResume({
  lang: 'pt',
  outputPath: path.join(publicDir, 'curriculo-victor-cabral-pt.pdf')
});

await generateSinglePageResume({
  lang: 'en',
  outputPath: path.join(publicDir, 'resume-victor-cabral-en.pdf')
});

console.log('Successfully regenerated single-page Harvard standard PDF resumes!');
