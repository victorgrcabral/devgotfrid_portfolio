'use client';

import React, { useState } from 'react';
import { PortfolioDictionary } from '@/data/types';
import { Mail, Check, Copy, FileText, Send, Sparkles, ChevronDown, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import DistortedHeadline from '@/components/ui/DistortedHeadline';

interface ContactSectionProps {
  dict: PortfolioDictionary;
  lang: string;
}

export default function ContactSection({ dict, lang }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Oportunidade de Projeto / Contratação',
    message: '',
  });

  const isPt = lang === 'pt';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(dict.profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/victorgrcabral@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Contato] ${formData.subject} — ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'Oportunidade de Projeto / Contratação',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative z-10 py-24 border-t border-[#003338] bg-transparent scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#73D1E0]/10 text-[#73D1E0] border border-[#73D1E0]/30 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>{dict.contact.sectionTag}</span>
          </div>
          <DistortedHeadline
            text={dict.contact.sectionTitle}
            as="h2"
            align="center"
            className="text-3xl sm:text-4xl mb-3"
          />
          <p className="text-sm sm:text-base text-[#8EACB4]">
            {dict.contact.sectionSubtitle}
          </p>
        </div>

        {/* Action Panel */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border-[#003338]">
          {/* Main Direct Email Box & Expand Trigger */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#05181D] border border-[#003338] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-[#082229] border border-[#00595B]/40 flex items-center justify-center text-[#73D1E0] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#5C7B83] block uppercase tracking-wider">
                  {dict.contact.emailLabel}
                </span>
                <span className="text-sm sm:text-base font-mono font-semibold text-white">
                  {dict.profile.email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-[#082229] hover:bg-[#0B2A32] active:scale-[0.96] text-[#F7F7F8] border border-[#00595B] transition-all duration-140 cursor-pointer"
              >
                {copied ? (
                  <span className="inline-flex items-center gap-1.5 animate-in zoom-in-75 duration-150 text-emerald-400 font-mono text-xs">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{dict.contact.copiedToast}</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 animate-in zoom-in-75 duration-150">
                    <Copy className="w-4 h-4 text-[#73D1E0]" />
                    <span>{dict.contact.quickCopy}</span>
                  </span>
                )}
              </button>

              <button
                onClick={() => setFormOpen(!formOpen)}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 active:scale-[0.97] cursor-pointer shadow-md ${
                  formOpen
                    ? 'bg-[#0B2A32] text-white border border-[#73D1E0]/50 shadow-[#73D1E0]/15'
                    : 'text-[#05181D] bg-gradient-to-r from-[#73D1E0] to-[#358A90] hover:opacity-95 shadow-[#73D1E0]/15'
                }`}
              >
                <Send className={`w-4 h-4 transition-transform duration-300 ${formOpen ? 'rotate-45 text-[#73D1E0]' : ''}`} />
                <span>{formOpen ? (isPt ? 'Fechar Formulário' : 'Close Form') : dict.contact.sendEmail}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${formOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>
            </div>
          </div>

          {/* Fluid Physics-Based Accordion Dropdown */}
          <div
            className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              formOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
            }`}
          >
            <div className="overflow-hidden">
              <div
                className={`p-6 sm:p-8 rounded-2xl bg-[#05181D] border border-[#00595B]/60 shadow-2xl space-y-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  formOpen ? 'translate-y-0 scale-100' : '-translate-y-3 scale-[0.99]'
                }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#003338]">
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4 text-[#73D1E0]" />
                    <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                      {isPt ? 'Formulário Direto para victorgrcabral@gmail.com' : 'Direct Message to victorgrcabral@gmail.com'}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#5C7B83] hidden sm:inline">
                    {isPt ? '* Campos Obrigatórios' : '* Required Fields'}
                  </span>
                </div>

                {status === 'success' ? (
                  <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in zoom-in-95 duration-250">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {isPt ? 'Mensagem enviada com sucesso!' : 'Message Sent Successfully!'}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#8EACB4] max-w-md mx-auto">
                      {isPt
                        ? 'Sua mensagem foi entregue diretamente em victorgrcabral@gmail.com. Responderei no seu e-mail o mais breve possível!'
                        : 'Your message has been delivered directly to victorgrcabral@gmail.com. I will reply to your email as soon as possible!'}
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-4 px-4 py-2 rounded-xl text-xs font-mono bg-[#082229] hover:bg-[#0B2A32] text-[#73D1E0] border border-[#003338] transition-colors cursor-pointer active:scale-95"
                    >
                      {isPt ? 'Enviar Outra Mensagem' : 'Send Another Message'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {status === 'error' && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-400 font-mono animate-in fade-in">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>
                          {isPt
                            ? 'Houve um erro ao enviar. Você também pode enviar diretamente pelo seu cliente de e-mail.'
                            : 'Error sending message. You can also email directly from your mail client.'}
                        </span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Nome (Obrigatório) */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono text-[#8EACB4]">
                          {isPt ? 'Seu Nome *' : 'Your Name *'}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={isPt ? 'Ex: Ana Silva / Empresa' : 'e.g. John Doe / Company'}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#082229] border border-[#003338] focus:border-[#73D1E0] focus:ring-2 focus:ring-[#73D1E0]/20 focus:outline-none text-xs text-[#F7F7F8] placeholder-[#5C7B83] transition-all font-mono"
                        />
                      </div>

                      {/* Email (Obrigatório) */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-mono text-[#8EACB4]">
                          {isPt ? 'Seu E-mail *' : 'Your E-mail *'}
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="seuemail@exemplo.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#082229] border border-[#003338] focus:border-[#73D1E0] focus:ring-2 focus:ring-[#73D1E0]/20 focus:outline-none text-xs text-[#F7F7F8] placeholder-[#5C7B83] transition-all font-mono"
                        />
                      </div>
                    </div>

                    {/* Assunto */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-[#8EACB4]">
                        {isPt ? 'Assunto / Tipo de Oportunidade' : 'Subject / Type of Opportunity'}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#082229] border border-[#003338] focus:border-[#73D1E0] focus:ring-2 focus:ring-[#73D1E0]/20 focus:outline-none text-xs text-[#F7F7F8] transition-all font-mono cursor-pointer"
                      >
                        <option value="Proposta de Projeto / Contratação">
                          {isPt ? 'Proposta de Projeto / Contratação' : 'Project Proposal / Hiring'}
                        </option>
                        <option value="Design de Produto & UI/UX">
                          {isPt ? 'Design de Produto & UI/UX' : 'Product Design & UI/UX'}
                        </option>
                        <option value="Engenharia de Front-end / Full-Stack">
                          {isPt ? 'Engenharia de Front-end / Full-Stack' : 'Front-end / Full-Stack Engineering'}
                        </option>
                        <option value="Direção de Arte & Branding">
                          {isPt ? 'Direção de Arte & Branding' : 'Art Direction & Branding'}
                        </option>
                        <option value="Outro">{isPt ? 'Outro Assunto' : 'Other'}</option>
                      </select>
                    </div>

                    {/* Mensagem (Obrigatória) */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-[#8EACB4]">
                        {isPt ? 'Mensagem *' : 'Message *'}
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder={
                          isPt
                            ? 'Conte mais sobre o projeto, escopo, prazos, tecnologias ou proposta de trabalho...'
                            : 'Tell me more about the project, scope, timeline, stack or job opportunity...'
                        }
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#082229] border border-[#003338] focus:border-[#73D1E0] focus:ring-2 focus:ring-[#73D1E0]/20 focus:outline-none text-xs text-[#F7F7F8] placeholder-[#5C7B83] transition-all font-mono resize-none leading-relaxed"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setFormOpen(false)}
                        className="px-4 py-2.5 rounded-xl text-xs font-mono text-[#8EACB4] hover:text-white transition-colors cursor-pointer active:scale-95"
                      >
                        {isPt ? 'Cancelar' : 'Cancel'}
                      </button>

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-[#05181D] bg-gradient-to-r from-[#73D1E0] to-[#358A90] hover:opacity-95 active:scale-[0.97] transition-all disabled:opacity-50 cursor-pointer shadow-lg shadow-[#73D1E0]/20 font-mono"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>{isPt ? 'Enviando Mensagem...' : 'Sending Message...'}</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>{isPt ? 'Enviar para victorgrcabral@gmail.com' : 'Send to victorgrcabral@gmail.com'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Social Profiles (GitHub & LinkedIn) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* GitHub Card */}
            <a
              href={dict.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#05181D] hover:bg-[#082229] active:scale-[0.98] border border-[#003338] hover:border-[#73D1E0]/50 transition-all duration-150 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#082229] border border-[#003338] flex items-center justify-center text-white group-hover:border-[#73D1E0]/40 transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white group-hover:text-[#73D1E0] transition-colors block">
                    GitHub
                  </span>
                  <span className="text-[11px] font-mono text-[#5C7B83]">
                    github.com/victorgrcabral
                  </span>
                </div>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-[#5C7B83] group-hover:text-[#73D1E0] transition-colors" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={dict.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#05181D] hover:bg-[#082229] active:scale-[0.98] border border-[#003338] hover:border-[#73D1E0]/50 transition-all duration-150 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#082229] border border-[#003338] flex items-center justify-center text-[#73D1E0] group-hover:border-[#73D1E0]/40 transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white group-hover:text-[#73D1E0] transition-colors block">
                    LinkedIn
                  </span>
                  <span className="text-[11px] font-mono text-[#5C7B83]">
                    linkedin.com/in/victorgrcabral
                  </span>
                </div>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-[#5C7B83] group-hover:text-[#73D1E0] transition-colors" />
            </a>
          </div>

          {/* Download Official Resume Options (PT & EN) */}
          <div className="pt-4 border-t border-[#003338]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#5C7B83] block mb-3 text-center sm:text-left">
              {lang === 'pt' ? 'Download do Currículo Oficial (PDF):' : 'Download Official Resume (PDF):'}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/curriculo-victor-cabral-pt.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#05181D] hover:bg-[#082229] active:scale-[0.98] border border-[#003338] hover:border-[#73D1E0]/50 transition-all duration-150 group text-xs font-mono"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#73D1E0]" />
                  <span className="text-white group-hover:text-[#73D1E0] transition-colors">
                    {dict.contact.downloadResumePt}
                  </span>
                </div>
                <span className="text-[10px] text-[#5C7B83] uppercase font-bold">PDF</span>
              </a>

              <a
                href="/resume-victor-cabral-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#05181D] hover:bg-[#082229] active:scale-[0.98] border border-[#003338] hover:border-[#73D1E0]/50 transition-all duration-150 group text-xs font-mono"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#358A90]" />
                  <span className="text-white group-hover:text-[#73D1E0] transition-colors">
                    {dict.contact.downloadResumeEn}
                  </span>
                </div>
                <span className="text-[10px] text-[#5C7B83] uppercase font-bold">PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
