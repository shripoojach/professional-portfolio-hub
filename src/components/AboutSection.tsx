import { Code, Brain, Cloud, Database, Terminal, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { icon: Brain, title: "AI / Machine Learning", description: "LLMs, RAG Pipelines, Agentic AI, Multi-Agent Systems, NLP, TensorFlow, PyTorch, LangChain" },
  { icon: Cloud, title: "Backend / Cloud", description: "AWS (Lambda, S3, EC2), FastAPI, Flask, PostgreSQL, REST APIs, Microservices" },
  { icon: Code, title: "Programming", description: "Python, SQL, Java, JavaScript, Shell Scripting, HTML, CSS" },
  { icon: BarChart, title: "Data & Analytics", description: "NumPy, Pandas, Matplotlib, Excel, Data Visualization" },
  { icon: Terminal, title: "Software Engineering", description: "System Design, API Integration, Workflow Automation, Data Validation Pipelines" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a Computer Science and Artificial Intelligence dual-major at the University of Arizona, 
              with a minor in Mathematics. My work sits at the intersection of AI systems engineering, 
              natural language processing, and intelligent retrieval systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Currently, I'm an AI Systems Engineer Intern at McGraw Hill, where I develop agent-driven, 
              course-aligned learning systems using LLM-based architectures and RAG pipelines. Previously, 
              I built AI-powered chatbots for oncology information retrieval at the AWCIM Cancer Center.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm an incoming PhD student in Computer Science (Machine Learning) at the University of Arizona, 
              where I'll continue pushing the boundaries of intelligent systems and applied AI research.
            </p>
          </motion.div>

          {/* Skills */}
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.title}
                className="flex items-start gap-4 p-4 rounded-lg bg-background card-hover"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.02, x: 8 }}
              >
                <div className="p-3 rounded-lg bg-accent/10">
                  <skill.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
