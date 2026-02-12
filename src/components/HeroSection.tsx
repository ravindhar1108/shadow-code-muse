import { ArrowDown, FolderOpen, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.03] bg-primary blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-[0.04] bg-accent blur-[80px]" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className="animate-fade-up">
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">Hello, I'm</p>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-up-delay-1">
          <span className="gradient-text">Ravindhar G</span>
        </h1>

        <p className="text-lg md:text-xl text-secondary-foreground mb-3 animate-fade-up-delay-2">
          Computer Science & Business Systems Undergraduate
          <span className="mx-2 text-muted-foreground">|</span>
          Software Developer
        </p>

        <p className="text-muted-foreground max-w-lg mx-auto mb-8 animate-fade-up-delay-3">
          Passionate about building practical tech solutions and mastering DSA
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "var(--gradient-primary)" }}
          >
            <FolderOpen size={16} />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border border-border text-foreground bg-secondary hover:bg-muted transition-all duration-300 hover:scale-[1.02]"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ArrowDown size={18} />
      </div>
    </section>
  );
};

export default HeroSection;
