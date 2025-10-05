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
import { Toaster } from "./components/ui/toaster";

const Home = () => {
  return (
    <div className="min-h-screen">
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
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;