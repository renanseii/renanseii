import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Building2,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { Language, resumeData } from '../data/resumeData';

interface CareerTimelineProps {
  language: Language;
}

export const CareerTimeline: React.FC<CareerTimelineProps> = ({ language }) => {
  const isPt = language === 'pt';
  const { timelineMilestones } = resumeData;
  const [activeIndex, setActiveIndex] = useState(timelineMilestones.length - 1); // default to current role
  const trackRef = useRef<HTMLDivElement>(null);
  const activeMilestone = timelineMilestones[activeIndex];

  // Scroll active point into view on track
  useEffect(() => {
    if (trackRef.current) {
      const activeEl = trackRef.current.children[activeIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev < timelineMilestones.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <section id="timeline" className="py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#6c6aab] uppercase">
              <Compass className="h-4 w-4" />
              <span>{isPt ? 'Linha do Tempo Interativa' : 'Interactive Career Timeline'}</span>
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#2d2b52] sm:text-3xl">
              {isPt
                ? 'A Evolução da Minha Trajetória'
                : 'The Evolution of My Career'}
            </h2>
          </div>

          {/* Navigation arrow controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous milestone"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#6c6aab]/25 bg-white text-[#6c6aab] shadow-xs transition-all hover:bg-[#6c6aab]/10 disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="font-mono text-xs font-semibold text-[#6c6aab]">
              {activeIndex + 1} / {timelineMilestones.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === timelineMilestones.length - 1}
              aria-label="Next milestone"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#6c6aab]/25 bg-white text-[#6c6aab] shadow-xs transition-all hover:bg-[#6c6aab]/10 disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Timeline Track Bar */}
        <div className="mt-8 rounded-2xl border border-[#6c6aab]/20 bg-white p-5 shadow-xs sm:p-6">
          <div className="relative pt-6 pb-2">
            {/* Base Horizontal Track Line */}
            <div className="absolute top-10 left-4 right-4 h-1 bg-[#6c6aab]/15 rounded-full" />

            {/* Scrollable container for milestones */}
            <div
              ref={trackRef}
              tabIndex={0}
              aria-label={isPt ? 'Linha do tempo de marcos' : 'Milestone timeline'}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  handlePrev();
                } else if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  handleNext();
                }
              }}
              className="relative flex items-start justify-between gap-4 overflow-x-auto pb-4 pt-2 no-scrollbar focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6c6aab]/50 rounded-lg"
            >
              {timelineMilestones.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className="group relative flex flex-col items-center shrink-0 min-w-[85px] cursor-pointer focus:outline-none"
                  >
                    {/* Location pin indicator above the active milestone point */}
                    <div className="h-6 flex items-center justify-center">
                      {isActive && (
                        <span
                          className="text-base animate-bounce leading-none"
                          role="img"
                          aria-label="Active marker"
                        >
                          📍
                        </span>
                      )}
                    </div>

                    {/* Timeline Node Circle */}
                    <div
                      className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? 'border-[#6c6aab] bg-[#6c6aab] text-white shadow-md scale-110'
                          : 'border-[#6c6aab]/30 bg-white text-[#6c6aab] group-hover:border-[#6c6aab] group-hover:scale-105'
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-current" />
                    </div>

                    {/* Year Label */}
                    <span
                      className={`mt-2 font-mono text-xs font-bold transition-colors ${
                        isActive
                          ? 'text-[#2d2b52] underline underline-offset-4 decoration-[#6c6aab] decoration-2'
                          : 'text-[#6c6aab]/80 group-hover:text-[#2d2b52]'
                      }`}
                    >
                      {item.year}
                    </span>

                    {/* Short category */}
                    <span className="mt-0.5 text-[10px] text-[#4a4768] line-clamp-1 max-w-[80px] text-center">
                      {item.category[language]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Milestone Highlight Card */}
          <div className="mt-6 border-t border-[#6c6aab]/15 pt-6">
            <div className="rounded-xl bg-[#f5f5ff] p-5 sm:p-7 border border-[#6c6aab]/20 transition-all duration-300">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-baseline">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#6c6aab] text-white">
                      {activeMilestone.year}
                    </span>
                    <span className="text-xs font-semibold text-[#6c6aab]">
                      {activeMilestone.category[language]}
                    </span>
                    {activeMilestone.companyOrOrg && (
                      <span className="flex items-center gap-1 text-xs font-medium text-[#2d2b52]">
                        <Building2 className="h-3 w-3 text-[#6c6aab]" />
                        {activeMilestone.companyOrOrg}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-[#2d2b52] sm:text-xl">
                    {activeMilestone.title[language]}
                  </h3>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#6c6aab] bg-white px-3 py-1 rounded-full border border-[#6c6aab]/20">
                  <Sparkles className="h-3 w-3" />
                  {activeMilestone.tag}
                </span>
              </div>

              {/* Narrative Story Description */}
              <p className="mt-4 text-sm leading-relaxed text-[#3b3858] sm:text-base">
                {activeMilestone.content[language]}
              </p>

              {/* Bottom Card Navigation */}
              <div className="mt-6 flex items-center justify-between border-t border-[#6c6aab]/10 pt-4 text-xs">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={activeIndex === 0}
                  className="flex items-center gap-1 font-semibold text-[#6c6aab] hover:text-[#2d2b52] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span>{isPt ? 'Marco Anterior' : 'Previous Milestone'}</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {timelineMilestones.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Go to milestone ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        activeIndex === i
                          ? 'w-6 bg-[#6c6aab]'
                          : 'w-1.5 bg-[#6c6aab]/30 hover:bg-[#6c6aab]/60'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeIndex === timelineMilestones.length - 1}
                  className="flex items-center gap-1 font-semibold text-[#6c6aab] hover:text-[#2d2b52] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span>{isPt ? 'Próximo Marco' : 'Next Milestone'}</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
