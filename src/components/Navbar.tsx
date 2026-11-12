'use client';

import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, getWhatsAppLink } from '@/data/content';
import { Laptop, Phone, MessageSquare, Wrench, RefreshCw, ShieldCheck, Menu, X, Instagram } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги и Ремонт', href: '#services', icon: Wrench },
    { name: 'Каталог техники', href: '#catalog', icon: Laptop },
    { name: 'Trade-In', href: '#trade-in', icon: RefreshCw },
    { name: 'О мастере', href: '#about', icon: ShieldCheck },
    { name: 'Контакты', href: '#contacts', icon: Phone },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080B11]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Laptop className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
                  PC SERVICE <span className="text-cyan-400">ASTANA</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Техника из США/ЕС • Ремонт • Trade-In</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-sm">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-800/70 rounded-full transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Kaspi badge + Instagram + WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Kaspi Badge */}
            <div className="flex items-center gap-1.5 bg-[#F14635]/15 border border-[#F14635]/40 px-3 py-1.5 rounded-full text-xs font-bold text-[#FF6B5E]">
              <span className="w-2 h-2 rounded-full bg-[#F14635] animate-ping" />
              Kaspi 0-0-24
            </div>

            {/* Instagram Button in Header */}
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-pink-400 hover:text-pink-300 border border-slate-700/80 transition-all hover:scale-105 active:scale-95 flex items-center justify-center shadow-md"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Direct WhatsApp Button */}
            <a
              href={getWhatsAppLink('Здравствуйте, Вячеслав! Хочу проконсультироваться по поводу ноутбука / ремонта.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Вячеслав</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/80 border border-slate-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs text-slate-400">г. Астана • 10:00 - 20:00</span>
              <span className="text-xs font-bold text-[#FF6B5E] bg-[#F14635]/20 px-2 py-0.5 rounded-full">
                Kaspi Рассрочка 0-0-24
              </span>
            </div>
            
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={getWhatsAppLink('Здравствуйте, Вячеслав! Пишу с сайта, нужна консультация.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-sm shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                Написать в WhatsApp
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-2 rounded-xl text-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                Позвонить {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
