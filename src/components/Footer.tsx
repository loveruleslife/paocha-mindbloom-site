import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-lg md:text-xl">P</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-heading font-bold">{t('hero.title')}</h3>
                <p className="text-primary-foreground/70 text-xs md:text-sm">{t('hero.tagline')}</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              {t('footer.description')}
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-accent rounded-full" />
              </div>
              <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-secondary rounded-full" />
              </div>
              <div className="w-8 h-8 bg-sacred/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-sacred rounded-full" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
          <h4 className="font-heading font-semibold text-base md:text-lg mb-4 md:mb-6">{t('footer.services.title')}</h4>
          <ul className="space-y-2 md:space-y-3">
            <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm md:text-base">{t('service.therapy.title')}</a></li>
            <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm md:text-base">{t('service.introspection.title')}</a></li>
            <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm md:text-base">{t('service.accompaniment.title')}</a></li>
            <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm md:text-base">{t('service.ceremonies.title')}</a></li>
            <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm md:text-base">{t('service.retreats.title')}</a></li>
            <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm md:text-base">{t('service.preparation.title')}</a></li>
            <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm md:text-base">{t('service.integration.title')}</a></li>
            <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm md:text-base">{t('service.individual.title')}</a></li>
          </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base md:text-lg mb-4 md:mb-6">{t('footer.contact.title')}</h4>
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="text-primary-foreground/60 text-xs md:text-sm mb-1">{t('footer.contact.consultations')}</p>
                <p className="text-primary-foreground/80 text-sm md:text-base">{t('footer.contact.consultations.desc')}</p>
              </div>
              <div>
                <p className="text-primary-foreground/60 text-xs md:text-sm mb-1">{t('footer.contact.modalities')}</p>
                <p className="text-primary-foreground/80 text-sm md:text-base">{t('footer.contact.modalities.desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-xs md:text-sm text-center md:text-left">
            {t('footer.copyright')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">{t('footer.terms')}</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">{t('footer.ethics')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;