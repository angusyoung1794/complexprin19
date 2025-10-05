import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { getPrinterImage } from '../data/printers';

const PrinterCard = ({ printer }) => {
  const [imageError, setImageError] = useState(false);
  const printerImage = getPrinterImage(printer);
  
  // Логирование для отладки
  React.useEffect(() => {
    console.log(`Printer: ${printer.model}, Image URL: ${printerImage}`);
  }, [printer.model, printerImage]);

  const handleBuyClick = () => {
    const subject = `Запрос на покупку: ${printer.model}`;
    const body = `Здравствуйте!

Меня интересует принтер ${printer.model} (${printer.brand}).

Характеристики:
- Модель: ${printer.model}
- Бренд: ${printer.brand}
- Категория: ${printer.category}
${printer.colorSpeed ? `- Скорость цветной печати: ${printer.colorSpeed} стр/мин` : ''}
- Скорость ч/б печати: ${printer.bwSpeed} стр/мин
- Разрешение: ${printer.resolution}
- Назначение: ${printer.purpose}
- Цена: ${printer.price}

Прошу предоставить подробную информацию о возможности покупки и условиях поставки.

С уважением.`;

    const mailtoLink = `mailto:info@complexprint.ru?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
      {/* Изображение принтера */}
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {!imageError ? (
          <img 
            src={printerImage}
            alt={printer.model}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              console.error(`Failed to load image for ${printer.model}:`, printerImage, e);
              setImageError(true);
            }}
            onLoad={() => {
              console.log(`Successfully loaded image for ${printer.model}`);
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center">
              <span className="text-6xl mb-2 block">🖨️</span>
              <span className="text-xs text-gray-500">{printer.brand}</span>
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge className="bg-white/90 backdrop-blur-sm text-purple-700 shadow-lg">
            {printer.brand}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6 flex flex-col h-full">
        {/* Заголовок */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
            {printer.model}
          </h3>
          <span className="text-sm text-gray-500">{printer.category}</span>
        </div>

        {/* Характеристики */}
        <div className="flex-1 space-y-2 mb-4">
          <div className="text-sm text-gray-600">
            <strong>Категория:</strong> {printer.category}
          </div>
          
          {printer.colorSpeed && (
            <div className="text-sm text-gray-600">
              <strong>Цветная печать:</strong> {printer.colorSpeed} стр/мин
            </div>
          )}
          
          <div className="text-sm text-gray-600">
            <strong>Ч/б печать:</strong> {printer.bwSpeed} стр/мин
          </div>
          
          <div className="text-sm text-gray-600">
            <strong>Разрешение:</strong> {printer.resolution}
          </div>
          
          <div className="text-sm text-gray-600">
            <strong>Назначение:</strong> {printer.purpose}
          </div>
          
          {printer.note && (
            <div className="text-sm text-gray-600 p-2 bg-gray-50 rounded-lg">
              <strong>Особенности:</strong> {printer.note}
            </div>
          )}
        </div>

        {/* Цена и кнопка */}
        <div className="mt-auto">
          <div className="text-lg font-bold text-purple-600 mb-4">
            {printer.price}
          </div>
          
          <button
            onClick={handleBuyClick}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-pink-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            🛒 Купить
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrinterCard;