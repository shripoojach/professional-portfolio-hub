import { GraduationCap, Users, Heart } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Your University Name",
    year: "2020 - 2024",
    description: "Focused on software engineering, data structures, and web development.",
  },
  {
    degree: "High School Diploma",
    institution: "Your High School Name",
    year: "2018 - 2020",
    description: "Graduated with honors, specializing in science and mathematics.",
  },
];

const clubs = [
  { name: "Coding Club", role: "President", description: "Led weekly coding sessions and hackathons" },
  { name: "Tech Society", role: "Member", description: "Participated in tech talks and workshops" },
  { name: "Debate Club", role: "Vice President", description: "Organized inter-college debate competitions" },
];

const interests = [
  "Web Development",
  "Machine Learning",
  "Open Source",
  "Photography",
  "Reading",
  "Hiking",
  "Music",
  "Gaming",
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & Interests
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent"></div>
                  <p className="text-xs text-accent font-medium mb-1">{edu.year}</p>
                  <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Clubs */}
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Clubs & Activities</h3>
            </div>
            <div className="space-y-4">
              {clubs.map((club, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-background card-hover"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{club.name}</h4>
                    <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                      {club.role}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{club.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <Heart className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-medium bg-background rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default card-hover"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
