import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ceremonyBackground from "@/assets/ceremony-background.jpg";
const Hero = () => {
  const {
    t
  } = useLanguage();
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-0">
      {/* Background with ceremony image - blurred */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 blur-sm" 
          style={{
            backgroundImage: `url(${ceremonyBackground})`,
            opacity: 0.5
          }} 
        />
      </div>
      <div className="absolute inset-0 bg-gentle-gradient opacity-50" />
      <div className="absolute inset-0 sacred-pattern opacity-30" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-12 h-12 md:w-16 md:h-16 bg-accent/20 rounded-full animate-float blur-sm" />
      <div className="absolute bottom-32 right-16 w-8 h-8 md:w-12 md:h-12 bg-sacred/20 rounded-full animate-float delay-1000 blur-sm" />
      <div className="absolute top-1/3 right-20 w-6 h-6 md:w-8 md:h-8 bg-sunset/30 rounded-full animate-float delay-2000 blur-sm" />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6">
        <div className="mb-8 space-y-4 md:space-y-6">
          <div className="inline-block mb-4 px-3 py-1.5 md:px-4 md:py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-bold text-xs md:text-sm tracking-wide">{t('hero.tagline')}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-tan-astoria font-bold text-primary mb-4 md:mb-6 leading-tight drop-shadow-sm px-4">
            {t('hero.title')}
          </h1>
          
          <div className="inline-block bg-white/95 rounded-full px-4 py-3 md:px-8 md:py-4 mb-6 md:mb-8 shadow-lg mx-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-heading" style={{ color: '#00CED1' }}>
              {t('hero.subtitle')}
            </h2>
          </div>
          
          <p className="text-sm md:text-base lg:text-lg font-medium text-foreground/90 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed drop-shadow-sm px-4">
            {t('hero.description')}
          </p>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm font-semibold text-foreground/80 drop-shadow-sm px-4">
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
    </section>;
};
export default Hero;