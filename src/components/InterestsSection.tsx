import { Bug, Palette, Dumbbell, Crown } from "lucide-react";

const interests = [
  { icon: Bug, label: "Frontend Debugging" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Dumbbell, label: "Fitness" },
  { icon: Crown, label: "Chess" },
];

const InterestsSection = () => {
  return (
    <section className="section-container">
      <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Interests</p>
      <h2 className="section-title">What I Enjoy</h2>
      <div className="flex flex-wrap gap-4 mt-12">
        {interests.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="glass-card-hover flex items-center gap-3 px-5 py-3"
          >
            <Icon size={18} className="text-primary" />
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
