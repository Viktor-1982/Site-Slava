'use client';

import React from 'react';
import { CONTACT_INFO, getWhatsAppLink } from '@/data/content';
import { Phone, MapPin, Clock, MessageSquare, Send, ShieldCheck, Instagram } from 'lucide-react';

export const ContactsSection: React.FC = () => {
  return (
    <section id="contacts" className="py-20 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Контакты и Связь
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Приходите в гости или пишите онлайн
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Работаем в Астане без выходных. Прием по предварительной записи или выезд мастера на дом.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Phone & WhatsApp */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Телефон для связи / WhatsApp</p>
                  <a
                    href={`tel:${CONTACT_INFO.phoneClean}`}
                    className="text-base font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <a
                href={getWhatsAppLink('Здравствуйте, Вячеслав! Хочу проконсультироваться / договориться о встрече.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow-md shadow-emerald-500/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Написать в WhatsApp
              </a>
            </div>

            {/* Instagram Link */}
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-2xl border border-slate-800 flex items-center justify-between hover:border-pink-500/40 transition-all group cursor-pointer block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Наш Instagram</p>
                  <p className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">@pcservice_astana</p>
                </div>
              </div>
              <span className="text-xs text-slate-400 group-hover:text-white transition-colors">Перейти →</span>
            </a>

            {/* Address & Reception */}
            <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Локация</p>
                <p className="text-sm font-bold text-white mt-0.5">{CONTACT_INFO.address}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Режим работы</p>
                <p className="text-sm font-bold text-white mt-0.5">{CONTACT_INFO.workingHours}</p>
                <p className="text-[11px] text-emerald-400 mt-0.5">● Без выходных</p>
              </div>
            </div>

          </div>

          {/* Quick Contact Form / Message Box (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Остались вопросы или хотите получить консультацию?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Напишите, какая у вас задача (подбор ноутбука, ремонт или Trade-In), и мастер Вячеслав свяжется с вами в течение 5 минут.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Гарантия конфиденциальности и скорости</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Мы не передаем ваши контакты третьим лицам и не занимаемся спамом. Только оперативная помощь по делу.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink('Здравствуйте, Вячеслав! Прошу проконсультировать меня по вопросу: ')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold py-3.5 px-6 rounded-2xl text-sm shadow-xl shadow-emerald-500/25 transition-all hover:scale-102 text-center"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Задать вопрос Вячеславу в WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
