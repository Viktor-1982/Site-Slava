'use client';

import React from 'react';
import { REVIEWS } from '@/data/content';
import { Star, MessageSquare, Quote, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#080B11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Реальные отзывы клиентов
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Что говорят клиенты в Астане
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Честные отзывы из 2GIS, Kaspi и мессенджеров от реальных владельцев техники.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between border border-slate-800 bg-slate-900/60 relative group"
            >
              <div>
                {/* Rating & Source badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    review.source === 'Kaspi' 
                      ? 'bg-[#F14635]/20 text-[#FF6B5E] border border-[#F14635]/30' 
                      : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                  }`}>
                    Отзыв {review.source}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-4">
                  "{review.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{review.author}</h4>
                    {review.role && <p className="text-[11px] text-slate-400">{review.role}</p>}
                  </div>
                  <span className="text-[10px] text-slate-500">{review.date}</span>
                </div>
                <div className="mt-2 text-[11px] text-cyan-400 font-medium">
                  Устройство: {review.device}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
