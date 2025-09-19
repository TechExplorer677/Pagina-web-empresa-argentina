import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import chatbotImage from "@assets/generated_images/Modern_chatbot_interface_6edad601.png";
import ecommerceImage from "@assets/generated_images/Modern_ecommerce_website_bb032bce.png";
import dashboardImage from "@assets/generated_images/Modern_business_dashboard_02f85fd2.png";

const portfolioItems = [
  {
    id: 1,
    title: "ChatBot IA para E-commerce",
    description: "Sistema inteligente de atención al cliente que incrementó las ventas en un 300% y redujo el tiempo de respuesta a menos de 2 segundos.",
    image: chatbotImage,
    category: "Chatbot",
    technologies: ["OpenAI GPT", "Node.js", "React", "MongoDB"],
    metrics: ["300% ↑ Conversiones", "2s Tiempo respuesta", "95% Satisfacción"],
  },
  {
    id: 2,
    title: "Plataforma E-commerce Premium",
    description: "Tienda online completa con gestión de inventario, múltiples pasarelas de pago y sistema de recomendaciones personalizado.",
    image: ecommerceImage,
    category: "E-commerce",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    metrics: ["500k+ Usuarios", "99.9% Uptime", "50% ↑ Ventas"],
  },
  {
    id: 3,
    title: "Dashboard Ejecutivo Empresarial",
    description: "Sistema de business intelligence con reportes en tiempo real, análisis predictivo y automatización de procesos clave.",
    image: dashboardImage,
    category: "Sistema",
    technologies: ["React", "D3.js", "Python", "AWS"],
    metrics: ["80% ↓ Tiempo análisis", "Real-time Data", "15 Integraciones"],
  },
];

const categories = ["Todos", "Chatbot", "E-commerce", "Sistema"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = selectedCategory === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portafolio" className="py-24 relative overflow-hidden" data-testid="section-portfolio">
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-primary/5" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(var(--primary), 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(var(--primary), 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Animated gradient blobs */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}} />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/8 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="portfolio-title">
            Casos de Éxito
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="portfolio-subtitle">
            Descubre cómo hemos transformado ideas en soluciones digitales exitosas que generan resultados reales.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-testid="portfolio-filters"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="hover-elevate"
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                layout
              >
                <Card 
                  className="overflow-hidden hover-elevate group cursor-pointer border-0 bg-card/50 backdrop-blur-sm"
                  onClick={() => setSelectedItem(item)}
                  data-testid={`portfolio-card-${item.id}`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      data-testid={`portfolio-image-${item.id}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                      {item.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2" data-testid={`portfolio-title-${item.id}`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4" data-testid={`portfolio-description-${item.id}`}>
                      {item.description.slice(0, 100)}...
                    </p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {item.metrics.slice(0, 2).map((metric, metricIndex) => (
                        <div 
                          key={metricIndex}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                          data-testid={`portfolio-metric-${item.id}-${metricIndex}`}
                        >
                          {metric}
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs"
                          data-testid={`portfolio-tech-${item.id}-${techIndex}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
              data-testid="portfolio-modal-overlay"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                data-testid="portfolio-modal"
              >
                <div className="relative">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-64 sm:h-80 object-cover rounded-t-2xl"
                    data-testid="portfolio-modal-image"
                  />
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute top-4 right-4"
                    onClick={() => setSelectedItem(null)}
                    data-testid="portfolio-modal-close"
                  >
                    ×
                  </Button>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold" data-testid="portfolio-modal-title">
                      {selectedItem.title}
                    </h3>
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {selectedItem.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6" data-testid="portfolio-modal-description">
                    {selectedItem.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {selectedItem.metrics.map((metric, index) => (
                      <div 
                        key={index}
                        className="text-center p-4 bg-primary/10 rounded-lg"
                        data-testid={`portfolio-modal-metric-${index}`}
                      >
                        <div className="font-bold text-primary">{metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Tecnologías utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="outline"
                          data-testid={`portfolio-modal-tech-${index}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      className="hover-elevate"
                      data-testid="portfolio-modal-live-demo"
                      onClick={() => console.log('Ver demo en vivo')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="hover-elevate"
                      data-testid="portfolio-modal-case-study"
                      onClick={() => console.log('Caso de estudio')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Caso de Estudio
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}