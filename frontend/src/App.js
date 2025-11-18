import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import EquipmentSection from "./components/EquipmentSection";
import AboutSection from "./components/AboutSection";
import RepairRequestForm from "./components/RepairRequestForm";
import Footer from "./components/Footer";
import UserAgreement from "./pages/UserAgreement";
import PrinterSelection from "./pages/PrinterSelection";
import PrinterErrorGuide from "./pages/PrinterErrorGuide";
import PrintDefectsGuide from "./pages/PrintDefectsGuide";
import TermsOfService from "./pages/TermsOfService";
import { Toaster } from "./components/ui/toaster";
import { Helmet } from "react-helmet-async";
import HpRepair from "./pages/brands/HpRepair";
import CanonRepair from "./pages/brands/CanonRepair";
import KyoceraRepair from "./pages/brands/KyoceraRepair";
import RicohRepair from "./pages/brands/RicohRepair";
import KonicaMinoltaRepair from "./pages/brands/KonicaMinoltaRepair";
import XeroxRepair from "./pages/brands/XeroxRepair";
import Pricing from "./pages/Pricing";
import Districts from "./pages/Districts";
import AboutUs from "./pages/AboutUs";

const Home = () => {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Комплекс Принт",
    alternateName: "ComplexPrint",
    url: "https://complexprint.ru/",
    telephone: "+7-495-103-14-68",
    email: "9104297686@outlook.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "RU",
      addressLocality: "Москва",
      streetAddress: "Абрамцевская 11 к1 стр3",
    },
    areaServed: ["Москва", "Московская область"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "₽₽",
    description:
      "Профессиональный ремонт и обслуживание лазерных принтеров и МФУ в Москве и МО. Выезд мастера, оригинальные запчасти, гарантия 6 месяцев.",
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ремонт принтеров в Москве с выездом | ComplexPrint — HP, Canon, Kyocera, Ricoh. Гарантия 6 месяцев</title>
        <meta name="description" content="Профессиональный ремонт и обслуживание лазерных принтеров и МФУ в Москве и МО. Выезд мастера в день обращения, оригинальные запчасти, договор и гарантия 6 месяцев. HP, Canon, Kyocera, Ricoh. Приём заявок 24/7." />
        <link rel="canonical" href="https://complexprint.ru/" />
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <EquipmentSection />
        <AboutSection />
        <RepairRequestForm />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-agreement" element={<UserAgreement />} />
          <Route path="/printer-selection" element={<PrinterSelection />} />
          <Route path="/printer-error-guide" element={<PrinterErrorGuide />} />
          <Route path="/print-defects-guide" element={<PrintDefectsGuide />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/remont-printerov-hp" element={<HpRepair />} />
          <Route path="/remont-printerov-canon" element={<CanonRepair />} />
          <Route path="/remont-printerov-kyocera" element={<KyoceraRepair />} />
          <Route path="/remont-printerov-ricoh" element={<RicohRepair />} />
          <Route path="/remont-printerov-konica-minolta" element={<KonicaMinoltaRepair />} />
          <Route path="/remont-printerov-xerox" element={<XeroxRepair />} />
          <Route path="/ceny" element={<Pricing />} />
          <Route path="/rayony-moskvy" element={<Districts />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
