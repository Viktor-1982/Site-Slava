'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { TradeInCalculator } from '@/components/TradeInCalculator';
import { CatalogSection } from '@/components/CatalogSection';
import { ServicesSection } from '@/components/ServicesSection';
import { BeforeAfterSection } from '@/components/BeforeAfterSection';
import { KaspiBanner } from '@/components/KaspiBanner';
import { AboutMaster } from '@/components/AboutMaster';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ContactsSection } from '@/components/ContactsSection';
import { Footer } from '@/components/Footer';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { LegalModals, LegalDocType } from '@/components/LegalModals';
import { CookieBanner } from '@/components/CookieBanner';

export default function Home() {
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>(null);

  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* 1. Hero Section (Фокус на ремонте и обслуживании) */}
      <HeroSection />
      
      {/* 2. Основная деятельность: Ремонт, Чистка, Апгрейд и Прайс-лист */}
      <ServicesSection />

      {/* 3. Наглядный результат: До и После профессиональной чистки */}
      <BeforeAfterSection />
      
      {/* 4. Экспертиза и лицо сервиса: Инженер Вячеслав */}
      <AboutMaster />
      
      {/* 5. Рассрочка Kaspi 0-0-24 на ремонт и технику */}
      <KaspiBanner />
      
      {/* 6. Дополнительно: Проверенная техника из США и Европы */}
      <CatalogSection />
      
      {/* 7. Дополнительно: Калькулятор Trade-In и выкупа */}
      <TradeInCalculator />
      
      {/* 8. Отзывы клиентов */}
      <ReviewsSection />
      
      {/* 9. Контакты и локация в Астане */}
      <ContactsSection />
      
      {/* Footer with Legal Links & Developer Credit */}
      <Footer onOpenDoc={setActiveLegalDoc} />

      {/* Мобильная фиксированная панель для быстрой записи */}
      <MobileStickyBar />

      {/* Legal Compliance Modals */}
      <LegalModals activeDoc={activeLegalDoc} onClose={() => setActiveLegalDoc(null)} />

      {/* Floating Cookie Consent Banner */}
      <CookieBanner onOpenDoc={setActiveLegalDoc} />
    </main>
  );
}
