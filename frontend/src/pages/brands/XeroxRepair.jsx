import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export default function XeroxRepair() {
  const navigate = useNavigate();
  const goRepairForm = () => navigate('/', { state: { scrollTo: 'repair-request' } });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ремонт принтеров Xerox",
    provider: {
      "@type": "LocalBusiness",
      name: "Комплекс Принт",
      telephone: "+7-495-103-14-68",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Москва",
        addressCountry: "RU",
        streetAddress: "Абрамцевская 11 к1 стр3",
      },
    },
    areaServed: ["Москва", "Московская область"],
    brand: "Xerox",
    url: "https://complexprint.ru/remont-printerov-xerox",
    description:
      "Профессиональный ремонт и обслуживание принтеров и МФУ Xerox в Москве и МО. Диагностика, ремонт узла закрепления, оригинальные запчасти, гарантия 6 месяцев.",
  };

  return (
    <>
      <Helmet>
        <title>
          Ремонт принтеров Xerox в Москве | ComplexPrint — быстрый выезд и гарантия 6 месяцев
        </title>
        <meta
          name="description"
          content="Ремонт принтеров и МФУ Xerox в Москве и МО: диагностика, ремонт, настройка, оригинальные детали. Выезд мастера, гарантия 6 месяцев."
        />
        <link rel="canonical" href="https://complexprint.ru/remont-printerov-xerox" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ремонт принтеров и МФУ Xerox в Москве</h1>
          <p className="text-lg text-gray-700 mb-6">Линейки VersaLink, WorkCentre, Phaser — диагностика, ремонт, профилактика. Гарантия 6 месяцев.</p>

          {/* Callout */}
          <section className="mb-10 rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50 to-purple-50 p-6">
            <h2 className="text-2xl font-semibold mb-3">Частые проблемы Xerox — быстрое решение</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Замятия</strong> — восстановление тракта, замена роликов/датчиков.</li>
              <li><strong>Дефекты печати</strong> — диагностика картриджей/девелопера/печки.</li>
              <li><strong>Ошибки контроллера/сканера</strong> — проверка датчиков, калибровки и прошивок.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Наши услуги</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Диагностика в день обращения</li>
              <li>Ремонт/замена узла закрепления, термоплёнки/валов</li>
              <li>Замена роликов, шестерён, датчиков</li>
              <li>Настройка сетевых функций МФУ</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Нужна помощь сейчас?</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={goRepairForm} className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold">Заказать ремонт</button>
              <a href="tel:+74951031468" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold">+7 495 103-14-68</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
