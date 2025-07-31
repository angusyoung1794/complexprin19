// Mock data for Print Complex website

export const companyInfo = {
  name: "Print Complex",
  phone: "+79104297686",
  email: "9104297686@outlook.com",
  address: "Abramtsevskaya str., 2",
  description: "Save on printing equipment maintenance and extend its service life with our professional services."
};

export const services = [
  {
    id: 1,
    title: "Comprehensive Subscription Service",
    description: "Monthly or quarterly preventive maintenance ensuring long-term operation of your office equipment.",
    features: ["Preventive maintenance", "Unlimited repair time", "Guaranteed service", "Spare parts warranty"],
    popular: true
  },
  {
    id: 2,
    title: "One-time Repair Service",
    description: "Professional repair service for immediate equipment issues with warranty coverage.",
    features: ["Quick diagnosis", "Professional repair", "Service warranty", "Genuine spare parts"],
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
  "Laser Printers",
  "Plotters",
  "Multifunction Devices"
];

export const clientCompanies = [
  "Svyaznoy",
  "Stroygazmontazh", 
  "SovcomBank",
  "Burger King",
  "Cryogenmash",
  "X5 Group"
];

export const commonIssues = [
  { value: "poor-print-quality", label: "Poor Print Quality" },
  { value: "print-jams", label: "Print Jams" },
  { value: "paper-wont-pickup", label: "Paper Won't Pick Up" },
  { value: "screen-wont-light", label: "Screen Won't Light Up" },
  { value: "error-code", label: "Error Code Display" },
  { value: "toner-issues", label: "Toner/Ink Issues" },
  { value: "connectivity-problems", label: "Connectivity Problems" },
  { value: "other", label: "Other Issue" }
];

export const printerImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxwcmludGVyfGVufDB8fHx8MTc1Mzk3ODUyN3ww&ixlib=rb-4.1.0&q=85",
    alt: "Professional HP All-in-One Printer",
    brand: "HP"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1650094980833-7373de26feb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxwcmludGVyfGVufDB8fHx8MTc1Mzk3ODUyN3ww&ixlib=rb-4.1.0&q=85",
    alt: "White Office Copying Machine",
    brand: "Canon"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1708793699492-5fa208f52dcb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxwcmludGVyfGVufDB8fHx8MTc1Mzk3ODUyN3ww&ixlib=rb-4.1.0&q=85",
    alt: "Professional Printer in Office Environment",
    brand: "Kyocera"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1706895040634-62055892cbbb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxwcmludGVyfGVufDB8fHx8MTc1Mzk3ODUyN3ww&ixlib=rb-4.1.0&q=85",
    alt: "Color Ink Photo Printer",
    brand: "Ricoh"
  }
];

export const testimonials = [
  {
    id: 1,
    company: "Svyaznoy",
    text: "Print Complex has been maintaining our printing equipment for over 2 years. Their subscription service saves us significant costs.",
    author: "IT Department"
  },
  {
    id: 2,
    company: "SovcomBank", 
    text: "Professional service and quick response times. Our printers are always running smoothly.",
    author: "Operations Manager"
  },
  {
    id: 3,
    company: "X5 Group",
    text: "Reliable maintenance service that keeps our office equipment operating at peak performance.",
    author: "Facilities Team"
  }
];

export const repairProcessSteps = [
  {
    id: 1,
    title: "Request Submission",
    description: "Submit your repair request through our online form with equipment details and issue description.",
    icon: "FileText"
  },
  {
    id: 2,
    title: "Quick Diagnosis",
    description: "Our experienced technicians perform rapid diagnosis to identify the root cause of the problem.",
    icon: "Search"
  },
  {
    id: 3,
    title: "Professional Repair",
    description: "Using genuine spare parts and proven techniques, we restore your equipment to optimal condition.",
    icon: "Wrench"
  },
  {
    id: 4,
    title: "Quality Assurance", 
    description: "Comprehensive testing ensures your equipment operates perfectly before completion.",
    icon: "CheckCircle"
  }
];

// Mock function to simulate form submission
export const submitRepairRequest = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Repair request submitted:", formData);
      resolve({
        success: true,
        message: "Your repair request has been submitted successfully. We will contact you within 24 hours.",
        requestId: Math.random().toString(36).substr(2, 9).toUpperCase()
      });
    }, 1000);
  });
};