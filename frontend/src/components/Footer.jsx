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
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const go = (path) => navigate(path);

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
              <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left">Главная</button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left">Услуги</button>
              <button onClick={() => scrollToSection('equipment')} className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left">Оборудование</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left">О нас</button>
              <button onClick={() => go('/print-defects-guide')} className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left">Справочник дефектов</button>
              <button onClick={() => scrollToSection('repair-request')} className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left">Заявка на ремонт</button>
              <a href="https://t.me/complexprint_mos" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200">
                Контакты (Telegram)
              </a>
              <button onClick={() => setIsDetailsModalOpen(true)} className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left font-medium">Реквизиты</button>
            </nav>
          </div>

          {/* Brands & Pages */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ремонт брендов</h4>
            <nav className="grid grid-cols-2 gap-2 text-sm">
              <button onClick={() => go('/remont-printerov-hp')} className="text-gray-300 hover:text-pink-400 text-left">HP</button>
              <button onClick={() => go('/remont-printerov-canon')} className="text-gray-300 hover:text-pink-400 text-left">Canon</button>
              <button onClick={() => go('/remont-printerov-kyocera')} className="text-gray-300 hover:text-pink-400 text-left">Kyocera</button>
              <button onClick={() => go('/remont-printerov-ricoh')} className="text-gray-300 hover:text-pink-400 text-left">Ricoh</button>
              <button onClick={() => go('/remont-printerov-konica-minolta')} className="text-gray-300 hover:text-pink-400 text-left">Konica Minolta</button>
              <button onClick={() => go('/remont-printerov-xerox')} className="text-gray-300 hover:text-pink-400 text-left">Xerox</button>
              <button onClick={() => go('/ceny')} className="text-gray-300 hover:text-pink-400 text-left col-span-2">Цены</button>
              <button onClick={() => go('/rayony-moskvy')} className="text-gray-300 hover:text-pink-400 text-left col-span-2">Районы Москвы</button>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 {companyInfo.name}. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://t.me/complexprint_mos" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-pink-400 transition-colors duration-200">Контакты (Telegram)</a>
              <span className="text-gray-400 text-sm">Политика конфиденциальности</span>
              <a href="/terms-of-service" className="text-gray-400 text-sm hover:text-pink-400 transition-colors duration-200">Условия обслуживания</a>
              <button onClick={() => setIsDetailsModalOpen(true)} className="text-gray-400 text-sm hover:text-pink-400 transition-colors duration-200">Реквизиты компании</button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Details Modal */}
      <CompanyDetailsModal isOpen={isDetailsModalOpen} onClose={() => setIsDetailsModalOpen(false)} />
    </footer>
  );
};

export default Footer;
