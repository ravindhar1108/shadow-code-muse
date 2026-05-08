import { FileText, Link2, Shield, Github } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "Secure File Sharing & Storage Vault",
    tech: ["Spring Boot", "PostgreSQL", "AWS S3", "Docker", "Azure"],
    description:
      "Secure file management platform with JWT authentication, password-protected one-time share links, rate limiting, chunked uploads, and CI/CD via GitHub Actions.",
    href: "https://github.com/ravindhar1108",
  },
  {
    icon: FileText,
    title: "PDF & Image Processing Desktop App",
    tech: ["Python"],
    description:
      "Desktop application for PDF and image processing — merge, split, compress, and convert with quality-preserving compression.",
    href: "https://github.com/ravindhar1108",
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
                <project.icon size={20} className="text-primary" />
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
              >
                <Github
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </a>
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
