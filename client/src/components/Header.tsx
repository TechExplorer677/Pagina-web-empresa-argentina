import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto", isButton: true },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
      data-testid="header-main"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
            data-testid="logo-brand"
          >
            <div className="p-2 bg-primary rounded-lg">
              <Rocket className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">TechSolutions</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.3 + (0.1 * index),
                  duration: 0.4,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
              >
                {item.isButton ? (
                  <Button
                    onClick={onContactClick}
                    className="hover-elevate"
                    data-testid={`button-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Button>
                ) : (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium hover-elevate px-3 py-2 rounded-md"
                    data-testid={`link-${item.name.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-elevate"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden border-t mt-4 pt-4 pb-4 overflow-hidden"
              data-testid="mobile-menu"
            >
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {item.isButton ? (
                      <Button
                        onClick={() => {
                          onContactClick();
                          setIsMenuOpen(false);
                        }}
                        className="w-full hover-elevate"
                        data-testid={`button-mobile-${item.name.toLowerCase()}`}
                      >
                        {item.name}
                      </Button>
                    ) : (
                      <a
                        href={item.href}
                        className="block py-2 px-4 text-foreground hover:text-primary hover:bg-accent rounded-md transition-all hover-elevate"
                        data-testid={`link-mobile-${item.name.toLowerCase()}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.querySelector(item.href);
                          element?.scrollIntoView({ behavior: "smooth" });
                          setIsMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}