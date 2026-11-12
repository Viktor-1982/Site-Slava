'use client';

import React from 'react';
import { SERVICES_LIST, getWhatsAppLink } from '@/data/content';
import { 
  Wrench, 
  Fan, 
  Laptop, 
  Cpu, 
  Monitor, 
  Zap, 
  Wifi, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Fan': return Fan;
      case 'Laptop': return Laptop;
      case 'Cpu': return Cpu;
      case 'Monitor': return Monitor;
      case 'Zap': return Zap;
      case 'Wrench': return Wrench;
      case 'Wifi': return Wifi;
      default: return Wrench;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#0B0F19] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Профессионально, Быстро, с Гарантией!
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ТОП Востребованных Компьютерных Услуг
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Ремонт ноутбуков, компьютеров и моноблоков в Астане. Выезд мастера на дом, качественные комплектующие и официальная гарантия на все работы.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => {
            const Icon = getIcon(service.iconName);

            return (
              <div
                key={service.id}
                className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800/90 bg-slate-900/70 hover:border-cyan-500/40 relative group"
              >
                {service.isHit && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md">
                      ТОП Услуга
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-6 text-xs text-slate-300">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Meta & Price */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{service.timeRequired}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{service.warranty}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Стоимость:</span>
                      <span className="text-xl font-extrabold text-white">
                        от {service.priceFrom.toLocaleString('ru-RU')} ₸
                      </span>
                    </div>

                    <a
                      href={getWhatsAppLink(`Здравствуйте, Вячеслав! Интересует услуга: «${service.title}». Модель устройства: `)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-2 px-4 rounded-xl text-xs shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Записаться</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Home Visit / Remote Help Banner */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h4 className="text-lg font-bold text-white">Нужен выезд мастера на дом или в офис?</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Вячеслав приедет по вашему адресу в Астане со всем необходимым оборудованием для диагностики, чистки или настройки сети.
            </p>
          </div>

          <a
            href={getWhatsAppLink('Здравствуйте, Вячеслав! Нужен выезд мастера на дом/в офис в Астане. Адрес: ')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all hover:scale-105"
          >
            Вызвать мастера на дом →
          </a>
        </div>

      </div>
    </section>
  );
};
