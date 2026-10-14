import React, { useState, useMemo } from 'react';
import { Briefcase, Calendar, ChevronRight, Filter } from 'lucide-react';
import { Language, resumeData } from '../data/resumeData';

interface ExperienceSectionProps {
  language: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ language }) => {
  const isPt = language === 'pt';
  const { experiences, techFilterOptions } = resumeData;
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredExperiences = useMemo(() => {
    if (selectedFilter === 'all') return experiences;
    return experiences.filter((exp) => exp.tags.includes(selectedFilter));
  }, [experiences, selectedFilter]);

  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#6c6aab] uppercase">
              {isPt ? 'Trajetória Profissional' : 'Professional Career Timeline'}
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#2d2b52] sm:text-3xl">
              {isPt ? 'Experiências Profissionais' : 'Work Experience'}
            </h2>
          </div>

          <div className="text-xs text-[#6c6aab]">
            <span>{isPt ? 'Filtrar por Especialidade:' : 'Filter by Expertise:'}</span>
          </div>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="mt-6 flex flex-wrap items-center gap-2 rounded-xl border border-[#6c6aab]/20 bg-white p-1.5 shadow-xs">
          {techFilterOptions.map((opt) => {
            const isActive = selectedFilter === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedFilter(opt.id)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#6c6aab] text-white shadow-xs'
                    : 'text-[#6c6aab] hover:bg-[#6c6aab]/10 hover:text-[#2d2b52]'
                }`}
              >
                <span>{opt.label[language]}</span>
              </button>
            );
          })}
        </div>

        {/* Career Items */}
        <div className="mt-10 space-y-8">
          {filteredExperiences.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[#6c6aab]/30 p-8 text-center text-sm text-[#6c6aab]">
              {isPt
                ? 'Nenhuma experiência encontrada com este filtro.'
                : 'No roles found for this selected filter.'}
            </div>
          ) : (
            filteredExperiences.map((exp, idx) => (
                <div
                key={exp.company}
                className="group relative rounded-2xl border border-[#6c6aab]/20 bg-white p-6 shadow-sm transition-all hover:bg-[#6c6aab] hover:border-[#6c6aab] sm:p-8"
              >
                {/* Header row: Company, Role & Period */}
                <div className="flex flex-col justify-between gap-2 border-b border-[#6c6aab]/15 pb-5 sm:flex-row sm:items-baseline group-hover:border-[#6c6aab]/30">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#6c6aab] group-hover:text-[#f5f5ff]">
                        0{idx + 1}.
                      </span>
                      <h3 className="text-xl font-extrabold tracking-tight text-[#2d2b52] group-hover:text-white">
                        {exp.company}
                      </h3>
                      {exp.highlightMetric && (
                        <span className="ml-2 font-mono text-xs font-semibold text-[#6c6aab] group-hover:text-[#6c6aab] bg-[#f5f5ff] px-2 py-0.5 rounded border border-[#6c6aab]/20">
                          {exp.highlightMetric}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-semibold text-[#6c6aab] group-hover:text-[#f5f5ff]/90">
                      {exp.role[language]}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs font-medium text-[#6c6aab] group-hover:text-[#f5f5ff]/80">
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    <span>{exp.period[language]}</span>
                  </div>
                </div>

                {/* Bullets with quantifiable achievements */}
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#4a4768] group-hover:text-[#f5f5ff]">
                  {exp.bullets[language].map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#6c6aab]/10 group-hover:bg-[#f5f5ff]/20 text-[#6c6aab] group-hover:text-white">
                        <ChevronRight className="h-3 w-3" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used unboxed list */}
                <div className="mt-6 pt-5 border-t border-[#6c6aab]/10 group-hover:border-[#6c6aab]/30">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                    <span className="font-semibold text-[#2d2b52] group-hover:text-white">
                      {isPt ? 'Tecnologias:' : 'Technologies:'}
                    </span>
                    {exp.technologies.map((tech, techIdx) => (
                      <React.Fragment key={tech}>
                        <span className="text-[#6c6aab] font-medium group-hover:text-[#f5f5ff]/80">{tech}</span>
                        {techIdx < exp.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-[#6c6aab]/40 group-hover:text-[#f5f5ff]/50">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
