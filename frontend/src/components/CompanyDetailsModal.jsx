import React, { useState } from 'react';
import { X, Building2, MapPin, CreditCard } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const CompanyDetailsModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-2xl font-bold text-gray-900">
            <Building2 className="w-6 h-6 text-pink-500" />
            <span>Реквизиты компании</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Основная информация о компании */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Building2 className="w-5 h-5 text-pink-500 mr-2" />
              Основные сведения
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-600">Наименование:</span>
                <span className="text-gray-900">ООО "Комплекс Принт"</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600">ИНН:</span>
                  <span className="text-gray-900 font-mono">7743874280</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600">КПП:</span>
                  <span className="text-gray-900 font-mono">774301001</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-600">ОГРН:</span>
                <span className="text-gray-900 font-mono">1127747268879</span>
              </div>
            </div>
          </div>

          {/* Адреса */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 text-purple-500 mr-2" />
              Адреса
            </h3>
            <div className="space-y-4">
              <div>
                <span className="text-sm font-medium text-gray-600 block mb-1">Юридический адрес:</span>
                <span className="text-gray-900">125183, Москва г. ул. Академическая Б., д.73А</span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600 block mb-1">Почтовый адрес:</span>
                <span className="text-gray-900">127572, Москва г. ул. Абрамцевская, д.11, к.1, стр.3</span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600 block mb-1">Адрес для корреспонденции:</span>
                <span className="text-gray-900">Москва г, ул.Абрамцевская, д.11, к.1, стр.3 , 127572</span>
              </div>
            </div>
          </div>

          {/* Банковские реквизиты */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <CreditCard className="w-5 h-5 text-purple-500 mr-2" />
              Банковские реквизиты
            </h3>
            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600">Расчетный счет:</span>
                  <span className="text-gray-900 font-mono text-lg">40702810202790000113</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-600">Банк:</span>
                  <span className="text-gray-900">АО "Альфа Банк"</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-600">К/с:</span>
                    <span className="text-gray-900 font-mono">30101810200000000593</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-600">БИК:</span>
                    <span className="text-gray-900 font-mono">044525593</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Кнопка копирования */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => {
                const text = `Реквизиты компании:
ООО "Комплекс Принт", ИНН 7743874280, КПП 774301001
Юридический адрес: 125183, Москва г. ул. Академическая Б., д.73А
Почтовый адрес: 127572, Москва г. ул. Абрамцевская, д.11, к.1, стр.3
Р/с 40702810202790000113 в банке АО "Альфа Банк", к/с 30101810200000000593, БИК 044525593
ОГРН 1127747268879
Адрес для корреспонденции: Москва г, ул.Абрамцевская, д.11, к.1, стр.3 , 127572`;
                
                navigator.clipboard.writeText(text).then(() => {
                  // Можно добавить уведомление о копировании
                  alert('Реквизиты скопированы в буфер обмена');
                });
              }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Скопировать реквизиты
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyDetailsModal;