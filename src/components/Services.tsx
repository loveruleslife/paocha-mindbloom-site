import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, language } = useLanguage();

  // Get features arrays from translations
  const getFeatures = (key: string): string[] => {
    const translations = {
      es: {
        'service.therapy.features': ['Técnicas de autoconocimiento', 'Una conexión más profunda contigo mismo', 'Preguntas reflexivas y de autoinvestigación', 'Escucha activa y apoyo empático', 'Ejercicios de escritura y journaling'],
        'service.introspection.features': ['26 semanas de duración', '3 horas por sesión', 'Grupos en español e inglés', 'Solo mujeres 21-70 años', 'Cupo limitado', '$25 USD por sesión'],
        'service.introspection.details.list': ['Frecuencia: Una vez por semana (2 horas cada una)', 'Idioma: Inglés o Español', 'Precio: $25 USD por sesión', 'Rango de edad: Mujeres de 21–80 años', 'Cupos limitados — Se requiere compromiso de asistencia del 80%'],
        'service.accompaniment.features': ['26 semanas de duración', 'Sesiones de 3 horas', 'Grupos en español e inglés', 'Hombres y mujeres 21-70 años', 'Cupo limitado', '$25 USD por sesión'],
        'service.ceremonies.features': ['12 sesiones previas (3 meses)', 'Terapia con psicodélicos', '4 sesiones de integración', 'Acompañamiento personalizado'],
        'service.retreats.features': ['Herramientas de preparación', 'Meditaciones y respiración', 'Mínimo 8 sesiones', 'Máximo 12 sesiones'],
        'service.integration.features': ['Sesiones de procesamiento', 'Seguimiento terapéutico', 'Integración de estilo de vida', 'Grupos de apoyo']
      },
      en: {
        'service.therapy.features': ['Self-awareness techniques', 'A deeper connection with yourself', 'Reflective and self-inquiry questions', 'Active listening and empathetic support', 'Writing and journaling exercises'],
        'service.introspection.features': ['26-week duration', '2-hour sessions', 'Spanish and English groups', 'Women only 21-80 years', 'Limited capacity', '$25 USD per session'],
        'service.introspection.details.list': ['Frequency: Once per week (2 hours each)', 'Language: English or Spanish', 'Price: $25 USD per session', 'Age range: Women 21–80 years', 'Limited spots — 80% attendance commitment required'],
        'service.accompaniment.features': ['26-week duration', '3-hour sessions', 'Spanish and English groups', 'Men and women 21-70 years', 'Limited capacity', '$25 USD per session'],
        'service.ceremonies.features': ['12 prior sessions (3 months)', 'Psychedelic therapy', '4 integration sessions', 'Personalized accompaniment'],
        'service.retreats.features': ['Preparation tools', 'Meditations and breathing', 'Minimum 8 sessions', 'Maximum 12 sessions'],
        'service.integration.features': ['Processing sessions', 'Therapeutic follow-up', 'Lifestyle integration', 'Support groups']
      }
    };
    return translations[language][key as keyof typeof translations[typeof language]] || [];
  };

  const services = [
    {
      title: t('service.therapy.title'),
      subtitle: t('service.therapy.subtitle'),
      description: t('service.therapy.description'),
      features: getFeatures('service.therapy.features'),
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      title: t('service.introspection.title'),
      subtitle: t('service.introspection.subtitle'),
      intro: t('service.introspection.intro'),
      details: t('service.introspection.details'),
      detailsList: getFeatures('service.introspection.details.list'),
      features: getFeatures('service.introspection.features'),
      color: "accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      title: t('service.accompaniment.title'),
      subtitle: t('service.accompaniment.subtitle'),
      description: t('service.accompaniment.description'),
      features: getFeatures('service.accompaniment.features'),
      color: "sunset",
      gradient: "from-sunset/20 to-sunset/5"
    },
    {
      title: t('service.ceremonies.title'),
      subtitle: t('service.ceremonies.subtitle'),
      description: t('service.ceremonies.description'),
      features: getFeatures('service.ceremonies.features'),
      color: "sacred",
      gradient: "from-sacred/20 to-sacred/5"
    },
    {
      title: t('service.retreats.title'),
      subtitle: t('service.retreats.subtitle'),
      description: t('service.retreats.description'),
      features: getFeatures('service.retreats.features'),
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: t('service.integration.title'),
      subtitle: t('service.integration.subtitle'),
      description: t('service.integration.description'),
      features: getFeatures('service.integration.features'),
      color: "secondary",
      gradient: "from-secondary/10 to-primary/10"
    }
  ];

  return (
    <section className="py-20 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-4">
            {t('services.section')}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('services.description')}
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
                    {service.subtitle.includes('Format:') ? (
                      <>
                        <span className="font-bold">Format:</span> {service.subtitle.replace('Format:', '').trim()}
                      </>
                    ) : (
                      service.subtitle
                    )}
                  </p>
                  {/* Intro text for Women's Circles */}
                  {service.intro && (
                    <p className="text-foreground mb-4 leading-relaxed">
                      {service.intro}
                    </p>
                  )}
                  {/* Details list for Women's Circles */}
                  {service.detailsList && service.detailsList.length > 0 && (
                    <div className="mt-4 mb-4">
                      <p className="font-bold text-foreground mb-3">{service.details}</p>
                      <ul className="space-y-2">
                        {service.detailsList.map((detail: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className={`text-${service.color} mt-1`}>•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features list for therapy service */}
                  {service.features && service.features.length > 0 && index === 0 && (
                    <div className="mt-4">
                      <p className="font-bold text-foreground mb-3">{t('service.therapy.gain')}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className={`text-${service.color} mt-1`}>•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;