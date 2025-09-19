import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Rocket, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  onContactClick: () => void;
}

const footerLinks = {
  services: [
    { name: "Chatbots Inteligentes", href: "#servicios" },
    { name: "Desarrollo Web", href: "#servicios" },
    { name: "E-commerce", href: "#servicios" },
    { name: "Sistemas de Gestión", href: "#servicios" },
  ],
  company: [
    { name: "Sobre Nosotros", href: "#nosotros" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Blog", href: "#" },
    { name: "Carreras", href: "#" },
  ],
  resources: [
    { name: "Documentación", href: "#" },
    { name: "Tutoriales", href: "#" },
    { name: "Casos de Estudio", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  legal: [
    { name: "Términos de Servicio", href: "#" },
    { name: "Política de Privacidad", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Aviso Legal", href: "#" },
  ],
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className="relative border-t overflow-hidden" data-testid="footer-main">
      {/* Futuristic Footer Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/98 to-card" />
        
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0,10 L20,10 M10,0 L10,20 M5,5 L15,5 M5,15 L15,15" 
                      stroke="rgba(var(--primary), 0.3)" 
                      strokeWidth="0.5" 
                      fill="none"/>
                <circle cx="10" cy="10" r="1" fill="rgba(var(--primary), 0.4)"/>
                <circle cx="5" cy="5" r="0.5" fill="rgba(var(--secondary), 0.3)"/>
                <circle cx="15" cy="15" r="0.5" fill="rgba(var(--secondary), 0.3)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
        
        {/* Data Stream Lines */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{ animation: 'data-stream-1 3s ease-in-out infinite' }}
          />
          <div 
            className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
            style={{ animation: 'data-stream-2 4s ease-in-out infinite 1s' }}
          />
          <div 
            className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{ animation: 'data-stream-3 5s ease-in-out infinite 2s' }}
          />
        </div>
        
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 w-px bg-gradient-to-b from-primary/20 via-primary/5 to-transparent"
              style={{
                left: `${10 + i * 9}%`,
                height: '100%',
                animation: `matrix-rain ${2 + i % 3}s linear infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
        
        {/* Holographic Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 30%, rgba(var(--primary), 0.03) 50%, transparent 70%),
              linear-gradient(-45deg, transparent 30%, rgba(var(--secondary), 0.02) 50%, transparent 70%)
            `,
            animation: 'holographic 8s ease-in-out infinite'
          }}
        />
        
        {/* Glitch Effect */}
        <div 
          className="absolute top-0 left-0 w-full h-2 bg-primary/10"
          style={{ 
            animation: 'glitch 6s ease-in-out infinite',
            clipPath: 'polygon(0 0, 100% 0, 98% 100%, 2% 100%)'
          }}
        />
      </div>
      
      <style>{`
        @keyframes data-stream-1 {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes data-stream-2 {
          0% { transform: translateX(100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        
        @keyframes data-stream-3 {
          0% { transform: translateX(-50%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(150%); opacity: 0; }
        }
        
        @keyframes matrix-rain {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes holographic {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes glitch {
          0%, 90%, 100% { transform: translateX(0); }
          95% { transform: translateX(5px); }
          97% { transform: translateX(-3px); }
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 mb-6" data-testid="footer-brand">
                  <div className="p-2 bg-primary rounded-lg">
                    <Rocket className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-bold">TechSolutions</span>
                </div>
                
                <p className="text-muted-foreground mb-6 max-w-md" data-testid="footer-description">
                  Transformamos ideas en soluciones digitales extraordinarias. 
                  Especialistas en chatbots, desarrollo web y sistemas de gestión modernos.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm" data-testid="footer-contact-email">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>hola@techsolutions.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm" data-testid="footer-contact-phone">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm" data-testid="footer-contact-location">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>Ciudad de México, México</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={onContactClick}
                  className="hover-elevate"
                  data-testid="footer-cta-button"
                >
                  Iniciar Proyecto
                </Button>
              </motion.div>
            </div>

            {/* Services Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-semibold mb-4" data-testid="footer-services-title">
                  Servicios
                </h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded -mx-2"
                        data-testid={`footer-service-link-${index}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.querySelector(link.href);
                          element?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Company Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-semibold mb-4" data-testid="footer-company-title">
                  Empresa
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded -mx-2"
                        data-testid={`footer-company-link-${index}`}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            const element = document.querySelector(link.href);
                            element?.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Resources Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="font-semibold mb-4" data-testid="footer-resources-title">
                  Recursos
                </h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded -mx-2"
                        data-testid={`footer-resource-link-${index}`}
                        onClick={() => console.log(`Navegando a ${link.name}`)}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Legal Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="font-semibold mb-4" data-testid="footer-legal-title">
                  Legal
                </h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded -mx-2"
                        data-testid={`footer-legal-link-${index}`}
                        onClick={() => console.log(`Navegando a ${link.name}`)}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="text-sm text-muted-foreground" data-testid="footer-copyright">
              © 2024 TechSolutions. Todos los derechos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="hover-elevate"
                  onClick={() => console.log(`Navegando a ${social.label}`)}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}