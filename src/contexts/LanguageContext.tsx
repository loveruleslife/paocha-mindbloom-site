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
    'hero.subtitle': 'Reprogramando la mente a través de estados amplificados de conciencia',
    'hero.description': 'Acompañamiento terapéutico especializado en expansión de conciencia, ceremonias sagradas e integración holística para el crecimiento personal y la transformación.',
    'hero.cta.main': 'Agendar Consulta',
    'hero.cta.secondary': 'Conoce Nuestros Servicios',
    'hero.credentials.licensed': 'Psicóloga Licenciada',
    'hero.credentials.specialist': 'Especialista en Conciencia',
    'hero.credentials.ethical': 'Práctica Ética y Segura',
    
    // About
    'about.section': 'SOBRE PAOLA',
    'about.title': 'Guiando el Camino Hacia la Transformación de la Conciencia',
    'about.quote': '"La transformación verdadera ocurre cuando reconectamos con nuestra esencia más profunda"',
    'about.p1': 'Soy Paola Echartea Cruz, psicóloga especializada en terapias de expansión de consciencia y acompañamiento en estados amplificados de consciencia. Mi enfoque integra la psicología clínica tradicional con sabidurías ancestrales y educación junto con integración para experiencias no ordinarias.',
    'about.p2': 'Con años de formación en psicología y ceremonias sagradas, ofrezco un espacio seguro para la exploración profunda del ser y la transformación de patrones limitantes que nos impiden vivir plenamente.',
    'about.p3': 'Mi misión es acompañar a las personas en su proceso de autodescubrimiento, brindando herramientas para integrar experiencias de la vida cotidiana y generar cambios duraderos.',
    'about.education.title': 'Educación y Experiencia',
    'about.education.text': 'I hold a Psychology degree from ITESO University (Jesuit institution, Guadalajaro, Mexico) and received the Pedro Arrupe Award for my project "Transforming Realities from the Culture." My journey includes extensive work in therapy, neonatal bonding, inner-child healing, group facilitation, and ancestral ceremonies.\n\nLanguages: Spanish (native), English (fluent)',
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
    'service.therapy.subtitle': 'Formato: Sesiones 1-1 por Zoom',
    'service.therapy.description': 'Sesiones personalizadas con una psicóloga entrenada en múltiples marcos terapéuticos y psicológicos para acompañarte en tu proceso de introspección y autoconocimiento.',
    'service.therapy.gain': 'Obtendrás:',
    'service.therapy.features': ['Técnicas de autoconocimiento', 'Una conexión más profunda contigo mismo', 'Preguntas reflexivas y de autoinvestigación', 'Escucha activa y apoyo empático', 'Ejercicios de escritura y journaling'],
    
    'service.introspection.title': 'Círculos de Mujeres',
    'service.introspection.subtitle': 'Espacios de Crecimiento Femenino',
    'service.introspection.intro': 'Encuentros semanales enfocados en el autoconocimiento, la reflexión y el crecimiento compartido. Cada sesión explora un nuevo tema para fomentar la perspicacia y la resiliencia emocional.',
    'service.introspection.details': 'Detalles:',
    'service.introspection.details.list': ['Frecuencia: Una vez por semana (2 horas cada una)', 'Idioma: Inglés o Español', 'Precio: $25 USD por sesión', 'Rango de edad: Mujeres de 21–80 años'],
    'service.introspection.description': '',
    'service.introspection.features': ['26 semanas de duración', 'Sesiones de 3 horas', 'Grupos en español e inglés', 'Solo mujeres 21-70 años', 'Cupo limitado', '$25 USD por sesión'],
    
    'service.accompaniment.title': 'Círculos Mixtos (Hombres y Mujeres)',
    'service.accompaniment.subtitle': 'Espacios de Crecimiento Conjunto',
    'service.accompaniment.intro': 'Espacios inclusivos para hombres y mujeres para explorar la conciencia personal y colectiva. Cada semana introduce temas reflexivos que fortalecen la convivencia y la comprensión mutua.',
    'service.accompaniment.details': 'Detalles:',
    'service.accompaniment.details.list': ['Frecuencia: Una vez por semana (2 horas cada una)', 'Idioma: Inglés o Español', 'Precio: $25 USD por sesión por persona', 'Rango de edad: 21–80 años'],
    'service.accompaniment.description': '',
    
    'service.ceremonies.title': 'Terapia en Estados Amplificados de Conciencia',
    'service.ceremonies.subtitle': 'Acompañamiento Personalizado',
    'service.ceremonies.intro': 'Guía y supervisión personalizada para apoyar experiencias seguras y significativas en estados expandidos de conciencia. El objetivo es construir confianza mutua y proporcionar herramientas a largo plazo para integrar nuevas formas de relacionarse consigo mismo y con el mundo.',
    'service.ceremonies.includes': 'Incluye:',
    'service.ceremonies.includes.list': ['Sesiones de preparación individuales', 'Sesiones terapéuticas con medicina (si es apropiado)', 'Terapia de integración posterior a la sesión'],
    'service.ceremonies.warning': '⚠️ Esta terapia no es adecuada para todos. Se requiere una consulta preliminar para evaluar la elegibilidad.',
    'service.ceremonies.description': '',
    
    'service.retreats.title': 'Retiros',
    'service.retreats.subtitle': 'Conexión Individual y Grupal',
    'service.retreats.options': 'Opciones:',
    'service.retreats.options.list': ['Retiros individuales o grupales', 'Los retiros pueden modificarse para satisfacer tus necesidades individuales'],
    'service.retreats.closing': 'Cada retiro ofrece un entorno sagrado y seguro para la reconexión y la renovación.',
    
    'service.preparation.title': 'Preparación para Sesiones Terapéuticas en Estados Amplificados',
    'service.preparation.subtitle': 'Preparación Especializada',
    'service.preparation.description': 'Antes de participar en una sesión (conmigo o con otro facilitador), ofrezco apoyo preparatorio para ayudarte a obtener herramientas para tu proceso individual.',
    'service.preparation.tools': 'Herramientas:',
    'service.preparation.tools.list': ['Meditaciones', 'Técnicas de respiración', 'Ejercicios reflexivos', 'Prácticas de anclaje'],
    'service.preparation.closing': 'Este proceso te ayuda a acercarte a tu experiencia desde un lugar de conciencia, apertura, confianza y respeto por tu viaje personal.',
    
    'service.integration.title': 'Círculos de Compartición e Integración Post-Experiencia',
    'service.integration.subtitle': 'Conectando Experiencias',
    'service.integration.gain': 'Recibirás:',
    'service.integration.gain.list': ['Indicaciones reflexivas y de autoanálisis', 'Apoyo emocional y psicológico', 'Conexión grupal e ideas compartidas'],
    'service.integration.details': 'Detalles:',
    'service.integration.details.list': ['Duración: 2 horas', 'Idioma: Inglés o Español', 'Precio: $25 USD por persona'],
    'service.integration.description': '',
    'service.integration.features': [],
    
    'service.individual.title': 'Terapia de Integración Individual',
    'service.individual.subtitle': 'Tiempo de Reflexión',
    'service.individual.approach': 'Enfoque:',
    'service.individual.approach.list': ['Utiliza la escritura, el arte y el diálogo reflexivo para construir conciencia emocional y equilibrio interior.', 'Ideal para quienes han participado en ceremonias terapéuticas o chamánicas y buscan una comprensión más profunda e integrada.'],
    'service.individual.description': '',
    
    // Contact
    'contact.section': 'CONTACTO',
    'contact.title': 'Conecta Conmigo',
    'contact.description': 'Ya sea que estés buscando alivio del estrés, transformación emocional, crecimiento espiritual, o una conexión más profunda contigo mismo, estoy aquí para guiarte con compasión, creatividad y cuidado.',
    'contact.info.title': 'Información de Contacto',
    'contact.info.email': 'Correo Electrónico',
    'contact.info.email.value': 'paochamama@gmail.com',
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
    'footer.copyright': '© 2025 Paochamama - Psicóloga Paola Echartea Cruz. Todos los derechos reservados.',
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
    'hero.subtitle': 'Reprogramming the mind through amplified states of consciousness',
    'hero.description': 'Specialized therapeutic accompaniment in consciousness expansion, sacred ceremonies and holistic integration for personal growth and transformation.',
    'hero.cta.main': 'Schedule Consultation',
    'hero.cta.secondary': 'Learn About Our Services',
    'hero.credentials.licensed': 'Licensed Psychologist',
    'hero.credentials.specialist': 'Consciousness Specialist',
    'hero.credentials.ethical': 'Ethical & Safe Practice',
    
    // About
    'about.section': 'ABOUT PAOLA',
    'about.title': 'Guiding the Path Toward Consciousness Transformation',
    'about.quote': '"True transformation occurs when we reconnect with our deepest essence"',
    'about.p1': 'I am Paola Echartea Cruz, a psychologist specialized in consciousness expansion therapies and accompaniment in amplified states of consciousness. My approach integrates traditional clinical psychology with ancestral wisdom along with education and integration for non-ordinary experiences.',
    'about.p2': 'With years of training in psychology and sacred ceremonies, I offer a safe space for deep exploration of the self and transformation of limiting patterns that prevent us from living fully.',
    'about.p3': 'My mission is to accompany people in their process of self-discovery, providing tools to integrate experiences from daily life and generate lasting changes.',
    'about.education.title': 'Education & Experience',
    'about.education.text': 'I hold a Psychology degree from ITESO University (Jesuit institution, Guadalajara, Mexico) and received the Pedro Arrupe Award for my project "Transforming Realities from the Culture." My journey includes extensive work in therapy, neonatal bonding, inner-child healing, group facilitation, and ancestral ceremonies.\n\nLanguages: Spanish (native), English (fluent)',
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
    'service.therapy.subtitle': 'Format: 1-on-1 sessions via Zoom',
    'service.therapy.description': 'Personalized sessions with a psychologist trained in multiple therapeutic and psychological frameworks to support your process of introspection and self-awareness.',
    'service.therapy.gain': "You'll gain:",
    'service.therapy.features': ['Self-awareness techniques', 'A deeper connection with yourself', 'Reflective and self-inquiry questions', 'Active listening and empathetic support', 'Writing and journaling exercises'],
    
    'service.introspection.title': "Women's Circles",
    'service.introspection.subtitle': 'Feminine Growth Spaces',
    'service.introspection.intro': 'Weekly gatherings focused on self-knowledge, reflection, and shared growth. Each session explores a new theme to foster insight and emotional resilience.',
    'service.introspection.details': 'Details:',
    'service.introspection.details.list': ['Frequency: Once per week (2 hours each)', 'Language: English or Spanish', 'Price: $25 USD per session', 'Age range: Women 21–80 years'],
    'service.introspection.description': '',
    'service.introspection.features': ['26-week duration', '3-hour sessions', 'Spanish and English groups', 'Women only 21-70 years', 'Limited capacity', '$25 USD per session'],
    
    'service.accompaniment.title': 'Mixed Circles (Men and Women)',
    'service.accompaniment.subtitle': 'Joint Growth Spaces',
    'service.accompaniment.intro': 'Inclusive spaces for both men and women to explore personal and collective awareness. Each week introduces reflective themes that strengthen coexistence and mutual understanding.',
    'service.accompaniment.details': 'Details:',
    'service.accompaniment.details.list': ['Frequency: Once per week (2 hours each)', 'Language: English or Spanish', 'Price: $25 USD per session per person', 'Age range: 21–80 years'],
    'service.accompaniment.description': '',
    
    'service.ceremonies.title': 'Therapy in Amplified States of Consciousness',
    'service.ceremonies.subtitle': 'Personalized Accompaniment',
    'service.ceremonies.intro': 'Personalized guidance and supervision to support safe and meaningful experiences in expanded states of consciousness. The goal is to build mutual trust and provide long-term tools for integrating new ways of relating to yourself and the world.',
    'service.ceremonies.includes': 'Includes:',
    'service.ceremonies.includes.list': ['One-on-one preparation sessions', 'Therapeutic sessions with medicine (if appropriate)', 'Post-session integration therapy'],
    'service.ceremonies.warning': '⚠️ This therapy is not suitable for everyone. A preliminary consultation is required to assess eligibility.',
    'service.ceremonies.description': '',
    
    'service.retreats.title': 'Retreats',
    'service.retreats.subtitle': 'Individual and Group Connection',
    'service.retreats.options': 'Options:',
    'service.retreats.options.list': ['Individual or group retreats', 'Retreats can be modified to meet your individual needs'],
    'service.retreats.closing': 'Each retreat offers a sacred, safe environment for reconnection and renewal.',
    
    'service.preparation.title': 'Preparation for Therapeutic Sessions in Amplified States',
    'service.preparation.subtitle': 'Specialized Preparation',
    'service.preparation.description': 'Before participating in a session (with me or another facilitator) I offer preparatory support to help you obtain tools for your individual process.',
    'service.preparation.tools': 'Tools:',
    'service.preparation.tools.list': ['Meditations', 'Breathing techniques', 'Reflective Exercises', 'Grounding Practices'],
    'service.preparation.closing': 'This process helps you approach your experience from a place of awareness, openness, trust, and respect for your personal journey.',
    
    'service.integration.title': 'Post-Experience Sharing & Integration Circles',
    'service.integration.subtitle': 'Connecting Experiences',
    'service.integration.gain': "You'll receive:",
    'service.integration.gain.list': ['Reflective and self-analysis prompts', 'Emotional and psychological support', 'Group connection and shared insights'],
    'service.integration.details': 'Details:',
    'service.integration.details.list': ['Duration: 2 hours', 'Language: English or Spanish', 'Price: $25 USD per person'],
    'service.integration.description': '',
    'service.integration.features': [],
    
    'service.individual.title': 'Individual Integration Therapy',
    'service.individual.subtitle': 'Reflection Time',
    'service.individual.approach': 'Approach:',
    'service.individual.approach.list': ['Uses writing, art, and reflective dialogue to build emotional awareness and inner balance.', 'Ideal for those who have participated in therapeutic or shamanic ceremonies and seek a deeper, integrated understanding.'],
    'service.individual.description': '',
    
    // Contact
    'contact.section': 'CONTACT',
    'contact.title': 'Connect With Me',
    'contact.description': 'Whether you are seeking stress relief, emotional transformation, spiritual growth, or a deeper connection to yourself, I\'m here to guide you with compassion, creativity, and care.',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.email.value': 'paochamama@gmail.com',
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
    'footer.copyright': '© 2025 Paochamama - Psychologist Paola Echartea Cruz. All rights reserved.',
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