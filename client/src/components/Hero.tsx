import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/Modern_software_development_office_e04b5403.png";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      data-testid="section-hero"
    >
      {/* Ultra-Modern Glassmorphism Background */}
      <div className="absolute inset-0 z-0">
        {/* Base glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-primary/[0.08] to-secondary/[0.04] backdrop-blur-3xl" />
        
        {/* Animated morphing blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/15 rounded-full blur-3xl animate-pulse"
            style={{
              animation: 'morphing 15s ease-in-out infinite',
              animationDelay: '0s'
            }}
          />
          <div 
            className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-l from-secondary/20 to-primary/10 rounded-full blur-3xl animate-pulse"
            style={{
              animation: 'morphing 20s ease-in-out infinite',
              animationDelay: '5s'
            }}
          />
          <div 
            className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-2xl animate-pulse"
            style={{
              animation: 'floating 12s ease-in-out infinite',
              animationDelay: '3s'
            }}
          />
        </div>
        
        {/* CSS Particle Effect */}
        <div className="absolute inset-0 opacity-60">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle-float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Iridescent gradient mesh */}
        <div className="absolute inset-0 bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,rgb(36,0,255,0.05)_0deg,rgb(0,135,255,0.03)_67.5deg,rgb(108,39,157,0.04)_198.75deg,rgb(24,38,163,0.06)_251.25deg,rgb(54,103,196,0.02)_301.88deg,rgb(105,30,255,0.05)_360deg)]" />
      </div>
      
      <style>{`
        @keyframes morphing {
          0%, 100% { transform: scale(1) rotate(0deg); border-radius: 50%; }
          25% { transform: scale(1.2) rotate(90deg); border-radius: 60% 40% 30% 70%; }
          50% { transform: scale(0.8) rotate(180deg); border-radius: 30% 60% 70% 40%; }
          75% { transform: scale(1.1) rotate(270deg); border-radius: 40% 50% 60% 30%; }
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-15px); }
        }
        
        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 0.8; }
        }
      `}</style>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
              data-testid="hero-badge"
            >
              <Sparkles className="h-4 w-4" />
              <span>Soluciones Digitales Innovadoras</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              data-testid="hero-title"
            >
              Transformamos tus{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                ideas
              </span>{" "}
              en realidad digital
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl"
              data-testid="hero-subtitle"
            >
              Creamos chatbots inteligentes, sitios web modernos, plataformas de e-commerce 
              y sistemas de gestión que impulsan tu negocio hacia el futuro.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={onContactClick}
                className="hover-elevate group"
                data-testid="button-hero-primary"
              >
                Comenzar Proyecto
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector("#portafolio");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover-elevate"
                data-testid="button-hero-secondary"
              >
                Ver Portafolio
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t"
              data-testid="hero-stats"
            >
              {[
                { number: "50+", label: "Proyectos" },
                { number: "25+", label: "Clientes" },
                { number: "98%", label: "Satisfacción" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Equipo de desarrollo trabajando en soluciones modernas"
                className="w-full h-auto rounded-2xl shadow-2xl"
                data-testid="hero-image"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-4 -left-4 bg-card border rounded-lg p-4 shadow-lg"
              data-testid="hero-floating-card-1"
            >
              <div className="text-sm font-medium">Chatbot IA</div>
              <div className="text-xs text-muted-foreground">+300% engagement</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-card border rounded-lg p-4 shadow-lg"
              data-testid="hero-floating-card-2"
            >
              <div className="text-sm font-medium">Web App</div>
              <div className="text-xs text-muted-foreground">Responsive & rápida</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}