import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, language } = useLanguage();

  // Get features arrays from translations
  const getFeatures = (key: string): string[] => {
    const translations = {
      es: {
        'service.therapy.features': ['Técnicas de autoconocimiento', 'Una conexión más profunda contigo mismo', 'Preguntas reflexivas y de autoindagación', 'Escucha activa y apoyo empático', 'Ejercicios de escritura y journaling'],
        'service.introspection.features': ['26 semanas de duración', '3 horas por sesión', 'Grupos en español e inglés', 'Solo mujeres 21-70 años', 'Cupo limitado', '$25 USD por sesión'],
        'service.introspection.details.list': ['Frecuencia: Una vez por semana (2 horas cada una)', 'Idioma: Inglés o Español', 'Precio: $25 USD por sesión', 'Rango de edad: Mujeres de 21–80 años'],
        'service.accompaniment.features': ['26 semanas de duración', 'Sesiones de 2 horas', 'Grupos en español e inglés', 'Hombres y mujeres 21-80 años', 'Cupo limitado', '$25 USD por sesión'],
        'service.accompaniment.details.list': ['Frecuencia: Una vez por semana (2 horas cada una)', 'Idioma: Inglés o Español', 'Precio: $25 USD por sesión por persona', 'Rango de edad: 21–80 años'],
        'service.ceremonies.includes.list': ['Sesiones de preparación individuales', 'Sesiones terapéuticas en estados amplificados de consciencia (si es apropiado)', 'Terapia de integración posterior a la sesión'],
        'service.ceremonies.features': ['12 sesiones previas (3 meses)', 'Terapia con psicodélicos', '4 sesiones de integración', 'Acompañamiento personalizado'],
        'service.retreats.features': ['Un espacio seguro para el autoanálisis', 'Herramientas duraderas para la introspección', 'Acompañamiento personalizado', 'Relajación y calma interior', 'Nuevas perspectivas sobre tu proceso personal', 'Apoyo y compañerismo'],
        'service.preparation.tools.list': ['Meditaciones', 'Técnicas de respiración', 'Ejercicios reflexivos', 'Prácticas de anclaje'],
        'service.integration.gain.list': ['Indicaciones reflexivas y de autoanálisis', 'Apoyo emocional y psicológico', 'Conexión grupal e ideas compartidas'],
        'service.integration.details.list': ['Duración: 2 horas', 'Idioma: Inglés o Español', 'Precio: $25 USD por persona'],
        'service.individual.approach.list': [],
        'service.individual.features': ['Claridad sobre tu experiencia', 'Un espacio seguro y confidencial', 'Escucha activa y acompañamiento empático', 'Herramientas sólidas para la integración', 'Mayor profundidad en tu proceso personal']
      },
      en: {
        'service.therapy.features': ['Self-awareness techniques', 'A deeper connection with yourself', 'Reflective and self-inquiry questions', 'Active listening and empathetic support', 'Writing and journaling exercises'],
        'service.introspection.features': ['26-week duration', '2-hour sessions', 'Spanish and English groups', 'Women only 21-80 years', 'Limited capacity', '$25 USD per session'],
        'service.introspection.details.list': ['Frequency: Once per week (2 hours each)', 'Language: English or Spanish', 'Price: $25 USD per session', 'Age range: Women 21–80 years'],
        'service.accompaniment.features': ['26-week duration', '2-hour sessions', 'Spanish and English groups', 'Men and women 21-80 years', 'Limited capacity', '$25 USD per session'],
        'service.accompaniment.details.list': ['Frequency: Once per week (2 hours each)', 'Language: English or Spanish', 'Price: $25 USD per session per person', 'Age range: 21–80 years'],
        'service.ceremonies.includes.list': ['One-on-one preparation sessions', 'Therapeutic sessions in amplified states of consciousness (if appropriate)', 'Post-session integration therapy'],
        'service.ceremonies.features': ['12 prior sessions (3 months)', 'Psychedelic therapy', '4 integration sessions', 'Personalized accompaniment'],
        'service.retreats.features': ['A safe space for self-analysis', 'Lasting tools for introspection', 'Personalized accompaniment', 'Relaxation and inner calm', 'New perspectives on your personal process', 'Support and companionship'],
        'service.preparation.tools.list': ['Meditations', 'Breathing techniques', 'Reflective Exercises', 'Grounding Practices'],
        'service.integration.gain.list': ['Reflective and self-analysis prompts', 'Emotional and psychological support', 'Group connection and shared insights'],
        'service.integration.details.list': ['Duration: 2 hours', 'Language: English or Spanish', 'Price: $25 USD per person'],
        'service.individual.approach.list': [],
        'service.individual.features': ['Clarity about your experience', 'A safe and confidential space', 'Active listening and empathetic accompaniment', 'Solid tools for integration', 'Greater depth in your personal process']
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
      intro: t('service.accompaniment.intro'),
      details: t('service.accompaniment.details'),
      detailsList: getFeatures('service.accompaniment.details.list'),
      features: getFeatures('service.accompaniment.features'),
      color: "sunset",
      gradient: "from-sunset/20 to-sunset/5"
    },
    {
      title: t('service.ceremonies.title'),
      subtitle: t('service.ceremonies.subtitle'),
      intro: t('service.ceremonies.intro'),
      includes: t('service.ceremonies.includes'),
      includesList: getFeatures('service.ceremonies.includes.list'),
      warning: t('service.ceremonies.warning'),
      color: "sacred",
      gradient: "from-sacred/20 to-sacred/5"
    },
    {
      title: t('service.retreats.title'),
      subtitle: t('service.retreats.subtitle'),
      description: t('service.retreats.description'),
      gain: t('service.retreats.gain'),
      features: getFeatures('service.retreats.features'),
      closing: t('service.retreats.closing'),
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: t('service.preparation.title'),
      subtitle: t('service.preparation.subtitle'),
      description: t('service.preparation.description'),
      tools: t('service.preparation.tools'),
      toolsList: getFeatures('service.preparation.tools.list'),
      closing: t('service.preparation.closing'),
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: t('service.integration.title'),
      subtitle: t('service.integration.subtitle'),
      intro: t('service.integration.intro'),
      gain: t('service.integration.gain'),
      gainList: getFeatures('service.integration.gain.list'),
      details: t('service.integration.details'),
      detailsList: getFeatures('service.integration.details.list'),
      color: "secondary",
      gradient: "from-secondary/10 to-primary/10"
    },
    {
      title: t('service.individual.title'),
      subtitle: t('service.individual.subtitle'),
      description: t('service.individual.description'),
      gain: t('service.individual.gain'),
      features: getFeatures('service.individual.features'),
      closing: t('service.individual.closing'),
      color: "accent",
      gradient: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16 space-y-4">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-accent/10 text-accent font-medium rounded-full text-xs md:text-sm mb-2 md:mb-4">
            {t('services.section')}
          </span>
          <h2 className="text-2xl md:text-4xl font-heading text-primary mb-4 md:mb-6 font-semibold px-4">
            {t('services.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {t('services.description')}
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative bg-card rounded-2xl p-4 md:p-8 earth-glow hover:scale-[1.02] transition-smooth border border-border/50"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-50`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 md:mb-6">
                  <div className={`inline-block w-10 h-10 md:w-12 md:h-12 bg-${service.color}/20 rounded-full mb-3 md:mb-4 flex items-center justify-center`}>
                    <div className={`w-5 h-5 md:w-6 md:h-6 bg-${service.color} rounded-full animate-glow`} />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-heading text-primary mb-2 font-semibold text-center md:text-left">
                    {service.title}
                  </h3>
                  <p className={`text-${service.color} font-medium mb-3 md:mb-4 text-sm md:text-base text-center md:text-left`}>
                    {service.subtitle.includes('Format:') ? (
                      <>
                        <span className="font-bold">Format:</span> {service.subtitle.replace('Format:', '').trim()}
                      </>
                    ) : (
                      service.subtitle
                    )}
                  </p>
                  {/* Intro text for Women's Circles and Mixed Circles */}
                  {service.intro && (
                    <p className="text-foreground mb-3 md:mb-4 leading-relaxed text-sm md:text-base text-center md:text-left">
                      {service.intro}
                    </p>
                  )}
                  {/* Details list for Women's Circles and Mixed Circles */}
                  {service.detailsList && service.detailsList.length > 0 && (
                    <div className="mt-3 md:mt-4 mb-3 md:mb-4">
                      <p className="font-bold text-foreground mb-2 md:mb-3 text-sm md:text-base text-center md:text-left">{service.details}</p>
                      <ul className="space-y-2">
                        {service.detailsList.map((detail: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground text-xs md:text-sm">
                            <span className={`text-${service.color} mt-1 flex-shrink-0`}>•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Includes list for Therapy in Amplified States */}
                  {service.includesList && service.includesList.length > 0 && (
                    <div className="mt-3 md:mt-4 mb-3 md:mb-4">
                      <p className="font-bold text-foreground mb-2 md:mb-3 text-sm md:text-base text-center md:text-left">{service.includes}</p>
                      <ul className="space-y-2">
                        {service.includesList.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground text-xs md:text-sm">
                            <span className={`text-${service.color} mt-1 flex-shrink-0`}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Warning for Therapy in Amplified States */}
                  {service.warning && (
                    <p className="text-foreground text-xs md:text-sm mt-3 md:mt-4 leading-relaxed text-center md:text-left">
                      {service.warning}
                    </p>
                  )}
                  {service.description && (
                    <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base text-center md:text-left whitespace-pre-line">
                      {service.description}
                    </p>
                  )}
                  
                  {/* Gain list (You'll receive) for therapy and integration services */}
                  {service.gainList && service.gainList.length > 0 && (
                    <div className="mt-3 md:mt-4">
                      <p className="font-bold text-foreground mb-2 md:mb-3 text-sm md:text-base text-center md:text-left">{service.gain}</p>
                      <ul className="space-y-2">
                        {service.gainList.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground text-xs md:text-sm">
                            <span className={`text-${service.color} mt-1 flex-shrink-0`}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  
                  {/* Closing text for Retreats and Preparation */}
                  {service.closing && !service.toolsList && !service.features && (
                    <p className="text-foreground mt-3 md:mt-4 leading-relaxed text-sm md:text-base text-center md:text-left whitespace-pre-line">
                      {service.closing}
                    </p>
                  )}
                  
                  {/* Tools list for Preparation */}
                  {service.toolsList && service.toolsList.length > 0 && (
                    <div className="mt-3 md:mt-4">
                      <p className="font-bold text-foreground mb-2 md:mb-3 text-sm md:text-base text-center md:text-left">{service.tools}</p>
                      <ul className="space-y-2">
                        {service.toolsList.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground text-xs md:text-sm">
                            <span className={`text-${service.color} mt-1 flex-shrink-0`}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {service.closing && (
                        <p className="text-foreground mt-3 md:mt-4 leading-relaxed text-sm md:text-base text-center md:text-left">
                          {service.closing}
                        </p>
                      )}
                    </div>
                  )}
                  
                  
                  {/* Features list for therapy service and retreats */}
                  {service.features && service.features.length > 0 && (index === 0 || service.gain) && (
                    <div className="mt-3 md:mt-4">
                      <p className="font-bold text-foreground mb-2 md:mb-3 text-sm md:text-base text-center md:text-left">
                        {index === 0 ? t('service.therapy.gain') : service.gain}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground text-xs md:text-sm">
                            <span className={`text-${service.color} mt-1 flex-shrink-0`}>•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {service.closing && service.gain && (
                        <p className="text-foreground mt-3 md:mt-4 leading-relaxed text-sm md:text-base text-center md:text-left whitespace-pre-line">
                          {service.closing}
                        </p>
                      )}
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