'use client';

import React from 'react';
import { CONTACT_INFO, getWhatsAppLink } from '@/data/content';
import { ShieldCheck, Award, HeartHandshake, Microscope, Sparkles, MessageSquare } from 'lucide-react';

export const AboutMaster: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Личная гарантия качества
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              «Обращайтесь, с радостью помогу вам! <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">С уважением, Вячеслав»</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Приветствую! Меня зовут <strong>Вячеслав</strong> — сервисный инженер и основатель <strong>PC Service в Астане</strong>.
              </p>
              <p>
                Занимаюсь профессиональным ремонтом, диагностикой, апгрейдом и обслуживанием ноутбуков, компьютеров и моноблоков. В наличии и на заказ поставляю проверенную технику из США и Европы, а также помогаю выгодно обновить старое устройство по программе Trade-In.
              </p>
            </div>

            {/* Key Badges from Banners */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <p className="font-bold text-white">🚚 Доставка</p>
                <p className="text-[11px] text-slate-400">По Астане и всему Казахстану</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <p className="font-bold text-white">🛡 Гарантия качества</p>
                <p className="text-[11px] text-slate-400">Официальные акты и чеки</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <p className="font-bold text-white">🌐 Удалённая помощь</p>
                <p className="text-[11px] text-slate-400">Быстрая поддержка онлайн</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <p className="font-bold text-white">⚡ Качественные материалы</p>
                <p className="text-[11px] text-slate-400">Оригинальные термоинтерфейсы</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <p className="font-bold text-white">🔴 Kaspi 0-0-24 & RED</p>
                <p className="text-[11px] text-slate-400">Рассрочка без переплат</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <p className="font-bold text-white">🔄 Честный Trade-In</p>
                <p className="text-[11px] text-slate-400">Обмен старого на новое</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink('Здравствуйте, Вячеслав! Хочу задать вопрос по технике.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-white font-bold py-3 px-6 rounded-xl text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4" />
                Написать лично Вячеславу
              </a>
            </div>

          </div>

          {/* Right Column: Visual Persona Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-slate-700/80 p-6 space-y-6 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl">
              
              {/* Photo Area */}
              <div className="relative aspect-[3/4] w-full min-h-[460px] md:min-h-[520px] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-inner">
                <img
                  src="/vyacheslav.jpg"
                  alt="Вячеслав - Сервисный инженер"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-cyan-400 bg-slate-900/90 px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-md shadow-md">
                    Инженер-электронщик & Эксперт
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">Вячеслав</h3>
                  <p className="text-xs text-slate-300">Основатель PC Service в Астане</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <p className="text-xl font-extrabold text-cyan-400">12+</p>
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Лет опыта</p>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <p className="text-xl font-extrabold text-emerald-400">3 500+</p>
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Ремонтов</p>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <p className="text-xl font-extrabold text-amber-400">99.4%</p>
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Довольных клиентов</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center">
                <p className="text-xs text-cyan-300 font-medium">
                  📍 Астана • Быстрый выезд во все районы города
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
