import React from 'react';
import {
  Download,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  MessageCircle,
  ArrowRight,
  Database,
  BarChart3,
  Cpu,
} from 'lucide-react';
import { Language, resumeData } from '../data/resumeData';

interface HeroProps {
  language: Language;
  onOpenCVModal: () => void;
  onCopyText: (text: string, label: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onOpenCVModal,
  onCopyText,
}) => {
  const isPt = language === 'pt';
  const { personal } = resumeData;

  const whatsappUrl = `https://wa.me/${personal.phoneRaw}?text=${encodeURIComponent(
    isPt
      ? 'Olá Emerson! Encontrei seu portfólio profissional e gostaria de conversar sobre oportunidades em Business Intelligence e Power Platform.'
      : 'Hello Emerson! I reviewed your professional portfolio and would like to connect regarding opportunities in Business Intelligence and Power Platform.'
  )}`;

  return (
    <section id="about" className="relative pt-8 pb-14 sm:pt-12 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Typographic & Executive Profile */}
          <div className="lg:col-span-7">
            {/* Domain Kicker */}
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-wider text-[#6c6aab] uppercase sm:text-sm">
              <span>{personal.headline[language]}</span>
              <span aria-hidden="true">·</span>
              <span>4+ {isPt ? 'Anos de Experiência' : 'Years Experience'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-[#2d2b52] sm:text-4xl md:text-5xl">
              {personal.name}
            </h1>

            {/* Subheading / Role */}
            <p className="mt-2 text-lg font-semibold text-[#6c6aab] sm:text-xl">
              {personal.title[language]}
            </p>

            {/* Executive Bio */}
            <p className="mt-5 text-sm leading-relaxed text-[#4a4768] sm:text-base sm:leading-relaxed">
              {personal.about[language]}
            </p>

            {/* Verified Contact Details Row */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-[#6c6aab] sm:text-sm">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[#6c6aab]" />
                {personal.location}
              </span>
              <span aria-hidden="true" className="text-[#6c6aab]/40">·</span>
              <button
                type="button"
                onClick={() => onCopyText(personal.phone, isPt ? 'Telefone copiado' : 'Phone copied')}
                className="flex items-center gap-1.5 hover:text-[#2d2b52] hover:underline cursor-pointer"
                title={isPt ? 'Clique para copiar telefone' : 'Click to copy phone'}
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#6c6aab]" />
                {personal.phone}
              </button>
              <span aria-hidden="true" className="text-[#6c6aab]/40">·</span>
              <button
                type="button"
                onClick={() => onCopyText(personal.email, isPt ? 'E-mail copiado' : 'Email copied')}
                className="flex items-center gap-1.5 hover:text-[#2d2b52] hover:underline cursor-pointer"
                title={isPt ? 'Clique para copiar e-mail' : 'Click to copy email'}
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#6c6aab]" />
                {personal.email}
              </button>
              <span aria-hidden="true" className="text-[#6c6aab]/40">·</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#2d2b52] hover:underline"
              >
                <Linkedin className="h-3.5 w-3.5 shrink-0 text-[#6c6aab]" />
                {personal.linkedinDisplay}
              </a>
            </div>

            {/* Action Buttons Row */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-lg bg-[#6c6aab] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#5b5996] active:scale-98"
              >
                <span>{isPt ? 'Fale Comigo' : 'Get in Touch'}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={onOpenCVModal}
                className="flex items-center gap-2 rounded-lg border border-[#6c6aab] bg-white px-5 py-2.5 text-sm font-semibold text-[#6c6aab] shadow-xs transition-all hover:bg-[#6c6aab]/5 active:scale-98 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>{isPt ? 'Ver & Baixar CV (PDF)' : 'View & Download CV'}</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2.5 text-sm font-semibold text-[#128C7E] transition-all hover:bg-[#25D366]/20 active:scale-98"
                title={isPt ? 'Conversar no WhatsApp' : 'Chat on WhatsApp'}
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => onCopyText(personal.phone, isPt ? 'Telefone copiado!' : 'Phone copied!')}
                className="flex items-center gap-2 rounded-lg border border-[#6c6aab]/30 bg-white px-4 py-2.5 text-sm font-semibold text-[#6c6aab] shadow-xs transition-all hover:bg-[#6c6aab]/10 active:scale-98 cursor-pointer"
                title={isPt ? 'Clique para copiar telefone' : 'Click to copy phone'}
              >
                <Phone className="h-4 w-4 text-[#6c6aab]" />
                <span>{isPt ? 'Copiar Telefone' : 'Copy Phone'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Executive Card & Specialized Competency Pod */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-2xl border border-[#6c6aab]/20 bg-white p-6 shadow-sm sm:p-8">
              {/* Executive Avatar & Identity Badge */}
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-[#6c6aab]/30 shadow-md bg-[#6c6aab]/10">
                  <img
                    src="/renan.jpg"
                    alt="Emerson Renan Seii"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#2d2b52]">Emerson Renan Seii</h3>
                  <p className="text-xs font-semibold text-[#6c6aab]">
                    {isPt ? 'Especialista em Dados & Automação' : 'Data & Automation Specialist'}
                  </p>
                  <p className="mt-1 text-xs text-[#4a4768]">
                    Santo André - SP, Brasil
                  </p>
                </div>
              </div>

              {/* Core Pillars List */}
              <div className="mt-6 space-y-3.5 border-t border-[#6c6aab]/15 pt-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#6c6aab]/10 text-[#6c6aab]">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2d2b52]">
                      Power BI & Executive Storytelling
                    </h4>
                    <p className="text-xs text-[#4a4768]">
                      {isPt
                        ? 'Modelagem dimensional, DAX avançado e dashboards executivos.'
                        : 'Dimensional modeling, advanced DAX, and executive dashboards.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#6c6aab]/10 text-[#6c6aab]">
                    <Database className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2d2b52]">
                      Microsoft Fabric & Data Pipelines
                    </h4>
                    <p className="text-xs text-[#4a4768]">
                      {isPt
                        ? 'Migração de Notebooks, Data Flow Gen 2 e pipelines ETL resilientes.'
                        : 'Notebook migrations, Dataflow Gen 2, and resilient ETL pipelines.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#6c6aab]/10 text-[#6c6aab]">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2d2b52]">
                      Power Platform & Automação
                    </h4>
                    <p className="text-xs text-[#4a4768]">
                      {isPt
                        ? 'Power Apps Canvas, Power Automate, SharePoint Online e integração SAP.'
                        : 'Power Apps Canvas, Power Automate, SharePoint Online, and SAP integration.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-6 flex items-center justify-between rounded-lg bg-[#f5f5ff] px-4 py-2.5 text-xs text-[#6c6aab]">
                <span className="font-medium">
                  {isPt ? 'Disponibilidade para Contratação' : 'Available for Opportunities'}
                </span>
                <span className="font-semibold text-[#2d2b52]">
                  {isPt ? 'CLT / PJ / Consultoria' : 'Full-time / Contract'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
