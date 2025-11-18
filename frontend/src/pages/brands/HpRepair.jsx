import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Hero Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/hp_master.jpg"
              alt="Мастер ComplexPrint ремонтирует принтер HP"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Ремонт принтеров HP в Москве с выездом
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Быстрая диагностика и ремонт всех моделей HP LaserJet, Color LaserJet, PageWide, OfficeJet Pro. Гарантия 6 месяцев на все работы.
          </p>

          {/* Callout */}
          <section className="mb-10 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
            <h2 className="text-2xl font-semibold mb-3">Частые проблемы принтеров HP — быстрое решение</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>Ошибка 50.x</strong> — ремонт/замена термоузла (fuser unit), проверка термистора.</li>
              <li><strong>Замятия бумаги</strong> — замена роликов подачи/отделения, очистка тракта.</li>
              <li><strong>Дефекты печати (полосы, пятна)</strong> — замена барабана, лезвия очистки, уплотнителей картриджа.</li>
              <li><strong>Ошибки картриджа</strong> — перепрошивка чипа, замена контактов, диагностика совместимости.</li>
              <li><strong>Не включается / не печатает</strong> — ремонт блока питания, форматтера, диагностика прошивки.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Что мы делаем</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Бесплатная диагностика в день обращения</li>
              <li>Ремонт/замена термоузла (fuser) — работаем только с оригинальными запчастями</li>
              <li>Замена роликов подачи, отделения, переноса (pickup, separation, transfer rollers)</li>
              <li>Чистка лазерного блока, зеркал, оптики</li>
              <li>Ремонт блока питания (power supply), форматтера (formatter board)</li>
              <li>Настройка сетевых функций, обновление прошивки</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Нужна помощь сейчас?</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={goRepairForm} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
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
