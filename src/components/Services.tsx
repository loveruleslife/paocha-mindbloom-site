import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('service.therapy.title'),
      subtitle: t('service.therapy.subtitle'),
      description: t('service.therapy.description'),
      features: [
        t('service.therapy.features.0'),
        t('service.therapy.features.1'),
        t('service.therapy.features.2'),
        t('service.therapy.features.3'),
        t('service.therapy.features.4'),
        t('service.therapy.features.5')
      ],
      color: "secondary",
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      title: t('service.introspection.title'),
      subtitle: t('service.introspection.subtitle'),
      description: t('service.introspection.description'),
      features: [
        t('service.introspection.features.0'),
        t('service.introspection.features.1'),
        t('service.introspection.features.2'),
        t('service.introspection.features.3')
      ],
      color: "accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      title: t('service.accompaniment.title'),
      subtitle: t('service.accompaniment.subtitle'),
      description: t('service.accompaniment.description'),
      features: [
        t('service.accompaniment.features.0'),
        t('service.accompaniment.features.1'),
        t('service.accompaniment.features.2'),
        t('service.accompaniment.features.3')
      ],
      color: "sunset",
      gradient: "from-sunset/20 to-sunset/5"
    },
    {
      title: t('service.ceremonies.title'),
      subtitle: t('service.ceremonies.subtitle'),
      description: t('service.ceremonies.description'),
      features: [
        t('service.ceremonies.features.0'),
        t('service.ceremonies.features.1'),
        t('service.ceremonies.features.2'),
        t('service.ceremonies.features.3')
      ],
      color: "sacred",
      gradient: "from-sacred/20 to-sacred/5"
    },
    {
      title: t('service.retreats.title'),
      subtitle: t('service.retreats.subtitle'),
      description: t('service.retreats.description'),
      features: [
        t('service.retreats.features.0'),
        t('service.retreats.features.1'),
        t('service.retreats.features.2'),
        t('service.retreats.features.3')
      ],
      color: "primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      title: t('service.integration.title'),
      subtitle: t('service.integration.subtitle'),
      description: t('service.integration.description'),
      features: [
        t('service.integration.features.0'),
        t('service.integration.features.1'),
        t('service.integration.features.2'),
        t('service.integration.features.3')
      ],
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
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Features list */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 bg-${service.color} rounded-full mt-2 flex-shrink-0`} />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;