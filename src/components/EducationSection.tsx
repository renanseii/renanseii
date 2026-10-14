import React from 'react';
import { GraduationCap, Award, Languages, Calendar } from 'lucide-react';
import { Language, resumeData } from '../data/resumeData';

interface EducationSectionProps {
  language: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ language }) => {
  const isPt = language === 'pt';
  const { education, courses, languages } = resumeData;

  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div>
          <p className="text-xs font-semibold tracking-wider text-[#6c6aab] uppercase">
            {isPt ? 'Qualificações & Aprendizado' : 'Academic & Continuing Education'}
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#2d2b52] sm:text-3xl">
            {isPt ? 'Formação Acadêmica, Cursos e Idiomas' : 'Education, Certifications & Languages'}
          </h2>
        </div>

        {/* 3 Column Grid: Degree / Courses / Languages */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Degree Card (Col 5) */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#6c6aab]/20 bg-white p-6 shadow-xs lg:col-span-5">
            <div>
              <div className="flex items-center gap-2.5 text-[#6c6aab]">
                <GraduationCap className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {isPt ? 'Graduação Universitária' : 'Higher Education'}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-[#2d2b52]">
                {education.institution}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#6c6aab]">
                {education.degree[language]}
              </p>

              <div className="mt-4 flex items-center gap-2 font-mono text-xs text-[#4a4768]">
                <Calendar className="h-3.5 w-3.5 text-[#6c6aab]" />
                <span>{education.period[language]}</span>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-[#4a4768]">
                {isPt
                  ? 'Formação com sólida base em otimização de processos industriais, gestão de operações, supply chain, modelagem estatística e análise de dados para tomada de decisão.'
                  : 'Rigorous foundation in industrial operations optimization, supply chain engineering, statistical modeling, and data-driven decision making.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#6c6aab]/10 text-xs font-semibold text-[#6c6aab]">
              <span>Centro Universitário FEI · São Bernardo do Campo / SP</span>
            </div>
          </div>

          {/* Courses Card (Col 4) */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#6c6aab]/20 bg-white p-6 shadow-xs lg:col-span-4">
            <div>
              <div className="flex items-center gap-2.5 text-[#6c6aab]">
                <Award className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {isPt ? 'Cursos de Especialização' : 'Specialization Courses'}
                </span>
              </div>

              <div className="mt-4 space-y-3.5">
                {courses.map((course, idx) => (
                  <div key={idx} className="border-b border-[#6c6aab]/10 pb-3 last:border-b-0 last:pb-0">
                    <h4 className="text-sm font-bold text-[#2d2b52]">{course.name}</h4>
                    <span className="font-mono text-xs text-[#6c6aab]">
                      {course.period[language]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#6c6aab]/10 text-xs font-semibold text-[#6c6aab]">
              <span>Microsoft Fabric · Power Platform · Python · Advanced BI</span>
            </div>
          </div>

          {/* Languages Card (Col 3) */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#6c6aab]/20 bg-white p-6 shadow-xs lg:col-span-3">
            <div>
              <div className="flex items-center gap-2.5 text-[#6c6aab]">
                <Languages className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {isPt ? 'Idiomas' : 'Languages'}
                </span>
              </div>

              <div className="mt-4 space-y-4">
                {languages.map((lang, idx) => (
                  <div key={idx} className="rounded-xl bg-[#f5f5ff] p-3 border border-[#6c6aab]/15">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#2d2b52]">
                        {lang.name[language]}
                      </span>
                      <span className="text-xs font-semibold text-[#6c6aab]">
                        {lang.level[language]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#6c6aab]/10 text-xs font-semibold text-[#6c6aab]">
              <span>{isPt ? 'Comunicação Global' : 'International Readiness'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
