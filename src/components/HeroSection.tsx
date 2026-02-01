import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0 fade-in-up">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-secondary border-4 border-accent/20 overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                <span className="text-6xl md:text-7xl text-muted-foreground">👤</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-accent font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Your Name
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-lg">
              A passionate developer and creative problem solver. I build modern web 
              applications and love turning ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={() => onNavigate("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onNavigate("projects")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => onNavigate("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default HeroSection;
