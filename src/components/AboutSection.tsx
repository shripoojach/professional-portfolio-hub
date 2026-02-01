import { Code, Palette, Lightbulb } from "lucide-react";

const skills = [
  { icon: Code, title: "Development", description: "Building scalable web applications with modern technologies" },
  { icon: Palette, title: "Design", description: "Creating clean, intuitive user interfaces and experiences" },
  { icon: Lightbulb, title: "Problem Solving", description: "Finding creative solutions to complex challenges" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a dedicated professional with a passion for creating impactful digital experiences. 
              With a strong foundation in both technical skills and creative thinking, I strive to 
              deliver solutions that make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My journey has been driven by curiosity and a constant desire to learn. I believe in 
              the power of technology to solve real-world problems and am committed to continuous 
              growth and improvement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or enjoying outdoor activities.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="flex items-start gap-4 p-4 rounded-lg bg-background card-hover fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="p-3 rounded-lg bg-accent/10">
                  <skill.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
