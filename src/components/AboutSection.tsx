import { Code2, Brain, Trophy } from "lucide-react";

const highlights = [
  { icon: Code2, label: "900+ Problems Solved" },
  { icon: Brain, label: "DSA Enthusiast" },
  { icon: Trophy, label: "Frontend Developer" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="glow-line mb-16" />
      <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">About</p>
      <h2 className="section-title">About Me</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-2">
          <p className="text-secondary-foreground leading-relaxed text-lg">
            Computer Science and Business Systems undergraduate with strong foundations in
            Data Structures & Algorithms and programming. Proficient in{" "}
            <span className="text-foreground font-medium">C, C++, Java, and Python</span>.
            Solved <span className="text-foreground font-medium">900+ coding problems</span> across
            competitive programming platforms. Experienced in frontend development and passionate
            about building real-world applications that solve meaningful problems.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {highlights.map(({ icon: Icon, label }) => (
            <div key={label} className="glass-card flex items-center gap-3 py-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon size={18} className="text-primary" />
              </div>
              <span className="text-sm text-foreground font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
