import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-accent/20 overflow-hidden shadow-lg">
              <img 
                src={profilePhoto} 
                alt="Shri Pooja Challagulla" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <motion.p 
              className="text-accent font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Shri Pooja Challagulla
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-6 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              AI Systems Engineer & Computer Science Researcher. Building intelligent systems 
              with LLMs, RAG pipelines, and agentic AI workflows.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
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
              <Button 
                variant="outline" 
                asChild
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground gap-2"
              >
                <a href="/Shri_Pooja_Challagulla_Resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button 
        onClick={() => onNavigate("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
