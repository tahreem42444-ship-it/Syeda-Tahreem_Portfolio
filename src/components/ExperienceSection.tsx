import { useScrollFadeIn } from "./useScrollFadeIn";

const experiences = [
  {
    role: "Academic Instructor (Part-Time)",
    company: "FAHAD Tutors, Karachi",
    period: "Jul 2025 — Present",
    points: [
      "Deliver one-on-one academic instruction to SSC and HSC students.",
      "Prepare structured lesson plans based on student learning needs.",
      "Monitor student progress and adjust teaching strategies accordingly.",
      "Helped approximately 9–10 students achieve A+ grades through focused preparation and performance tracking.",
    ],
  },
  {
    role: "Data Operations Assistant (Part-Time)",
    company: "Resource Linked, Remote",
    period: "Feb 2024 — Jul 2024",
    points: [
      "Managed structured data entry tasks using Microsoft Excel.",
      "Maintained organized digital records and documentation.",
      "Created basic charts and supported reporting processes.",
      "Ensured accuracy and consistency in data handling.",
    ],
  },
  {
    role: "Event Operations Volunteer",
    company: "ITCN Asia, Karachi",
    period: "Sep 2025",
    points: [
      "Managed attendee registration data with high accuracy.",
      "Assisted in ID preparation and badge distribution.",
      "Supported registration desk operations and coordinated with event staff to ensure smooth workflow.",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section id="experience" className="section-padding">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "fade-in" : "opacity-0 translate-y-6"}`}>
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">My Journey</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Experience</h2>
        </div>
        <div className={`relative border-l-2 border-accent/30 pl-8 space-y-10 stagger-children ${isVisible ? "is-visible" : ""}`}>
          {experiences.map((exp, i) => (
            <div key={i} className="relative group">
              <div className="absolute left-[-41px] top-1 w-3 h-3 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
              <div className="bg-card/50 rounded-xl p-6 border border-border/30 transition-all duration-300 group-hover:bg-card group-hover:shadow-card group-hover:border-border/60">
                <p className="text-xs font-medium tracking-wider uppercase text-accent mb-1">{exp.period}</p>
                <h3 className="font-heading text-lg font-bold text-foreground">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-accent mt-1.5 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
