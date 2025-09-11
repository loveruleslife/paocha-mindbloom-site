import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroMandala from "@/assets/hero-mandala.jpg";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with sacred geometry */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroMandala})` }}
      />
      <div className="absolute inset-0 bg-gentle-gradient" />
      <div className="absolute inset-0 sacred-pattern" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-accent/20 rounded-full animate-float blur-sm" />
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-sacred/20 rounded-full animate-float delay-1000 blur-sm" />
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-sunset/30 rounded-full animate-float delay-2000 blur-sm" />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-medium text-sm tracking-wide">{t('hero.tagline')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading text-primary mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-heading text-secondary mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('hero.description')}
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button variant="sacred" size="lg" className="px-8 py-4 text-lg">
            {t('hero.cta.main')}
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <span>{t('hero.credentials.licensed')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>{t('hero.credentials.specialist')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-sacred rounded-full"></div>
            <span>{t('hero.credentials.ethical')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;