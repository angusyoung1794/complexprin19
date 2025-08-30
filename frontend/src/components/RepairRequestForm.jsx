import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { commonIssues, supportedBrands } from '../data/mock';
import emailService from '../services/emailService';
import UserAgreementModal from './UserAgreementModal';

const RepairRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    equipmentBrand: '',
    equipmentModel: '',
    issue: '',
    description: '',
    urgency: 'medium'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [requestId, setRequestId] = useState('');
  const [error, setError] = useState('');
  const [isAgreedToTerms, setIsAgreedToTerms] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const required = ['name', 'email', 'phone', 'equipmentBrand', 'issue'];
    
    // Проверяем каждое поле отдельно для лучшего UX
    if (!formData.name || formData.name.trim() === '') {
      setError('Пожалуйста, введите ваше полное имя.');
      return false;
    }
    
    if (!formData.email || formData.email.trim() === '') {
      setError('Пожалуйста, введите ваш email адрес.');
      return false;
    }
    
    if (!formData.phone || formData.phone.trim() === '') {
      setError('Пожалуйста, введите ваш номер телефона.');
      return false;
    }
    
    if (!formData.equipmentBrand || formData.equipmentBrand.trim() === '') {
      setError('Пожалуйста, выберите бренд оборудования.');
      return false;
    }
    
    if (!formData.issue || formData.issue.trim() === '') {
      setError('Пожалуйста, выберите тип проблемы.');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Пожалуйста, введите корректный email адрес.');
      return false;
    }

    // Phone validation (basic)
    if (formData.phone.length < 10) {
      setError('Пожалуйста, введите корректный номер телефона.');
      return false;
    }

    console.log('✅ Валидация формы прошла успешно:', formData);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    console.log('📝 Попытка отправки формы с данными:', formData);
    
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }
    
    try {
      console.log('📤 Отправка заявки на ремонт...');
      const response = await emailService.sendRepairRequest(formData);
      
      console.log('📨 Ответ от сервиса:', response);
      
      if (response.success) {
        console.log('✅ Заявка успешно отправлена');
        setIsSubmitted(true);
        setRequestId(response.request_id);
      } else {
        console.error('❌ Неуспешная отправка:', response);
        setError('Не удалось отправить заявку на ремонт. Пожалуйста, попробуйте еще раз.');
      }
    } catch (error) {
      console.error('❌ Ошибка при отправке заявки на ремонт:', error);
      setError(error.message || 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону +74951031468.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="repair-request" className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-2xl border-green-200">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Заявка успешно отправлена!</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Спасибо за вашу заявку на ремонт. Мы свяжемся с вами в течение 24 часов для назначения обслуживания.
                </p>
                <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2">
                  ID заявки: {requestId}
                </Badge>
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Следующие шаги:</strong>
                  </p>
                  <ul className="text-left text-gray-600 space-y-1">
                    <li>• Наш техник свяжется с вами для подтверждения деталей</li>
                    <li>• Мы запланируем удобное время обслуживания</li>
                    <li>• Профессиональная диагностика и ремонт</li>
                    <li>• Уведомление по электронной почте отправлено команде Print Complex</li>
                  </ul>
                </div>
                <Button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      equipmentBrand: '',
                      equipmentModel: '',
                      issue: '',
                      description: '',
                      urgency: 'medium'
                    });
                  }}
                  className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  Отправить другую заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="repair-request" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-200">
            Получить помощь сейчас
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Заявка на ремонт
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block lg:inline lg:ml-4">
              оборудования
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Заполните форму ниже, и наши опытные техники свяжутся с вами в течение 24 часов для назначения услуги ремонта.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Контактная информация</CardTitle>
                <CardDescription>Свяжитесь с нашей службой поддержки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Телефон</p>
                    <p className="text-gray-600">+74951031468</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">9104297686@outlook.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Адрес</p>
                    <p className="text-gray-600">г. Москва, Абрамцевская 11 к1 стр3</p>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Гарантия быстрого ответа</h4>
                  <p className="text-gray-600 text-sm">Мы отвечаем на все заявки о ремонте в течение 24 часов и предоставляем гибкое планирование, соответствующее вашим рабочим часам.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Repair Request Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Форма заявки на ремонт</CardTitle>
                <CardDescription>Пожалуйста, предоставьте подробную информацию о вашем оборудовании и проблеме, с которой вы столкнулись</CardDescription>
              </CardHeader>
              <CardContent>
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">{error}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Полное имя *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Введите ваше полное имя"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email адрес *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Введите ваш email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Номер телефона *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Введите ваш номер телефона"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Название компании</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Введите название компании (необязательно)"
                      />
                    </div>
                  </div>

                  {/* Equipment Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="equipmentBrand">Бренд оборудования *</Label>
                      <Select onValueChange={(value) => handleInputChange('equipmentBrand', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите бренд оборудования" />
                        </SelectTrigger>
                        <SelectContent>
                          {supportedBrands.map((brand, index) => (
                            <SelectItem key={index} value={brand.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}>
                              {brand}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="equipmentModel">Модель оборудования</Label>
                      <Input
                        id="equipmentModel"
                        value={formData.equipmentModel}
                        onChange={(e) => handleInputChange('equipmentModel', e.target.value)}
                        placeholder="Введите номер модели"
                      />
                    </div>
                  </div>

                  {/* Issue Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="issue">Тип проблемы *</Label>
                      <Select onValueChange={(value) => handleInputChange('issue', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип проблемы" />
                        </SelectTrigger>
                        <SelectContent>
                          {commonIssues.map((issue) => (
                            <SelectItem key={issue.value} value={issue.value}>
                              {issue.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Срочность обслуживания</Label>
                      <Select onValueChange={(value) => handleInputChange('urgency', value)} defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите уровень срочности" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Стандартно (3-5 дней)</SelectItem>
                          <SelectItem value="medium">Приоритет (1-2 дня)</SelectItem>
                          <SelectItem value="high">Срочно (в тот же день)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Описание проблемы</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Пожалуйста, подробно опишите проблему, включая любые сообщения об ошибках или коды"
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Отправка...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Отправить заявку на ремонт
                        <Send className="ml-2 w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairRequestForm;