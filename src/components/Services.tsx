import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Terapia",
    subtitle: "Sesiones Individuales",
    description: "Psicoterapia especializada combinando enfoques tradicionales con trabajo de conciencia para un crecimiento integral.",
    features: ["Preparación terapéutica", "Apoyo en integración", "Terapia tradicional", "Opciones de formato"],
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5"
  },
  {
    title: "Introspección",
    subtitle: "Exploración Interior",
    description: "Sesiones guiadas de autoexploración y trabajo interior para conectar con tu sabiduría interna.",
    features: ["Meditación guiada", "Prácticas mindfulness", "Facilitación del trabajo interior", "Coaching de crecimiento"],
    color: "accent",
    gradient: "from-accent/20 to-accent/5"
  },
  {
    title: "Acompañamiento",
    subtitle: "Apoyo Terapéutico",
    description: "Acompañamiento profesional durante experiencias de expansión de conciencia con protocolos de seguridad.",
    features: ["Guía profesional", "Monitoreo de seguridad", "Regulación emocional", "Protocolos de crisis"],
    color: "sunset",
    gradient: "from-sunset/20 to-sunset/5"
  },
  {
    title: "Ceremonias",
    subtitle: "Experiencias Sagradas",
    description: "Ceremonias con plantas sagradas diseñadas ritualmente con respeto cultural y protocolos tradicionales.",
    features: ["Ofertas ceremoniales", "Diseño ritual", "Protocolos culturales", "Requisitos de preparación"],
    color: "sacred",
    gradient: "from-sacred/20 to-sacred/5"
  },
  {
    title: "Retiros",
    subtitle: "Experiencias Inmersivas",
    description: "Retiros multiday combining terapia grupal, naturaleza y ceremonias para una sanación profunda.",
    features: ["Talleres grupales", "Experiencias inmersivas", "Entornos naturales", "Jornadas de sanación"],
    color: "primary",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    title: "Integración",
    subtitle: "Proceso de Incorporación",
    description: "Apoyo terapéutico post-ceremonia para procesar e integrar las experiencias en la vida cotidiana.",
    features: ["Sesiones de procesamiento", "Seguimiento terapéutico", "Integración de estilo de vida", "Grupos de apoyo"],
    color: "secondary",
    gradient: "from-secondary/10 to-primary/10"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-4">
            NUESTROS SERVICIOS
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            Caminos de Transformación
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada servicio está diseñado para acompañarte en diferentes etapas de tu proceso de sanación 
            y crecimiento personal, desde la preparación hasta la integración completa.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 earth-glow hover:scale-[1.02] transition-smooth border border-border/50"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-50`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6">
                  <div className={`inline-block w-12 h-12 bg-${service.color}/20 rounded-full mb-4 flex items-center justify-center`}>
                    <div className={`w-6 h-6 bg-${service.color} rounded-full animate-glow`} />
                  </div>
                  
                  <h3 className="text-2xl font-heading text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className={`text-${service.color} font-medium mb-4`}>
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 bg-${service.color} rounded-full`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-accent/10 group-hover:border-accent/30 transition-smooth"
                >
                  Más Información
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="sacred" size="lg" className="px-12 py-4 text-lg">
            Agendar Consulta Inicial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;