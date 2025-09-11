import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useState, useEffect } from "react";

const Header = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), href: "#home" },
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.services'), href: "#services" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border/50 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-earth-gradient rounded-full flex items-center justify-center animate-sacred-pulse">
            <span className="text-white font-heading font-bold text-lg">P</span>
          </div>
          <div>
            <h1 className="text-xl font-heading text-primary font-bold">Paochamama</h1>
            <p className="text-xs text-muted-foreground">Psicóloga Paola Echartea Cruz</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1"
        >
          <div className={`w-5 h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm border-b border-border/50 md:hidden">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-foreground hover:text-accent transition-smooth font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;