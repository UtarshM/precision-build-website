import { Helmet } from "react-helmet-async";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Contact } from "@/components/site/Contact";
import { Layers, BadgeCheck, Settings, Eye, HelpCircle } from "lucide-react";

const FINISHES_LIST = [
  {
    name: "No. 3 Finish (Coarse / Grinding)",
    grit: "60 – 80 Grit abrasives",
    characteristics: "Intermediate coarse finish showing visible linear polishing lines.",
    uses: "Weld seam removal, initial metal preparation, structural parts.",
    advantage: "Rapid material removal, prepares surface for finer grits."
  },
  {
    name: "No. 4 Finish (Satin)",
    grit: "120 – 220 Grit abrasives",
    characteristics: "Clean, uniform, short linear scratches with low reflectivity.",
    uses: "Commercial kitchen appliances, food silos, milk dairy tankers.",
    advantage: "High hygiene rating, hides finger marks and scratches."
  },
  {
    name: "Hairline Finish (Continuous Satin)",
    grit: "240 – 320 Grit specialized belts",
    characteristics: "Extremely long, continuous, fine parallel lines with uniform satin reflection.",
    uses: "Elevator panels, architectural cladding, decorative profiles.",
    advantage: "Premium luxury-industrial appearance, uniform architectural texture."
  },
  {
    name: "No. 8 Mirror Polish (Super Finish)",
    grit: "320+ Grit with cotton/sisal buffing & compounds",
    characteristics: "Ultra-smooth, highly reflective, mirror-like surface with no visible grain lines.",
    uses: "Pharmaceutical reactors, sterile vessel interiors, cosmetic mixers.",
    advantage: "Eliminates microscopic crevices, preventing bacterial colonization (Ra ≤ 0.1 µm)."
  }
];

const RA_ROUGHNESS_LEVELS = [
  {
    value: "Ra ≤ 0.10 µm",
    name: "Sterile / Super-Finish",
    desc: "Exceeds standard B2B pharma expectations. Achieved via oscillating super-finishing films or multi-head automated liquid compound buffing.",
    industries: "Critical Biotech, Sterile Mixing Vessels, Injectable Pharma Lines"
  },
  {
    value: "Ra ≤ 0.40 µm",
    name: "Pharmaceutical Sanitary Grade",
    desc: "Standard requirement for pharmaceutical pressure reactors. Prevents bacteria trap spots.",
    industries: "Pharma Reactors, Chemical Mixing Vessels, High-End Sanitary Tubes"
  },
  {
    value: "Ra ≤ 0.80 µm",
    name: "Food & Dairy Standard",
    desc: "Global food hygiene standard (3-A Sanitary Standards). Highly cleanable and easily sanitized.",
    industries: "Milk Storage Silos, Food Conveyors, Cookware Interiors"
  },
  {
    value: "Ra ≤ 1.60 µm",
    name: "Industrial Machined / Polished",
    desc: "Clean deburred surface for general industrial applications where weld lines are smoothed out.",
    industries: "Heavy Fabrications, Automobile Shock absorber tubes, General Tanks"
  }
];

const SurfaceFinishesPage = () => {
  return (
    <>
      <Helmet>
        <title>M.B. Finishing Technologies | Surface Finishes & Ra Values Guide</title>
        <meta
          name="description"
          content="B2B guide to industrial surface finishes: explaining Ra roughness average parameters, mirror polish, fine satin, hairline, and sanitary standards."
        />
      </Helmet>

      <SiteLayout>
        <PageBanner
          eyebrow="Technical Standards"
          title="Surface finishes and roughness (Ra) average values explained"
          description="A B2B guide for engineering buyers. Discover how automated PLC path tracking and buffing compound applications deliver precise, repeatable, and certified metal roughness values."
        />

        {/* What is Ra Section */}
        <section className="section-shell bg-[#fbf7ef]">
          <div className="container">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
              <div>
                <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                  <HelpCircle className="size-6" />
                </div>
                <span className="text-[10px] uppercase font-bold text-primary tracking-[0.24em]">
                  Industrial Metrology
                </span>
                <h2 className="font-display text-4xl sm:text-5xl uppercase font-bold text-stone-950 mt-2 leading-tight">
                  What is Ra Surface Roughness Value?
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-6">
                  In B2B metal manufacturing, surface quality is not just visual—it is measured. **Ra (Roughness Average)** represents the arithmetic average of microscopic surface profile deviations. 
                </p>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-4">
                  For sectors like food, dairy, and pharmaceuticals, surface roughness is critical: microscopic pits and cracks in raw steel trap organic matter, leading to bacterial growth. High-precision polishing grinds away peaks and buffs the valleys, ensuring a cleanable, non-porous surface.
                </p>
                <div className="rounded-2xl border border-primary/20 bg-amber-500/5 p-5 mt-8">
                  <h4 className="font-heading text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
                    <BadgeCheck className="size-4 text-primary shrink-0" /> PLC & OSCILLATION CONTROL
                  </h4>
                  <p className="text-stone-600 text-xs mt-2 leading-relaxed">
                    Unlike inconsistent manual polishing, M.B. Finishing Technologies' automated machines utilize PLC-controlled buffing head pressures and oscillating heads to guarantee a certified, repeatable Ra finish across 100% of the workpiece.
                  </p>
                </div>
              </div>

              {/* Ra spec cards */}
              <div className="space-y-4">
                {RA_ROUGHNESS_LEVELS.map((level) => (
                  <div key={level.value} className="metal-card hover-lift p-6 bg-white border-black/5 shadow-soft">
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                          Target Spec
                        </span>
                        <h4 className="font-display text-2xl font-bold text-primary leading-none mt-1">
                          {level.value}
                        </h4>
                      </div>
                      <span className="rounded-full bg-primary/10 text-primary px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider">
                        {level.name}
                      </span>
                    </div>
                    <p className="text-stone-600 text-xs sm:text-sm mt-4 leading-relaxed">
                      {level.desc}
                    </p>
                    <div className="mt-4 pt-4 border-t border-black/5 flex flex-wrap gap-2 items-center text-[10px] text-stone-500 font-semibold">
                      <span className="uppercase text-stone-400">Applications:</span>
                      <span className="text-stone-800">{level.industries}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Finish Types section */}
        <section className="section-shell bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="industrial-badge mx-auto mb-4">Finishes Catalogue</div>
              <h2 className="font-display text-4xl sm:text-5xl uppercase font-bold text-stone-950 leading-tight">
                Types of Surface Finishes
              </h2>
              <p className="text-stone-500 text-xs sm:text-sm mt-3 leading-relaxed">
                Discover the specific finish grades buyers search by, engineered for robust industrial requirements.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {FINISHES_LIST.map((fin) => (
                <div key={fin.name} className="premium-panel p-8 bg-[#faf6ed]/40 border-black/5 shadow-soft flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <h3 className="font-display text-2xl font-bold text-stone-950">
                        {fin.name}
                      </h3>
                      <span className="rounded-lg bg-stone-900 text-white px-3 py-1.5 text-[9px] font-semibold uppercase tracking-widest shrink-0">
                        {fin.grit}
                      </span>
                    </div>
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                      <strong>Microscopic Appearance:</strong> {fin.characteristics}
                    </p>
                    <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
                      <strong>Best For:</strong> {fin.uses}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-black/5 flex justify-between items-center text-xs text-stone-500">
                    <span className="font-bold text-primary flex items-center gap-1">
                      <Settings className="size-3.5 animate-spin-slow" /> Machine Advantage:
                    </span>
                    <span className="text-stone-800 font-semibold">{fin.advantage}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[2.5rem] bg-stone-950 text-white p-8 md:p-12 mt-16 flex flex-col lg:flex-row justify-between items-center gap-8">
              <div>
                <span className="text-[10px] uppercase font-semibold text-primary tracking-[0.24em]">
                  CE-Ready Automated Solutions
                </span>
                <h3 className="font-display text-3xl md:text-4xl mt-2 leading-tight uppercase font-bold">
                  Need a certified mechanical finish guarantee?
                </h3>
                <p className="text-white/70 text-sm mt-3 max-w-2xl leading-relaxed">
                  We engineer our export-bound polishing lines to be **CE-Ready / CE-Certifiable**. Provide your workpiece geometry, and our PLC-driven automated systems will ensure exact roughness repeatability.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="#contact-quote"
                  className="inline-flex rounded-full bg-primary hover:bg-white text-stone-950 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all"
                >
                  Request Technical Quote
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Contact/Quote Request form */}
        <div id="contact-quote">
          <Contact />
        </div>
      </SiteLayout>
    </>
  );
};

export default SurfaceFinishesPage;
