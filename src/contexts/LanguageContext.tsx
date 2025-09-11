import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Paola',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.schedule': 'Agendar Consulta',
    
    // Hero
    'hero.tagline': 'PSICÓLOGA PAOLA ECHARTEA CRUZ',
    'hero.title': 'Paochamama',
    'hero.subtitle': 'Reprogramando la mente a través de estados no ordinarios de conciencia',
    'hero.description': 'Acompañamiento terapéutico especializado en expansión de conciencia, ceremonias sagradas e integración holística para el crecimiento personal y la sanación.',
    'hero.cta.main': 'Agendar Consulta',
    'hero.cta.secondary': 'Conoce Nuestros Servicios',
    'hero.credentials.licensed': 'Psicóloga Licenciada',
    'hero.credentials.specialist': 'Especialista en Conciencia',
    'hero.credentials.ethical': 'Práctica Ética y Segura',
    
    // About
    'about.section': 'SOBRE PAOLA',
    'about.title': 'Guiando el Camino Hacia la Transformación de la Conciencia',
    'about.quote': '"La sanación verdadera ocurre cuando reconectamos con nuestra esencia más profunda"',
    'about.p1': 'Soy Paola Echartea Cruz, psicóloga especializada en terapias de expansión de conciencia y acompañamiento en estados no ordinarios. Mi enfoque integra la psicología clínica tradicional con sabidurías ancestrales y terapias psicodélicas.',
    'about.p2': 'Con años de formación en psicología transpersonal y ceremonias sagradas, ofrezco un espacio seguro para la exploración profunda del ser y la sanación de patrones limitantes que nos impiden vivir plenamente.',
    'about.p3': 'Mi misión es acompañar a las personas en su proceso de autodescubrimiento, brindando herramientas para integrar las experiencias transformadoras en su vida cotidiana y generar cambios duraderos.',
    'about.specialties.transpersonal': 'Psicología Transpersonal',
    'about.specialties.psychedelic': 'Terapia Psicodélica',
    'about.specialties.ceremonies': 'Ceremonias Sagradas',
    'about.specialties.integration': 'Integración Holística',
    'about.cta': 'Conoce Mi Enfoque',
    
    // Services
    'services.section': 'SERVICIOS OFRECIDOS',
    'services.title': 'Caminos de Transformación',
    'services.description': 'Cada servicio está diseñado para acompañarte en diferentes etapas de tu proceso de sanación y crecimiento personal, desde la preparación hasta la integración completa.',
    'services.cta': 'Agendar Consulta Inicial',
    'services.more': 'Más Información',
    
    // Service items
    'service.therapy.title': 'Psicoterapia Individual Online',
    'service.therapy.subtitle': 'Sesiones 1-1 por Zoom',
    'service.therapy.description': 'Sesiones de 1-1 por zoom acompañadas de una psicóloga con diversas bases terapéuticas y psicológicas para acompañarte en tu proceso de introspección y autoconocimiento.',
    'service.therapy.features': ['Técnicas de autoconocimiento', 'Conexión más sólida contigo', 'Preguntas de autorreflexión', 'Escucha activa', 'Empatía y acompañamiento', 'Actividades de escritura'],
    
    'service.introspection.title': 'Círculos de Mujeres',
    'service.introspection.subtitle': 'Espacios de Crecimiento Femenino',
    'service.introspection.description': 'En estos espacios se tocan diferentes temas cada semana, con el objetivo de conocerte mejor, obtener preguntas de reflexión e introspección y aprender en conjunto a sobrellevar diversas situaciones personales. Dirigido únicamente a mujeres de 21-70 años. Tiene una duración de 26 semanas (6 meses). Ofrezco las sesiones en inglés y en español. Tiempo de cada sesión: 3 horas. Nos reunimos 1 vez por semana. Horario: Inglés: martes 5-8 pm MXCT, Español: jueves 5-8 pm MXCT. Costo: $25 USD cada sesión. Cupo limitado.',
    'service.introspection.features': ['26 semanas de duración', 'Sesiones de 3 horas', 'Grupos en español e inglés', 'Solo mujeres 21-70 años', 'Cupo limitado', '$25 USD por sesión'],
    
    'service.accompaniment.title': 'Acompañamiento',
    'service.accompaniment.subtitle': 'Apoyo Terapéutico',
    'service.accompaniment.description': 'Acompañamiento profesional durante experiencias de expansión de conciencia con protocolos de seguridad.',
    'service.accompaniment.features': ['Guía profesional', 'Monitoreo de seguridad', 'Regulación emocional', 'Protocolos de crisis'],
    
    'service.ceremonies.title': 'Ceremonias',
    'service.ceremonies.subtitle': 'Experiencias Sagradas',
    'service.ceremonies.description': 'Ceremonias con plantas sagradas diseñadas ritualmente con respeto cultural y protocolos tradicionales.',
    'service.ceremonies.features': ['Ofertas ceremoniales', 'Diseño ritual', 'Protocolos culturales', 'Requisitos de preparación'],
    
    'service.retreats.title': 'Retiros',
    'service.retreats.subtitle': 'Experiencias Inmersivas',
    'service.retreats.description': 'Retiros multiday combining terapia grupal, naturaleza y ceremonias para una sanación profunda.',
    'service.retreats.features': ['Talleres grupales', 'Experiencias inmersivas', 'Entornos naturales', 'Jornadas de sanación'],
    
    'service.integration.title': 'Integración',
    'service.integration.subtitle': 'Proceso de Incorporación',
    'service.integration.description': 'Apoyo terapéutico post-ceremonia para procesar e integrar las experiencias en la vida cotidiana.',
    'service.integration.features': ['Sesiones de procesamiento', 'Seguimiento terapéutico', 'Integración de estilo de vida', 'Grupos de apoyo'],
    
    // Contact
    'contact.section': 'CONTACTO',
    'contact.title': 'Conecta Conmigo',
    'contact.description': 'Estoy aquí para acompañarte en tu viaje de sanación y crecimiento personal. Contáctame a través de cualquiera de estos medios.',
    'contact.info.title': 'Información de Contacto',
    'contact.info.email': 'Correo Electrónico',
    'contact.info.email.value': 'Paola.cruz.etx@gmail.com',
    'contact.info.whatsapp': 'WhatsApp',
    'contact.info.whatsapp.value': '+52 222 108 1865',
    'contact.info.instagram': 'Instagram',
    'contact.info.instagram.value': '@paochamama1',
    'contact.trust': 'Tu información está protegida bajo confidencialidad profesional',
    
    // Footer
    'footer.description': 'Acompañamiento terapéutico especializado en expansión de conciencia y transformación personal a través de estados no ordinarios.',
    'footer.services.title': 'Servicios',
    'footer.services.individual': 'Terapia Individual',
    'footer.services.introspection': 'Introspección Guiada',
    'footer.services.accompaniment': 'Acompañamiento',
    'footer.services.ceremonies': 'Ceremonias Sagradas',
    'footer.services.retreats': 'Retiros Terapéuticos',
    'footer.services.integration': 'Integración',
    'footer.contact.title': 'Contacto',
    'footer.contact.consultations': 'Consultas',
    'footer.contact.consultations.desc': 'Agendar cita inicial',
    'footer.contact.modalities': 'Modalidades',
    'footer.contact.modalities.desc': 'Presencial y Online',
    'footer.contact.emergency': 'Emergencias',
    'footer.contact.emergency.desc': 'Apoyo 24/7 disponible',
    'footer.copyright': '© 2024 Paochamama - Psicóloga Paola Echartea Cruz. Todos los derechos reservados.',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.ethics': 'Ética',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Paola',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.schedule': 'Schedule Consultation',
    
    // Hero
    'hero.tagline': 'PSYCHOLOGIST PAOLA ECHARTEA CRUZ',
    'hero.title': 'Paochamama',
    'hero.subtitle': 'Reprogramming the mind through non-ordinary states of consciousness',
    'hero.description': 'Specialized therapeutic accompaniment in consciousness expansion, sacred ceremonies and holistic integration for personal growth and healing.',
    'hero.cta.main': 'Schedule Consultation',
    'hero.cta.secondary': 'Learn About Our Services',
    'hero.credentials.licensed': 'Licensed Psychologist',
    'hero.credentials.specialist': 'Consciousness Specialist',
    'hero.credentials.ethical': 'Ethical & Safe Practice',
    
    // About
    'about.section': 'ABOUT PAOLA',
    'about.title': 'Guiding the Path Toward Consciousness Transformation',
    'about.quote': '"True healing occurs when we reconnect with our deepest essence"',
    'about.p1': 'I am Paola Echartea Cruz, a psychologist specialized in consciousness expansion therapies and accompaniment in non-ordinary states. My approach integrates traditional clinical psychology with ancestral wisdom and psychedelic therapies.',
    'about.p2': 'With years of training in transpersonal psychology and sacred ceremonies, I offer a safe space for deep exploration of the self and healing of limiting patterns that prevent us from living fully.',
    'about.p3': 'My mission is to accompany people in their process of self-discovery, providing tools to integrate transformative experiences into their daily lives and generate lasting changes.',
    'about.specialties.transpersonal': 'Transpersonal Psychology',
    'about.specialties.psychedelic': 'Psychedelic Therapy',
    'about.specialties.ceremonies': 'Sacred Ceremonies',
    'about.specialties.integration': 'Holistic Integration',
    'about.cta': 'Learn About My Approach',
    
    // Services
    'services.section': 'SERVICES OFFERED',
    'services.title': 'Transformation Pathways',
    'services.description': 'Each service is designed to accompany you through different stages of your healing and personal growth process, from preparation to complete integration.',
    'services.cta': 'Schedule Initial Consultation',
    'services.more': 'More Information',
    
    // Service items
    'service.therapy.title': 'Individual Online Psychotherapy',
    'service.therapy.subtitle': '1-on-1 Zoom Sessions',
    'service.therapy.description': '1-on-1 Zoom sessions accompanied by a psychologist with diverse therapeutic and psychological foundations to support you in your introspection and self-knowledge process.',
    'service.therapy.features': ['Self-knowledge techniques', 'Stronger connection with yourself', 'Self-reflection questions', 'Active listening', 'Empathy and support', 'Writing activities'],
    
    'service.introspection.title': "Women's Circles",
    'service.introspection.subtitle': 'Feminine Growth Spaces',
    'service.introspection.description': 'In these spaces we explore different topics each week, with the goal of getting to know yourself better, obtaining reflection and introspection questions, and learning together to cope with various personal situations. Exclusively for women aged 21-70. Duration of 26 weeks (6 months). I offer sessions in English and Spanish. Session time: 3 hours. We meet once a week. Schedule: English: Tuesday 5-8 pm MXCT, Spanish: Thursday 5-8 pm MXCT. Cost: $25 USD per session. Limited capacity.',
    'service.introspection.features': ['26-week duration', '3-hour sessions', 'Spanish and English groups', 'Women only 21-70 years', 'Limited capacity', '$25 USD per session'],
    
    'service.accompaniment.title': 'Accompaniment',
    'service.accompaniment.subtitle': 'Therapeutic Support',
    'service.accompaniment.description': 'Professional accompaniment during consciousness expansion experiences with safety protocols.',
    'service.accompaniment.features': ['Professional guidance', 'Safety monitoring', 'Emotional regulation', 'Crisis protocols'],
    
    'service.ceremonies.title': 'Ceremonies',
    'service.ceremonies.subtitle': 'Sacred Experiences',
    'service.ceremonies.description': 'Sacred plant ceremonies ritually designed with cultural respect and traditional protocols.',
    'service.ceremonies.features': ['Ceremonial offerings', 'Ritual design', 'Cultural protocols', 'Preparation requirements'],
    
    'service.retreats.title': 'Retreats',
    'service.retreats.subtitle': 'Immersive Experiences',
    'service.retreats.description': 'Multi-day retreats combining group therapy, nature and ceremonies for deep healing.',
    'service.retreats.features': ['Group workshops', 'Immersive experiences', 'Natural environments', 'Healing journeys'],
    
    'service.integration.title': 'Integration',
    'service.integration.subtitle': 'Incorporation Process',
    'service.integration.description': 'Post-ceremony therapeutic support to process and integrate experiences into daily life.',
    'service.integration.features': ['Processing sessions', 'Therapeutic follow-up', 'Lifestyle integration', 'Support groups'],
    
    // Contact
    'contact.section': 'CONTACT',
    'contact.title': 'Connect With Me',
    'contact.description': 'I am here to accompany you on your healing and personal growth journey. Contact me through any of these channels.',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.email.value': 'Paola.cruz.etx@gmail.com',
    'contact.info.whatsapp': 'WhatsApp',
    'contact.info.whatsapp.value': '+52 222 108 1865',
    'contact.info.instagram': 'Instagram',
    'contact.info.instagram.value': '@paochamama1',
    'contact.trust': 'Your information is protected under professional confidentiality',
    
    // Footer
    'footer.description': 'Specialized therapeutic accompaniment in consciousness expansion and personal transformation through non-ordinary states.',
    'footer.services.title': 'Services',
    'footer.services.individual': 'Individual Therapy',
    'footer.services.introspection': 'Guided Introspection',
    'footer.services.accompaniment': 'Accompaniment',
    'footer.services.ceremonies': 'Sacred Ceremonies',
    'footer.services.retreats': 'Therapeutic Retreats',
    'footer.services.integration': 'Integration',
    'footer.contact.title': 'Contact',
    'footer.contact.consultations': 'Consultations',
    'footer.contact.consultations.desc': 'Schedule initial appointment',
    'footer.contact.modalities': 'Modalities',
    'footer.contact.modalities.desc': 'In-person and Online',
    'footer.contact.emergency': 'Emergencies',
    'footer.contact.emergency.desc': '24/7 support available',
    'footer.copyright': '© 2024 Paochamama - Psychologist Paola Echartea Cruz. All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.ethics': 'Ethics',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('paochamama-language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
    
    // Update document language
    document.documentElement.lang = language;
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('paochamama-language', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    if (Array.isArray(translation)) {
      return translation.join(', ');
    }
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};