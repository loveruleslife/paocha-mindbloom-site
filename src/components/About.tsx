import { Button } from "@/components/ui/button";

const About = () => {
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
                  "La sanación verdadera ocurre cuando reconectamos con nuestra esencia más profunda"
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
                SOBRE PAOLA
              </span>
              <h2 className="text-4xl font-heading text-primary mb-6">
                Guiando el Camino Hacia la Transformación de la Conciencia
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Soy Paola Echartea Cruz, psicóloga especializada en terapias de expansión de conciencia 
                y acompañamiento en estados no ordinarios. Mi enfoque integra la psicología clínica 
                tradicional con sabidurías ancestrales y terapias psicodélicas.
              </p>
              
              <p>
                Con años de formación en psicología transpersonal y ceremonias sagradas, 
                ofrezco un espacio seguro para la exploración profunda del ser y la sanación 
                de patrones limitantes que nos impiden vivir plenamente.
              </p>
              
              <p>
                Mi misión es acompañar a las personas en su proceso de autodescubrimiento, 
                brindando herramientas para integrar las experiencias transformadoras en su 
                vida cotidiana y generar cambios duraderos.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm">Psicología Transpersonal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Terapia Psicodélica</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sacred rounded-full"></div>
                  <span className="text-sm">Ceremonias Sagradas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sunset rounded-full"></div>
                  <span className="text-sm">Integración Holística</span>
                </div>
              </div>
              
              <div className="pt-6">
                <Button variant="ceremonial" size="lg">
                  Conoce Mi Enfoque
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;