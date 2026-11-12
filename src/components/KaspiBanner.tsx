'use client';

import React from 'react';
import { getWhatsAppLink } from '@/data/content';
import { CreditCard, CheckCircle2, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';

export const KaspiBanner: React.FC = () => {
  return (
    <section className="py-16 bg-[#080B11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden border border-[#F14635]/40 bg-gradient-to-br from-[#F14635]/15 via-slate-900/90 to-slate-950 p-8 sm:p-12">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F14635]/20 blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-[#F14635] text-white">
                <CreditCard className="w-4 h-4" />
                Официальный партнер Kaspi.kz
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Покупайте технику и ремонтируйте в рассрочку <span className="text-[#FF6B5E]">Kaspi 0-0-24</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300">
                Без процентов, без переплат и без первого взноса. Оформление за 1 минуту прямо через приложение Kaspi на вашем телефоне.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kaspi Рассрочка до 24 месяцев</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kaspi RED (на 3 месяца)</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Оплата Kaspi QR и картами</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Действует на товары и все виды ремонта</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Box (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-700/80 p-6 rounded-2xl space-y-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-slate-400">Пример расчета в Kaspi:</span>
                <span className="text-xs font-extrabold text-[#FF6B5E] bg-[#F14635]/15 px-2 py-0.5 rounded-md">
                  0% переплат
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <div>
                    <p className="font-bold text-white">ThinkPad T14 (245 000 ₸)</p>
                    <p className="text-[11px] text-slate-400">Рассрочка на 24 мес</p>
                  </div>
                  <span className="text-sm font-extrabold text-cyan-400">10 208 ₸ / мес</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <div>
                    <p className="font-bold text-white">Ремонт / Апгрейд (30 000 ₸)</p>
                    <p className="text-[11px] text-slate-400">Kaspi RED на 3 мес</p>
                  </div>
                  <span className="text-sm font-extrabold text-cyan-400">10 000 ₸ / мес</span>
                </div>
              </div>

              <a
                href={getWhatsAppLink('Здравствуйте, Вячеслав! Хочу оформить ноутбук / услугу в рассрочку Kaspi 0-0-24.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#F14635] hover:bg-[#D63525] text-white font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-lg shadow-[#F14635]/30 transition-all hover:scale-102"
              >
                <MessageSquare className="w-4 h-4" />
                Оформить через Kaspi в WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
