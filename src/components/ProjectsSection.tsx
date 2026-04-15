import { Github, ExternalLink } from "lucide-react";
import { useScrollFadeIn } from "./useScrollFadeIn";

const projects = [
  {
    title: "PfSense Open-Source Firewall Implementation",
    description: "Implemented and configured a firewall using PfSense to demonstrate network security principles. Monitored incoming and outgoing traffic and applied access control policies. Demonstrated how firewalls protect systems by blocking unauthorized communication.",
    tags: ["Networking", "Security", "PfSense"],
    github: "https://github.com/tahreem42444-ship-it",
    live: "#",
  },
  {
    title: "AI Music Recommendation Project",
    description: "Developed a basic music recommendation project based on user preferences or selected inputs. Organized and processed project data to support simple recommendation logic. Strengthened practical skills in data handling, problem-solving, and Python.",
    tags: ["Python", "AI", "Data Handling"],
    github: "https://github.com/tahreem42444-ship-it",
    live: "#",
  },
  {
    title: "Excel Sales Dashboard Project",
    description: "Created a sales dashboard in Microsoft Excel using tables, charts, and basic formulas. Organized raw data into a clear visual format for easier reporting and analysis. Improved practical skills in spreadsheet-based reporting and data presentation.",
    tags: ["Excel", "Data Visualization", "Reporting"],
    github: "https://github.com/tahreem42444-ship-it",
    live: "#",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section id="projects" className="section-padding bg-ivory-warm">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? "fade-in" : "opacity-0 translate-y-6"}`}>
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">My Work</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Featured Projects</h2>
        </div>
        <div className={`grid md:grid-cols-3 gap-6 stagger-children ${isVisible ? "is-visible" : ""}`}>
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-background rounded-xl p-7 shadow-card border border-border/50 flex flex-col hover-lift"
            >
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-accent hover-pop cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-3 border-t border-border/30">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Github size={15} />
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
