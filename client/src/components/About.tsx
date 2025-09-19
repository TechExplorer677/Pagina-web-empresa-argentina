import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Target } from "lucide-react";
import teamImage from "@assets/generated_images/Modern_software_development_office_e04b5403.png";

const stats = [
  { icon: Users, value: "25+", label: "Clientes Satisfechos", color: "text-blue-500" },
  { icon: Award, value: "50+", label: "Proyectos Completados", color: "text-green-500" },
  { icon: Clock, value: "5+", label: "Años de Experiencia", color: "text-purple-500" },
  { icon: Target, value: "98%", label: "Tasa de Éxito", color: "text-orange-500" },
];

const values = [
  {
    title: "Innovación Constante",
    description: "Siempre adoptamos las últimas tecnologías para ofrecer soluciones de vanguardia.",
    icon: "🚀"
  },
  {
    title: "Calidad Premium",
    description: "Cada línea de código es cuidadosamente revisada para garantizar la máxima calidad.",
    icon: "⭐"
  },
  {
    title: "Soporte 24/7",
    description: "Estamos disponibles cuando nos necesites, brindando soporte continuo y confiable.",
    icon: "🔒"
  },
  {
    title: "Resultados Medibles",
    description: "Nos enfocamos en generar impacto real y resultados cuantificables para tu negocio.",
    icon: "📈"
  }
];

const team = [
  {
    name: "Carlos Rodríguez",
    role: "CEO & Full Stack Developer",
    skills: ["React", "Node.js", "AWS", "Python"],
    experience: "8+ años"
  },
  {
    name: "Ana González",
    role: "Frontend Specialist & UX Designer",
    skills: ["React", "TypeScript", "Figma", "TailwindCSS"],
    experience: "6+ años"
  },
  {
    name: "Miguel Torres",
    role: "Backend Developer & DevOps",
    skills: ["Node.js", "PostgreSQL", "Docker", "Kubernetes"],
    experience: "7+ años"
  }
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden" data-testid="section-about">
      {/* Organic Liquid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/98 to-background" />
        
        {/* Liquid Morphing Shapes */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse 800px 600px at 50% 0%, rgba(var(--primary), 0.05), transparent),
                radial-gradient(ellipse 600px 400px at 100% 100%, rgba(var(--secondary), 0.03), transparent),
                radial-gradient(ellipse 400px 300px at 0% 50%, rgba(var(--primary), 0.04), transparent)
              `,
              animation: 'liquid-flow 20s ease-in-out infinite'
            }}
          />
        </div>
        
        {/* Organic Blob Animation */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/5"
            style={{
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              animation: 'blob-morph 15s ease-in-out infinite',
              filter: 'blur(40px)'
            }}
          />
          <div 
            className="absolute bottom-1/3 left-1/3 w-96 h-72 bg-gradient-to-tr from-secondary/8 to-primary/6"
            style={{
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              animation: 'blob-morph-2 18s ease-in-out infinite',
              filter: 'blur(50px)'
            }}
          />
        </div>
        
        {/* Perlin Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Ripple Effect */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/2 left-1/2 w-4 h-4 border border-primary/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ animation: 'ripple 4s ease-out infinite' }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-4 h-4 border border-secondary/15 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ animation: 'ripple 4s ease-out infinite 1s' }}
          />
        </div>
        
        {/* Ambient Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${20 + (i * 7) % 60}%`,
                top: `${15 + (i * 11) % 70}%`,
                animation: `ambient-float ${4 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes liquid-flow {
          0%, 100% { transform: scale(1) rotate(0deg); filter: hue-rotate(0deg); }
          33% { transform: scale(1.1) rotate(120deg); filter: hue-rotate(30deg); }
          66% { transform: scale(0.9) rotate(240deg); filter: hue-rotate(-30deg); }
        }
        
        @keyframes blob-morph {
          0%, 100% { 
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: translate(0, 0) scale(1);
          }
          25% { 
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: translate(20px, -20px) scale(1.1);
          }
          50% { 
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
            transform: translate(-15px, 15px) scale(0.9);
          }
          75% { 
            border-radius: 40% 30% 60% 70% / 60% 50% 40% 30%;
            transform: translate(10px, -10px) scale(1.05);
          }
        }
        
        @keyframes blob-morph-2 {
          0%, 100% { 
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            transform: translate(0, 0) scale(1);
          }
          33% { 
            border-radius: 58% 42% 45% 55% / 45% 60% 35% 65%;
            transform: translate(-25px, 20px) scale(1.15);
          }
          66% { 
            border-radius: 45% 55% 60% 40% / 55% 45% 65% 35%;
            transform: translate(15px, -25px) scale(0.85);
          }
        }
        
        @keyframes ripple {
          0% { width: 4px; height: 4px; opacity: 1; }
          100% { width: 200px; height: 200px; opacity: 0; }
        }
        
        @keyframes ambient-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-40px) scale(1.3); opacity: 0.8; }
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="about-title">
            Conoce Nuestro Equipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            Somos un equipo apasionado de desarrolladores y diseñadores comprometidos con 
            transformar ideas en soluciones digitales extraordinarias.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6" data-testid="about-mission-title">
              Nuestra Misión
            </h3>
            <p className="text-muted-foreground text-lg mb-6" data-testid="about-mission-text">
              Democratizar la tecnología ayudando a empresas de todos los tamaños a acceder 
              a soluciones digitales de clase mundial. Creemos que cada negocio merece tener 
              herramientas tecnológicas que impulsen su crecimiento.
            </p>
            
            <h3 className="text-2xl font-bold mb-6" data-testid="about-approach-title">
              Nuestro Enfoque
            </h3>
            <p className="text-muted-foreground text-lg mb-8" data-testid="about-approach-text">
              Combinamos metodologías ágiles con las mejores prácticas de desarrollo para 
              entregar proyectos que no solo cumplan, sino que superen las expectativas. 
              Cada proyecto es una oportunidad de crear algo extraordinario.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                  data-testid={`about-stat-${index}`}
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={teamImage}
              alt="Nuestro equipo trabajando en proyectos innovadores"
              className="w-full h-auto rounded-2xl shadow-2xl"
              data-testid="about-team-image"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent" />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12" data-testid="about-values-title">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover-elevate border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4" data-testid={`about-value-icon-${index}`}>
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-3" data-testid={`about-value-title-${index}`}>
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid={`about-value-description-${index}`}>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12" data-testid="about-team-title">
            Nuestro Equipo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-elevate border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    {/* Avatar placeholder */}
                    <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold mb-2" data-testid={`team-member-name-${index}`}>
                      {member.name}
                    </h4>
                    <p className="text-primary font-medium mb-3" data-testid={`team-member-role-${index}`}>
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4" data-testid={`team-member-experience-${index}`}>
                      {member.experience} de experiencia
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs"
                          data-testid={`team-member-skill-${index}-${skillIndex}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}