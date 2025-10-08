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
    'hero.subtitle': 'Reprogramando la mente a través de estados amplificados de consciencia',
    'hero.description': 'Acompañamiento terapéutico especializado en expansión de consciencia, ceremonias sagradas e integración holística para el crecimiento personal y la transformación.',
    'hero.cta.main': 'Agendar Consulta',
    'hero.cta.secondary': 'Conoce Nuestros Servicios',
    'hero.credentials.licensed': 'Psicóloga Licenciada',
    'hero.credentials.specialist': 'Especialista en Consciencia',
    'hero.credentials.ethical': 'Práctica Ética y Segura',
    
    // About
    'about.section': 'SOBRE PAOLA',
    'about.title': 'Guiando el Camino Hacia la Transformación de la Consciencia',
    'about.quote': '"La transformación verdadera ocurre cuando reconectamos con nuestra esencia más profunda"',
    'about.p1': 'Soy Paola Echartea Cruz, psicóloga especializada en terapias de expansión de la consciencia y en el acompañamiento durante estados amplificados de consciencia.\nMi enfoque integra la psicología clínica tradicional con procesos de educación e integración para experiencias en estados no ordinarios de consciencia, incorporando además la sabiduría ancestral como base para una transformación integral.',
    'about.p2': 'Con años de formación en psicología y ceremonias sagradas, ofrezco un espacio seguro para la exploración profunda del ser y la transformación de patrones limitantes que nos impiden vivir plenamente.',
    'about.p3': 'Mi misión es acompañar a las personas en su proceso de autodescubrimiento, brindando herramientas para integrar experiencias de la vida cotidiana y generar cambios duraderos.',
    'about.education.title': 'Educación y Experiencia',
    'about.education.text': 'Tengo un título de Psicología de la Universidad ITESO (institución jesuita, Guadalajara, México) y recibí el Premio Pedro Arrupe por mi proyecto "Transformando Realidades desde la Cultura". Mi trayectoria incluye un amplio trabajo en terapia, vínculo neonatal, sanación del niño interior, facilitación de grupos y ceremonias ancestrales.\n\nIdiomas: Español (nativo), Inglés (fluido)',
    'about.specialties.transpersonal': 'Terapia Psicológica',
    'about.specialties.psychedelic': 'Terapia en Estados Amplificados de Consciencia',
    'about.specialties.ceremonies': 'Ceremonias de Introspección',
    'about.specialties.integration': 'Integración Holística',
    'about.cta': 'Conoce Mi Enfoque',
    
    // Services
    'services.section': 'SERVICIOS OFRECIDOS',
    'services.title': 'Caminos de Transformación',
    'services.description': 'Cada servicio está diseñado para acompañarte en diferentes etapas de tu proceso de introspección y crecimiento personal, desde la preparación hasta la integración completa.',
    'services.cta': 'Agendar Consulta Inicial',
    'services.more': 'Más Información',
    
    // Service items
    'service.therapy.title': 'Psicoterapia Individual en Línea',
    'service.therapy.subtitle': 'Formato: Sesiones 1-1 por Zoom',
    'service.therapy.description': 'Sesiones personalizadas con una psicóloga entrenada en múltiples marcos terapéuticos y psicológicos para acompañarte en tu proceso de introspección y autoconocimiento.',
    'service.therapy.gain': 'Obtendrás:',
    'service.therapy.features': ['Técnicas de autoconocimiento', 'Una conexión más profunda contigo mismo', 'Preguntas reflexivas y de autoindagación', 'Escucha activa y apoyo empático', 'Ejercicios de escritura y journaling'],
    
    'service.introspection.title': 'Círculos de Mujeres',
    'service.introspection.subtitle': 'Espacios de Crecimiento Femenino',
    'service.introspection.intro': 'Encuentros semanales enfocados en el autoconocimiento, la reflexión y el crecimiento compartido. Cada sesión explora un nuevo tema para fomentar la perspicacia y la resiliencia emocional.',
    'service.introspection.details': 'Detalles:',
    'service.introspection.details.list': ['Frecuencia: Una vez por semana (2 horas cada una)', 'Idioma: Inglés o Español', 'Precio: $25 USD por sesión', 'Rango de edad: Mujeres de 21–80 años'],
    'service.introspection.description': '',
    'service.introspection.features': ['26 semanas de duración', 'Sesiones de 3 horas', 'Grupos en español e inglés', 'Solo mujeres 21-70 años', 'Cupo limitado', '$25 USD por sesión'],
    
    'service.accompaniment.title': 'Círculos Mixtos (Hombres y Mujeres)',
    'service.accompaniment.subtitle': 'Espacios de Crecimiento Conjunto',
    'service.accompaniment.intro': 'Espacios inclusivos para hombres y mujeres para explorar la consciencia personal y colectiva. Cada semana introduce temas reflexivos que fortalecen la convivencia y la comprensión mutua.',
    'service.accompaniment.details': 'Detalles:',
    'service.accompaniment.details.list': ['Frecuencia: Una vez por semana (2 horas cada una)', 'Idioma: Inglés o Español', 'Precio: $25 USD por sesión por persona', 'Rango de edad: 21–80 años'],
    'service.accompaniment.description': '',
    
    'service.ceremonies.title': 'Terapia en Estados Amplificados de Consciencia',
    'service.ceremonies.subtitle': 'Acompañamiento Personalizado',
    'service.ceremonies.intro': 'Guía y supervisión personalizada para apoyar experiencias seguras y significativas en estados expandidos de consciencia. El objetivo es construir confianza mutua y proporcionar herramientas a largo plazo para integrar nuevas formas de relacionarse consigo mismo y con el mundo.',
    'service.ceremonies.includes': 'Incluye:',
    'service.ceremonies.includes.list': ['Sesiones de preparación individuales', 'Sesiones terapéuticas con medicina (si es apropiado)', 'Terapia de integración posterior a la sesión'],
    'service.ceremonies.warning': '⚠️ Esta terapia no es adecuada para todos. Se requiere una consulta preliminar para evaluar la elegibilidad.',
    'service.ceremonies.description': '',
    
    'service.retreats.title': 'Retiros',
    'service.retreats.subtitle': 'Conexión Individual y Grupal',
    'service.retreats.description': 'Los Retiros de Introspección son espacios dedicados al reconocimiento y crecimiento personal de cada individuo.\nA través de la psicología, la meditación, el autoanálisis, las respiraciones guiadas y otras herramientas terapéuticas, podrás acceder a niveles más profundos de autoconocimiento y bienestar.',
    'service.retreats.gain': 'Durante el retiro obtendrás:',
    'service.retreats.features': ['Un espacio seguro para el autoanálisis', 'Herramientas duraderas para la introspección', 'Acompañamiento personalizado', 'Relajación y calma interior', 'Nuevas perspectivas sobre tu proceso personal', 'Apoyo y compañerismo'],
    'service.retreats.closing': 'Contamos con retiros grupales e individuales, diseñados para acompañarte en tu camino hacia la expansión de la consciencia y el equilibrio interior. Los retiros pueden adaptarse para satisfacer tus necesidades individuales, ofreciendo un entorno sagrado y seguro para la reconexión y la transformación.',
    'service.retreats.options': '',
    'service.retreats.options.list': [],
    
    'service.preparation.title': 'Preparación para Sesiones Terapéuticas en Estados Amplificados',
    'service.preparation.subtitle': 'Preparación Especializada',
    'service.preparation.description': 'Antes de participar en una sesión (conmigo o con otro facilitador), ofrezco apoyo preparatorio para ayudarte a obtener herramientas para tu proceso individual.',
    'service.preparation.tools': 'Herramientas:',
    'service.preparation.tools.list': ['Meditaciones', 'Técnicas de respiración', 'Ejercicios reflexivos', 'Prácticas de anclaje'],
    'service.preparation.closing': 'Este proceso te ayuda a acercarte a tu experiencia desde un lugar de consciencia, apertura, confianza y respeto por tu viaje personal.',
    
    'service.integration.title': 'Escucha y Acompañamiento Posterior a Experiencias',
    'service.integration.subtitle': 'Conectando Experiencias',
    'service.integration.intro': 'Un espacio grupal en línea, guiado por una psicóloga especializada en estados amplificados de consciencia. El objetivo es escuchar diferentes experiencias, compartir reflexiones y explorar juntos el antes, durante y después de la experiencia con medicina o estados expandidos.',
    'service.integration.gain': 'Recibirás:',
    'service.integration.gain.list': ['Indicaciones reflexivas y de autoanálisis', 'Apoyo emocional y psicológico', 'Conexión grupal e ideas compartidas'],
    'service.integration.details': 'Detalles:',
    'service.integration.details.list': ['Duración: 2 horas', 'Idioma: Inglés o Español', 'Precio: $25 USD por persona'],
    'service.integration.description': '',
    'service.integration.features': [],
    
    'service.individual.title': 'Terapia de Integración Individual',
    'service.individual.subtitle': 'Tiempo de Reflexión',
    'service.individual.description': 'Acompañamiento psicológico individual para integrar y comprender tus experiencias en estados amplificados de consciencia.\nDesde la psicología transpersonal, te brindo herramientas prácticas y duraderas como atención plena, escritura creativa, pintura expresiva y reflexión guiada, que podrás aplicar también en tu vida cotidiana para profundizar en tu proceso personal y fortalecer tu bienestar emocional.',
    'service.individual.gain': 'Durante las sesiones obtendrás:',
    'service.individual.features': ['Claridad sobre tu experiencia', 'Un espacio seguro y confidencial', 'Escucha activa y acompañamiento empático', 'Herramientas sólidas para la integración', 'Mayor profundidad en tu proceso personal'],
    'service.individual.closing': 'Dirigido a personas que han vivido sesiones terapéuticas o chamánicas en estados amplificados de consciencia y buscan una visión más integrada y consciente de su experiencia.',
    'service.individual.approach': '',
    'service.individual.approach.list': [],
    
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
    'footer.description': 'Acompañamiento terapéutico especializado en expansión de consciencia y transformación personal a través de estados no ordinarios.',
    'footer.services.title': 'Servicios',
    'footer.services.individual': 'Terapia Individual',
    'footer.services.introspection': 'Introspección Guiada',
    'footer.services.accompaniment': 'Acompañamiento',
    'footer.services.ceremonies': 'Ceremonias Sagradas',
    'footer.services.retreats': 'Retiros Terapéuticos',
    'footer.services.integration': 'Integración',
    'footer.contact.title': 'Contacto',
    'footer.contact.consultations': 'Consultas',
    'footer.contact.consultations.desc': 'Comunícate con cualquier pregunta o para programar una sesión a través de WhatsApp, Instagram o correo electrónico. Estaré feliz de conectarme contigo.',
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
    'about.specialties.psychedelic': 'Therapies in Amplified States of Consciousness',
    'about.specialties.ceremonies': 'Ceremonies of Introspection',
    'about.specialties.integration': 'Holistic Integration',
    'about.cta': 'Learn About My Approach',
    
    // Services
    'services.section': 'SERVICES OFFERED',
    'services.title': 'Transformation Pathways',
    'services.description': 'Each service is designed to accompany you through different stages of your introspection and personal growth process, from preparation to complete integration.',
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
    'service.retreats.description': 'Introspection Retreats are dedicated spaces for the recognition and personal growth of each individual.\nThrough psychology, meditation, self-analysis, guided breathing, and other therapeutic tools, you can access deeper levels of self-knowledge and well-being.',
    'service.retreats.gain': 'During the retreat you will gain:',
    'service.retreats.features': ['A safe space for self-analysis', 'Lasting tools for introspection', 'Personalized accompaniment', 'Relaxation and inner calm', 'New perspectives on your personal process', 'Support and companionship'],
    'service.retreats.closing': 'We offer group and individual retreats, designed to accompany you on your path toward consciousness expansion and inner balance. Retreats can be adapted to meet your individual needs, offering a sacred and safe environment for reconnection and transformation.',
    'service.retreats.options': '',
    'service.retreats.options.list': [],
    
    'service.preparation.title': 'Preparation for Therapeutic Sessions in Amplified States',
    'service.preparation.subtitle': 'Specialized Preparation',
    'service.preparation.description': 'Before participating in a session (with me or another facilitator) I offer preparatory support to help you obtain tools for your individual process.',
    'service.preparation.tools': 'Tools:',
    'service.preparation.tools.list': ['Meditations', 'Breathing techniques', 'Reflective Exercises', 'Grounding Practices'],
    'service.preparation.closing': 'This process helps you approach your experience from a place of awareness, openness, trust, and respect for your personal journey.',
    
    'service.integration.title': 'Post-Experience Sharing & Integration Circles',
    'service.integration.subtitle': 'Connecting Experiences',
    'service.integration.intro': 'An online group space guided by a psychologist specialized in amplified states of consciousness. The goal is to listen to different experiences, share reflections, and explore together the before, during, and after of the experience with medicine or expanded states.',
    'service.integration.gain': "You'll receive:",
    'service.integration.gain.list': ['Reflective and self-analysis prompts', 'Emotional and psychological support', 'Group connection and shared insights'],
    'service.integration.details': 'Details:',
    'service.integration.details.list': ['Duration: 2 hours', 'Language: English or Spanish', 'Price: $25 USD per person'],
    'service.integration.description': '',
    'service.integration.features': [],
    
    'service.individual.title': 'Individual Integration Therapy',
    'service.individual.subtitle': 'Reflection Time',
    'service.individual.description': 'Individual psychological accompaniment to integrate and understand your experiences in amplified states of consciousness.\nFrom transpersonal psychology, I provide you with practical and lasting tools such as mindfulness, creative writing, expressive painting, and guided reflection, which you can also apply in your daily life to deepen your personal process and strengthen your emotional well-being.',
    'service.individual.gain': 'During the sessions you will gain:',
    'service.individual.features': ['Clarity about your experience', 'A safe and confidential space', 'Active listening and empathetic accompaniment', 'Solid tools for integration', 'Expert guidance in consciousness processes', 'Greater depth in your personal process'],
    'service.individual.closing': 'Aimed at people who have experienced therapeutic or shamanic sessions in amplified states of consciousness and seek a more integrated and conscious view of their experience.',
    'service.individual.approach': '',
    'service.individual.approach.list': [],
    
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
    'footer.contact.consultations.desc': 'Reach out with any questions or to schedule a session through WhatsApp, Instagram, or E-mail. I\'ll be happy to connect with you.',
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