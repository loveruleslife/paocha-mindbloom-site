import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">{t('hero.title')}</h3>
                <p className="text-primary-foreground/70 text-sm">{t('hero.tagline')}</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
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
            <h4 className="font-heading font-semibold text-lg mb-6">{t('footer.services.title')}</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">{t('footer.services.individual')}</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">{t('footer.services.introspection')}</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">{t('footer.services.accompaniment')}</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">{t('footer.services.ceremonies')}</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">{t('footer.services.retreats')}</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">{t('footer.services.integration')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">{t('footer.contact.title')}</h4>
            <div className="space-y-4">
              <div>
                <p className="text-primary-foreground/60 text-sm mb-1">{t('footer.contact.consultations')}</p>
                <p className="text-primary-foreground/80">{t('footer.contact.consultations.desc')}</p>
              </div>
              <div>
                <p className="text-primary-foreground/60 text-sm mb-1">{t('footer.contact.modalities')}</p>
                <p className="text-primary-foreground/80">{t('footer.contact.modalities.desc')}</p>
              </div>
              <div>
                <p className="text-primary-foreground/60 text-sm mb-1">{t('footer.contact.emergency')}</p>
                <p className="text-primary-foreground/80">{t('footer.contact.emergency.desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">{t('footer.privacy')}</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">{t('footer.terms')}</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">{t('footer.ethics')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;