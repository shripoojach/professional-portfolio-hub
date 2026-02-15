import { ExternalLink, Github, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const experience = [
  {
    id: 1,
    title: "AI Systems Engineer Intern",
    company: "McGraw Hill",
    period: "Jan 2026 – Present",
    bullets: [
      "Developing AI proof-of-concept for agent-driven, course-aligned learning systems using LLM-based architectures.",
      "Designing orchestration workflows using RAG pipelines with graph-based approaches leveraging knowledge graphs.",
      "Implementing structured knowledge retrieval for explainability, multi-hop reasoning, and semantic linking.",
      "Collaborating with faculty, researchers, and industry stakeholders on responsible AI deployment strategies.",
    ],
  },
  {
    id: 2,
    title: "AI Solutions Developer",
    company: "AWCIM Cancer Center",
    period: "Aug 2025 – Dec 2025",
    bullets: [
      "Built AI-powered RAG chatbot using vector embeddings, pgVector, FastAPI, and AWS Lambda for oncology retrieval.",
      "Designed backend microservices for automated document ingestion, semantic search, and contextual response generation.",
      "Implemented evaluation pipelines analyzing 240+ clinical response outputs to improve accuracy and safety.",
    ],
  },
];

const projects = [
  {
    id: 1,
    title: "PDF Reader with RAG Question Answering",
    description: "End-to-end document intelligence pipeline with chunking, embedding generation, and citation-based semantic retrieval. REST APIs for scalable multi-document conversational QA.",
    tags: ["RAG", "LLMs", "FastAPI", "Vector DB", "REST APIs"],
    image: "📄",
  },
  {
    id: 2,
    title: "Sentiment Analysis NLP Pipeline",
    description: "Supervised ML models for textual sentiment classification with full preprocessing, tokenization, normalization, and statistical visualization of sentiment insights.",
    tags: ["NLP", "Python", "scikit-learn", "Matplotlib"],
    image: "📊",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience & Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Experience */}
        <div className="mb-16 space-y-8">
          <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-accent" />
            Professional Experience
          </h3>
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="p-6 bg-card rounded-xl border border-border card-hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                <span className="text-sm text-accent font-medium">{exp.period}</span>
              </div>
              <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
              <ul className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden card-hover border border-border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
            >
              <div className="h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center overflow-hidden">
                <motion.span 
                  className="text-6xl"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.image}
                </motion.span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
