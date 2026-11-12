import { Product, ServiceItem, Review } from '@/types';

export const CONTACT_INFO = {
  phone: "+7 700 378 91 83",
  phoneClean: "77003789183",
  whatsappUrl: "https://wa.me/77003789183",
  telegramUrl: "https://t.me/pc_service_astana",
  instagramUrl: "https://instagram.com",
  address: "г. Астана (Прием по предварительной записи • Выезд мастера на дом)",
  workingHours: "Пн-Вс: 10:00 — 20:00",
  masterName: "Вячеслав",
  masterRole: "Сервисный инженер по ремонту и подбору техники",
  experienceYears: 12,
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${CONTACT_INFO.phoneClean}?text=${encodeURIComponent(message)}`;
};

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'thinkpad-t14-gen2',
    name: 'Lenovo ThinkPad T14 Gen 2 (USA)',
    category: 'business',
    brand: 'Lenovo',
    origin: 'USA',
    condition: 'Идеальное (A+)',
    specs: {
      cpu: 'Intel Core i7-1165G7 (до 4.7 GHz)',
      ram: '16 GB DDR4 (расширяется до 48GB)',
      storage: '512 GB NVMe SSD M.2',
      display: '14" FHD IPS Матовый, 400 nits',
      gpu: 'Intel Iris Xe Graphics',
      battery: 'Износ 4% (до 9 часов работы)'
    },
    price: 245000,
    oldPrice: 285000,
    inStock: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80',
    description: 'Легендарная надежность по военному стандарту MIL-STD-810H. Идеален для программистов, аналитиков и бизнеса. Привезен из США, полностью обслужен (термопаста заменена на фазовый переход Honeywell).',
    badges: ['Хит продаж', 'Из США', 'MIL-STD-810H', 'Kaspi 0-0-24']
  },
  {
    id: 'dell-latitude-5420',
    name: 'Dell Latitude 5420 Enterprise (EU)',
    category: 'business',
    brand: 'Dell',
    origin: 'Europe',
    condition: 'Отличное (A)',
    specs: {
      cpu: 'Intel Core i5-1145G7 vPro',
      ram: '16 GB DDR4 Dual Channel',
      storage: '512 GB PCIe 4.0 SSD',
      display: '14" Full HD IPS TouchScreen',
      gpu: 'Intel Iris Xe Graphics',
      battery: 'Износ 6% (до 8 часов работы)'
    },
    price: 195000,
    oldPrice: 230000,
    inStock: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80',
    description: 'Корпоративный ультрабук из европейского офиса. Тихий, легкий (1.37 кг), металлический каркас и сенсорный яркий экран. Гравировка русских/казахских букв включена.',
    badges: ['Европейское качество', 'Сенсорный экран', 'Гарантия 6 мес']
  },
  {
    id: 'hp-elitebook-845-g8',
    name: 'HP EliteBook 845 G8 Ryzen 7 (USA)',
    category: 'ultrabook',
    brand: 'HP',
    origin: 'USA',
    condition: 'Идеальное (A+)',
    specs: {
      cpu: 'AMD Ryzen 7 PRO 5850U (8 ядер / 16 потоков)',
      ram: '32 GB DDR4 3200MHz',
      storage: '1 TB Samsung NVMe SSD',
      display: '14" FHD IPS SureView 1000 nits',
      gpu: 'AMD Radeon RX Vega 8',
      battery: 'Износ 2% (до 11 часов)'
    },
    price: 320000,
    oldPrice: 370000,
    inStock: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80',
    description: 'Мощнейший алюминиевый флагман с 8-ядерным процессором Ryzen 7 Pro и 32 GB RAM. Справляется с тяжелыми вычислениями, Docker, базами данных и монтажом видео.',
    badges: ['Топ производительность', '32GB RAM', 'Алюминий', 'Kaspi 0-0-24']
  },
  {
    id: 'asus-rog-zephyrus-g14',
    name: 'ASUS ROG Zephyrus G14 RTX 3060',
    category: 'gaming',
    brand: 'ASUS',
    origin: 'USA',
    condition: 'Идеальное (A+)',
    specs: {
      cpu: 'AMD Ryzen 9 5900HS (3.3 - 4.6 GHz)',
      ram: '24 GB DDR4',
      storage: '1 TB NVMe Gen4 SSD',
      display: '14" 2K QHD (2560x1440) 120Hz 100% DCI-P3',
      gpu: 'NVIDIA GeForce RTX 3060 6GB GDDR6',
      battery: 'Износ 8% (до 7 часов)'
    },
    price: 460000,
    oldPrice: 520000,
    inStock: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80',
    description: 'Компактный игровой зверь весом всего 1.6 кг с потрясающим 2K экраном для дизайнеров и геймеров. Полная термопрофилактика с жидким металлом и Arctic MX-6.',
    badges: ['RTX 3060', 'Ryzen 9', '2K 120Hz Экран', 'Для 3D и игр']
  },
  {
    id: 'thinkpad-x1-carbon-gen9',
    name: 'Lenovo ThinkPad X1 Carbon Gen 9',
    category: 'ultrabook',
    brand: 'Lenovo',
    origin: 'USA',
    condition: 'Идеальное (A+)',
    specs: {
      cpu: 'Intel Core i7-1185G7 vPro',
      ram: '16 GB LPDDR4x 4266MHz',
      storage: '1 TB PCIe NVMe SSD',
      display: '14" 16:10 WUXGA IPS Low Power (400 nits)',
      gpu: 'Intel Iris Xe Graphics',
      battery: 'Износ 5% (до 12 часов)'
    },
    price: 365000,
    oldPrice: 430000,
    inStock: true,
    isPopular: false,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80',
    description: 'Ультралегкий премиум-флагман из углеродного волокна (весит всего 1.13 кг). Пропорции экрана 16:10 вмещают больше информации. Состояние нового.',
    badges: ['Углеволокно 1.1 кг', 'Экран 16:10', 'Kaspi 0-0-24']
  },
  {
    id: 'custom-pc-cyber-beast',
    name: 'Кастомная сборка PC «Cyber Beast» RTX 4070',
    category: 'desktop',
    brand: 'Custom PC Service',
    origin: 'Custom',
    condition: 'Новый',
    specs: {
      cpu: 'Intel Core i5-13600KF (14 ядер / 20 потоков)',
      ram: '32 GB DDR5 6000MHz Kingston Fury RGB',
      storage: '1 TB Kingston KC3000 PCIe 4.0 (7000 MB/s)',
      display: 'Системный блок в стеклянном корпусе',
      gpu: 'NVIDIA GeForce RTX 4070 Super 12GB',
      battery: 'БП 750W 80+ Gold Deepcool'
    },
    price: 780000,
    oldPrice: 860000,
    inStock: true,
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop&q=80',
    description: 'Индивидуальная ручная сборка от Вячеслава: идеальный скрытый кабель-менеджмент, бесшумное водяное охлаждение 360mm, настроенная кривая вентиляторов и андервольтинг.',
    badges: ['Сборка от Вячеслава', 'RTX 4070 Super', 'DDR5 6000MHz', 'Гарантия 12 мес']
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'os-setup',
    title: '1. Установка Windows и ПО',
    category: 'software',
    description: 'Профессиональная установка и настройка операционной системы Windows 10/11 с официальными драйверами и пакетом нужных офисных программ.',
    details: [
      'Переустановка ОС (Win 10/11)',
      'Установка всех необходимых драйверов',
      'Офисные программы и базовый софт',
      'Сохранение всех ваших личных файлов'
    ],
    priceFrom: 5000,
    timeRequired: '40–60 минут',
    warranty: 'Гарантия стабильности',
    iconName: 'Laptop',
    isHit: true
  },
  {
    id: 'clean-thermal',
    title: '2. Чистка и Профилактика',
    category: 'maintenance',
    description: 'Полная профилактика системы охлаждения ноутбуков, компьютеров и моноблоков. Устранение перегрева, шума и зависаний.',
    details: [
      'Чистка от пыли радиаторов и кулеров',
      'Замена термопасты и термоинтерфейсов',
      'Устранение перегрева и троттлинга',
      'Тестирование температур под нагрузкой'
    ],
    priceFrom: 7000,
    timeRequired: '1–2 часа',
    warranty: '6 месяцев',
    iconName: 'Fan',
    isHit: true
  },
  {
    id: 'pc-laptop-repair',
    title: '3. Ремонт Ноутбуков, ПК и Моноблоков',
    category: 'repair',
    description: 'Модульный и компонентный ремонт ноутбуков, компьютеров и моноблоков любой сложности с гарантией на выполненные работы.',
    details: [
      'Замена матриц (экранов) и клавиатур',
      'Ремонт цепей питания и разъемов',
      'Восстановление после залития жидкостью',
      'Замена корпусных деталей и петель'
    ],
    priceFrom: 9000,
    timeRequired: 'от 1 часа',
    warranty: 'от 3 до 12 месяцев',
    iconName: 'Cpu',
    isHit: true
  },
  {
    id: 'upgrade-ssd-ram',
    title: '4. Апгрейд и Модернизация',
    category: 'upgrade',
    description: 'Ускорение работы медленных ноутбуков и ПК в 5–10 раз за счет установки скоростных SSD накопителей и увеличения оперативной памяти.',
    details: [
      'Замена медленного HDD на быстрый SSD',
      'Увеличение оперативной памяти (ОЗУ)',
      'Ускорение работы системы и программ',
      'Перенос всех данных и программ без потерь'
    ],
    priceFrom: 6000,
    timeRequired: '1–2 часа',
    warranty: 'до 3 лет на SSD',
    iconName: 'Zap',
    isHit: false
  },
  {
    id: 'custom-pc-build',
    title: '5. Сборка ПК',
    category: 'build',
    description: 'Индивидуальная сборка игровых, рабочих и офисных компьютеров под ваш бюджет и задачи с кабель-менеджментом.',
    details: [
      'Индивидуальная сборка под ваш бюджет',
      'Профессиональный подбор комплектующих',
      'Эстетичный скрытый кабель-менеджмент',
      'Стресс-тестирование и настройка системы'
    ],
    priceFrom: 18000,
    timeRequired: '1–2 дня',
    warranty: '12 месяцев',
    iconName: 'Wrench',
    isHit: false
  },
  {
    id: 'network-and-it',
    title: '6. Сетевые Услуги и IT',
    category: 'network',
    description: 'Настройка домашнего и офисного сетевого оборудования, Wi-Fi интернета, локальных сетей и удаленная помощь.',
    details: [
      'Настройка Wi-Fi роутеров и Mesh-систем',
      'Монтаж и настройка локальных сетей',
      'Обслуживание офисов и IT-аутсорсинг',
      'Удаленная помощь и поддержка'
    ],
    priceFrom: 8000,
    timeRequired: 'от 1 часа',
    warranty: 'Гарантия качества',
    iconName: 'Wifi',
    isHit: false
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Айдос Н.',
    role: 'Full-stack разработчик',
    device: 'Lenovo ThinkPad T14 Gen 2 (USA)',
    comment: 'Купил у Вячеслава ThinkPad из США. Состояние как из магазина, батарея держит рабочий день! Сразу в сервисе накатили лицензионную винду и сделали лазерную гравировку. Рассрочку через Kaspi одобрили за 2 минуты. Очень доволен, рекомендую!',
    rating: 5,
    date: '18 февраля 2026',
    source: 'Kaspi'
  },
  {
    id: '2',
    author: 'Мадина С.',
    role: 'Дизайнер интерьеров',
    device: 'Ремонт MacBook Pro + Чистка',
    comment: 'Залила клавиатуру кофе, в других сервисах говорили менять всю плату за 250 тысяч. Вячеслав восстановил материнку по компонентам, отмыл в ультразвуке и почистил от пыли. Вышло в 4 раза дешевле, все летает! Огромное спасибо за честность.',
    rating: 5,
    date: '10 февраля 2026',
    source: '2GIS'
  },
  {
    id: '3',
    author: 'Ерлан Каримов',
    role: 'Предприниматель',
    device: 'Trade-In старого HP на EliteBook G8',
    comment: 'Сдал старый ноутбук 2018 года по Трейд-ин, оценили в WhatsApp за 10 минут по фото. Доплатил через Kaspi Red и забрал шикарный HP EliteBook на Ryzen 7. Профессиональный подход!',
    rating: 5,
    date: '2 февраля 2026',
    source: 'Google'
  }
];

export const TRADE_IN_BRANDS = [
  'Lenovo',
  'Dell',
  'HP',
  'ASUS',
  'Acer',
  'Apple (MacBook)',
  'MSI',
  'Huawei / Honor',
  'Другой бренд'
];
