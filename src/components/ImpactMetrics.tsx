import React from 'react';
import { Language, resumeData } from '../data/resumeData';

interface ImpactMetricsProps {
  language: Language;
}

export const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ language }) => {
  const isPt = language === 'pt';
  const { kpis } = resumeData;

  return (
    <section id="impact" className="relative border-y border-[#6c6aab]/15 bg-white/70 py-12 backdrop-blur-xs">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 text-center sm:text-left">
          <p className="text-xs font-semibold tracking-wider text-[#6c6aab] uppercase">
            {isPt ? 'Métricas de Impacto Comprovadas' : 'Quantifiable Business Impact'}
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#2d2b52] sm:text-3xl">
            {isPt
              ? 'Resultados Tangíveis em BI & Engenharia de Dados'
              : 'Tangible Outcomes in BI & Data Engineering'}
          </h2>
        </div>

        {/* 5-Column Metrics Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-xl border border-[#6c6aab]/20 bg-[#f5f5ff]/60 p-5 transition-all hover:border-[#6c6aab] hover:bg-white hover:shadow-sm"
            >
              <div>
                {/* Metric Big Number */}
                <span className="font-mono text-3xl font-extrabold tracking-tight text-[#2d2b52] tabular-nums sm:text-4xl">
                  {kpi.value}
                </span>

                {/* Metric Label */}
                <h3 className="mt-2 text-sm font-bold text-[#6c6aab]">
                  {kpi.label[language]}
                </h3>

                {/* Metric Details */}
                <p className="mt-1.5 text-xs leading-relaxed text-[#4a4768]">
                  {kpi.detail[language]}
                </p>
              </div>

              {/* Attribution Company footer */}
              <div className="mt-4 pt-3 border-t border-[#6c6aab]/10 text-[11px] font-semibold text-[#6c6aab]/80">
                <span>{kpi.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
