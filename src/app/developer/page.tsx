'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Mail, 
  Copy, 
  Check, 
  Code2, 
  Smartphone, 
  MessageSquare,
  Sparkles,
  ExternalLink,
  Laptop
} from 'lucide-react';

export default function DeveloperPage() {
  const [copied, setCopied] = useState(false);
  const email = "vles8878@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 selection:bg-cyan-500 selection:text-black">
      
      {/* Navigation Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080B11]/90 backdrop-blur-md border-b border-slate-800/80 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Вернуться на сайт сервиса</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-cyan-500/20">
              V
            </div>
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">
              Viktor<span className="text-cyan-400">WebStudio</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-14 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            <Code2 className="w-3.5 h-3.5" />
            Создание сайтов
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Разработка сайтов и лендингов для вашего бизнеса
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Создаем удобные, современные сайты-визитки, каталоги и одностраничники с адаптацией под мобильные телефоны и прямым переходом в WhatsApp.
          </p>

          {/* Direct Email Action Box */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <a
              href={`mailto:${email}?subject=Вопрос по разработке сайта`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-white font-bold py-3.5 px-6 rounded-2xl text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Написать на почту</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold py-3.5 px-5 rounded-2xl border border-slate-700 text-sm transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Почта скопирована!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>{email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 3 Simple Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Удобно с телефона</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Сайт корректно и красиво отображается на всех смартфонах, планшетах и компьютерах.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Связь в WhatsApp</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Кнопки быстрого звонка и перехода в чат WhatsApp для моментального получения заявок от клиентов.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Качественная верстка</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Быстрая работа страниц, аккуратный и чистый внешний вид без лишних перегруженных элементов.
            </p>
          </div>

        </div>

        {/* Example Showcase */}
        <div className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/80 mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase">Пример готовой работы:</span>
              <h2 className="text-xl font-bold text-white mt-1">PC Service Astana (Ремонт техники)</h2>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-xs font-bold transition-colors"
            >
              <span>Открыть сайт</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
            Полноценный сайт для сервисного центра: каталог услуг, калькулятор оценки техники, блок сравнения результатов чистки, форма связи и юридические разделы.
          </p>
        </div>

        {/* Simple CTA */}
        <div className="text-center p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Нужен сайт для ваших услуг или товаров?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Напишите на почту ваши пожелания или вопросы — отвечу и помогу с реализацией:
          </p>
          <div className="pt-1">
            <a
              href={`mailto:${email}?subject=Вопрос по сайту`}
              className="inline-flex items-center gap-2 font-bold text-cyan-400 hover:underline text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>{email}</span>
            </a>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} ViktorWebStudio</p>
      </footer>

    </div>
  );
}
