import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-card" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-sacred/10 text-sacred font-medium rounded-full text-sm mb-4">
            {t('contact.section')}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>
        
        <div className="bg-gentle-gradient rounded-3xl p-8 md:p-12 ceremonial-glow">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h3 className="text-2xl font-heading text-primary mb-8">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{t('contact.info.consultation')}</h4>
                    <p className="text-muted-foreground text-sm">
                      {t('contact.info.consultation.desc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-secondary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{t('contact.info.modalities')}</h4>
                    <p className="text-muted-foreground text-sm">
                      {t('contact.info.modalities.desc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sacred/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-sacred rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{t('contact.info.confidentiality')}</h4>
                    <p className="text-muted-foreground text-sm">
                      {t('contact.info.confidentiality.desc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sunset/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-sunset rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{t('contact.info.emergency')}</h4>
                    <p className="text-muted-foreground text-sm">
                      {t('contact.info.emergency.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div>
              <h3 className="text-2xl font-heading text-primary mb-8">
                {t('contact.form.title')}
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.type')}
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth">
                    <option>Consulta inicial</option>
                    <option>Terapia individual</option>
                    <option>Acompañamiento</option>
                    <option>Ceremonias</option>
                    <option>Retiros</option>
                    <option>Otro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth resize-none"
                    placeholder={t('contact.form.message.placeholder')}
                  />
                </div>
                
                <Button variant="earth" size="lg" className="w-full">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Trust note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            {t('contact.trust')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;