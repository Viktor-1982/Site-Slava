'use client';

import React from 'react';
import { CONTACT_INFO, getWhatsAppLink } from '@/data/content';
import { MessageSquare, Phone, Wrench } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080B11]/95 backdrop-blur-xl border-t border-slate-800 p-2.5 px-3">
      <div className="grid grid-cols-12 gap-2 items-center">
        
        {/* Quick Services button */}
        <a
          href="#services"
          className="col-span-3 flex flex-col items-center justify-center py-1.5 px-1 bg-slate-900 border border-slate-700/80 rounded-xl text-[10px] font-bold text-slate-300 active:scale-95"
        >
          <Wrench className="w-4 h-4 text-cyan-400 mb-0.5" />
          <span>Ремонт</span>
        </a>

        {/* WhatsApp Main Button */}
        <a
          href={getWhatsAppLink('Здравствуйте, Вячеслав! Пишу с мобильной версии сайта, нужна помощь/консультация.')}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-6 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-gradient-to-r from-emerald-500 to-teal-600 active:from-emerald-600 active:to-teal-700 text-white font-extrabold rounded-xl text-xs shadow-lg shadow-emerald-500/25 active:scale-95"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Вячеслав WhatsApp</span>
        </a>

        {/* Quick Phone Call */}
        <a
          href={`tel:${CONTACT_INFO.phoneClean}`}
          className="col-span-3 flex flex-col items-center justify-center py-1.5 px-1 bg-slate-900 border border-slate-700/80 rounded-xl text-[10px] font-bold text-slate-300 active:scale-95"
        >
          <Phone className="w-4 h-4 text-cyan-400 mb-0.5" />
          <span>Звонок</span>
        </a>

      </div>
    </div>
  );
};
