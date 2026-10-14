import React from 'react';
import { Download, Globe } from 'lucide-react';
import { Language } from '../data/resumeData';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenCVModal,
}) => {
  const isPt = language === 'pt';

  const navLinks = [
    { href: '#about', label: isPt ? 'Sobre' : 'About' },
    { href: '#timeline', label: isPt ? 'Linha do Tempo' : 'Timeline' },
    { href: '#impact', label: isPt ? 'Impacto' : 'Impact' },
    { href: '#experience', label: isPt ? 'Experiência' : 'Experience' },
    { href: '#contact', label: isPt ? 'Contato' : 'Contact' },
  ];

  return (
    <header className="no-print sticky top-0 z-40 w-full border-b border-[#6c6aab]/15 bg-[#f5f5ff]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6">
        {/* Zone 1: Single element Brand wordmark with avatar */}
        <a
          href="#about"
          className="flex items-center gap-2.5 whitespace-nowrap text-base font-bold tracking-tight text-[#2d2b52] transition-colors hover:text-[#6c6aab] sm:text-lg"
        >
          <img
            src="/renan.jpg"
            alt="Emerson Renan Seii"
            className="h-8 w-8 rounded-full object-cover object-top border border-[#6c6aab]/30 shadow-2xs"
          />
          <span>Emerson Renan Seii</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#6c6aab] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-[#2d2b52] hover:underline hover:underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language switch + Primary CTA action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Flag & Switcher */}
          <div className="flex items-center rounded-lg border border-[#6c6aab]/25 bg-white/70 p-0.5 text-xs font-semibold shadow-xs">
            <button
              type="button"
              onClick={() => onLanguageChange('pt')}
              aria-label="Mudar para Português"
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-all ${
                isPt
                  ? 'bg-[#6c6aab] text-white shadow-xs'
                  : 'text-[#6c6aab] hover:text-[#2d2b52]'
              }`}
            >
              <span className="text-sm leading-none" role="img" aria-label="Brasil">🇧🇷</span>
              <span>PT</span>
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              aria-label="Switch to English"
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-all ${
                !isPt
                  ? 'bg-[#6c6aab] text-white shadow-xs'
                  : 'text-[#6c6aab] hover:text-[#2d2b52]'
              }`}
            >
              <span className="text-sm leading-none" role="img" aria-label="United States">🇺🇸</span>
              <span>EN</span>
            </button>
          </div>

          {/* Primary Action Button */}
          <button
            type="button"
            onClick={onOpenCVModal}
            className="flex items-center gap-1.5 rounded-lg bg-[#6c6aab] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#5b5996] active:scale-98 sm:text-sm"
          >
            <Download className="h-3.5 w-3.5" />
            <span className="whitespace-nowrap">{isPt ? 'Baixar CV' : 'Download CV'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
