/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { Language } from './data/resumeData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SmoothSection } from './components/SmoothSection';
import { CareerTimeline } from './components/CareerTimeline';
import { ImpactMetrics } from './components/ImpactMetrics';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CompetencesSection } from './components/CompetencesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { Toast } from './components/Toast';

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyText = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage(label);
      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5ff] text-[#6c6aab] selection:bg-[#6c6aab] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        onOpenCVModal={() => setIsCVModalOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero
          language={language}
          onOpenCVModal={() => setIsCVModalOpen(true)}
          onCopyText={handleCopyText}
        />

        <SmoothSection>
          <CareerTimeline language={language} />
        </SmoothSection>

        <SmoothSection>
          <ImpactMetrics language={language} />
        </SmoothSection>

        <SmoothSection>
          <ExperienceSection language={language} />
        </SmoothSection>

        <SmoothSection>
          <CompetencesSection language={language} />
        </SmoothSection>

        <SmoothSection>
          <SkillsSection language={language} />
        </SmoothSection>

        <SmoothSection>
          <EducationSection language={language} />
        </SmoothSection>

        <SmoothSection>
          <ContactSection
            language={language}
            onCopyText={handleCopyText}
          />
        </SmoothSection>
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onOpenCVModal={() => setIsCVModalOpen(true)}
      />

      {/* Downloadable / Printable CV Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Notification Toast */}
      <Toast message={toastMessage} />
    </div>
  );
}
