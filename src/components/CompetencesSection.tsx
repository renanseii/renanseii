import React from 'react';
import { Language, resumeData } from '../data/resumeData';

interface CompetencesSectionProps {
  language: Language;
}

export const CompetencesSection: React.FC<CompetencesSectionProps> = ({ language }) => {
  const isPt = language === 'pt';
  const { skillCategories } = resumeData;

  // Manually map skill categories to ratings (5, 3, 4, 2 as requested)
  const ratings = [
    { name: { pt: 'Business Intelligence', en: 'Business Intelligence' }, score: 5 },
    { name: { pt: 'Engenharia de Dados e Cloud', en: 'Data Engineering & Cloud' }, score: 3 },
    { name: { pt: 'Power Platform e Automação', en: 'Power Platform & Automation' }, score: 4 },
    { name: { pt: 'ERP', en: 'ERP' }, score: 2 },
  ];

  return (
    <section id="competences" className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-[#2d2b52] text-center mb-12">
          {isPt ? 'Competências Técnicas' : 'Technical Competencies'}
        </h2>
        
        <div className="space-y-8">
          {ratings.map((skill) => (
            <div key={skill.name.en} className="space-y-2">
              <div className="flex justify-between text-sm font-medium text-[#2d2b52]">
                <span>{skill.name[language]}</span>
                <span className="font-mono text-[#6c6aab]">{skill.score} / 5</span>
              </div>
              <div className="h-4 w-full rounded-full bg-[#6c6aab]/10 overflow-hidden">
                <div 
                  className="h-full bg-[#6c6aab] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${(skill.score / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
