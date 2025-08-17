import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 lg:pt-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-pink-200">
                <Award className="w-4 h-4 text-pink-500" />
                <span className="text-sm font-medium text-gray-700">Нам доверяют крупные компании</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Профессиональное
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block">
                  обслуживание печатного
                </span>
                оборудования
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Экономьте на расходах по обслуживанию и продлевайте срок службы вашего печатного оборудования с помощью наших комплексных абонентских услуг и экспертного ремонта.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-2xl font-bold text-gray-900">4.9</span>
                </div>
                <p className="text-sm text-gray-600">Рейтинг</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Users className="w-5 h-5 text-pink-500" />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-sm text-gray-600">Довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  <Award className="w-5 h-5 text-purple-500" />
                  <span className="text-2xl font-bold text-gray-900">15+</span>
                </div>
                <p className="text-sm text-gray-600">Лет опыта</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('repair-request')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              >
                Заказать ремонт сейчас
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline"
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Узнать больше
              </Button>
            </div>

            {/* Trusted Companies */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Нам доверяют ведущие компании:</p>
              <div className="flex flex-wrap items-center gap-6 text-gray-400">
                <span className="font-semibold">Связной</span>
                <span className="font-semibold">Совкомбанк</span>
                <span className="font-semibold">Burger King</span>
                <span className="font-semibold">X5 Group</span>
              </div>
            </div>
          </div>

          {/* Right Content - Equipment Image */}
          <div className="relative">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxwcmludGVyfGVufDB8fHx8MTc1Mzk3ODUyN3ww&ixlib=rb-4.1.0&q=85"
                alt="Профессиональное печатное оборудование"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-pink-500 to-purple-600 text-white p-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Поддержка</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Быстрая диагностика</div>
                  <div className="text-sm text-gray-600">Экспертная оценка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;