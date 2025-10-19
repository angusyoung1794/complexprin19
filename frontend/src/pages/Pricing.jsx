import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();
  const goRepairForm = () => navigate('/', { state: { scrollTo: 'repair-request' } });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Helmet>
        <title>Цены на ремонт принтеров в Москве | ComplexPrint — диагностика, ремонт, абонентка</title>
        <meta name="description" content="Прозрачные цены на ремонт принтеров и МФУ в Москве: диагностика от 3000₽ с выездом, ремонт от 3000₽, абонентское обслуживание от 1500₽/мес. Гарантия 6 месяцев." />
        <link rel="canonical" href="https://complexprint.ru/ceny" />
      </Helmet>

      <div className="container mx-auto px-4 pt-24 pb-16 max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Цены на ремонт принтеров</h1>
          <p className="text-gray-600 text-lg">Прозрачные тарифы: диагностика, разовый ремонт и абонентское обслуживание</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-2">Диагностика</h2>
            <p className="text-3xl font-extrabold mb-4">от 3000₽</p>
            <ul className="text-gray-700 space-y-2 mb-6 list-disc list-inside">
              <li>Включая выезд по Москве</li>
              <li>Первичная оценка по телефону</li>
              <li>Смета работ до начала ремонта</li>
            </ul>
            <button onClick={goRepairForm} className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold">Заказать</button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-pink-400">
            <h2 className="text-2xl font-bold mb-2">Разовый ремонт</h2>
            <p className="text-3xl font-extrabold mb-4">от 3000₽</p>
            <ul className="text-gray-700 space-y-2 mb-6 list-disc list-inside">
              <li>Оригинальные запчасти</li>
              <li>Ремонт в день обращения</li>
              <li>Гарантия 6 месяцев</li>
            </ul>
            <button onClick={goRepairForm} className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold">Вызвать мастера</button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-2">Абонентское обслуживание</h2>
            <p className="text-3xl font-extrabold mb-4">от 1500₽/мес</p>
            <ul className="text-gray-700 space-y-2 mb-6 list-disc list-inside">
              <li>Плановая профилактика</li>
              <li>Приоритетный выезд</li>
              <li>Оптимизация затрат</li>
            </ul>
            <button onClick={goRepairForm} className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold">Оставить заявку</button>
          </div>
        </div>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Важные условия</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Точная стоимость зависит от модели и характера неисправности</li>
            <li>Диагностика может засчитываться в стоимость ремонта</li>
            <li>Выезд за МКАД — по согласованию</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
