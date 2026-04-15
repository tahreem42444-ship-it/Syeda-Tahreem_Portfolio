import { useScrollFadeIn } from "./useScrollFadeIn";

const AboutSection = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section id="about" className="section-padding bg-ivory-warm">
      <div ref={ref} className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "fade-in" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">Get to Know Me</p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">About Me</h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            I am Syeda Tahreem Fatima, a BSIT student at Sir Syed University of Engineering & Technology with hands-on experience in data operations, academic instruction, event support, and technical projects. I am passionate about combining technology, structure, and innovation to deliver meaningful results.
          </p>
          <p>
            My approach is centered on clarity, collaboration, and continuous improvement. Whether I am managing data operations, coordinating project activities, delivering academic instruction, or solving technical challenges, I aim to bring precision, reliability, and a calm problem-solving mindset to every task.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
