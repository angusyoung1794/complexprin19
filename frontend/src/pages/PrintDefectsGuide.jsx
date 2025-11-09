import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Helmet } from 'react-helmet-async';
import { printDefects, problemTypes, manifestationTypes } from '../data/printDefects';

const PrintDefectsGuide = () => {
  const navigate = useNavigate();
  const [selectedProblemType, setSelectedProblemType] = useState("Все проблемы");
  const [selectedManifestation, setSelectedManifestation] = useState("Все проявления");

  // Фильтрация дефектов
  const filteredDefects = printDefects.filter(defect => {
    const problemMatch = selectedProblemType === "Все проблемы" || defect.problemType === selectedProblemType;
    const manifestationMatch = selectedManifestation === "Все проявления" || defect.manifestation === selectedManifestation;
    return problemMatch && manifestationMatch;
  });

  const scrollToRepairForm = () => {
    navigate('/', { state: { scrollTo: 'repair-request' } });
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: printDefects.slice(0, 10).map(defect => ({
      "@type": "Question",
      name: `${defect.title} - причины и решение`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Внешние признаки: ${defect.symptoms.join(', ')}. Причина: ${defect.cause}. Решение: ${defect.solution.join(', ')}.`
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Helmet>
        <title>Справочник дефектов печати принтеров HP, Canon, Kyocera | ComplexPrint - причины и решения</title>
        <meta
          name="description"
          content="Визуальный каталог дефектов печати с фотографиями: почему принтер печатает полосами, что делать если осыпается тонер, ремонт термоузла HP, вертикальные полосы на печати Brother, Kyocera. Причины и способы устранения."
        />
        <meta 
          name="keywords" 
          content="почему принтер печатает полосами, что делать если осыпается тонер, ремонт термоузла HP, вертикальные полосы на печати Brother, дефекты печати принтера, проблемы с печатью, полосы на печати, пятна на печати, осыпается тонер, грязная печать"
        />
        <link rel="canonical" href="https://complexprint.ru/print-defects-guide" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Хлебные крошки и кнопка назад */}
            <div className="mb-8">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium mb-4"
              >
                ← Вернуться на главную
              </button>
              <nav className="text-sm text-gray-600">
                <span>Главная</span> / <span>Справочник дефектов печати</span>
              </nav>
            </div>

            {/* Заголовок */}
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
                Визуальный справочник
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Справочник дефектов печати
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block lg:inline lg:ml-4">
                  с фотографиями
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Визуальный каталог наиболее распространенных дефектов печати лазерных принтеров с подробным описанием причин и способов устранения
              </p>
            </div>

            {/* Фильтры */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Фильтры</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Фильтр по типу проблемы */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Тип проблемы:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {problemTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedProblemType(type)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                            selectedProblemType === type
                              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Фильтр по внешним проявлениям */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Внешние проявления:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {manifestationTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedManifestation(type)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                            selectedManifestation === type
                              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center text-sm text-gray-600">
                  Найдено дефектов: <span className="font-semibold text-purple-600">{filteredDefects.length}</span>
                </div>
              </div>
            </div>

            {/* Каталог дефектов */}
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDefects.map((defect) => (
                  <Card key={defect.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-0">
                      {/* Фото дефекта */}
                      <div className="relative overflow-hidden bg-gray-100">
                        <img
                          src={`/images/${defect.imageName}.jpg`}
                          alt={defect.title}
                          className="w-full h-64 object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="hidden w-full h-64 items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300"
                        >
                          <span className="text-6xl">🖨️</span>
                        </div>
                        {/* Бэдж типа проблемы */}
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-white/90 text-purple-700 backdrop-blur-sm">
                            {defect.problemType}
                          </Badge>
                        </div>
                      </div>

                      {/* Описание дефекта */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {defect.title}
                        </h3>

                        {/* Внешние признаки */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-purple-700 mb-2">
                            Внешние признаки:
                          </h4>
                          <ul className="space-y-1">
                            {defect.symptoms.map((symptom, index) => (
                              <li key={index} className="text-sm text-gray-700 flex items-start">
                                <span className="text-pink-500 mr-2">•</span>
                                <span>{symptom}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Вероятная причина */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-purple-700 mb-2">
                            Вероятная причина:
                          </h4>
                          <p className="text-sm text-gray-700">
                            {defect.cause}
                          </p>
                        </div>

                        {/* Решение */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-purple-700 mb-2">
                            Решение:
                          </h4>
                          <ul className="space-y-1">
                            {defect.solution.map((sol, index) => (
                              <li key={index} className="text-sm text-gray-700 flex items-start">
                                <span className="text-green-500 mr-2">-</span>
                                <span>{sol}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Кнопка срочного ремонта */}
                        <Button
                          onClick={scrollToRepairForm}
                          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-2 rounded-xl transition-all duration-300"
                        >
                          Срочный ремонт →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Если ничего не найдено */}
              {filteredDefects.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Дефектов не найдено
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Попробуйте изменить параметры фильтрации
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedProblemType("Все проблемы");
                      setSelectedManifestation("Все проявления");
                    }}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                  >
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto mt-16">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-center text-white shadow-2xl">
                <h2 className="text-3xl font-bold mb-4">
                  Не можете определить проблему?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Наши специалисты проведут бесплатную диагностику и определят точную причину дефекта печати
                </p>
                <Button
                  onClick={scrollToRepairForm}
                  className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Заказать диагностику
                </Button>
              </div>
            </div>

            {/* SEO блок с ключевыми фразами */}
            <div className="max-w-4xl mx-auto mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Часто задаваемые вопросы о дефектах печати
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-700 mb-2">
                      Почему принтер печатает полосами?
                    </h3>
                    <p className="text-gray-700">
                      Вертикальные полосы на печати чаще всего появляются из-за износа фотобарабана или загрязнения драм-юнита. 
                      Для принтеров HP достаточно заменить картридж, для Kyocera и Brother может потребоваться замена драм-юнита или его чистка.
                      Также полосы могут быть вызваны износом пальцев отделения в термоузле.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-purple-700 mb-2">
                      Что делать если осыпается тонер?
                    </h3>
                    <p className="text-gray-700">
                      Осыпание тонера указывает на проблемы с термоузлом - недостаточный прогрев или неисправность нагревательного элемента.
                      Необходима замена термопленки, термосмазки, а в некоторых случаях - полная замена термоузла в сборе.
                      Проблема может возникнуть после некачественного ремонта или использования неподходящего тонера.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-purple-700 mb-2">
                      Ремонт термоузла HP - когда необходим?
                    </h3>
                    <p className="text-gray-700">
                      Ремонт термоузла HP требуется при: осыпании тонера, повторении изображения на листе, грязных полосах по краям,
                      непропечатке краев страницы. Основные работы включают замену термопленки, резинового прижимного вала,
                      тефлонового вала и пальцев отделения. Гарантия на ремонт термоузла - 6 месяцев.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-purple-700 mb-2">
                      Вертикальные полосы на печати Brother - причины и решение
                    </h3>
                    <p className="text-gray-700">
                      Для принтеров Brother вертикальные полосы чаще всего связаны с износом драм-юнита (фотобарабана) или
                      проблемами с тефлоновым валом в термоузле. Если полосы тонкие и на равном расстоянии - это износ пальцев отделения.
                      Если полосы широкие или есть повторяющиеся пятна - требуется замена драм-юнита.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrintDefectsGuide;
