import { useState } from "react";
import { Mail, Linkedin, MapPin, Phone, Github } from "lucide-react";
import { useScrollFadeIn } from "./useScrollFadeIn";

const ContactSection = () => {
  const { ref, isVisible } = useScrollFadeIn();
  const [showEmailPicker, setShowEmailPicker] = useState(false);

  const email = "tahreem42444@gmail.com";
  const phone = "03219216065";
  const phoneFormatted = "0321 9216065";
  const contactName = "Syeda Tahreem Fatima";

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailPicker(true);
  };

  const openGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, "_blank");
    setShowEmailPicker(false);
  };

  const openOutlook = () => {
    window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${email}`, "_blank");
    setShowEmailPicker(false);
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${contactName}\nTEL;TYPE=CELL:+92${phone.slice(1)}\nEMAIL:${email}\nEND:VCARD`;
      const blob = new Blob([vcard], { type: "text/vcard" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${contactName.replace(/\s+/g, "_")}.vcf`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      const contactParams = new URLSearchParams({
        name: contactName,
        given_name: "Syeda",
        middle_name: "Tahreem",
        family_name: "Fatima",
        phone: `+92${phone.slice(1)}`,
        email,
      });

      window.open(`https://contacts.google.com/new?${contactParams.toString()}`, "_blank");
    }
  };

  return (
    <section id="contact" className="section-padding bg-fixed-deep-brown">
      <div ref={ref} className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "fade-in" : "opacity-0 translate-y-6"}`}>
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-rose-muted mb-3">Reach Out</p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-fixed-light mb-6">Let's Connect</h2>
        <p className="text-fixed-light/70 leading-relaxed max-w-xl mx-auto mb-10 text-base md:text-lg">
          I am open to opportunities in IT, project coordination, data operations, and project management where I can contribute with professionalism, organization, and a results-driven mindset.
        </p>
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 flex-wrap stagger-children ${isVisible ? "is-visible" : ""}`}>
          <div className="relative">
            <button
              onClick={handleEmailClick}
              className="flex items-center gap-3 text-fixed-light/80 hover:text-fixed-light transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              <span className="text-sm">{email}</span>
            </button>
            {showEmailPicker && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-background rounded-xl shadow-card border border-border p-4 z-50 min-w-[200px] animate-fade-in">
                <p className="text-xs text-muted-foreground mb-3 font-medium">Open with:</p>
                <button
                  onClick={openGmail}
                  className="w-full text-left text-sm text-foreground hover:text-primary px-3 py-2 rounded-lg hover:bg-secondary transition-colors duration-200"
                >
                  📧 Gmail
                </button>
                <button
                  onClick={openOutlook}
                  className="w-full text-left text-sm text-foreground hover:text-primary px-3 py-2 rounded-lg hover:bg-secondary transition-colors duration-200"
                >
                  📮 Outlook
                </button>
                <button
                  onClick={() => setShowEmailPicker(false)}
                  className="w-full text-left text-xs text-muted-foreground px-3 py-1.5 mt-1 hover:text-foreground transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
          <button
            onClick={handlePhoneClick}
            className="flex items-center gap-3 text-fixed-light/80 hover:text-fixed-light transition-all duration-300 hover:scale-105"
          >
            <Phone size={20} />
            <span className="text-sm">{phoneFormatted}</span>
          </button>
          <a href="https://www.linkedin.com/in/syeda-tahreem-fatima-10177a294/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-fixed-light/80 hover:text-fixed-light transition-all duration-300 hover:scale-105">
            <Linkedin size={20} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href="https://github.com/tahreem42444-ship-it" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-fixed-light/80 hover:text-fixed-light transition-all duration-300 hover:scale-105">
            <Github size={20} />
            <span className="text-sm">GitHub</span>
          </a>
          <div className="flex items-center gap-3 text-fixed-light/80">
            <MapPin size={20} />
            <span className="text-sm">Karachi, Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
