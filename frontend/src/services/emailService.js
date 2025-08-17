import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here', // Replace with your Service ID from EmailJS
  TEMPLATE_ID: 'your_template_id_here', // Replace with your Template ID from EmailJS  
  PUBLIC_KEY: 'your_public_key_here' // Replace with your Public Key from EmailJS
};

class EmailService {
  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }

  formatIssueType(issueValue) {
    const issueMapping = {
      'poor-print-quality': 'Плохое качество печати',
      'print-jams': 'Замятие бумаги',
      'paper-wont-pickup': 'Бумага не захватывается', 
      'screen-wont-light': 'Экран не включается',
      'error-code': 'Отображение кода ошибки',
      'toner-issues': 'Проблемы с тонером/чернилами',
      'connectivity-problems': 'Проблемы с подключением',
      'other': 'Другая проблема'
    };
    return issueMapping[issueValue] || issueValue;
  }

  formatUrgency(urgencyValue) {
    const urgencyMapping = {
      'low': 'Стандартно (3-5 дней)',
      'medium': 'Приоритет (1-2 дня)',
      'high': 'Срочно (в тот же день)'
    };
    return urgencyMapping[urgencyValue] || urgencyValue;
  }

  formatEquipmentBrand(brandValue) {
    const brandMapping = {
      'hewlett-packard-hp': 'Hewlett Packard (HP)',
      'canon': 'Canon',
      'kyocera': 'Kyocera',
      'konica-minolta': 'Konica Minolta',
      'xerox': 'Xerox',
      'ricoh': 'Ricoh'
    };
    return brandMapping[brandValue] || brandValue;
  }

  async sendRepairRequest(formData) {
    try {
      // Prepare email parameters with formatted data
      const emailParams = {
        name: formData.name || 'Not provided',
        email: formData.email || 'Not provided',
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not specified',
        equipmentBrand: this.formatEquipmentBrand(formData.equipmentBrand) || 'Not specified',
        equipmentModel: formData.equipmentModel || 'Not specified',
        issue: this.formatIssueType(formData.issue) || 'Not specified',
        urgency: this.formatUrgency(formData.urgency) || 'Medium Priority',
        description: formData.description || 'No description provided',
        // Additional fields for template
        timestamp: new Date().toLocaleString(),
        requestId: this.generateRequestId()
      };

      console.log('Sending email with params:', emailParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        emailParams
      );

      console.log('Email sent successfully:', response);

      return {
        success: true,
        message: 'Ваша заявка на ремонт была успешно отправлена. Мы свяжемся с вами в течение 24 часов.',
        request_id: emailParams.requestId
      };

    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Provide user-friendly error messages
      let errorMessage = 'Failed to submit repair request. Please try again.';
      
      if (error.status === 400) {
        errorMessage = 'Please check all required fields and try again.';
      } else if (error.status === 403) {
        errorMessage = 'Service temporarily unavailable. Please call us directly.';
      } else if (error.text) {
        errorMessage = `Error: ${error.text}`;
      }

      throw new Error(errorMessage);
    }
  }

  generateRequestId() {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substr(2, 5);
    return `PC-${timestamp}-${randomStr}`.toUpperCase();
  }

  // Test connection method
  async testConnection() {
    try {
      const testParams = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+1234567890',
        company: 'Test Company',
        equipmentBrand: 'HP',
        equipmentModel: 'Test Model',
        issue: 'Test Issue',
        urgency: 'Medium Priority',
        description: 'This is a test message to verify EmailJS integration.',
        timestamp: new Date().toLocaleString(),
        requestId: 'TEST-' + Date.now()
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        testParams
      );

      return { success: true, message: 'Test email sent successfully!' };
    } catch (error) {
      console.error('Test failed:', error);
      return { success: false, message: 'Test failed: ' + error.text };
    }
  }
}

export default new EmailService();