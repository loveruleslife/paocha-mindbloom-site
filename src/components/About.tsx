import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-card" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-accent/20 to-sacred/20 rounded-2xl p-6">
              {/* Logo, Quote, and Photo Section */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/c2b70d41-42e1-4a47-a06d-51aaf2be7517.png" 
                    alt="PaochaMama logo with sacred geometry"
                    className="w-full h-full object-contain animate-sacred-pulse"
                  />
                </div>
                <p className="text-muted-foreground italic text-sm mb-4">
                  {t('about.quote')}
                </p>
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-sacred/20">
                  <img 
                    src="/lovable-uploads/e09f1065-92d1-43f0-bb40-215f62ba27af.png" 
                    alt="Paola - Transpersonal Therapist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Gallery Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="aspect-square rounded-lg overflow-hidden bg-card border border-border/50">
                  <img 
                    src="/lovable-uploads/3f452383-bb86-4176-a866-721098e83996.png" 
                    alt="Ceremonial circle with oracle cards and healing elements"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-card border border-border/50">
                  <img 
                    src="/lovable-uploads/ee28387e-6c18-488c-b9a5-b24b5c485834.png" 
                    alt="Art therapy session with expressive painting"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-card border border-border/50">
                  <img 
                    src="/lovable-uploads/f03aa7c0-a275-4401-a298-0265c4838a5d.png" 
                    alt="Sacred ceremony setup with ritual bowls and natural elements"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-card border border-border/50">
                  <img 
                    src="/lovable-uploads/95f72e56-96da-499b-98ae-2604d276c123.png" 
                    alt="Sound healing with Tibetan singing bowls"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-card border border-border/50">
                  <img 
                    src="/lovable-uploads/06d5bcbd-dd44-435c-b605-ee272d3353b7.png" 
                    alt="Psilocybin healing ceremony information"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-card border border-border/50">
                  <img 
                    src="/lovable-uploads/ada0e47d-2749-4558-9f09-a1ca7940dd92.png" 
                    alt="Creative art therapy session outdoors"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-card border border-border/50">
                  <img 
                    src="/lovable-uploads/786139ab-78c5-425c-80fc-37f5f2ac4d64.png" 
                    alt="Art journal with therapeutic drawings"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-card border border-border/50">
                  <img 
                    src="/lovable-uploads/34b3ba06-f912-44a2-a69f-dfd1d3b9be6d.png" 
                    alt="Sacred medicine preparation"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent/30 rounded-full animate-float" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-sacred/30 rounded-full animate-float delay-1000" />
          </div>
          
          {/* Content side */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-sacred/10 text-sacred font-medium rounded-full text-sm mb-4">
                {t('about.section')}
              </span>
              <h2 className="text-4xl font-heading text-primary mb-6">
                {t('about.title')}
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                {t('about.p1')}
              </p>
              
              <p>
                {t('about.p2')}
              </p>
              
              <p>
                {t('about.p3')}
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm">{t('about.specialties.transpersonal')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">{t('about.specialties.psychedelic')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sacred rounded-full"></div>
                  <span className="text-sm">{t('about.specialties.ceremonies')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sunset rounded-full"></div>
                  <span className="text-sm">{t('about.specialties.integration')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;