import React from 'react';
import { Download, ArrowUp } from 'lucide-react';
import { Language, resumeData } from '../data/resumeData';

interface FooterProps {
  language: Language;
  onOpenCVModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenCVModal }) => {
  const isPt = language === 'pt';
  const { personal } = resumeData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="no-print border-t border-[#6c6aab]/15 bg-[#f5f5ff] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <div>
          <span className="text-base font-bold text-[#2d2b52]">
            {personal.name}
          </span>
          <p className="mt-0.5 text-xs text-[#6c6aab]">
            {personal.title[language]} · {personal.location}
          </p>
          <p className="mt-2 text-[11px] text-[#6c6aab]/70">
            © {new Date().getFullYear()} {personal.name}. {isPt ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenCVModal}
            className="flex items-center gap-1.5 rounded-lg border border-[#6c6aab]/30 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#6c6aab] shadow-xs hover:bg-[#6c6aab]/10"
          >
            <Download className="h-3.5 w-3.5" />
            <span>{isPt ? 'Baixar CV' : 'Download CV'}</span>
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#6c6aab]/30 bg-white text-[#6c6aab] shadow-xs hover:bg-[#6c6aab]/10"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
