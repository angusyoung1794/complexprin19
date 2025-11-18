import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
      "Профессиональный ремонт и обслуживание принтеров Kyocera в Москве и МО. Диагностика, ремонт узла закрепления, замена роликов и оригинальные запчасти, гарантия 6 месяцев.",
  };

  return (
    <>
      <Helmet>
        <title>
          Ремонт принтеров Kyocera в Москве | ComplexPrint — выезд, оригинальные запчасти, гарантия 6 месяцев
        </title>
        <meta
          name="description"
          content="Профессиональный ремонт и обслуживание принтеров Kyocera в Москве и МО. Быстрая диагностика, выезд мастера, оригинальные детали, гарантия 6 месяцев."
        />
        <link rel="canonical" href="https://complexprint.ru/remont-printerov-kyocera" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Hero Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/Kyocera_master.jpg"
              alt="Мастер ComplexPrint ремонтирует принтер Kyocera"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Профессиональный ремонт принтеров и МФУ Kyocera в Москве
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Линейки ECOSYS, TASKalfa — диагностика, ремонт, настройка. Долговечная керамика Kyocera. Гарантия 6 месяцев.
          </p>

          {/* Callout */}
          <section className="mb-10 rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
            <h2 className="text-2xl font-semibold mb-3">Частые проблемы Kyocera — быстрое решение</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Ошибки C / J</strong> — диагностика термоузла, датчиков температуры, прогрева.</li>
              <li><strong>Замятия</strong> — обслуживание роликов, муфт, датчиков подачи/регистрации.</li>
              <li><strong>Полосы / дефекты печати</strong> — замена девелопера, магнитного вала, чистящего лезвия.</li>
              <li><strong>Низкая плотность / блеклая печать</strong> — регулировка лазера, замена девелопера.</li>
              <li><strong>Сетевые/скан функции</strong> — настройка Address Book, LDAP, SMB, FTP протоколов.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Что мы делаем</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Диагностика в день обращения</li>
              <li>Ремонт/замена термоузла (fuser unit), нагревательного элемента, термопленки</li>
              <li>Замена роликов подачи, отделения, переноса</li>
              <li>Обслуживание блока проявки (developer unit), замена магнитного вала</li>
              <li>Чистка барабана, замена чистящего лезвия</li>
              <li>Настройка сетевых функций Kyocera МФУ</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Нужна помощь сейчас?</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={goRepairForm} className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors duration-200">
                Заказать ремонт
              </button>
              <a href="tel:+74951031468" className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200 text-center">
                +7 495 103-14-68
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
