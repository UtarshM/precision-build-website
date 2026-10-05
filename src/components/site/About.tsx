import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Award, Target, Landmark, ShieldCheck, Heart, Sparkles, Milestone, ArrowRight } from "lucide-react";
import mbLogo from "@/assets/mb-finishing-logo.png";
import makeInIndiaImg from "@/assets/make-in-india.png";
import { MadeInIndiaLogo } from "./MadeInIndiaLogo";

const PILLARS = [
  {
    num: "01",
    title: "Engineering",
    text: "Precision-engineered metal polishing machines designed specifically for high-capacity, uniform finish, and reliable industrial-scale production."
  },
  {
    num: "02",
    title: "Quality",
    text: "Strict adherence to ISO 9001:2015 manufacturing standard parameters to guarantee durable service life and consistent surface finishing."
  },
  {
    num: "03",
    title: "Service",
    text: "Quick-response post-sales field engineering support and readily available tooling for our automatic buffing and polishing systems."
  },
  {
    num: "04",
    title: "Integrity",
    text: "Built on 35+ years of trust, transparent business partnerships, and strong manufacturing ethics across India and global markets."
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
        <div className="grid items-stretch gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 mb-20">
          
          {/* Left panel (Company Profile) */}
          <div className="premium-panel h-full flex flex-col justify-between p-8 md:p-12 border-black/5 bg-white shadow-soft">
            <div>
              {/* Logo and Made in India Branding */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <img
                    src={mbLogo}
                    alt="M.B. Finishing Logo"
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

                {/* Made in India Badge Pill */}
                <div className="flex items-center gap-3 bg-stone-100 border border-stone-300/60 rounded-full px-4 py-2.5 self-start sm:self-center shadow-sm">
                  <img
                    src={makeInIndiaImg}
                    className="h-5 w-auto object-contain shrink-0"
                    alt="Made In India"
                  />
                  <span className="text-[11px] font-bold text-stone-700 tracking-wider uppercase">
                    Made In India
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-[10px] uppercase font-bold text-primary tracking-[0.22em] block mb-2">
                  ISO 9001:2015 Certified | Made in India
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-black uppercase text-stone-950 tracking-tight leading-tight">
                  Precision Metal Polishing & Surface Finishing Systems
                </h2>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-500 mt-2">
                  M.B. Finishing Technologies — A Subsidiary of M.B. Tools Pvt. Ltd.
                </p>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-stone-600 mt-4 text-left font-medium">
                Established in 1990, we manufacture high-precision metal polishing machines and buffing systems built for demanding industrial environments. From pharmaceutical vessels and storage tanks requiring uniform mirror finishes to automotive components and cookware, our equipment delivers consistent surface quality, tight Ra control, and dependable operational efficiency.
              </p>
            </div>

            <div className="pt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-stone-950 text-white hover:bg-primary hover:text-stone-950 px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-95"
              >
                Learn More About Us →
              </Link>
            </div>
          </div>

          {/* Right Concept Box (Vision, Mission, Values) */}
          <div className="premium-panel h-full flex flex-col p-8 md:p-12 border-black/5 bg-[#fbf7ef] shadow-soft">
            <div className="mb-4">
              <span className="industrial-badge mb-3">Our Core Focus</span>
              <h2 className="font-display text-2xl font-bold uppercase text-stone-950 tracking-tight">
                Our Core Focus
              </h2>
            </div>
            
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
                  {concept === "values" ? "Pillars" : concept}
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
                  <h3 className="font-display text-2xl sm:text-3xl text-stone-950 uppercase font-semibold">Our Vision</h3>
                  <p className="mt-4 text-sm text-stone-600 leading-relaxed font-medium">
                    To be India's most trusted industrial polishing machine manufacturer—recognized globally for robust engineering, low maintenance designs, and the ability to solve complex surface finishing challenges.
                  </p>
                </div>
              )}
              {activeConcept === "mission" && (
                <div className="animate-scale-in">
                  <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
                    <BookOpen className="size-6" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-stone-950 uppercase font-semibold">Our Mission</h3>
                  <p className="mt-4 text-sm text-stone-600 leading-relaxed font-medium">
                    To design and supply high-performance automatic polishing and buffing machines that minimize manual dependency, improve workplace safety, and deliver repeatable, export-grade surface finishes.
                  </p>
                </div>
              )}
              {activeConcept === "values" && (
                <div className="animate-scale-in">
                  <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
                    <Heart className="size-6" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-stone-950 uppercase font-semibold">The 4 Pillars of Excellence</h3>
                  <p className="mt-4 text-sm text-stone-600 leading-relaxed font-medium">
                    Our operations are driven by precision engineering, uncompromising quality standards, dedicated technical service, and absolute business integrity. Every metal finishing and buffing system we build is designed to deliver repeatable performance, long service life, and dependable support for modern production lines.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="industrial-badge mx-auto mb-4">OUR VALUES</div>
            <h2 className="font-display text-4xl sm:text-5xl uppercase font-bold text-stone-950 leading-tight">
              THE 4 PILLARS OF EXCELLENCE
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
              How our standards as an industrial polishing machine manufacturer guide every piece of equipment we build.
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
