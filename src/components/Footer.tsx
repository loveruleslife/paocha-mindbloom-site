const Footer = () => {
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
                <h3 className="text-xl font-heading font-bold">Paochamama</h3>
                <p className="text-primary-foreground/70 text-sm">Psicóloga Paola Echartea Cruz</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Acompañamiento terapéutico especializado en expansión de conciencia 
              y transformación personal a través de estados no ordinarios.
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
            <h4 className="font-heading font-semibold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">Terapia Individual</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">Introspección Guiada</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">Acompañamiento</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">Ceremonias Sagradas</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">Retiros Terapéuticos</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">Integración</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contacto</h4>
            <div className="space-y-4">
              <div>
                <p className="text-primary-foreground/60 text-sm mb-1">Consultas</p>
                <p className="text-primary-foreground/80">Agendar cita inicial</p>
              </div>
              <div>
                <p className="text-primary-foreground/60 text-sm mb-1">Modalidades</p>
                <p className="text-primary-foreground/80">Presencial y Online</p>
              </div>
              <div>
                <p className="text-primary-foreground/60 text-sm mb-1">Emergencias</p>
                <p className="text-primary-foreground/80">Apoyo 24/7 disponible</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Paochamama - Psicóloga Paola Echartea Cruz. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">Privacidad</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">Términos</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-smooth">Ética</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;