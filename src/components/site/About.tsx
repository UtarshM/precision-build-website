import { useState } from "react";
import { BookOpen, Award, Target, Landmark, ShieldCheck, Heart, Sparkles, Milestone } from "lucide-react";
import mbLogo from "@/assets/mb-finishing-logo.png";
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
    desc: "Established M.B. Tools Pvt. Ltd. focusing on manufacturing high-precision Engineering components and providing surface grinding solutions."
  },
  {
    year: "2000",
    title: "Strategic & Forward-Looking",
    desc: "Strategically extending our engineering expertise to address the high-precision surface finishing demands of the Automobile, Construction Equipment, and Valve industries"
  },
  {
    year: "2010",
    title: "SPM Manufacturing Era",
    desc: "Expanding into Special Purpose Machine (SPM) manufacturing — partnering with automation-driven industries to engineer purpose-built machines that optimise production efficiency and deliver consistent, high-precision component output"
  },
  {
    year: "2014",
    title: "Polishing Automation Era",
    desc: "Expanded operations into specialized Special Purpose Machines (SPMs) for automated surface finishing and buffing."
  },
  {
    year: "2024",
    title: "Formation of M.B. Finishing Technologies",
    desc: "M.B. Finishing Technologies was born out of a clear industry need — to deliver reliable, precision-engineered Polishing, Buffing, and Deburring solutions to the Pharmaceutical, Automobile, Aerospace, and Utensil manufacturing industries, where surface quality defines product integrity."
  }
];

export const About = () => {
  const [activeConcept, setActiveConcept] = useState("vision");

  return (
    <section className="section-shell bg-white pt-32 md:pt-40">
      <div className="container">
        
        {/* Main Brand Section */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 mb-20">
          
          {/* Left panel */}
          <div className="premium-panel p-8 md:p-12 border-black/5 bg-white shadow-soft">
            
            {/* Logo and Made in India Branding */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <img
                  src={mbLogo}
                  alt="MB Finishing Logo"
                  className="h-16 w-auto object-contain shrink-0"
                />
                <div className="flex flex-col text-left">
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

              {/* Make in India lion logo inline on the right */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Make_In_India.svg"
                className="h-10 w-auto object-contain shrink-0 opacity-85"
                alt="Make in India Logo"
              />
            </div>
            
            <p className="text-base leading-relaxed text-stone-700 font-medium">
              <strong className="text-primary font-bold">M.B. Finishing Technologies</strong> a subsidy of MB tools pvt ltd established in 1990 delivers precision buffing and polishing solutions that enhance durability, aesthetics, and performance across critical industries. From <strong className="text-stone-950 font-bold">pharmaceutical tanks requiring hygienic, mirror-like finishes</strong> to <strong className="text-stone-950 font-bold">automotive components demanding consistent quality</strong>, and <strong className="text-stone-950 font-bold">high-end metal surfaces where appearance defines value</strong>, our expertise ensures every surface reflects excellence.
            </p>

            {/* Made in India badge */}
            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-amber-500/10 border border-amber-500/15 p-5 text-amber-900">
              <MadeInIndiaLogo size={36} />
              <div>
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider">Made In India Productive Strength</h4>
                <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                  Engineered and manufactured at Gat No 669 & 670, Balghare Vasti, Chikhali, Pune-411062 to drive high-performance metal finishing global standards.
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
                    To be India's most trusted surface finishing machine manufacturer — recognised globally for engineering excellence and the ability to convert any finishing challenge into a reliable, automated solution.
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
                    To engineer and deliver automatic surface finishing machines that solve real production challenges — enabling our customers to achieve international surface quality standards, reduce manual dependency, and scale their finishing operations with confidence.
                  </p>
                </div>
              )}
              {activeConcept === "values" && (
                <div className="animate-scale-in">
                  <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
                    <Heart className="size-6" />
                  </div>
                  <h3 className="font-display text-3xl text-stone-950 uppercase font-semibold">The 4 pillars of Excellence</h3>
                  <ul className="mt-4 text-sm text-muted-foreground leading-relaxed space-y-2">
                    <li>• Engineering</li>
                    <li>• Quality</li>
                    <li>• Service</li>
                    <li>• Integrity</li>
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
