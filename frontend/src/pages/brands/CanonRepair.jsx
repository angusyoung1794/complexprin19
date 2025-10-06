import React from "react";
import { Helmet } from "react-helmet-async";

export default function CanonRepair() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ремонт принтеров Canon",
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
    brand: "Canon",
    url: "https://complexprint.ru/remont-printerov-canon",
    description:
      "Квалифицированный ремонт лазерных принтеров и МФУ Canon в Москве и МО. Диагностика, ремонт узла закрепления, замена роликов, оригинальные запчасти, гарантия 6 месяцев.",
  };

  return (
    <>
      <Helmet>
        <title>
          Ремонт принтеров Canon в Москве | ComplexPrint — диагностика в день обращения, гарантия 6 месяцев
        </title>
        <meta
          name="description"
          content="Квалифицированный ремонт лазерных принтеров и МФУ Canon в Москве и МО. Быстрая диагностика, оригинальные запчасти, гарантия 6 месяцев."
        />
        <link rel="canonical" href="https://complexprint.ru/remont-printerov-canon" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ремонт принтеров и МФУ Canon в Москве</h1>
          <p className="text-lg text-gray-700 mb-6">
            Специализация на i-SENSYS, imageRUNNER, imageCLASS. Оригинальные запчасти и гарантия 6 месяцев.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Типовые неисправности Canon</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Полосы/пятна, серый фон: картридж, оптика, узел закрепления</li>
              <li>Замятия и ошибки подачи бумаги</li>
              <li>Ошибки фиксации/прогрева</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Что мы делаем</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Ремонт печки, замена роликов и узлов подачи</li>
              <li>Настройка сетевых функций МФУ, скан в сеть/почту</li>
              <li>Диагностика в день обращения, договор для юрлиц</li>
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
