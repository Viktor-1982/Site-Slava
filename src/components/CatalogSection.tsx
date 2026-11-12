'use client';

import React, { useState } from 'react';
import { FEATURED_PRODUCTS, getWhatsAppLink } from '@/data/content';
import { Product } from '@/types';
import { 
  Laptop, 
  Cpu, 
  HardDrive, 
  Monitor, 
  Battery, 
  ShieldCheck, 
  MessageSquare, 
  Flame, 
  Check, 
  SlidersHorizontal 
} from 'lucide-react';

export const CatalogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'Все модели' },
    { id: 'business', label: 'Бизнес (ThinkPad / Dell)' },
    { id: 'ultrabook', label: 'Ультрабуки' },
    { id: 'gaming', label: 'Игровые & 3D' },
    { id: 'desktop', label: 'ПК и Сборки' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? FEATURED_PRODUCTS 
    : FEATURED_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className="py-20 bg-[#080B11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
              <Laptop className="w-3.5 h-3.5" />
              Каталог техники из США и Европы
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ноутбуки и компьютеры в наличии в Астане
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl">
              Только проверенные корпоративные линейки. Полностью обслужены, протестированы под нагрузкой и готовы к работе.
            </p>
          </div>

          {/* Quick Info & Custom Order */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink('Здравствуйте, Вячеслав! Ищу ноутбук с особыми характеристиками под заказ. Поможете найти?')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-4 py-2.5 rounded-xl transition-all"
            >
              📦 Привезти модель под заказ из США/ЕС →
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            // Kaspi 24 months instalment monthly amount
            const monthlyPayment = Math.round(product.price / 24);

            return (
              <div 
                key={product.id}
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-slate-800/80 bg-slate-900/60 hover:border-cyan-500/40 group"
              >
                {/* Image & Badges */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[85%]">
                    {product.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full backdrop-blur-md ${
                          badge.includes('Kaspi')
                            ? 'bg-[#F14635] text-white'
                            : badge.includes('США') || badge.includes('Европ')
                            ? 'bg-blue-600/90 text-white'
                            : 'bg-cyan-500/80 text-black'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Origin tag */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[11px] font-bold text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-700 backdrop-blur-md">
                      Состояние: <strong className="text-emerald-400">{product.condition}</strong>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1.5 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] text-slate-300">
                      <div className="flex items-center gap-1.5 bg-slate-950/70 p-2 rounded-xl border border-slate-800/80">
                        <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{product.specs.cpu}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-950/70 p-2 rounded-xl border border-slate-800/80">
                        <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{product.specs.ram}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-950/70 p-2 rounded-xl border border-slate-800/80">
                        <HardDrive className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{product.specs.storage}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-950/70 p-2 rounded-xl border border-slate-800/80">
                        <Monitor className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{product.specs.display || product.specs.gpu}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Kaspi Box */}
                  <div className="pt-3 border-t border-slate-800 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-extrabold text-white">
                            {product.price.toLocaleString('ru-RU')} ₸
                          </span>
                          {product.oldPrice && (
                            <span className="text-xs line-through text-slate-500">
                              {product.oldPrice.toLocaleString('ru-RU')} ₸
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        В наличии
                      </span>
                    </div>

                    {/* Kaspi 0-0-24 Pill */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#F14635]/10 border border-[#F14635]/25 text-xs">
                      <span className="font-bold text-[#FF7568]">Kaspi 0-0-24:</span>
                      <span className="font-extrabold text-white">
                        {monthlyPayment.toLocaleString('ru-RU')} ₸ / мес.
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <a
                        href={getWhatsAppLink(`Здравствуйте, Вячеслав! Хочу забронировать / посмотреть модель: ${product.name} за ${product.price.toLocaleString('ru-RU')} ₸. Она в наличии?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs shadow-lg shadow-emerald-500/20 transition-all text-center"
                      >
                        <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                        <span>Купить в 1 клик</span>
                      </a>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                      >
                        Характеристики
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {selectedProduct.brand} • {selectedProduct.origin}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProduct.description}
            </p>

            <div className="space-y-2 bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs sm:text-sm">
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Процессор:</span>
                <span className="text-white font-semibold">{selectedProduct.specs.cpu}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Оперативная память:</span>
                <span className="text-white font-semibold">{selectedProduct.specs.ram}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Накопитель SSD:</span>
                <span className="text-white font-semibold">{selectedProduct.specs.storage}</span>
              </div>
              {selectedProduct.specs.display && (
                <div className="flex justify-between py-1 border-b border-slate-800/80">
                  <span className="text-slate-400">Экран:</span>
                  <span className="text-white font-semibold">{selectedProduct.specs.display}</span>
                </div>
              )}
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="text-slate-400">Видеокарта:</span>
                <span className="text-white font-semibold">{selectedProduct.specs.gpu}</span>
              </div>
              {selectedProduct.specs.battery && (
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Батарея:</span>
                  <span className="text-emerald-400 font-semibold">{selectedProduct.specs.battery}</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-2xl font-extrabold text-white">
                  {selectedProduct.price.toLocaleString('ru-RU')} ₸
                </span>
                <span className="block text-xs text-[#FF6B5E]">
                  Kaspi 0-0-24: от {Math.round(selectedProduct.price / 24).toLocaleString('ru-RU')} ₸/мес
                </span>
              </div>

              <a
                href={getWhatsAppLink(`Здравствуйте, Вячеслав! Хочу купить / забронировать модель: ${selectedProduct.name} за ${selectedProduct.price.toLocaleString('ru-RU')} ₸.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-sm"
              >
                Купить через WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
