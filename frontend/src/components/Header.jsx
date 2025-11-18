import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  useEffect(() => {
    if (location.state?.scrollTo && location.pathname === '/') {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const goHome = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const openTelegram = () => {
    window.open('https://t.me/complexprint_mos', '_blank', 'noopener');
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={goHome}>
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Комплекс Принт</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Профессиональное обслуживание оборудования</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium">Главная</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium">Услуги</button>
            <button onClick={() => scrollToSection('equipment')} className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium">Оборудование</button>
            <button onClick={() => navigate('/about-us')} className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium">О нас</button>
            <button onClick={() => navigate('/print-defects-guide')} className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium">Справочник дефектов</button>
            {/* Контакты ведет в Telegram */}
            <button onClick={openTelegram} className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium">Контакты</button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone size={16} className="text-pink-500" />
              <span>+74951031468</span>
            </div>
            <Button 
              onClick={() => scrollToSection('repair-request')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Заявка на ремонт
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col py-4">
              <button onClick={() => scrollToSection('home')} className="px-4 py-3 text-left text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Главная</button>
              <button onClick={() => scrollToSection('services')} className="px-4 py-3 text-left text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Услуги</button>
              <button onClick={() => scrollToSection('equipment')} className="px-4 py-3 text-left text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Оборудование</button>
              <button onClick={() => { navigate('/about-us'); setIsMenuOpen(false); }} className="px-4 py-3 text-left text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">О нас</button>
              <button onClick={() => { navigate('/print-defects-guide'); setIsMenuOpen(false); }} className="px-4 py-3 text-left text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Справочник дефектов</button>
              <button onClick={openTelegram} className="px-4 py-3 text-left text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200">Контакты</button>
              <div className="px-4 py-3 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <Phone size={16} className="text-pink-500" />
                  <span>+74951031468</span>
                </div>
                <Button onClick={() => scrollToSection('repair-request')} className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-2 rounded-full transition-all duration-300">Заявка на ремонт</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
