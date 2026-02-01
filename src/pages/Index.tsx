import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleNavigate = (section: string) => {
    const element = sectionsRef.current[section];
    if (element) {
      const offset = 64; // Navigation height
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      const sections = ["hero", "about", "projects", "education", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = sectionsRef.current[section];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <div ref={(el) => (sectionsRef.current["hero"] = el)}>
          <HeroSection onNavigate={handleNavigate} />
        </div>
        
        <div ref={(el) => (sectionsRef.current["about"] = el)}>
          <AboutSection />
        </div>
        
        <div ref={(el) => (sectionsRef.current["projects"] = el)}>
          <ProjectsSection />
        </div>
        
        <div ref={(el) => (sectionsRef.current["education"] = el)}>
          <EducationSection />
        </div>
        
        <div ref={(el) => (sectionsRef.current["contact"] = el)}>
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
