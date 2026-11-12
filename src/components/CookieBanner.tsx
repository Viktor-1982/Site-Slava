'use client';

import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { LegalDocType } from './LegalModals';

interface CookieBannerProps {
  onOpenDoc: (doc: LegalDocType) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenDoc }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent_astana');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent_astana', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-slide-up">
      <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-cyan-500/30 bg-slate-900/95 shadow-2xl backdrop-blur-xl flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
            <Cookie className="w-4 h-4" />
          </div>
          <div className="flex-1 text-xs text-slate-300 leading-relaxed">
            <p>
              Мы используем технические файлы cookie для корректной работы сайта и калькулятора Trade-In. Продолжая просмотр, вы соглашаетесь с нашей{' '}
              <button
                type="button"
                onClick={() => onOpenDoc('cookies')}
                className="text-cyan-400 hover:underline font-semibold"
              >
                Политикой cookies
              </button>.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-1">
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
          >
            Принять и продолжить
          </button>
        </div>
      </div>
    </div>
  );
};
