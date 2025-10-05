import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '../data/mock';
import CompanyDetailsModal from './CompanyDetailsModal';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // Если мы не на главной странице, сначала переходим на неё
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }
    
    // Если мы на главной странице, просто прокручиваем
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{companyInfo.name}</h3>
                <p className="text-gray-400 text-sm">Профессиональное обслуживание оборудования</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {companyInfo.description} Доверьтесь нашим опытным техникам, чтобы ваше печатное оборудование работало бесперебойно.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">{companyInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">{companyInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">{companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('equipment')}
                className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left"
              >
                Оборудование
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left"
              >
                О нас
              </button>
              <button 
                onClick={() => scrollToSection('repair-request')}
                className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left"
              >
                Заявка на ремонт
              </button>
              <button 
                onClick={() => setIsDetailsModalOpen(true)}
                className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left font-medium"
              >
                Реквизиты
              </button>
            </nav>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Рабочие часы</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300 text-sm">Понедельник - Пятница</span>
              </div>
              <p className="text-gray-400 text-sm ml-6">9:00 - 18:00</p>
              
              <div className="flex items-center space-x-2 mt-3">
                <Clock className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300 text-sm">Суббота</span>
              </div>
              <p className="text-gray-400 text-sm ml-6">10:00 - 16:00</p>
              
              <div className="flex items-center space-x-2 mt-3">
                <Clock className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300 text-sm">Воскресенье</span>
              </div>
              <p className="text-gray-400 text-sm ml-6">Только экстренные случаи</p>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-lg border border-pink-500/20">
              <p className="text-pink-200 text-sm font-medium">Экстренная поддержка 24/7</p>
              <p className="text-gray-400 text-xs mt-1">Доступна для срочного ремонта</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 {companyInfo.name}. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Политика конфиденциальности</span>
              <span className="text-gray-400 text-sm">Условия обслуживания</span>
              <button 
                onClick={() => setIsDetailsModalOpen(true)}
                className="text-gray-400 text-sm hover:text-pink-400 transition-colors duration-200"
              >
                Реквизиты компании
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Details Modal */}
      <CompanyDetailsModal 
        isOpen={isDetailsModalOpen} 
        onClose={() => setIsDetailsModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;