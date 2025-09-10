import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1" role="group" aria-label="Language selector">
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-smooth ${
          language === 'es'
            ? 'bg-accent text-accent-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-pressed={language === 'es'}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-smooth ${
          language === 'en'
            ? 'bg-accent text-accent-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;