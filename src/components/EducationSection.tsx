import { GraduationCap, Users, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "B.S. in Computer Science & Artificial Intelligence (Dual Major)",
    institution: "University of Arizona",
    year: "Expected Dec 2026",
    description: "Minor in Mathematics. Coursework: Machine Learning, Cloud Computing, DSA, Software Engineering, Data Science, AI.",
  },
  {
    degree: "Incoming PhD in Computer Science (Machine Learning)",
    institution: "University of Arizona",
    year: "Future",
    description: "Continuing research in machine learning and intelligent systems.",
  },
];

const clubs = [
  { name: "Phi Sigma Rho", role: "Member", description: "Greek Honor Society for Women in STEM" },
  { name: "Arizona Ramblers Hiking", role: "Member", description: "Outdoor adventures and hiking expeditions" },
];

const achievements = [
  "Dean's List with Distinction — Fall 2024",
  "Undergraduate Teaching Assistant — University of Arizona (Fall 2024)",
];

const interests = [
  "Machine Learning",
  "Natural Language Processing",
  "Agentic AI",
  "Cloud Computing",
  "Open Source",
  "Hiking",
  "Research",
  "Teaching",
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & Interests
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent"></div>
                  <p className="text-xs text-accent font-medium mb-1">{edu.year}</p>
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Clubs */}
          <div className="space-y-8">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Achievements</h3>
              </div>
              <div className="space-y-3">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg bg-background card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-sm text-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Clubs */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Clubs & Organizations</h3>
              </div>
              <div className="space-y-4">
                {clubs.map((club, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-lg bg-background card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{club.name}</h4>
                      <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                        {club.role}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{club.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/10">
              <Heart className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Interests</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 text-sm font-medium bg-background rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default card-hover"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
