import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-card" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-sacred/10 text-sacred font-medium rounded-full text-sm mb-4">
            CONTACTO
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            Inicia Tu Camino de Transformación
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Da el primer paso hacia tu sanación y crecimiento personal. 
            Estoy aquí para acompañarte en este viaje sagrado.
          </p>
        </div>
        
        <div className="bg-gentle-gradient rounded-3xl p-8 md:p-12 ceremonial-glow">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h3 className="text-2xl font-heading text-primary mb-8">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-accent rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Consulta Inicial</h4>
                    <p className="text-muted-foreground text-sm">
                      Sesión de evaluación y orientación personalizada para conocer tu proceso
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-secondary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Modalidades</h4>
                    <p className="text-muted-foreground text-sm">
                      Sesiones presenciales y online según tus necesidades y ubicación
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sacred/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-sacred rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Confidencialidad</h4>
                    <p className="text-muted-foreground text-sm">
                      Todos los procesos se realizan bajo estrictos protocolos de privacidad
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sunset/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-sunset rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Emergencias</h4>
                    <p className="text-muted-foreground text-sm">
                      Protocolos de apoyo y líneas de crisis disponibles 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div>
              <h3 className="text-2xl font-heading text-primary mb-8">
                Solicitar Consulta
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Correo Electrónico
                  </label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
                    placeholder="tu@correo.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Consulta
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
                    Mensaje
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth resize-none"
                    placeholder="Cuéntame brevemente sobre tu proceso o lo que buscas..."
                  />
                </div>
                
                <Button variant="earth" size="lg" className="w-full">
                  Enviar Solicitud
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Trust note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Al contactarme, das el primer paso en un proceso de acompañamiento ético, 
            profesional y respetuoso hacia tu bienestar integral.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;