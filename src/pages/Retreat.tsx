import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Retreat = () => {
  const { t, language } = useLanguage();
  
  const features = language === 'es' 
    ? ['Un espacio seguro para el autoanálisis', 'Herramientas duraderas para la introspección', 'Acompañamiento personalizado', 'Relajación y calma interior', 'Nuevas perspectivas sobre tu proceso personal', 'Apoyo y compañerismo']
    : ['A safe space for self-analysis', 'Lasting tools for introspection', 'Personalized accompaniment', 'Relaxation and inner calm', 'New perspectives on your personal process', 'Support and companionship'];

  const translations = {
    es: {
      section: 'RETIROS DE INTROSPECCIÓN',
      title: 'Retiros',
      subtitle: 'Conexión Individual y Grupal',
      description: 'Los Retiros de Introspección son espacios dedicados al reconocimiento y crecimiento personal de cada individuo.\n\nA través de la psicología, la meditación, el autoanálisis, las respiraciones guiadas y otras herramientas terapéuticas, podrás acceder a niveles más profundos de autoconocimiento y bienestar.',
      gain: 'Durante el retiro obtendrás:',
      closing: 'Contamos con retiros grupales e individuales, diseñados para acompañarte en tu camino hacia la expansión de la consciencia y el equilibrio interior. Los retiros pueden adaptarse para satisfacer tus necesidades individuales, ofreciendo un entorno sagrado y seguro para la reconexión y la transformación.',
      cta: 'Reservar Retiro',
      backToServices: 'Ver Todos los Servicios',
      whatToExpect: 'Qué Esperar',
      expectations: [
        { title: 'Ambiente Seguro', description: 'Espacios cuidadosamente preparados para tu bienestar físico y emocional.' },
        { title: 'Guía Profesional', description: 'Acompañamiento por una psicóloga especializada en estados amplificados de consciencia.' },
        { title: 'Herramientas Prácticas', description: 'Técnicas que podrás aplicar en tu vida cotidiana después del retiro.' },
        { title: 'Comunidad', description: 'Conexión con personas que comparten tu búsqueda de crecimiento personal.' }
      ]
    },
    en: {
      section: 'INTROSPECTION RETREATS',
      title: 'Retreats',
      subtitle: 'Individual and Group Connection',
      description: 'Introspection Retreats are spaces dedicated to the recognition and personal growth of each individual.\n\nThrough psychology, meditation, self-analysis, guided breathing, and other therapeutic tools, you can access deeper levels of self-knowledge and well-being.',
      gain: 'During the retreat you will gain:',
      closing: 'We offer group and individual retreats, designed to accompany you on your path toward consciousness expansion and inner balance. Retreats can be adapted to meet your individual needs, offering a sacred and safe environment for reconnection and transformation.',
      cta: 'Book Retreat',
      backToServices: 'View All Services',
      whatToExpect: 'What to Expect',
      expectations: [
        { title: 'Safe Environment', description: 'Carefully prepared spaces for your physical and emotional well-being.' },
        { title: 'Professional Guidance', description: 'Accompaniment by a psychologist specialized in amplified states of consciousness.' },
        { title: 'Practical Tools', description: 'Techniques you can apply in your daily life after the retreat.' },
        { title: 'Community', description: 'Connection with people who share your quest for personal growth.' }
      ]
    }
  };

  const content = translations[language];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === 'es' 
        ? 'Hola, me gustaría obtener más información sobre los retiros de introspección.'
        : 'Hello, I would like to get more information about the introspection retreats.'
    );
    window.open(`https://wa.me/522221081865?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/meditation-session.jpg')] bg-cover bg-center opacity-10" />
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
              {content.section}
            </span>
            <h1 className="text-3xl md:text-5xl font-heading text-primary mb-4 font-semibold">
              {content.title}
            </h1>
            <p className="text-lg md:text-xl text-accent font-medium mb-6">
              {content.subtitle}
            </p>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line mb-8 text-center">
              {content.description}
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-xl md:text-2xl font-heading text-primary font-semibold mb-8 text-center">
              {content.gain}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border/50"
                >
                  <span className="text-primary text-lg">✦</span>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <h2 className="text-xl md:text-2xl font-heading text-primary font-semibold mb-10 text-center">
              {content.whatToExpect}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.expectations.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-2xl border border-border/50 earth-glow"
                >
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing & CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
              {content.closing}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-full"
              >
                {content.cta}
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/#services'}
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base rounded-full"
              >
                {content.backToServices}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Retreat;
