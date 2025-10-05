// Изображения принтеров
const printerImages = [
  'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6',
  'https://images.unsplash.com/photo-1650094980833-7373de26feb6',
  'https://images.unsplash.com/photo-1650696868612-4b836291b323',
  'https://images.unsplash.com/photo-1630327722923-5ebd594ddda9',
  'https://images.unsplash.com/photo-1571845995697-28be270350de'
];

// Функция для получения изображения принтера на основе его характеристик
export const getPrinterImage = (printer) => {
  // Используем разные изображения в зависимости от категории использования
  if (printer.usageCategory === 'personal') {
    return printerImages[0]; // Компактный принтер для дома
  } else if (printer.usageCategory === 'enterprise') {
    return printerImages[4]; // Крупный офисный принтер
  } else {
    // Для офисного использования выбираем случайное изображение из середины
    const index = Math.abs(printer.id.charCodeAt(printer.id.length - 1)) % 3 + 1;
    return printerImages[index];
  }
};

// Данные принтеров из CSV файлов
export const printersData = {
  hp: [
    // Color LaserJet Pro - Личное/Офисное использование
    {
      id: 'hp-1',
      model: 'Color LaserJet Pro M255dw',
      brand: 'HP',
      category: 'Color LaserJet Pro',
      colorSpeed: 22,
      bwSpeed: 26,
      resolution: '600 x 600 dpi',
      purpose: 'Домашний офис',
      note: 'Компактный, с дуплексом и Wi-Fi',
      price: '25 000 — 35 000 ₽',
      usageCategory: 'personal'
    },
    {
      id: 'hp-2',
      model: 'Color LaserJet Pro M283fdw',
      brand: 'HP',
      category: 'Color LaserJet Pro',
      colorSpeed: 22,
      bwSpeed: 26,
      resolution: '600 x 600 dpi',
      purpose: 'Малый офис',
      note: 'МФУ "4-в-1" с автоподачей',
      price: '45 000 — 60 000 ₽',
      usageCategory: 'office'
    },
    {
      id: 'hp-3',
      model: 'Color LaserJet Pro M454dn',
      brand: 'HP',
      category: 'Color LaserJet Pro',
      colorSpeed: 25,
      bwSpeed: 30,
      resolution: '600 x 600 dpi',
      purpose: 'Рабочая группа',
      note: 'Акцент на печать, сетевой интерфейс',
      price: '55 000 — 75 000 ₽',
      usageCategory: 'office'
    },
    {
      id: 'hp-4',
      model: 'Color LaserJet Pro M479fdw',
      brand: 'HP',
      category: 'Color LaserJet Pro',
      colorSpeed: 28,
      bwSpeed: 28,
      resolution: '600 x 600 dpi',
      purpose: 'Малый/Средний офис',
      note: 'Флагманское МФУ для малого бизнеса',
      price: '75 000 — 100 000 ₽',
      usageCategory: 'office'
    },
    // Color LaserJet Enterprise - Высоконагруженный офис
    {
      id: 'hp-5',
      model: 'Color LaserJet Enterprise M855dn',
      brand: 'HP',
      category: 'Color LaserJet Enterprise',
      colorSpeed: 40,
      bwSpeed: 40,
      resolution: '1200 x 1200 dpi',
      purpose: 'Средний офис',
      note: 'Надежность и высокая нагрузка',
      price: '130 000 — 170 000 ₽',
      usageCategory: 'enterprise'
    },
    {
      id: 'hp-6',
      model: 'Color LaserJet Enterprise M681dn',
      brand: 'HP',
      category: 'Color LaserJet Enterprise',
      colorSpeed: 50,
      bwSpeed: 50,
      resolution: '1200 x 1200 dpi',
      purpose: 'Крупный офис',
      note: 'Высокоскоростное МФУ премиум-класса',
      price: '280 000 — 350 000+ ₽',
      usageCategory: 'enterprise'
    },
    // LaserJet Pro - Личное использование
    {
      id: 'hp-7',
      model: 'LaserJet Pro M15w',
      brand: 'HP',
      category: 'LaserJet Pro',
      colorSpeed: null,
      bwSpeed: 19,
      resolution: '600 x 600 dpi',
      purpose: 'Домашнее использование',
      note: 'Один из самых компактных',
      price: '14000 ₽',
      usageCategory: 'personal'
    },
    {
      id: 'hp-8',
      model: 'LaserJet Pro M104a / M104w',
      brand: 'HP',
      category: 'LaserJet Pro',
      colorSpeed: null,
      bwSpeed: 22,
      resolution: '600 x 600 dpi',
      purpose: 'Индивидуальная работа',
      note: 'Только печать',
      price: '17500 ₽',
      usageCategory: 'personal'
    },
    // LaserJet Enterprise - Высоконагруженный офис
    {
      id: 'hp-9',
      model: 'LaserJet Enterprise M608dn',
      brand: 'HP',
      category: 'LaserJet Enterprise',
      colorSpeed: null,
      bwSpeed: 55,
      resolution: '1200 x 1200 dpi',
      purpose: 'Крупный офис',
      note: 'Высокая производительность',
      price: '105000 ₽',
      usageCategory: 'enterprise'
    }
  ],
  
  canon: [
    // imageCLASS - Личное/Офисное использование
    {
      id: 'canon-1',
      model: 'imageCLASS LBP622Cdw',
      brand: 'Canon',
      category: 'imageCLASS',
      colorSpeed: 22,
      bwSpeed: 22,
      resolution: '1200x1200 dpi',
      purpose: 'Малый офис',
      note: 'Компактный цветной принтер',
      price: '32000 ₽',
      usageCategory: 'office'
    },
    {
      id: 'canon-2',
      model: 'imageCLASS MF743Cdw',
      brand: 'Canon',
      category: 'imageCLASS',
      colorSpeed: 28,
      bwSpeed: 28,
      resolution: '1200x1200 dpi',
      purpose: 'Малый офис',
      note: 'Цветное МФУ 4-в-1',
      price: '58000 ₽',
      usageCategory: 'office'
    },
    {
      id: 'canon-3',
      model: 'imageCLASS LBP162dw',
      brand: 'Canon',
      category: 'imageCLASS',
      colorSpeed: null,
      bwSpeed: 40,
      resolution: '1200x1200 dpi',
      purpose: 'Малый офис',
      note: 'Компактный, с дуплексом и Wi-Fi',
      price: '28000 ₽',
      usageCategory: 'personal'
    },
    // imageRUNNER - Высоконагруженный офис
    {
      id: 'canon-4',
      model: 'imageRUNNER C3025',
      brand: 'Canon',
      category: 'imageRUNNER',
      colorSpeed: 25,
      bwSpeed: 25,
      resolution: '1200x1200 dpi',
      purpose: 'Средний офис',
      note: 'Цветное МФУ для рабочих групп',
      price: '125000 ₽',
      usageCategory: 'enterprise'
    },
    {
      id: 'canon-5',
      model: 'imageRUNNER C5540',
      brand: 'Canon',
      category: 'imageRUNNER',
      colorSpeed: 40,
      bwSpeed: 40,
      resolution: '1200x1200 dpi',
      purpose: 'Крупный офис',
      note: 'Мощное МФУ для больших объемов',
      price: '265000 ₽',
      usageCategory: 'enterprise'
    }
  ],
  
  kyocera: [
    // ECOSYS - Офисное использование
    {
      id: 'kyocera-1',
      model: 'ECOSYS P5026cdn',
      brand: 'Kyocera',
      category: 'ECOSYS',
      colorSpeed: 26,
      bwSpeed: 26,
      resolution: '1200x1200 dpi',
      purpose: 'Малый офис',
      note: 'Цветной, с дуплексом и сетью',
      price: '78000 ₽',
      usageCategory: 'office'
    },
    {
      id: 'kyocera-2',
      model: 'ECOSYS P2035d',
      brand: 'Kyocera',
      category: 'ECOSYS',
      colorSpeed: null,
      bwSpeed: 35,
      resolution: '1200x1200 dpi',
      purpose: 'Малый офис',
      note: 'Компактный, с дуплексом',
      price: '38000 ₽',
      usageCategory: 'personal'
    },
    {
      id: 'kyocera-3',
      model: 'ECOSYS P6040cdn',
      brand: 'Kyocera',
      category: 'ECOSYS',
      colorSpeed: 40,
      bwSpeed: 40,
      resolution: '1200x1200 dpi',
      purpose: 'Средний офис',
      note: 'Высокая скорость цветной печати',
      price: '135000 ₽',
      usageCategory: 'office'
    },
    // TASKalfa - Высоконагруженный офис
    {
      id: 'kyocera-4',
      model: 'TASKalfa 5554ci',
      brand: 'Kyocera',
      category: 'TASKalfa',
      colorSpeed: 54,
      bwSpeed: 54,
      resolution: '1200x1200 dpi',
      purpose: 'Крупный офис',
      note: 'Производительное МФУ',
      price: '325000 ₽',
      usageCategory: 'enterprise'
    },
    {
      id: 'kyocera-5',
      model: 'TASKalfa 8054ci',
      brand: 'Kyocera',
      category: 'TASKalfa',
      colorSpeed: 54,
      bwSpeed: 54,
      resolution: '1200x1200 dpi',
      purpose: 'Крупный офис',
      note: 'Высокая месячная нагрузка',
      price: '415000 ₽',
      usageCategory: 'enterprise'
    }
  ],
  
  konicaMinolta: [
    // bizhub - Офисное/Высоконагруженное использование
    {
      id: 'konica-1',
      model: 'bizhub C227',
      brand: 'Konica Minolta',
      category: 'bizhub',
      colorSpeed: 22,
      bwSpeed: 22,
      resolution: '1200x1200 dpi',
      purpose: 'Малый офис',
      note: 'Компактное цветное МФУ',
      price: '85000 ₽',
      usageCategory: 'office'
    },
    {
      id: 'konica-2',
      model: 'bizhub 227',
      brand: 'Konica Minolta',
      category: 'bizhub',
      colorSpeed: null,
      bwSpeed: 22,
      resolution: '1200x1200 dpi',
      purpose: 'Малый офис',
      note: 'Компактное МФУ',
      price: '45000 ₽',
      usageCategory: 'personal'
    },
    {
      id: 'konica-3',
      model: 'bizhub C758',
      brand: 'Konica Minolta',
      category: 'bizhub',
      colorSpeed: 75,
      bwSpeed: 75,
      resolution: '1200x1200 dpi',
      purpose: 'Крупный офис',
      note: 'Профессиональное МФУ для высоких нагрузок',
      price: '480000 ₽',
      usageCategory: 'enterprise'
    }
  ]
};

// Категории использования
export const usageCategories = [
  {
    id: 'personal',
    name: 'Личное использование',
    description: 'Идеальные решения для дома и индивидуальной работы',
    features: [
      'Компактные размеры',
      'Экономичность',
      'Простота использования',
      'Беспроводные технологии',
      'Многофункциональность'
    ],
    brands: ['HP', 'Canon', 'Pantum'],
    icon: '🏠'
  },
  {
    id: 'office',
    name: 'Офисное использование',
    description: 'Надежные решения для небольших и средних офисов',
    features: [
      'Высокая производительность',
      'Сетевые возможности',
      'Автоматизация процессов',
      'Экономия расходников',
      'Простое обслуживание'
    ],
    brands: ['HP', 'Kyocera', 'Canon', 'Ricoh'],
    icon: '🏢'
  },
  {
    id: 'enterprise',
    name: 'Высоконагруженный офис',
    description: 'Профессиональные решения для интенсивной печати',
    features: [
      'Высокая скорость печати',
      'Большой ресурс',
      'Продвинутые функции управления',
      'Минимальная стоимость отпечатка',
      'Надежность 24/7'
    ],
    brands: ['Konica Minolta', 'Ricoh', 'Kyocera'],
    icon: '🏭'
  }
];

// Функция для получения принтеров по категории использования
export const getPrintersByUsageCategory = (category) => {
  const allPrinters = [
    ...printersData.hp,
    ...printersData.canon,
    ...printersData.kyocera,
    ...printersData.konicaMinolta
  ];
  
  return allPrinters.filter(printer => printer.usageCategory === category);
};

// Функция для получения всех принтеров
export const getAllPrinters = () => {
  return [
    ...printersData.hp,
    ...printersData.canon,
    ...printersData.kyocera,
    ...printersData.konicaMinolta
  ];
};

// Функция для получения принтера по ID
export const getPrinterById = (id) => {
  const allPrinters = getAllPrinters();
  return allPrinters.find(printer => printer.id === id);
};