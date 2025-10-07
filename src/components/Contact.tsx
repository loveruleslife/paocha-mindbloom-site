import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-20 bg-card" id="contact">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16 space-y-4">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-sacred/10 text-sacred font-medium rounded-full text-xs md:text-sm mb-2 md:mb-4">
            {t('contact.section')}
          </span>
          <h2 className="text-2xl md:text-4xl font-heading text-primary mb-4 md:mb-6 font-semibold">
            {t('contact.title')}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            {t('contact.description')}
          </p>
        </div>
        
        <div className="bg-gentle-gradient rounded-2xl md:rounded-3xl p-6 md:p-12 ceremonial-glow">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-heading text-primary mb-6 md:mb-8">
              {t('contact.info.title')}
            </h3>
            
            <div className="space-y-6 md:space-y-8">
              {/* Email */}
              <div className="flex flex-col items-center gap-3 md:gap-4 p-4 md:p-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm md:text-base">{t('contact.info.email')}</h4>
                  <a href="mailto:Paola.cruz.etx@gmail.com" className="text-accent hover:text-accent/80 transition-smooth text-sm md:text-base break-all">
                    {t('contact.info.email.value')}
                  </a>
                </div>
              </div>
              
              {/* WhatsApp */}
              <div className="flex flex-col items-center gap-3 md:gap-4 p-4 md:p-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm md:text-base">{t('contact.info.whatsapp')}</h4>
                  <a href="https://wa.me/522221081865" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80 transition-smooth text-sm md:text-base">
                    {t('contact.info.whatsapp.value')}
                  </a>
                </div>
              </div>
              
              {/* Instagram */}
              <div className="flex flex-col items-center gap-3 md:gap-4 p-4 md:p-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-sacred/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-sacred" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm md:text-base">{t('contact.info.instagram')}</h4>
                  <a href="https://instagram.com/paochamama1" target="_blank" rel="noopener noreferrer" className="text-sacred hover:text-sacred/80 transition-smooth text-sm md:text-base">
                    {t('contact.info.instagram.value')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust note */}
        <div className="text-center mt-8 md:mt-12 px-4">
          <p className="text-xs md:text-sm text-muted-foreground">
            {t('contact.trust')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;