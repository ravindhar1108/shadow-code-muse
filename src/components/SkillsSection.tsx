import { Code, Globe, Wrench, Users } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["C", "C++", "Java", "Python", "SQL"],
  },
  {
    icon: Globe,
    title: "Web",
    skills: ["React", "HTML", "CSS", "JavaScript", "Spring Boot"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["VS Code", "GitHub", "Vercel", "Render", "Postman"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Teamwork", "Communication", "Adaptability", "Quick Learning"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Skills</p>
      <h2 className="section-title">Tech Stack</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {categories.map((cat) => (
          <div key={cat.title} className="glass-card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <cat.icon size={18} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
