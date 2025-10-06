import React from "react";
import { Helmet } from "react-helmet-async";

export default function HpRepair() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ремонт принтеров HP",
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
    brand: "HP",
    url: "https://complexprint.ru/remont-printerov-hp",
    description:
      "Профессиональный ремонт и обслуживание лазерных принтеров HP в Москве и МО. Диагностика, ремонт узла закрепления, замена роликов и оригинальные запчасти, гарантия 6 месяцев.",
  };

  return (
    <>
      <Helmet>
        <title>
          Ремонт принтеров HP в Москве с выездом | ComplexPrint — оригинальные запчасти, гарантия 6 месяцев
        </title>
        <meta
          name="description"
          content="Профессиональный ремонт и обслуживание лазерных принтеров HP в Москве и МО. Быстрая диагностика, выезд в день обращения, оригинальные детали, гарантия 6 месяцев."
        />
        <link rel="canonical" href="https://complexprint.ru/remont-printerov-hp" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Ремонт принтеров HP в Москве с выездом
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Обслуживаем HP LaserJet, Enterprise, Pro и МФУ. Диагностика в день обращения, оригинальные запчасти, гарантия 6 месяцев.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Типовые неисправности HP</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Замятие бумаги: ролики, разделители, направляющие</li>
              <li>Полосы/пятна, серый фон: картридж, узел закрепления</li>
              <li>Шумы, скрипы: шестерни, приводные узлы</li>
              <li>Коды ошибок 50.x (печка), 13.x (замятия), 59.x (привод)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Что мы делаем</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Быстрая диагностика и консультация</li>
              <li>Ремонт/замена узла закрепления (fuser), термоплёнки/валов</li>
              <li>Замена роликов, шестерён, датчиков, профилактика тракта</li>
              <li>Настройка и обслуживание по договору</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Нужна помощь сейчас?</h3>
            <p className="mb-4">Оставьте заявку — приедем в день обращения.</p>
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
