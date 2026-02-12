import { FileText, Link2 } from "lucide-react";

const projects = [
  {
    title: "PDF & Image Processing Desktop App",
    tech: ["Python", "PySide6"],
    description: "Offline PDF compression, conversion, and document tools with smart compression and background processing.",
  },
  {
    title: "ZOHO Cliq & YouTrack Integration",
    tech: ["Deluge", "JavaScript"],
    description: "Built CRUD operations, API integration, and notifications connecting ZOHO Cliq with YouTrack project management.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <div className="glow-line mb-16" />
      <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Work</p>
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {projects.map((project) => (
          <div key={project.title} className="glass-card-hover group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText size={20} className="text-primary" />
              </div>
              <Link2
                size={16}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">{project.title}</h3>
            <p className="text-sm text-secondary-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
