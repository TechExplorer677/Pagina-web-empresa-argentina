import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const handleContactClose = () => {
    setIsContactOpen(false);
  };

  return (
    <div className="min-h-screen" data-testid="page-home">
      {/* Header with Theme Toggle */}
      <div className="relative">
        <Header onContactClick={handleContactClick} />
        
        {/* Theme toggle positioned in top right */}
        <div className="fixed top-4 right-4 z-40">
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content */}
      <main>
        <Hero onContactClick={handleContactClick} />
        <Services />
        <Portfolio />
        <About />
      </main>

      {/* Footer */}
      <Footer onContactClick={handleContactClick} />

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <ContactForm 
            isOpen={isContactOpen} 
            onClose={handleContactClose} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}