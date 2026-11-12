export interface Product {
  id: string;
  name: string;
  category: 'business' | 'gaming' | 'ultrabook' | 'workstation' | 'desktop';
  brand: string;
  origin: 'USA' | 'Europe' | 'Custom';
  condition: 'Идеальное (A+)' | 'Отличное (A)' | 'Новый' | 'Кастомная сборка';
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    display?: string;
    gpu: string;
    battery?: string;
  };
  price: number; // in KZT
  oldPrice?: number;
  inStock: boolean;
  isPopular?: boolean;
  image: string;
  description: string;
  badges: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'maintenance' | 'repair' | 'upgrade' | 'software' | 'network' | 'build';
  description: string;
  details: string[];
  priceFrom: number; // in KZT
  timeRequired: string;
  warranty: string;
  iconName: string;
  isHit?: boolean;
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  device: string;
  comment: string;
  rating: number;
  date: string;
  source: 'Kaspi' | '2GIS' | 'Google' | 'WhatsApp';
}
