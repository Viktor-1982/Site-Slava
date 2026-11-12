'use client';

import React, { useState } from 'react';
import { getWhatsAppLink } from '@/data/content';
import { 
  Laptop, 
  Wrench, 
  RefreshCw, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  CreditCard, 
  Award,
  Truck
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'repair' | 'buy' | 'tradein'>('repair');

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#F14635]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Mini-pill: Location & Personal Guarantee */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 bg-slate-900/90 border border-slate-750 rounded-full pl-2 pr-4 py-1.5 backdrop-blur-md shadow-xl">
            <img 
              src="/vyacheslav.jpg" 
              alt="Вячеслав" 
              className="w-7 h-7 rounded-full object-cover border border-cyan-400/50" 
            />
            <span className="text-xs font-semibold text-slate-200">
              г. Астана • Сервисный центр & Мастерская Вячеслава
            </span>
            <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              12 лет опыта
            </span>
          </div>
        </div>

        {/* Main Title & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Профессиональный <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">ремонт и обслуживание</span> ноутбуков, ПК и моноблоков в Астане
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Диагностика, чистка от пыли, замена термопасты, ремонт, апгрейд и сборка ПК от мастера Вячеслава. В наличии проверенная техника из США/ЕС, Trade-In и рассрочка Kaspi 0-0-24.
          </p>
        </div>

        {/* Interactive Multi-Intent Tabs Switcher */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl backdrop-blur-md grid grid-cols-3 gap-1 shadow-2xl">
            
            <button
              onClick={() => setActiveTab('repair')}
              className={`flex items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'repair'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Ремонт & Сервис</span>
            </button>

            <button
              onClick={() => setActiveTab('buy')}
              className={`flex items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'buy'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>Техника из США/ЕС</span>
            </button>

            <button
              onClick={() => setActiveTab('tradein')}
              className={`flex items-center justify-center gap-2 py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'tradein'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>Trade-In (Обмен)</span>
            </button>

          </div>
        </div>

        {/* Dynamic Card depending on Active Tab */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-slate-700/60 shadow-2xl">
          
          {/* TAB 1: BUY LAPTOPS & PC */}
          {activeTab === 'buy' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  Прямые поставки • Идеальное состояние
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Ноутбуки из США и Европы в Астане
                </h2>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Оригинальные Lenovo ThinkPad, Dell Latitude/XPS, HP EliteBook. Каждый ноутбук проходит 18 тестов, замену термопасты и лазерную гравировку клавиатуры.
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Рассрочка <strong>Kaspi 0-0-24</strong> и Kaspi RED</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Гарантия от 6 до 12 месяцев от нашего сервиса</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Бесплатная настройка Windows, драйверов и программ</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#catalog"
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
                  >
                    <span>Смотреть каталог в наличии</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={getWhatsAppLink('Здравствуйте, Вячеслав! Помогите подобрать ноутбук под мои задачи и бюджет.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold px-5 py-3 rounded-xl border border-slate-700 transition-colors"
                  >
                    Подобрать в WhatsApp
                  </a>
                </div>
              </div>

              {/* Visual Box */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Спецпредложение недели</span>
                  <span className="bg-[#F14635] text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full">
                    0-0-24
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">ThinkPad T14 Gen 2 (USA)</h3>
                  <p className="text-xs text-slate-400 mt-1">Core i7 • 16GB RAM • 512GB SSD • FHD IPS</p>
                  
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="text-2xl font-extrabold text-cyan-400">245 000 ₸</span>
                    <span className="text-sm line-through text-slate-500">285 000 ₸</span>
                  </div>

                  <div className="mt-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
                    💡 В Kaspi Рассрочку: всего <strong>10 208 ₸ / мес.</strong> без переплат
                  </div>
                </div>

                <a
                  href="#catalog"
                  className="w-full text-center py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-semibold text-xs border border-cyan-500/20 transition-colors"
                >
                  Все 6 моделей в наличии →
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: REPAIR & MAINTENANCE */}
          {activeTab === 'repair' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-3">
                  <Zap className="w-3.5 h-3.5" />
                  Срочный ремонт • Честная диагностика
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Профессиональный ремонт ноутбуков и ПК
                </h2>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Чистка от пыли и замена термопасты за 1-2 часа, сложная пайка чипов, восстановление после залития, замена экранов и клавиатур.
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Бесплатная диагностика при выполнении ремонта</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Термопаста Honeywell PTM7950 / Arctic MX-6</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Выезд мастера на дом или курьерская доставка</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#services"
                    className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
                  >
                    <span>Прайс-лист на услуги</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={getWhatsAppLink('Здравствуйте, Вячеслав! Нужен ремонт/чистка устройства. Опишите проблему.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold px-5 py-3 rounded-xl border border-slate-700 transition-colors"
                  >
                    Узнать цену в WhatsApp
                  </a>
                </div>
              </div>

              {/* Express price table snippet */}
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Популярные услуги</span>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-xs text-slate-300 font-medium">Чистка + жидкая термопрокладка</span>
                    <span className="text-xs font-bold text-cyan-400">от 7 000 ₸</span>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-xs text-slate-300 font-medium">Установка Windows 11 + драйверы</span>
                    <span className="text-xs font-bold text-cyan-400">от 5 000 ₸</span>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-xs text-slate-300 font-medium">Апгрейд SSD + перенос файлов</span>
                    <span className="text-xs font-bold text-cyan-400">от 6 000 ₸</span>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-xs text-slate-300 font-medium">Кастомная сборка ПК под ключ</span>
                    <span className="text-xs font-bold text-cyan-400">от 18 000 ₸</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  ⚡ 80% неисправностей устраняем в день обращения
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: TRADE-IN */}
          {activeTab === 'tradein' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
                  <RefreshCw className="w-3.5 h-3.5" />
                  Честный Trade-In & Скупка
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Сдайте старый ноутбук — заберите мощный
                </h2>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Оценим ваше старое устройство (в рабочем состоянии или на запчасти) и вычтем его стоимость из любого ноутбука из США/Европы или сборки ПК.
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Быстрая оценка по фото в WhatsApp за 10 минут</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Остаток суммы можно оформить в Kaspi 0-0-24</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Безопасный перенос ваших личных данных со старого ПК</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#trade-in"
                    className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
                  >
                    <span>Рассчитать на калькуляторе</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={getWhatsAppLink('Здравствуйте, Вячеслав! Хочу оценить свой ноутбук по Trade-In. Модель: ')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold px-5 py-3 rounded-xl border border-slate-700 transition-colors"
                  >
                    Оценить в WhatsApp
                  </a>
                </div>
              </div>

              {/* Trade-in steps visual */}
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Как работает Trade-In:</span>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-bold text-xs flex items-center justify-center shrink-0">1</div>
                    <p className="text-xs text-slate-300">Присылаете фото и модель в WhatsApp</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-bold text-xs flex items-center justify-center shrink-0">2</div>
                    <p className="text-xs text-slate-300">Вячеслав называет точную сумму скидки</p>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-bold text-xs flex items-center justify-center shrink-0">3</div>
                    <p className="text-xs text-slate-300">Забираете новый настроенный ноутбук</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
                  <span className="text-xs font-bold text-amber-300">
                    🔥 Экономия до 60% от стоимости нового устройства
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* 4 Feature Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl mx-auto">
          
          <div className="glass-card p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Техника из США/ЕС</p>
              <p className="text-[11px] text-slate-400">Корпоративный отбор</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F14635]/15 text-[#FF6B5E] flex items-center justify-center shrink-0 border border-[#F14635]/30">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Kaspi 0-0-24 & Red</p>
              <p className="text-[11px] text-slate-400">Рассрочка без переплат</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Гарантия до 12 мес</p>
              <p className="text-[11px] text-slate-400">Акт и чек сервиса</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Доставка по Астане</p>
              <p className="text-[11px] text-slate-400">И отправка по всему РК</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
