import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "experience", label: "Experiencia" },
    { id: "education", label: "Educación" },
    { id: "skills", label: "Herramientas" },
    { id: "aptitudes", label: "Aptitudes" },
    { id: "cv", label: "CV" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollY = window.scrollY;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollY >= section.offsetTop - 100) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/20" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gradient">CL</div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 ${
                  activeSection === item.id 
                    ? "bg-primary text-primary-foreground pulse-glow" 
                    : "hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => {
              // Toggle mobile menu (simplified for now)
            }}
          >
            ☰
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;