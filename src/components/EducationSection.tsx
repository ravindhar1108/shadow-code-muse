import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "RMD Engineering College",
    degree: "B.Tech CSBS",
    score: "7.92 CGPA",
    year: "2027",
  },
  {
    institution: "Velammal Main School",
    degree: "HSC",
    score: "87.5%",
    year: "2023",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-container">
      <div className="glow-line mb-16" />
      <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Education</p>
      <h2 className="section-title">Education</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {education.map((edu) => (
          <div key={edu.institution} className="glass-card-hover">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{edu.institution}</h3>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="font-mono text-primary">{edu.score}</span>
              <span className="text-muted-foreground">{edu.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
