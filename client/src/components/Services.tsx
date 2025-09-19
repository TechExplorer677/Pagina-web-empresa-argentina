import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Code, ShoppingCart, BarChart3, Smartphone, Globe } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description: "Automatiza la atención al cliente 24/7 con IA avanzada que entiende y responde naturalmente.",
    features: ["Procesamiento de lenguaje natural", "Integración multi-plataforma", "Análisis de sentimientos"],
  },
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Sitios web modernos, rápidos y responsive que convierten visitantes en clientes.",
    features: ["React & Next.js", "Optimización SEO", "Rendimiento ultra-rápido"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Plataformas de venta online completas con pasarelas de pago seguras y gestión de inventario.",
    features: ["Pasarelas de pago múltiples", "Gestión de inventario", "Panel administrativo"],
  },
  {
    icon: BarChart3,
    title: "Sistemas de Gestión",
    description: "Dashboards y CRM personalizados para optimizar tus procesos empresariales.",
    features: ["Reportes en tiempo real", "Automatización de procesos", "Integración con APIs"],
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas y híbridas para iOS y Android con experiencia de usuario excepcional.",
    features: ["React Native", "Diseño nativo", "Push notifications"],
  },
  {
    icon: Globe,
    title: "Consultoría Digital",
    description: "Estrategias tecnológicas personalizadas para transformar digitalmente tu empresa.",
    features: ["Auditoría tecnológica", "Roadmap digital", "Capacitación de equipos"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-muted/30" data-testid="section-services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="services-title">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="services-subtitle">
            Ofrecemos soluciones tecnológicas integrales que transforman la manera en que 
            tu empresa opera y se conecta con sus clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="h-full hover-elevate group border-0 bg-card/50 backdrop-blur-sm"
                data-testid={`service-card-${index}`}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3" data-testid={`service-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6" data-testid={`service-description-${index}`}>
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center text-sm text-muted-foreground"
                        data-testid={`service-feature-${index}-${featureIndex}`}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4" data-testid="services-cta-title">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="services-cta-subtitle">
                Conversemos sobre cómo podemos ayudarte a crear la solución perfecta para tu negocio.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover-elevate"
                onClick={() => {
                  const element = document.querySelector("#contacto");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid="services-cta-button"
              >
                Iniciar Conversación
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}