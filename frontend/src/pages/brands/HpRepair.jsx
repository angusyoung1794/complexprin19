import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export default function HpRepair() {
  const navigate = useNavigate();
  const goRepairForm = () => navigate('/', { state: { scrollTo: 'repair-request' } });

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

          {/* Callout */}
          <section className="mb-10 rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50 to-purple-50 p-6">
            <h2 className="text-2xl font-semibold mb-3">Частые проблемы HP — быстрое решение</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Ошибка 50.x (Fuser)</strong> — ремонт/замена узла закрепления, без лишних замен модулей.</li>
              <li><strong>Ошибка 13.x (Paper Jam)</strong> — восстановление тракта, замена роликов/датчиков подачи.</li>
              <li><strong>Ошибка 59.x (Привод)</strong> — диагностика/ремонт узла привода, корректировка шестерён.</li>
              <li><strong>Серый фон, полосы</strong> — проверка картриджа, чистка/ремонт печки, настройка.</li>
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
              <button onClick={goRepairForm} className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold">
                Заказать ремонт
              </button>
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
