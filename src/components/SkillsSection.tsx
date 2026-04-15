import { useScrollFadeIn } from "./useScrollFadeIn";

const technicalSkills = [
  "Microsoft Excel (Data Organization, Charts, Formulas, Reporting)",
  "Python (Basic Scripting)",
  "Data Documentation & Record Management",
  "Basic Networking Fundamentals",
  "Data Entry & File Organization",
];

const softSkills = [
  "Project Coordination",
  "Team Communication & Stakeholder Coordination",
  "Task Prioritization & Time Management",
  "Process Improvement",
  "Adaptability in Fast-Paced Environments",
  "Detail-Oriented & Organized",
];

const certifications = [
  "Python Essentials — Cisco Networking Academy",
  "Data Analytics Essentials — Cisco Networking Academy",
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section id="skills" className="section-padding">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "fade-in" : "opacity-0 translate-y-6"}`}>
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">What I Bring</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Core Skills</h2>
        </div>

        <div className="mb-10">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Technical Skills</h3>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children ${isVisible ? "is-visible" : ""}`}>
            {technicalSkills.map((skill) => (
              <div
                key={skill}
                className="bg-card rounded-xl px-6 py-5 shadow-soft border border-border/50 hover-lift cursor-default"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Soft Skills</h3>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children ${isVisible ? "is-visible" : ""}`}>
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="bg-card rounded-xl px-6 py-5 shadow-soft border border-border/50 hover-lift cursor-default"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Certifications</h3>
          <div className={`grid sm:grid-cols-2 gap-4 stagger-children ${isVisible ? "is-visible" : ""}`}>
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-card rounded-xl px-6 py-5 shadow-soft border border-border/50 hover-lift cursor-default"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
