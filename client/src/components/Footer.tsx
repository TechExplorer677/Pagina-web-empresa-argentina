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
      {/* Modern footer background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/95 to-card" />
        
        {/* Subtle wave pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335z' fill='%23000'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom'
        }} />
        
        {/* Gradient accents */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>
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