'use client';

import React from 'react';
import Link from 'next/link';
import { CONTACT_INFO } from '@/data/content';
import { Laptop, Instagram } from 'lucide-react';
import { LegalDocType } from './LegalModals';

interface FooterProps {
  onOpenDoc: (doc: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDoc }) => {
  return (
    <footer className="bg-[#05070B] border-t border-slate-800/80 py-12 pb-28 sm:pb-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Row: Logo, Navigation, Contacts */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800/60">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
              <Laptop className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm text-white">PC SERVICE <span className="text-cyan-400">ASTANA</span></span>
              <p className="text-[11px] text-slate-400">Сервис • Ремонт • Trade-In • Техника из США/ЕС</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-slate-400">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Услуги и Прайс</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">О мастере</a>
            <a href="#catalog" className="hover:text-cyan-400 transition-colors">Каталог техники</a>
            <a href="#trade-in" className="hover:text-cyan-400 transition-colors">Trade-In</a>
            <a href="#contacts" className="hover:text-cyan-400 transition-colors">Контакты</a>
            <a 
              href={CONTACT_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors font-semibold"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white font-bold">{CONTACT_INFO.phone}</p>
            <p className="text-[11px] text-slate-400">{CONTACT_INFO.workingHours}</p>
          </div>

        </div>

        {/* Middle Row: Legal Compliance Links */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-[11px] text-slate-400">
          <button
            type="button"
            onClick={() => onOpenDoc('privacy')}
            className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
          >
            Политика конфиденциальности
          </button>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <button
            type="button"
            onClick={() => onOpenDoc('terms')}
            className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
          >
            Публичная оферта и правила сервиса
          </button>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <button
            type="button"
            onClick={() => onOpenDoc('warranty')}
            className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
          >
            Гарантия и условия Kaspi 0-0-24
          </button>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <button
            type="button"
            onClick={() => onOpenDoc('cookies')}
            className="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
          >
            Файлы Cookie
          </button>
        </div>

        {/* Bottom Row: Copyright + ViktorWebStudio Credit */}
        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} PC Service Astana (Мастерская Вячеслава). Все права защищены.</p>
          
          <p className="flex items-center gap-1.5">
            <span>Разработано</span>
            <Link
              href="/developer"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 hover:opacity-80 transition-all hover:underline underline-offset-4 cursor-pointer"
            >
              ViktorWebStudio
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
};
