import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { clientCompanies, repairProcessSteps } from '../data/mock';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Довольных клиентов' },
    { icon: Award, value: '15+', label: 'Лет опыта' },
    { icon: CheckCircle, value: '99%', label: 'Успешных ремонтов' },
    { icon: Clock, value: '24/7', label: 'Доступная поддержка' }
  ];

  const getIconComponent = (iconName) => {
    const icons = {
      FileText: () => <span className="text-2xl">📄</span>,
      Search: () => <span className="text-2xl">🔍</span>,
      Wrench: () => <span className="text-2xl">🔧</span>,
      CheckCircle: () => <span className="text-2xl">✅</span>
    };
    return icons[iconName] || (() => <span className="text-2xl">⚙️</span>);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
            О Print Complex
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Нам доверяют
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block lg:inline lg:ml-4">
              лидеры отрасли
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Качество нашего мастерства подтверждается обширным опытом обслуживания крупных компаний и накопленным опытом работы в крупных сервисных центрах. Мы ваш надежный партнер для всех потребностей в обслуживании печатного оборудования.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Client Companies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Нам доверяют крупные компании</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientCompanies.map((company, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-pink-600 font-bold text-lg">{company.charAt(0)}</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm">{company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Repair Process */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Наш процесс ремонта</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairProcessSteps.map((step, index) => {
              const IconComponent = getIconComponent(step.icon);
              return (
                <Card key={step.id} className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.id}</span>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Experience Highlight */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Обширный опыт работы в сервисных центрах</h3>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            Наши техники накопили ценный опыт работы в официальных сервисных центрах HP, Ricoh, Canon и Kyocera, обеспечивая ремонт высочайшего качества с использованием оригинальных деталей и проверенных методов.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-lg">Сертификат HP</Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-lg">Сертификат Ricoh</Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-lg">Сертификат Canon</Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 text-lg">Сертификат Kyocera</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;