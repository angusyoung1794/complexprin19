import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone } from "lucide-react";

export default function AboutUs() {
  const scrollToRepairForm = () => {
    window.location.href = '/#repair-request';
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "О нас - Комплекс Принт",
    description: "Complexprint.ru — лидер по ремонту и обслуживанию печатного оборудования в России",
    url: "https://complexprint.ru/about-us",
    publisher: {
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
  };

  return (
    <>
      <Helmet>
        <title>О нас - Сервисное обслуживание печатной техники | ComplexPrint</title>
        <meta
          name="description"
          content="Complexprint.ru — лидер по ремонту и обслуживанию печатного оборудования в России. Более 15 лет опыта, бесплатный выезд мастера, гарантия на все работы."
        />
        <link rel="canonical" href="https://complexprint.ru/about-us" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Hero Image Section */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/images/HP_A3_master.jpg"
              alt="Профессиональный мастер ComplexPrint за работой"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Сервисное обслуживание печатной техники: 
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block mt-2">
                ваш надежный партнер в Москве
              </span>
            </h1>
          </div>

          {/* Intro Section */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complexprint.ru — лидер по ремонту и обслуживанию печатного оборудования в России
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ваша печатная техника — это сердце офиса. Ее сбой парализует работу, а простой стоит денег. 
              Мы в Complexprint.ru понимаем это как никто другой. Вот уже более <strong>15 лет</strong> мы обеспечиваем 
              бесперебойную работу печатного парка для крупнейших компаний России, становясь их надежным 
              технологическим партнером.
            </p>
          </section>

          {/* Why Choose Us */}
          <section className="mb-12 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-pink-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Почему 9 из 10 клиентов выбирают нас повторно?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Мы не просто «чиним принтеры». Мы предлагаем комплексное сервисное обслуживание, которое 
              предупреждает проблемы, а не просто их устраняет. Наша цель — чтобы вы забыли о том, что такое 
              неработающая техника.
            </p>
          </section>

          {/* Our Advantages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Наши преимущества, которые работают на вас
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Advantage 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🚗</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Бесплатный выезд мастера по Москве и области
                    </h3>
                    <p className="text-gray-700">
                      Не тратьте время и деньги на доставку оборудования. Наш специалист приедет к вам в офис 
                      в удобное время и выполнит ремонт на месте.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantage 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🔧</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Только оригинальные запчасти
                    </h3>
                    <p className="text-gray-700">
                      Мы гарантируем долговечность ремонта, потому что используем исключительно сертифицированные 
                      комплектующие. Ваше оборудование проработает дольше и будет печатать безупречно.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantage 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🛡️</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Гарантия на все виды работ — 100% ответственность
                    </h3>
                    <p className="text-gray-700">
                      Мы настолько уверены в качестве нашего сервиса, что даем официальную гарантию на все 
                      выполненные работы и установленные детали. Все гарантийные случаи решаем бесплатно и оперативно.
                    </p>
                  </div>
                </div>
              </div>

              {/* Advantage 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">💎</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Прозрачная цена — никаких сюрпризов
                    </h3>
                    <p className="text-gray-700">
                      Вы узнаете точную стоимость услуг до начала ремонта. Никаких скрытых платежей и доплат 
                      «по факту». Финансовая честность — наш принцип.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Special Offer */}
          <section className="mb-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4">
              Специальное предложение для бизнеса
            </h2>
            <h3 className="text-2xl font-semibold mb-4">
              «Приоритетный сервис» для минимизации простоев
            </h3>
            <p className="text-lg mb-6">
              Цените каждую минуту? Закажите срочный ремонт печатного оборудования! Наша служба 
              экспресс-обслуживания сделает все, чтобы ваша техника вернулась в строй в максимально сжатые сроки.
            </p>
          </section>

          {/* Philosophy */}
          <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наша философия — ваше спокойствие
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Мы строим отношения на открытости и ответственности. Для нас важно не только выполнить работу 
              качественно, но и сделать процесс комфортным для вас. Мы всегда четко озвучиваем сроки и соблюдаем их, 
              потому что дорожим вашим доверием.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-white text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Готовы работать без сбоев?</h2>
            <p className="text-xl mb-6">
              📞 Позвоните нам или оставьте заявку на сайте для бесплатной диагностики и расчета стоимости обслуживания!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToRepairForm}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Оставить заявку
              </button>
              <a 
                href="tel:+74951031468"
                className="flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>+7 495 103-14-68</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
