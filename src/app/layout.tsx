import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Компьютерный Сервис в Астане | Ремонт ноутбуков, ПК, моноблоков и Trade-In",
  description: "Профессиональный ремонт ноутбуков, компьютеров и моноблоков в Астане от мастера Вячеслава. Чистка от пыли, замена экранов, апгрейд, сборка ПК, техника из США/ЕС и рассрочка Kaspi 0-0-24.",
  keywords: "ремонт ноутбуков астана, ремонт компьютеров астана, чистка ноутбука астана, замена термопасты астана, купить ноутбук из сша астана, trade in ноутбуков астана, каспи 0 0 24 ноутбук",
  authors: [{ name: "Вячеслав (PC Service Astana)" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Компьютерный Сервис в Астане | Ремонт ноутбуков и ПК",
    description: "Честный ремонт, обслуживание и проверенная техника из США и Европы в Астане. Выезд на дом, гарантия, Kaspi 0-0-24.",
    locale: "ru_KZ",
    type: "website",
    siteName: "PC Service Astana",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ComputerRepairService",
  "name": "PC Service Astana - Сервисный центр Вячеслава",
  "image": "https://pcservice-astana.kz/vyacheslav.jpg",
  "telephone": "+77003789183",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Астана",
    "addressCountry": "KZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.1283",
    "longitude": "71.4305"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "10:00",
    "closes": "20:00"
  },
  "priceRange": "5000 - 500000 KZT",
  "paymentAccepted": "Cash, Credit Card, Kaspi QR, Kaspi 0-0-24"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#080B11" />
      </head>
      <body className="antialiased bg-[#080B11] text-slate-100 min-h-screen flex flex-col selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
