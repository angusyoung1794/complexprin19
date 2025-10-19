import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export default function KyoceraRepair() {
  const navigate = useNavigate();
  const goRepairForm = () => navigate('/', { state: { scrollTo: 'repair-request' } });

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
        <link rel="canonical" href="https://complexprint.ru/remонт-printerov-kyocera" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Профессиональный ремонт принтеров Kyocera в Москве</h1>
          <p className="text-lg text-gray-700 mb-6">
            ECOSYS, TASKalfa — ремонт, профилактика, настройка. Гарантия 6 месяцев.
          </p>

          {/* Callout block */}
          <section className="mb-10 rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50 to-purple-50 p-6">
            <h2 className="text-2xl font-semibold mb-3">Устраняем проблемы Kyocera TASKalfa</h2>
            <p className="text-gray-700 mb-4">
              Наш опыт и собственные технологии помогают быстро устранять типовые и сложные неисправности без лишних замен узлов.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>
                <strong>TASKalfa 3252 / 2553 / 3554</strong> — треск, ошибка <code>C2840</code>.
                <span className="block sm:inline"> Решаем проблему без замены ленты переноса.</span>
              </li>
              <li>
                <strong>TASKalfa 4002i / 5002i / 6002 / 4003i / 5003i / 6003i</strong> — ошибка <code>C7301</code>.
                <span className="block sm:inline"> Есть решение без замены блоков проявки и хоппера.</span>
              </li>
            </ul>
          </section>

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
              <button onClick={goRepairForm} className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold">Заказать ремонт</button>
              <a href="tel:+74951031468" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold">+7 495 103-14-68</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
