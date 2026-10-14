import React, { useEffect } from 'react';
import { X, Printer, Download, FileText, Check } from 'lucide-react';
import { Language, resumeData } from '../data/resumeData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const CVModal: React.FC<CVModalProps> = ({
  isOpen,
  onClose,
  language,
  onLanguageChange,
}) => {
  const isPt = language === 'pt';
  const { personal, experiences, education, courses, languages } = resumeData;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadFile = () => {
    // Generate clean self-contained HTML file for offline viewing and saving as PDF
    const cvTitle = isPt
      ? `Curriculo_Emerson_Renan_Seii_PT.html`
      : `Resume_Emerson_Renan_Seii_EN.html`;

    const htmlContent = `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="utf-8">
  <title>${personal.name} - ${isPt ? 'Currículo' : 'Resume'}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e1b4b; margin: 30px auto; max-width: 800px; line-height: 1.45; font-size: 13px; }
    h1 { margin: 0; font-size: 24px; color: #2d2b52; text-transform: uppercase; letter-spacing: 0.5px; }
    .subtitle { color: #6c6aab; font-size: 14px; font-weight: bold; margin-top: 4px; margin-bottom: 8px; }
    .contacts { font-size: 11px; color: #555; display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; border-bottom: 1px solid #ddd; padding-bottom: 10px; }
    h2 { font-size: 13px; color: #2d2b52; border-bottom: 1.5px solid #6c6aab; padding-bottom: 3px; margin-top: 18px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
    .exp-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 13px; color: #2d2b52; margin-top: 10px; }
    .exp-role { color: #6c6aab; font-weight: 600; font-size: 12px; margin-bottom: 4px; }
    ul { margin: 4px 0 8px 18px; padding: 0; }
    li { margin-bottom: 3px; color: #333; }
    .tech { font-size: 11px; color: #555; margin-top: 4px; }
    .tech strong { color: #2d2b52; }
    .grid { display: flex; gap: 20px; }
    .col { flex: 1; }
    @media print { body { margin: 0; } }
  </style>
</head>
<body>
  <h1>${personal.name}</h1>
  <div class="subtitle">${personal.headline[language]}</div>
  <div class="contacts">
    <span>${personal.location}</span>
    <span>Tel: +55 ${personal.phone}</span>
    <span>Email: ${personal.email}</span>
    <span>LinkedIn: ${personal.linkedinDisplay}</span>
  </div>

  <h2>${isPt ? 'SOBRE MIM' : 'ABOUT ME'}</h2>
  <p>${personal.about[language]}</p>

  <h2>${isPt ? 'EXPERIÊNCIAS PROFISSIONAIS' : 'PROFESSIONAL EXPERIENCE'}</h2>
  ${experiences
    .map(
      (exp) => `
    <div class="exp-header">
      <span>${exp.company}</span>
      <span>${exp.period[language]}</span>
    </div>
    <div class="exp-role">${exp.role[language]}</div>
    <ul>
      ${exp.bullets[language].map((b) => `<li>${b}</li>`).join('')}
    </ul>
    <div class="tech"><strong>${isPt ? 'Tecnologias' : 'Technologies'}:</strong> ${exp.technologies.join(', ')}</div>
  `
    )
    .join('')}

  <div class="grid" style="margin-top: 16px;">
    <div class="col">
      <h2>${isPt ? 'FORMAÇÃO ACADÊMICA' : 'EDUCATION'}</h2>
      <div style="font-weight: bold; color: #2d2b52;">${education.institution}</div>
      <div style="color: #6c6aab; font-size: 12px;">${education.degree[language]}</div>
      <div style="font-size: 11px; color: #777;">${education.period[language]}</div>

      <h2 style="margin-top: 14px;">${isPt ? 'IDIOMAS' : 'LANGUAGES'}</h2>
      ${languages
        .map(
          (l) => `<div style="display:flex; justify-content:space-between; margin-bottom: 2px;">
            <span>${l.name[language]}</span>
            <span style="color: #6c6aab; font-weight:600;">${l.level[language]}</span>
          </div>`
        )
        .join('')}
    </div>

    <div class="col">
      <h2>${isPt ? 'CURSOS' : 'COURSES'}</h2>
      ${courses
        .map(
          (c) => `<div style="display:flex; justify-content:space-between; margin-bottom: 4px;">
            <span>${c.name}</span>
            <span style="color: #777; font-size: 11px;">${c.period[language]}</span>
          </div>`
        )
        .join('')}
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = cvTitle;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs">
      {/* Modal Dialog Container */}
      <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col rounded-2xl bg-[#f5f5ff] shadow-2xl border border-[#6c6aab]/30 overflow-hidden">
        {/* Top Control Bar */}
        <div className="no-print flex items-center justify-between border-b border-[#6c6aab]/20 bg-white px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6c6aab]/10 text-[#6c6aab]">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#2d2b52]">
                {isPt ? 'Currículo de Emerson Renan Seii' : 'Emerson Renan Seii Resume'}
              </h3>
              <p className="text-[11px] text-[#6c6aab]">
                {isPt ? 'Visualização Oficial do CV' : 'Official CV Preview'}
              </p>
            </div>
          </div>

          {/* Action buttons & language toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language toggle inside modal */}
            <div className="flex items-center rounded-lg border border-[#6c6aab]/25 bg-[#f5f5ff] p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => onLanguageChange('pt')}
                className={`rounded-md px-2 py-0.5 text-xs transition-colors ${
                  isPt ? 'bg-[#6c6aab] text-white shadow-xs' : 'text-[#6c6aab]'
                }`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`rounded-md px-2 py-0.5 text-xs transition-colors ${
                  !isPt ? 'bg-[#6c6aab] text-white shadow-xs' : 'text-[#6c6aab]'
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded-lg border border-[#6c6aab] bg-white px-3 py-1.5 text-xs font-semibold text-[#6c6aab] shadow-xs hover:bg-[#6c6aab]/10 transition-colors"
              title={isPt ? 'Imprimir ou Salvar como PDF' : 'Print or Save as PDF'}
            >
              <Printer className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">
                {isPt ? 'Imprimir / PDF' : 'Print / PDF'}
              </span>
            </button>

            <button
              type="button"
              onClick={handleDownloadFile}
              className="flex items-center gap-1.5 rounded-lg bg-[#6c6aab] px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-[#5b5996] transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{isPt ? 'Baixar Arquivo' : 'Download File'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="rounded-lg p-1.5 text-[#6c6aab] hover:bg-[#6c6aab]/15 hover:text-[#2d2b52] transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Replica */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-[#f5f5ff]">
          <div
            id="cv-printable-document"
            className="mx-auto max-w-3xl rounded-xl border border-[#6c6aab]/25 bg-white p-6 shadow-sm sm:p-10 text-[#2d2b52]"
          >
            {/* Header: Name, Title & Contacts */}
            <div className="border-b border-[#6c6aab]/20 pb-5">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <h1 className="text-2xl font-black uppercase tracking-tight text-[#2d2b52] sm:text-3xl">
                    {personal.name}
                  </h1>
                  <p className="mt-1 text-sm font-bold tracking-wide text-[#6c6aab] uppercase">
                    {personal.headline[language]}
                  </p>
                </div>

                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 border-[#6c6aab]/30 shadow-xs bg-[#6c6aab]/10">
                  <img
                    src="/renan.jpg"
                    alt="Emerson Renan Seii"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Contact meta strip */}
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#4a4768]">
                <span>{personal.location}</span>
                <span aria-hidden="true" className="text-[#6c6aab]/40">·</span>
                <span>Tel: +55 {personal.phone}</span>
                <span aria-hidden="true" className="text-[#6c6aab]/40">·</span>
                <span>{personal.email}</span>
                <span aria-hidden="true" className="text-[#6c6aab]/40">·</span>
                <span>{personal.linkedinDisplay}</span>
              </div>
            </div>

            {/* SOBRE MIM / ABOUT ME */}
            <div className="mt-6">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#6c6aab] border-b border-[#6c6aab]/30 pb-1">
                {isPt ? 'SOBRE MIM' : 'ABOUT ME'}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[#3b3858]">
                {personal.about[language]}
              </p>
            </div>

            {/* EXPERIÊNCIAS PROFISSIONAIS / PROFESSIONAL EXPERIENCE */}
            <div className="mt-6">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#6c6aab] border-b border-[#6c6aab]/30 pb-1">
                {isPt ? 'EXPERIÊNCIAS PROFISSIONAIS' : 'PROFESSIONAL EXPERIENCE'}
              </h2>

              <div className="mt-4 space-y-5">
                {experiences.map((exp) => (
                  <div key={exp.company} className="text-xs">
                    <div className="flex justify-between font-bold text-[#2d2b52]">
                      <span className="text-sm">{exp.company}</span>
                      <span className="font-mono text-xs text-[#6c6aab]">{exp.period[language]}</span>
                    </div>
                    <div className="font-semibold text-[#6c6aab]">
                      {exp.role[language]}
                    </div>
                    <ul className="mt-2 list-disc pl-4 space-y-1 text-[#3b3858]">
                      {exp.bullets[language].map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 text-[11px] text-[#4a4768]">
                      <strong className="text-[#2d2b52]">
                        {isPt ? 'Tecnologias: ' : 'Technologies: '}
                      </strong>
                      {exp.technologies.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom 2-Column: Education & Languages + Courses */}
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 pt-2">
              {/* Col 1: Education & Languages */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#6c6aab] border-b border-[#6c6aab]/30 pb-1">
                  {isPt ? 'FORMAÇÃO ACADÊMICA' : 'EDUCATION'}
                </h2>
                <div className="mt-2 text-xs">
                  <div className="font-bold text-[#2d2b52]">{education.institution}</div>
                  <div className="text-[#6c6aab] font-medium">{education.degree[language]}</div>
                  <div className="font-mono text-[11px] text-[#716e91]">{education.period[language]}</div>
                </div>

                <h2 className="mt-5 text-xs font-extrabold uppercase tracking-wider text-[#6c6aab] border-b border-[#6c6aab]/30 pb-1">
                  {isPt ? 'IDIOMAS' : 'LANGUAGES'}
                </h2>
                <div className="mt-2 space-y-1 text-xs">
                  {languages.map((lang, lIdx) => (
                    <div key={lIdx} className="flex justify-between">
                      <span className="text-[#2d2b52]">{lang.name[language]}</span>
                      <span className="font-semibold text-[#6c6aab]">{lang.level[language]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Col 2: Courses */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#6c6aab] border-b border-[#6c6aab]/30 pb-1">
                  {isPt ? 'CURSOS' : 'COURSES'}
                </h2>
                <div className="mt-2 space-y-2 text-xs">
                  {courses.map((course, cIdx) => (
                    <div key={cIdx} className="flex justify-between border-b border-[#6c6aab]/10 pb-1 last:border-b-0">
                      <span className="font-medium text-[#2d2b52]">{course.name}</span>
                      <span className="font-mono text-[11px] text-[#716e91]">{course.period[language]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
