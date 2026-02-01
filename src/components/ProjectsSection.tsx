import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart, checkout, and payment integration.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "🛒",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team features.",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    image: "✅",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A clean and modern portfolio website showcasing projects and skills.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "🎨",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather information with beautiful visualizations and forecasts.",
    tags: ["Vue.js", "API Integration", "Charts"],
    image: "🌤️",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Click on any project to learn more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden card-hover border border-border fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
