import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Infosys Springboard Internship 5.0",
    subtitle: "AI Project Intern",
    items: [
      "Built voice-enabled form filler using React and CSS",
      "Integrated AI voice-to-text APIs",
      "Deployed using Vercel and Render",
    ],
  },
  {
    icon: GraduationCap,
    title: "CS50x – Harvard (edX)",
    subtitle: "Certificate Program",
    items: [
      "Learned algorithms, memory, recursion, and web technologies",
      "Built task management web app as final project",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Experience</p>
      <h2 className="section-title">Experience & Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {experiences.map((exp) => (
          <div key={exp.title} className="glass-card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <exp.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.subtitle}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {exp.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
