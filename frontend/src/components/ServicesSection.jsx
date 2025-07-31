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
      title: "Comprehensive Subscription Service",
      description: "Monthly or quarterly preventive maintenance ensuring long-term operation of your office equipment.",
      price: "From $99/month",
      popular: true,
      features: [
        "Regular preventive maintenance",
        "Unlimited repair time until problem solved", 
        "Guaranteed service and spare parts",
        "Flexible scheduling to match your work hours",
        "Priority support response",
        "Equipment optimization recommendations"
      ],
      icon: Shield,
      color: "from-pink-500 to-purple-600"
    },
    {
      id: 2,
      title: "One-time Repair Service",
      description: "Professional repair service for immediate equipment issues with warranty coverage.",
      price: "From $75/visit",
      popular: false,
      features: [
        "Quick professional diagnosis",
        "Expert repair with genuine parts",
        "Service warranty included",
        "Same-day service available",
        "Transparent pricing",
        "Post-repair quality assurance"
      ],
      icon: Wrench,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Cost Effective",
      description: "Subscription services cost less than multiple one-time visits"
    },
    {
      icon: Shield,
      title: "Guaranteed Quality",
      description: "Extensive experience with major companies and service centers"
    },
    {
      icon: Star,
      title: "Flexible Scheduling",
      description: "Our technicians adjust to your work schedule and availability"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-200">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block lg:inline lg:ml-4">
              Service Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our subscription services provide better value than one-time visits, with unlimited time dedicated to solving your problems and flexible scheduling that works around your business hours.
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
                    <span className="text-sm font-semibold">Most Popular</span>
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
                    Get Started
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