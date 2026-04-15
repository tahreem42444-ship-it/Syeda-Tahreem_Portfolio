import { useScrollFadeIn } from "./useScrollFadeIn";

const education = [
  {
    degree: "Bachelor of Science in Information Technology (BSIT)",
    institution: "Sir Syed University of Engineering & Technology, Karachi",
    period: "2023 — Expected Graduation: 2027",
    points: ["Current Semester: 6th"],
  },
  {
    degree: "Pre-Engineering",
    institution: "Govt. College for Women Nazimabad, Karachi",
    period: "Graduated: 2023",
    points: [],
  },
  {
    degree: "SSC (Matriculation)",
    institution: "Programmer School, Karachi",
    period: "Graduated: 2021",
    points: [],
  },
];

const EducationSection = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section id="education" className="section-padding bg-ivory-warm">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "fade-in" : "opacity-0 translate-y-6"}`}>
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">Academic Background</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Education</h2>
        </div>
        <div className={`relative border-l-2 border-accent/30 pl-8 space-y-10 stagger-children ${isVisible ? "is-visible" : ""}`}>
          {education.map((item, i) => (
            <div key={i} className="relative group">
              <div className="absolute left-[-41px] top-1 w-3 h-3 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
              <div className="bg-card/50 rounded-xl p-6 border border-border/30 transition-all duration-300 group-hover:bg-card group-hover:shadow-card group-hover:border-border/60">
                <p className="text-xs font-medium tracking-wider uppercase text-accent mb-1">{item.period}</p>
                <h3 className="font-heading text-lg font-bold text-foreground">{item.degree}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.institution}</p>
                {item.points.length > 0 && (
                  <ul className="space-y-2">
                    {item.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-accent mt-1.5 shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
