'use client';

import React from 'react';
import { getWhatsAppLink } from '@/data/content';
import { Flame, Volume2, Gauge, VolumeX, Zap, Snowflake, CheckCircle2, AlertTriangle, ArrowRight, MessageSquare } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#080B11] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Результат работы мастера
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Профессиональная чистка ноутбуков и ПК
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Посмотрите, как преображается система охлаждения после полного разбора, ультразвуковой очистки кулеров и нанесения свежей термопасты.
          </p>
        </div>

        {/* Main Comparison Container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/60 shadow-2xl">
          
          {/* Visual Photo (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950 group max-w-md w-full">
              <img
                src="/before-after-cleaning.jpg"
                alt="Профессиональная чистка ноутбуков До и После"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Cards & Explanations (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Grid DO vs POSLE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* ДО (Red) */}
              <div className="p-5 rounded-2xl bg-red-950/30 border border-red-500/30 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-red-500/20">
                  <span className="text-xs font-black uppercase tracking-wider text-red-400 bg-red-500/20 px-2.5 py-0.5 rounded-full">
                    ДО ЧИСТКИ
                  </span>
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <div className="w-6 h-6 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                      <Flame className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-white block">Греется</strong>
                      <span className="text-[11px] text-slate-400">Температуры под 95–100°C</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-slate-200">
                    <div className="w-6 h-6 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                      <Volume2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-white block">Шумит</strong>
                      <span className="text-[11px] text-slate-400">Вентиляторы гудят на 100%</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-slate-200">
                    <div className="w-6 h-6 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                      <Gauge className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-white block">Тормозит</strong>
                      <span className="text-[11px] text-slate-400">Троттлинг и зависания в играх</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ПОСЛЕ (Green) */}
              <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    ПОСЛЕ ОБСЛУЖИВАНИЯ
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <VolumeX className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-white block">Тихий</strong>
                      <span className="text-[11px] text-slate-400">Практически бесшумная работа</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-slate-200">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-white block">Быстрый</strong>
                      <span className="text-[11px] text-slate-400">Максимальный FPS и отклик</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-slate-200">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Snowflake className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-white block">Холодный</strong>
                      <span className="text-[11px] text-slate-400">Снижение температуры на 15–25°C</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Callout Banner */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm font-black uppercase text-amber-300 tracking-wide">
                  ГРЕЕТСЯ? ШУМИТ? ТОРМОЗИТ?
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Чистка занимает 1–2 часа. Стоимость от 7 000 ₸.
                </p>
              </div>

              <a
                href={getWhatsAppLink('Здравствуйте, Вячеслав! Хочу записаться на чистку ноутбука / ПК от пыли с заменой термопасты.')}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-white font-bold py-2.5 px-5 rounded-xl text-xs shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Записаться в WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
