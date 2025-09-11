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
            <div className="aspect-[4/5] bg-gradient-to-br from-accent/20 to-sacred/20 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-earth-gradient rounded-full mx-auto mb-6 flex items-center justify-center animate-sacred-pulse">
                  <span className="text-4xl text-white font-heading">P</span>
                </div>
                <p className="text-muted-foreground italic">
                  {t('about.quote')}
                </p>
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