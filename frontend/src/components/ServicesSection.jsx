import React from 'react';
import { Check, Clock, Shield, Wrench, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ServicesSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 1,
      title: "Комплексное абонентское обслуживание",
      description: "Ежемесячное или ежеквартальное профилактическое обслуживание, обеспечивающее долгосрочную работу вашего офисного оборудования.",
      price: "От 7000₽/месяц",
      popular: true,
      features: [
        "Регулярное профилактическое обслуживание",
        "Неограниченное время ремонта до решения проблемы", 
        "Гарантированное обслуживание и запчасти",
        "Гибкое планирование под ваш рабочий график",
        "Приоритетная поддержка",
        "Рекомендации по оптимизации оборудования"
      ],
      icon: Shield,
      color: "from-pink-500 to-purple-600"
    },
    {
      id: 2,
      title: "Разовый ремонт",
      description: "Профессиональная услуга ремонта для решения немедленных проблем с оборудованием с гарантийным покрытием.",
      price: "От 5000₽/выезд",
      popular: false,
      features: [
        "Быстрая профессиональная диагностика",
        "Экспертный ремонт с оригинальными деталями",
        "Гарантия на обслуживание включена",
        "Возможность обслуживания в день обращения",
        "Прозрачное ценообразование",
        "Контроль качества после ремонта"
      ],
      icon: Wrench,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Экономически выгодно",
      description: "Абонентское обслуживание стоит меньше множественных разовых вызовов"
    },
    {
      icon: Shield,
      title: "Гарантированное качество",
      description: "Обширный опыт работы с крупными компаниями и сервисными центрами"
    },
    {
      icon: Star,
      title: "Гибкий график",
      description: "Наши техники подстраиваются под ваш рабочий график и доступность"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-200">
            Наши услуги
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Выберите идеальный
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block lg:inline lg:ml-4">
              тарифный план
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Наши абонентские услуги обеспечивают лучшую ценность по сравнению с разовыми вызовами, с неограниченным временем, посвященным решению ваших проблем, и гибким планированием, которое работает в соответствии с вашими рабочими часами.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-pink-500 shadow-xl' : 'hover:shadow-lg'
              }`}>
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-bl-lg">
                    <span className="text-sm font-semibold">Самый популярный</span>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">{service.description}</CardDescription>
                  <div className="text-3xl font-bold text-gray-900 mt-2">{service.price}</div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => scrollToSection('repair-request')}
                    className={`w-full py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      service.popular 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white' 
                        : 'border-2 border-pink-300 text-pink-600 hover:bg-pink-50'
                    }`}
                    variant={service.popular ? "default" : "outline"}
                  >
                    Начать
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Advantages */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;