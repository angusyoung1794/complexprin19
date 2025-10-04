import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const PrinterCard = ({ printer }) => {
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
      <CardContent className="p-6 flex flex-col h-full">
        {/* Заголовок */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
              {printer.model}
            </h3>
            <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 hover:from-pink-200 hover:to-purple-200 mb-2">
              {printer.brand}
            </Badge>
          </div>
          <div className="text-2xl">🖨️</div>
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