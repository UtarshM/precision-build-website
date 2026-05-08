import { useState } from "react";
import { BookOpen, Award, Target, Landmark, ShieldCheck, Heart, Sparkles, Milestone } from "lucide-react";
import mbLogo from "@/assets/mb-finishing-logo.jpg";
import { MadeInIndiaLogo } from "./MadeInIndiaLogo";

const PILLARS = [
  {
    num: "01",
    title: "Engineering",
    text: "Precision-engineered machinery designed specifically for high-capacity, consistent industrial-scale production."
  },
  {
    num: "02",
    title: "Quality",
    text: "Strict adherence to ISO 9001:2015 manufacturing standard parameters to guarantee durable service life."
  },
  {
    num: "03",
    title: "Service",
    text: "Quick-response post-sales field engineering support and readily available stock of critical abrasives."
  },
  {
    num: "04",
    title: "Integrity",
    text: "Built on 35+ years of trust, transparent business partnerships, and strong manufacturing ethics."
  }
];

const TIMELINE_EVENTS = [
  {
    year: "1990",
    title: "Company Foundation",
    desc: "Established M.B. Tools Pvt. Ltd. focusing on manufacturing high-precision industrial tooling and grinding machinery."
  },
  {
    year: "2005",
    title: "Polishing Automation Era",
    desc: "Expanded operations into specialized Special Purpose Machines (SPMs) for automated surface finishing and buffing."
  },
  {
    year: "2015",
    title: "ISO Certification",
    desc: "Obtained the formal ISO 9001:2015 Certification, ensuring strict standardization of global export quality."
  },
  {
    year: "Present",
    title: "Finishing Specialists",
    desc: "Deploying standard and customized tank, pipe, sheet, and cookware polishing systems to 1,000+ satisfied industrial clients worldwide."
  }
];

export const About = () => {
  const [activeConcept, setActiveConcept] = useState("vision");

  return (
    <section className="section-shell bg-white">
      <div className="container">
        
        {/* Main Brand Section */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 mb-20">
          
          {/* Left panel */}
          <div className="premium-panel p-8 md:p-12 border-black/5 bg-white shadow-soft">
            
            {/* Logo and Made in India Branding */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <img
                src={mbLogo}
                alt="MB Finishing Logo"
                className="h-16 w-16 rounded-full object-contain border border-black/10 bg-white p-1"
              />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-primary tracking-[0.24em]">
                  ISO 9001:2015 Certified
                </span>
                <h3 className="font-display text-2xl text-stone-900 uppercase font-bold leading-none mt-1">
                  M.B. Finishing Technologies
                </h3>
                <span className="text-[9px] text-stone-500 tracking-wider font-semibold uppercase mt-1 leading-none">
                  A Subsidiary of M.B. Tools Pvt. Ltd.
                </span>
              </div>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl leading-[0.95] tracking-tight text-stone-950 uppercase font-bold">
              Engineering finishing solutions with a more exacting standard.
            </h2>
            
            <div className="gold-line my-8" />
            
            <p className="text-base leading-relaxed text-muted-foreground">
              M.B. Finishing Technologies, a subsidiary of M.B. Tools Pvt. Ltd.
              established in 1990, designs and manufactures automatic special
              purpose and standard buffing and polishing machines for
              automobile components, cookware, pipes, sheets, and industrial finishing applications.
            </p>

            {/* Made in India badge */}
            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-amber-500/10 border border-amber-500/15 p-5 text-amber-900">
              <MadeInIndiaLogo size={36} />
              <div>
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider">Made In India Productive Strength</h4>
                <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                  Engineered and manufactured in Bhosari, MIDC, Pune to drive high-performance metal finishing global standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right Concept Box (Vision, Mission, Values) */}
          <div className="premium-panel p-8 md:p-12 border-black/5 bg-[#fbf7ef] shadow-soft lg:sticky lg:top-28">
            <div className="industrial-badge mb-6">Our Core Focus</div>
            
            {/* Accordion tabs */}
            <div className="flex border-b border-black/5 mb-8">
              {["vision", "mission", "values"].map((concept) => (
                <button
                  key={concept}
                  onClick={() => setActiveConcept(concept)}
                  className={`flex-1 pb-4 text-xs font-bold uppercase tracking-widest transition-all ${
                    activeConcept === concept
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-stone-900"
                  }`}
                >
                  {concept}
                </button>
              ))}
            </div>

            {/* Interactive Concept Content */}
            <div className="min-h-56">
              {activeConcept === "vision" && (
                <div className="animate-scale-in">
                  <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
                    <Target className="size-6" />
                  </div>
                  <h3 className="font-display text-3xl text-stone-950 uppercase font-semibold">Our Vision</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    To be the leading global pioneer in automatic surface finishing technology, empowering metal fabrication industries to achieve maximum surface consistency, zero defects, and absolute operational efficiency.
                  </p>
                </div>
              )}
              {activeConcept === "mission" && (
                <div className="animate-scale-in">
                  <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
                    <BookOpen className="size-6" />
                  </div>
                  <h3 className="font-display text-3xl text-stone-950 uppercase font-semibold">Our Mission</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    We engineer reliable, specialized, and highly productive automated finishing machinery designed specifically to reduce labor dependencies, lower production costs, and maintain certified, repeatable aesthetic excellence.
                  </p>
                </div>
              )}
              {activeConcept === "values" && (
                <div className="animate-scale-in">
                  <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
                    <Heart className="size-6" />
                  </div>
                  <h3 className="font-display text-3xl text-stone-950 uppercase font-semibold">Our Core Values</h3>
                  <ul className="mt-4 text-sm text-muted-foreground leading-relaxed space-y-2">
                    <li><strong>✓ Precision Engineering:</strong> Striving for exact micron parameters.</li>
                    <li><strong>✓ Client Partnership:</strong> Designing custom answers for client-specific challenges.</li>
                    <li><strong>✓ Unyielding Quality:</strong> Built with robust construction for multi-decade life.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="industrial-badge mx-auto mb-4">Our Values</div>
            <h2 className="font-display text-4xl sm:text-5xl uppercase font-bold text-stone-950 leading-tight">
              The 4 Pillars of Excellence
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-3 leading-relaxed">
              Our operations and machine quality are guided strictly by four key pillars of industrial manufacturing.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div key={p.num} className="metal-card hover-lift p-6 bg-white border-black/5 shadow-soft">
                <span className="font-display text-5xl font-extrabold text-primary/20 block mb-4">
                  {p.num}
                </span>
                <h3 className="font-display text-2xl font-bold text-stone-950 mb-3">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Timeline section */}
        <div className="border-t border-black/5 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="industrial-badge mx-auto mb-4">Our Journey</div>
            <h2 className="font-display text-4xl sm:text-5xl uppercase font-bold text-stone-950 leading-tight">
              Company Milestone Timeline
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-3 leading-relaxed">
              Tracing over three decades of engineering expansion and industry-leading metal finishing innovations.
            </p>
          </div>

          <div className="relative border-l-2 border-primary/30 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-12 py-4">
            {TIMELINE_EVENTS.map((item) => (
              <div key={item.year} className="relative group">
                
                {/* Timeline node */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 size-6 rounded-full border-4 border-white bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <Milestone className="size-2" />
                </div>

                <div className="rounded-[1.5rem] border border-black/5 bg-[#faf6ed] p-6 shadow-soft hover:bg-white transition-colors duration-300">
                  <span className="font-display text-2xl font-bold text-primary block">
                    {item.year}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-stone-900 mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
