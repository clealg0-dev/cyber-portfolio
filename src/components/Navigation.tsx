import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gradient">CL</div>

          {/* PC navegation */}
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

          {/* hamburger button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen z-40 md:hidden"
          >
            {/* blur background */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu box */}
            <div className="relative z-50 w-full max-w-sm mx-auto mt-20 bg-gradient-to-r from-purple-900 via-pink-900 to-blue-900 rounded-2xl p-8 shadow-lg border border-white/20 flex flex-col gap-4">
              <button
                className="self-end mb-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={28} />
              </button>

              {navItems.map((item) => (
                <Button
                  key={item.id}
                  size="lg"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full rounded-xl bg-white/10 hover:bg-white/20 text-white shadow-md shadow-purple-500/40 ${
                    activeSection === item.id ? "ring-2 ring-white/70" : ""
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
