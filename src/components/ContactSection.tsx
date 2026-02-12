import { useState, FormEvent } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/ravindharg" },
  { icon: Github, label: "GitHub", href: "https://github.com/ravindhar1108" },
  { icon: ExternalLink, label: "LeetCode", href: "https://leetcode.com/u/Ravindhar1108/" },
  { icon: Mail, label: "Email", href: "mailto:ravindharg1108@gmail.com" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-container">
      <div className="glow-line mb-16" />
      <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Contact</p>
      <h2 className="section-title">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        {/* Social Links */}
        <div>
          <p className="text-secondary-foreground mb-6">
            Feel free to reach out through any of these platforms or drop a message using the form.
          </p>
          <div className="flex flex-col gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover flex items-center gap-3 py-3 px-4"
              >
                <Icon size={18} className="text-primary" />
                <span className="text-sm text-foreground">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            maxLength={255}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            maxLength={1000}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:scale-[1.01]"
            style={{ background: "var(--gradient-primary)" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
