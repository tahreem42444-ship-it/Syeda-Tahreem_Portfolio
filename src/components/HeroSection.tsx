import { Download } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-28 md:pt-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="fade-in">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Welcome
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-4">
            Syeda Tahreem
            <br />
            <span className="text-primary">Fatima</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-medium mb-6">
            IT Specialist | Project Management Professional
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
            Motivated BSIT student with experience in data operations, academic instruction, event support, and technical projects. Skilled in Microsoft Excel, data organization, documentation, and Python. Detail-oriented, organized, and eager to deliver impactful results.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-7 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-soft"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="/Syeda_Tahreem_Fatima_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-soft"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
        <div className="fade-in fade-in-delay-2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-card hover-lift">
            <img
              src={heroImage}
              alt="Abstract feminine professional visual"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              width={800}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
