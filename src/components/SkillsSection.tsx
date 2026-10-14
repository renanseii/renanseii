import React from 'react';
import { BarChart3, Database, Workflow, Layers, CheckCircle2 } from 'lucide-react';
import { Language, resumeData } from '../data/resumeData';

interface SkillsSectionProps {
  language: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ language }) => {
  const isPt = language === 'pt';
  const { skillCategories } = resumeData;

  const categoryIcons = [
    <BarChart3 className="h-5 w-5 text-[#6c6aab]" key="bi" />,
    <Database className="h-5 w-5 text-[#6c6aab]" key="data" />,
    <Workflow className="h-5 w-5 text-[#6c6aab]" key="power" />,
    <Layers className="h-5 w-5 text-[#6c6aab]" key="erp" />,
  ];

  return (
    <section id="skills" className="border-t border-[#6c6aab]/15 bg-white/60 py-16 sm:py-20 backdrop-blur-xs">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div>
          <p className="text-xs font-semibold tracking-wider text-[#6c6aab] uppercase">
            {isPt ? 'Competências Técnicas' : 'Technical Proficiencies'}
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#2d2b52] sm:text-3xl">
            {isPt ? 'Stack Tecnológico & Domínio Analítico' : 'Technology Stack & Analytical Mastery'}
          </h2>
        </div>

        {/* 4 Category Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-[#6c6aab]/20 bg-white p-6 shadow-xs transition-all hover:border-[#6c6aab]/60 hover:shadow-sm"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6c6aab]/10">
                  {categoryIcons[idx % categoryIcons.length]}
                </div>

                <h3 className="mt-4 text-base font-bold text-[#2d2b52]">
                  {cat.category[language]}
                </h3>

                <ul className="mt-4 space-y-2.5 text-xs text-[#4a4768]">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#6c6aab]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#6c6aab]/10 text-[11px] font-semibold text-[#6c6aab]">
                <span>{cat.items.length} {isPt ? 'Especialidades' : 'Core Proficiencies'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
