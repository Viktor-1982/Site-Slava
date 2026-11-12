'use client';

import React, { useState } from 'react';
import { TRADE_IN_BRANDS, getWhatsAppLink } from '@/data/content';
import { RefreshCw, Calculator, MessageSquare, Check, Sparkles, AlertCircle } from 'lucide-react';

export const TradeInCalculator: React.FC = () => {
  const [deviceType, setDeviceType] = useState<'laptop' | 'desktop' | 'monoblock'>('laptop');
  const [brand, setBrand] = useState<string>('Lenovo');
  const [condition, setCondition] = useState<'perfect' | 'good' | 'scratches' | 'broken'>('good');
  const [year, setYear] = useState<string>('2020-2022');
  const [hasCharger, setHasCharger] = useState<boolean>(true);

  // Dynamic estimated value calculation
  const calculateEstimatedValue = () => {
    let base = 70000;
    if (deviceType === 'laptop') base = 80000;
    if (deviceType === 'desktop') base = 90000;
    if (deviceType === 'monoblock') base = 85000;

    if (brand === 'Apple (MacBook)') base *= 1.5;
    else if (brand === 'Lenovo' || brand === 'Dell' || brand === 'ASUS') base *= 1.2;

    if (year === '2023-2026') base *= 1.4;
    else if (year === '2020-2022') base *= 1.0;
    else base *= 0.65;

    if (condition === 'perfect') base *= 1.25;
    else if (condition === 'good') base *= 1.0;
    else if (condition === 'scratches') base *= 0.8;
    else if (condition === 'broken') base *= 0.45;

    if (!hasCharger) base -= 10000;

    const min = Math.max(15000, Math.round((base * 0.85) / 5000) * 5000);
    const max = Math.max(25000, Math.round((base * 1.15) / 5000) * 5000);
    return { min, max };
  };

  const { min, max } = calculateEstimatedValue();

  const conditionLabels = {
    perfect: 'Идеальное (без сколов и царапин, как новый)',
    good: 'Хорошее (незначительные следы использования)',
    scratches: 'Потертости / трещины / дефекты корпуса',
    broken: 'Не включается / разбит экран / залит (на запчасти)'
  };

  const deviceTypeLabels = {
    laptop: 'Ноутбук',
    desktop: 'Системный блок ПК',
    monoblock: 'Моноблок'
  };

  const generatedWhatsAppText = `Здравствуйте, Вячеслав! Хочу оценить технику по Trade-In:
- Тип: ${deviceTypeLabels[deviceType]}
- Бренд: ${brand}
- Год выпуска: ${year}
- Состояние: ${conditionLabels[condition]}
- Наличие зарядки: ${hasCharger ? 'Да' : 'Нет'}
- Предварительный расчет на сайте: ${min.toLocaleString('ru-RU')} - ${max.toLocaleString('ru-RU')} ₸.
Прикрепляю фото для точной оценки:`;

  return (
    <section id="trade-in" className="py-20 bg-[#0B0F19] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <RefreshCw className="w-3.5 h-3.5" />
            Онлайн-калькулятор Trade-In
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Узнайте стоимость вашего устройства за 1 минуту
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Сдайте старую технику и получите моментальную скидку на ноутбук из США/Европы или наличные. Принимаем в любом состоянии, даже нерабочие.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left: Input Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
            
            {/* 1. Device Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                1. Тип устройства
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'laptop', label: 'Ноутбук' },
                  { id: 'desktop', label: 'ПК (Системник)' },
                  { id: 'monoblock', label: 'Моноблок' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDeviceType(item.id as any)}
                    className={`py-2.5 px-2 text-xs font-bold rounded-xl border transition-all ${
                      deviceType === item.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Brand */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                2. Производитель (Бренд)
              </label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-slate-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-400"
              >
                {TRADE_IN_BRANDS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* 3. Year */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                3. Примерный год выпуска
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['До 2019', '2020-2022', '2023-2026'].map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setYear(y)}
                    className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all ${
                      year === y
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Condition */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                4. Состояние устройства
              </label>
              <div className="space-y-2">
                {[
                  { id: 'perfect', label: 'Идеальное', desc: 'Как новый, без следов' },
                  { id: 'good', label: 'Хорошее', desc: 'Рабочий, мелкие царапинки' },
                  { id: 'scratches', label: 'Потертый / Дефекты', desc: 'Сколы, слабая батарея' },
                  { id: 'broken', label: 'Не включается / Разбит', desc: 'На запчасти' },
                ].map((c) => (
                  <div
                    key={c.id}
                    onClick={() => setCondition(c.id as any)}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      condition === c.id
                        ? 'bg-cyan-950/40 border-cyan-400/80 text-white'
                        : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:bg-slate-800/40'
                    }`}
                  >
                    <div>
                      <p className="text-xs font-bold text-slate-200">{c.label}</p>
                      <p className="text-[11px] text-slate-400">{c.desc}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      condition === c.id ? 'border-cyan-400 bg-cyan-500 text-slate-950' : 'border-slate-700'
                    }`}>
                      {condition === c.id && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Charger Checkbox */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="charger-check"
                checked={hasCharger}
                onChange={(e) => setHasCharger(e.target.checked)}
                className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <label htmlFor="charger-check" className="text-xs text-slate-300 cursor-pointer select-none">
                Оригинальное зарядное устройство в комплекте
              </label>
            </div>

          </div>

          {/* Right: Real-time Result & WhatsApp Submit (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 relative overflow-hidden bg-gradient-to-b from-slate-900/90 to-slate-950/90 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Предварительная оценка
              </span>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                В наличии в Астане
              </span>
            </div>

            {/* Estimated Price Range */}
            <div>
              <p className="text-xs text-slate-400">Примерная сумма скидки / выкупа:</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  {min.toLocaleString('ru-RU')} — {max.toLocaleString('ru-RU')} ₸
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                * Окончательная цена определяется после визуального осмотра или фото в WhatsApp.
              </p>
            </div>

            {/* Key Perks */}
            <div className="space-y-2.5 pt-2 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Эту сумму можно зачесть в покупку любого ноутбука</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Остаток можно оформить в <strong>Kaspi Рассрочку 0-0-24</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Бесплатно перенесем файлы со старого устройства</span>
              </div>
            </div>

            {/* CTA Button to WhatsApp */}
            <div className="pt-3">
              <a
                href={getWhatsAppLink(generatedWhatsAppText)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3.5 px-6 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all hover:scale-102 active:scale-98 text-sm text-center"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Отправить на оценку в WhatsApp</span>
              </a>
              <p className="text-[11px] text-slate-400 text-center mt-2.5">
                ⚡ Вячеслав ответит и назовет точную цену в течение 10 минут
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
