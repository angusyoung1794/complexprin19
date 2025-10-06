import React from "react";
import { Helmet } from "react-helmet-async";

export default function KyoceraRepair() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ремонт принтеров Kyocera",
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
    brand: "Kyocera",
    url: "https://complexprint.ru/remont-printerov-kyocera",
    description:
      "Ремонт и обслуживание принтеров Kyocera в Москве и МО: замена узлов, профилактика, устранение ошибок, оригинальные детали. Выезд мастера, гарантия 6 месяцев.",
  };

  return (
    <>
      <Helmet>
        <title>
          Ремонт принтеров Kyocera в Москве | ComplexPrint — экономично и надёжно, гарантия 6 месяцев
        </title>
        <meta
          name="description"
          content="Ремонт и обслуживание принтеров Kyocera в Москве и МО: замена узлов, профилактика, устранение ошибок, оригинальные детали. Выезд мастера, гарантия 6 месяцев."
        />
        <link rel="canonical" href="https://complexprint.ru/remont-printerov-kyocera" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Профессиональный ремонт принтеров Kyocera в Москве</h1>
          <p className="text-lg text-gray-700 mb-6">
            ECOSYS, TASKalfa — ремонт, профилактика, настройка. Гарантия 6 месяцев.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Типовые неисправности Kyocera</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Подача/замятия: ролики подачи/вывода, направляющие</li>
              <li>Артефакты печати: девелопер, фотобарабан, печка</li>
              <li>Коды ошибок: узел закрепления, датчики</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Наши услуги</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Комплексная диагностика</li>
              <li>Замена расходных узлов/ремонт механики</li>
              <li>Профилактика, прошивки при необходимости</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Нужна помощь сейчас?</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold">
                Заказать ремонт
              </a>
              <a href="tel:+74951031468" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold">
                +7 495 103-14-68
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
