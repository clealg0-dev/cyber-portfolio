import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import AptitudesSection from "@/components/AptitudesSection";
import CVSection from "@/components/CVSection";
import { useScrollBackground } from "@/hooks/useScrollBackground";

// Import background images
import heroBackground from "@/assets/images/Background_hero.jpg";
import experienceBackground from "@/assets/images/Background_experience.png";
import educationBackground from "@/assets/images/Background_knowledge.png";
import skillsBackground from "@/assets/images/Background_tools.png";
import aptitudesBackground from "@/assets/images/background_aptitudes.png";
import cvBackground from "@/assets/images/background_cv.png";

const Index = () => {
  // Configure scroll-based background transitions
  useScrollBackground([
    { id: "hero", backgroundImage: heroBackground },
    { id: "experience", backgroundImage: experienceBackground },
    { id: "education", backgroundImage: educationBackground },
    { id: "skills", backgroundImage: skillsBackground },
    { id: "aptitudes", backgroundImage: aptitudesBackground },
    { id: "cv", backgroundImage: cvBackground }
  ]);

  return (
    <div className="min-h-screen relative">
      {/* Content overlay - lighter to show background images better */}
      <div className="fixed inset-0 bg-background/50 z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <AptitudesSection />
        <CVSection />
        
        {/* Footer */}
        <footer className="py-8 border-t border-border/20 bg-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">
              © 2024 Cristian Leal Guerra - Analista de Ciberseguridad & Desarrollador Backend Python
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
