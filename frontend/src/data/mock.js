// Mock data for Print Complex website - Russian version

export const companyInfo = {
  name: "Print Complex",
  phone: "+79104297686",
  email: "9104297686@outlook.com",
  address: "ул. Абрамцевская, 2",
  description: "Экономьте на обслуживании печатного оборудования и продлевайте срок его службы с помощью наших профессиональных услуг."
};

export const services = [
  {
    id: 1,
    title: "Комплексное абонентское обслуживание",
    description: "Ежемесячное или ежеквартальное профилактическое обслуживание, обеспечивающее долгосрочную работу вашего офисного оборудования.",
    features: ["Профилактическое обслуживание", "Неограниченное время ремонта", "Гарантированное обслуживание", "Гарантия на запчасти"],
    popular: true
  },
  {
    id: 2,
    title: "Разовый ремонт",
    description: "Профессиональная услуга ремонта для решения немедленных проблем с оборудованием с гарантийным покрытием.",
    features: ["Быстрая диагностика", "Профессиональный ремонт", "Гарантия на обслуживание", "Оригинальные запчасти"],
    popular: false
  }
];

export const supportedBrands = [
  "Hewlett Packard (HP)",
  "Canon",
  "Kyocera", 
  "Konica Minolta",
  "Xerox",
  "Ricoh"
];

export const equipmentTypes = [
  "Лазерные принтеры",
  "Плоттеры",
  "Многофункциональные устройства"
];

export const clientCompanies = [
  "Связной",
  "Стройгазмонтаж", 
  "Совкомбанк",
  "Burger King",
  "Криогенмаш",
  "X5 Group"
];

export const commonIssues = [
  { value: "poor-print-quality", label: "Плохое качество печати" },
  { value: "print-jams", label: "Замятие бумаги" },
  { value: "paper-wont-pickup", label: "Бумага не захватывается" },
  { value: "screen-wont-light", label: "Экран не включается" },
  { value: "error-code", label: "Отображение кода ошибки" },
  { value: "toner-issues", label: "Проблемы с тонером/чернилами" },
  { value: "connectivity-problems", label: "Проблемы с подключением" },
  { value: "other", label: "Другая проблема" }
];

export const printerImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxwcmludGVyfGVufDB8fHx8MTc1Mzk3ODUyN3ww&ixlib=rb-4.1.0&q=85",
    alt: "Профессиональное МФУ HP",
    brand: "HP"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1650094980833-7373de26feb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxwcmludGVyfGVufDB8fHx8MTc1Mzk3ODUyN3ww&ixlib=rb-4.1.0&q=85",
    alt: "Белое офисное копировальное устройство",
    brand: "Canon"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1708793699492-5fa208f52dcb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxwcmludGVyfGVufDB8fHx8MTc1Mzk3ODUyN3ww&ixlib=rb-4.1.0&q=85",
    alt: "Профессиональный принтер в офисной среде",
    brand: "Kyocera"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1706895040634-62055892cbbb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxwcmludGVyfGVufDB8fHx8MTc1Mzk3ODUyN3ww&ixlib=rb-4.1.0&q=85",
    alt: "Цветной струйный фотопринтер",
    brand: "Ricoh"
  }
];

export const testimonials = [
  {
    id: 1,
    company: "Связной",
    text: "Print Complex обслуживает наше печатное оборудование уже более 2 лет. Их абонентское обслуживание значительно экономит наши расходы.",
    author: "IT-отдел"
  },
  {
    id: 2,
    company: "Совкомбанк", 
    text: "Профессиональное обслуживание и быстрое время отклика. Наши принтеры всегда работают бесперебойно.",
    author: "Менеджер по операциям"
  },
  {
    id: 3,
    company: "X5 Group",
    text: "Надежный сервис обслуживания, который поддерживает наше офисное оборудование на пике производительности.",
    author: "Команда по эксплуатации"
  }
];

export const repairProcessSteps = [
  {
    id: 1,
    title: "Подача заявки",
    description: "Отправьте заявку на ремонт через нашу онлайн-форму с указанием деталей оборудования и описания проблемы.",
    icon: "FileText"
  },
  {
    id: 2,
    title: "Быстрая диагностика",
    description: "Наши опытные техники проводят быструю диагностику для выявления основной причины проблемы.",
    icon: "Search"
  },
  {
    id: 3,
    title: "Профессиональный ремонт",
    description: "Используя оригинальные запчасти и проверенные методы, мы восстанавливаем ваше оборудование до оптимального состояния.",
    icon: "Wrench"
  },
  {
    id: 4,
    title: "Контроль качества", 
    description: "Комплексное тестирование гарантирует, что ваше оборудование работает идеально перед завершением работ.",
    icon: "CheckCircle"
  }
];

// Mock function to simulate form submission
export const submitRepairRequest = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Заявка на ремонт отправлена:", formData);
      resolve({
        success: true,
        message: "Ваша заявка на ремонт была успешно отправлена. Мы свяжемся с вами в течение 24 часов.",
        requestId: Math.random().toString(36).substr(2, 9).toUpperCase()
      });
    }, 1000);
  });
};