import React from "react";
import { Helmet } from "react-helmet-async";

export default function KonicaMinoltaRepair() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ремонт принтеров Konica Minolta",
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
    brand: "Konica Minolta",
    url: "https://complexprint.ru/remont-printerov-konica-minolta",
    description:
      "Ремонт и обслуживание принтеров и МФУ Konica Minolta в Москве и МО. Диагностика, ремонт узла закрепления, настройка сетевых функций, оригинальные запчасти, гарантия 6 месяцев.",
  };

  return (
    <>
      <Helmet>
        <title>
          Ремонт принтеров Konica Minolta в Москве | ComplexPrint — профессионально и с гарантией 6 месяцев
        </title>
        <meta
          name="description"
          content="Ремонт и обслуживание принтеров и МФУ Konica Minolta в Москве и МО. Быстрая диагностика, выезд мастера, оригинальные детали, гарантия 6 месяцев."
        />
        <link rel="canonical" href="https://complexprint.ru/remont-printerov-konica-minolta" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ремонт принтеров и МФУ Konica Minolta в Москве</h1>
          <p className="text-lg text-gray-700 mb-6">Линейки bizhub и Accurio — диагностика, ремонт, профилактика и настройка. Гарантия 6 месяцев.</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Типовые неисправности Konica Minolta</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Замятия бумаги: ролики подачи/вывода, направляющие</li>
              <li>Дефекты печати: девелопер, фотобарабан, печка</li>
              <li>Ошибки контроллера, сетевые/скан-функции</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Что мы делаем</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Диагностика в день обращения</li>
              <li>Ремонт/замена узла закрепления, термоплёнки/валов</li>
              <li>Замена роликов, шестерён, датчиков</li>
              <li>Настройка SMB/SMTP и сетевых функций МФУ</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Нужна помощь сейчас?</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold">Заказать ремонт</a>
              <a href="tel:+74951031468" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold">+7 495 103-14-68</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
