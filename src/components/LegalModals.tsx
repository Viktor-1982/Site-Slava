'use client';

import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Award, Cookie } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | 'warranty' | 'cookies' | null;

interface LegalModalsProps {
  activeDoc: LegalDocType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeDoc, onClose }) => {
  useEffect(() => {
    if (activeDoc) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeDoc]);

  if (!activeDoc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              {activeDoc === 'privacy' && <ShieldCheck className="w-5 h-5" />}
              {activeDoc === 'terms' && <FileText className="w-5 h-5" />}
              {activeDoc === 'warranty' && <Award className="w-5 h-5" />}
              {activeDoc === 'cookies' && <Cookie className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {activeDoc === 'privacy' && 'Политика конфиденциальности'}
                {activeDoc === 'terms' && 'Публичная оферта и правила сервиса'}
                {activeDoc === 'warranty' && 'Гарантийные обязательства и оплата'}
                {activeDoc === 'cookies' && 'Политика использования файлов Cookie'}
              </h3>
              <p className="text-xs text-slate-400">PC Service Astana • г. Астана</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          {/* PRIVACY POLICY */}
          {activeDoc === 'privacy' && (
            <>
              <p>
                Настоящая Политика конфиденциальности действует в отношении всей информации, которую сервисный центр <strong>PC Service Astana</strong> (ИП Мардер В. / Сервисный центр Вячеслава) может получить о пользователе во время использования веб-сайта в соответствии с Законом Республики Казахстан от 21 мая 2013 года № 94-V «О персональных данных и их защите».
              </p>

              <h4 className="text-base font-bold text-white pt-2">1. Сбор и использование персональных данных</h4>
              <p>
                Мы собираем только те данные, которые вы добровольно предоставляете при обращении через форму обратной связи, WhatsApp или по телефону (номер телефона, имя, модель устройства и описание неисправности).
              </p>
              <p>
                Данная информация используется исключительно для:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Связи с вами и первичной консультации;</li>
                <li>Согласования стоимости и сроков сервисных работ / Trade-In;</li>
                <li>Оформления актов приема-передачи и гарантийных талонов.</li>
              </ul>

              <h4 className="text-base font-bold text-white pt-2">2. Защита информации</h4>
              <p>
                Мы гарантируем, что ваши контактные данные не передаются третьим лицам, не продаются и не используются для спам-рассылок. Доступ к информации имеет исключительно сервисный инженер Вячеслав для выполнения заявки.
              </p>

              <h4 className="text-base font-bold text-white pt-2">3. Права пользователя</h4>
              <p>
                Вы имеете право в любой момент запросить удаление ваших контактных данных из базы обращений, написав нам в WhatsApp или позвонив по номеру +7 700 378 91 83.
              </p>
            </>
          )}

          {/* TERMS OF SERVICE / PUBLIC OFFER */}
          {activeDoc === 'terms' && (
            <>
              <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-300 mb-4">
                <strong>ПУБЛИЧНАЯ ОФЕРТА</strong><br />
                Положение о предоставлении доступа к витрине услуг, ремонту компьютерной техники, сопутствующим товарам и программе Trade-In (Договор присоединения).
              </div>

              <p>
                <strong>ИП «Мардер В.» / Сервисный центр «PC Service Astana»</strong>, в лице Мардера Вячеслава, действующего на основании регистрации в качестве индивидуального предпринимателя в соответствии с законодательством Республики Казахстан (далее — <strong>Компания / Сервис</strong>), публикует настоящую публичную оферту в адрес любого дееспособного физического или юридического лица (далее — <strong>Клиент</strong>).
              </p>

              <h4 className="text-base font-bold text-white pt-2">1. Термины и стороны</h4>
              <p>
                <strong>Сервис/Платформа «PC Service Astana»</strong> — информационная онлайн-витрина (сайт, мессенджеры WhatsApp/Telegram, телефонные каналы связи), предоставляющая возможность ознакомления со спектром услуг по ремонту, чистке, модернизации, сборке ПК, каталогу техники из США/Европы, программе Trade-In и прямой связи с сервисом.
              </p>
              <p>
                <strong>Клиент</strong> — лицо, акцептовавшее оферту путем отправки заявки, звонка или обращения через веб-интерфейс / WhatsApp.
              </p>
              <p>
                <strong>Заявка</strong> — обращение Клиента через сайт, телефон или WhatsApp для расчета стоимости ремонта, подбора техники или оценки Trade-In.
              </p>
              <p>
                <strong>Акцепт</strong> — полное и безоговорочное принятие условий оферты Клиентом, выраженное звонком, отправкой заявки, визитом в сервис или внесением оплаты/предоплаты.
              </p>

              <h4 className="text-base font-bold text-white pt-2">2. Предмет оферты</h4>
              <p>
                Компания предоставляет Клиенту доступ к информации об услугах по ремонту компьютеров, ноутбуков и моноблоков, предпродажной подготовке, чистке, установке программного обеспечения, а также витрине проверенной техники и условиям программы Trade-In.
              </p>

              <h4 className="text-base font-bold text-white pt-2">3. Порядок оказания услуг, диагностики и Trade-In</h4>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Диагностика:</strong> Первичная диагностика неисправностей при проведении последующего ремонта осуществляется бесплатно.</li>
                <li><strong>Согласование:</strong> Итоговая стоимость и перечень требуемых работ/запчастей утверждаются с Клиентом до начала выполнения работ.</li>
                <li><strong>Trade-In (Обмен):</strong> Онлайн-оценка устройства носит предварительный характер. Окончательная скидка фиксируется после физического осмотра и тестирования устройства инженером.</li>
                <li><strong>Хранение техники:</strong> Клиент обязуется забрать готовое устройство в течение 14 календарных дней с момента уведомления о завершении работ.</li>
              </ul>

              <h4 className="text-base font-bold text-white pt-2">4. Стоимость и порядок расчетов</h4>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Цены на сайте носят информационный характер («от ... ₸») и уточняются в зависимости от модели техники и степени повреждения.</li>
                <li>Оплата производится после проверки работоспособности техники: наличным расчетом, безналичным переводом, через Kaspi QR, а также в беспроцентную рассрочку <strong>Kaspi 0-0-24</strong> и <strong>Kaspi RED</strong>.</li>
              </ul>

              <h4 className="text-base font-bold text-white pt-2">5. Гарантии и ответственность</h4>
              <p>
                На все выполненные работы, замененные комплектующие и технику из США/ЕС предоставляется сервисная гарантия от 3 до 36 месяцев (в соответствии с гарантийным талоном/актом). Гарантия не распространяется на механические повреждения, следы повторного залития жидкостью или самостоятельного вскрытия пломб.
              </p>

              <h4 className="text-base font-bold text-white pt-2">6. Реквизиты</h4>
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                <p><strong>Республика Казахстан, г. Астана</strong></p>
                <p>Сервисный центр «PC Service Astana» / ИП «Мардер В.»</p>
                <p>Представитель: Мардер Вячеслав</p>
                <p>Контактный телефон / WhatsApp: +7 700 378 91 83</p>
                <p>Основание: Государственная регистрация в качестве индивидуального предпринимателя в Республике Казахстан</p>
              </div>
            </>
          )}

          {/* WARRANTY & PAYMENT */}
          {activeDoc === 'warranty' && (
            <>
              <h4 className="text-base font-bold text-white">1. Сроки гарантии</h4>
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span>Комплексная чистка и профилактика:</span>
                  <strong className="text-cyan-400">до 6 месяцев</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span>Новые SSD накопители и оперативная память:</span>
                  <strong className="text-cyan-400">до 36 месяцев</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span>Ремонт плат, замена разъемов, экранов:</span>
                  <strong className="text-cyan-400">от 3 до 12 месяцев</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
                  <span>Ноутбуки из США и Европы:</span>
                  <strong className="text-cyan-400">от 6 до 12 месяцев</strong>
                </div>
              </div>

              <h4 className="text-base font-bold text-white pt-3">2. Условия оплаты и Рассрочка Kaspi</h4>
              <p>
                Оплата услуг и техники осуществляется после проверки выполненных работ и работоспособности устройства:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Kaspi Рассрочка 0-0-24:</strong> Рассрочка без процентов и первого взноса на срок до 24 месяцев через официальное приложение Kaspi.kz.</li>
                <li><strong>Kaspi RED:</strong> Беспроцентная рассрочка на 3 месяца.</li>
                <li><strong>Kaspi QR и перевод:</strong> Моментальная оплата по QR-коду.</li>
                <li>Наличный расчет при получении в Астане.</li>
              </ul>
            </>
          )}

          {/* COOKIES POLICY */}
          {activeDoc === 'cookies' && (
            <>
              <h4 className="text-base font-bold text-white">Что такое файлы Cookie и как мы их используем?</h4>
              <p>
                Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении нашего сайта для обеспечения его корректной и быстрой работы.
              </p>
              <p>
                Мы используем только <strong>технические и функциональные cookie</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Для сохранения выбранных параметров в калькуляторе Trade-In;</li>
                <li>Для запоминания вашего согласия с уведомлением о cookie;</li>
                <li>Для быстрой загрузки каталога техники.</li>
              </ul>
              <p className="pt-2">
                Мы не используем cookie для отслеживания конфиденциальной информации или передачи рекламодателям. Вы можете в любой момент отключить cookie в настройках своего браузера.
              </p>
            </>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
          >
            Понятно / Закрыть
          </button>
        </div>

      </div>
    </div>
  );
};
