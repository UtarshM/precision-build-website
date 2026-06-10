import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Contact } from "@/components/site/Contact";
import { Check, Info, ShieldAlert, Zap, Layers, Activity } from "lucide-react";
import breweryTanksImg from "@/assets/brewery-tanks.png";

const INDUSTRIES_DATA = [
  {
    id: "dairy",
    name: "Food & Dairy",
    tagline: "Strict sanitary standards for food-contact surface safety",
    description: "Stainless steel surfaces in milk storage silos, cheese vats, and food conveyors must maintain a roughness value of Ra ≤ 0.8 µm to prevent organic matter accumulation. Our automated belt sanders and sheet polishing systems deliver uniform, easy-to-sanitize finishes.",
    machines: ["SP1200-3H Sheet Polishing Machine", "TPM-3000SD Dish End Polishing Machine", "TPM-4500SD Vessel & Tank Polishing Machine"],
    useCases: [
      { product: "Milk Storage Silos", req: "Ra ≤ 0.8 µm Sanitary Satin", speed: "Wide-belt flat sheet polishing" },
      { product: "Food Processing Vats", req: "Ra ≤ 0.8 µm Matte Finish", speed: "Automatic vessel wall buffing" },
      { product: "Conveyor Sideplates", req: "Deburred & Ground Edge", speed: "High-speed linear conveyor belt feed" }
    ],
    videoPlaceholderText: "Automated milk-tank sheet satin polishing machine demonstration",
    image: "https://images.unsplash.com/photo-1527324688151-0e627063f26a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "pharma",
    name: "Pharmaceutical",
    tagline: "Ultra-pure sanitary finishes with certified Ra parameters",
    description: "Critical pharmaceutical reactors, sterile mixing vessels, and drug delivery piping require extreme mirror finishes (Ra ≤ 0.2 µm or below) to eliminate microscopic pockets and prevent bacterial colonization. Our PLC-controlled gantry polishers provide repeatable path buffing.",
    machines: ["TPM-4500SD Vessel & Tank Polishing Machine", "TPM-3000SD Dish End Polishing Machine", "CG-150B-L1 Centerless Round Pipe Polishing Machine"],
    useCases: [
      { product: "Bio-Reactors", req: "Ra ≤ 0.2 µm Super-Mirror Polish", speed: "Pneumatic pressure tracked dual-axis boom" },
      { product: "Sterile Piping", req: "Internal ID Mirror Buffing", speed: "High-rpm internal pipe polishing setup" },
      { product: "Torispherical Heads", req: "Ra ≤ 0.2 µm Sanitary Polish", speed: "Auto-path dished head rotation table" }
    ],
    videoPlaceholderText: "Pharmaceutical reaction vessel internal mirror buffing demo video",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "beverage",
    name: "Beverage & Brewing",
    tagline: "Bright-annealed mirror finishes for tanks and fermenters",
    description: "Brewing vessels, bright beer tanks, and distillery equipment demand corrosion-resistant surfaces. Automated external mirror buffing and internal grit-finishing prevent yeast buildup and maintain product purity during fermentation.",
    machines: ["TPM-4500SD Vessel & Tank Polishing Machine", "TPM-1500SD Vessel & Tank Polishing Machine", "TPM-3000SD Dish End Polishing Machine"],
    useCases: [
      { product: "Beer Fermenters", req: "Ra ≤ 0.4 µm Bright Polish", speed: "Dual-head automatic gantry shell tracker" },
      { product: "Distillery Copper Stills", req: "High-Gloss Aesthetic Buffing", speed: "Specialized copper compound cotton buffs" },
      { product: "Piping Systems", req: "Ra ≤ 0.4 µm Sanitary OD Buffing", speed: "Centerless through-feed tube line" }
    ],
    videoPlaceholderText: "Craft brewery fermenter tank body OD mirror polishing demo",
    image: breweryTanksImg
  },
  {
    id: "architectural",
    name: "Architectural",
    tagline: "Consistent satin, hairline, and mirror finishes for structural metals",
    description: "Aesthetics and uniformity are paramount for architectural facades, elevator doors, escalator trims, and building entryways. Our multi-head continuous sheet and profile polishers deliver flawless hairline and No. 4 satin finishes.",
    machines: ["SP1200-3H Heavy-Duty Sheet Polishing Machine", "SP600B-1H Sheet Polishing Machine", "VB150-L1 Conveyorised Flat Bar & Profile Polishing Machine"],
    useCases: [
      { product: "Cladding Sheets", req: "Flat Hairline Finish", speed: "3-station inline gantry belt-grinder" },
      { product: "Elevator Door Panels", req: "No. 4 Satin Uniform Finish", speed: "Wet-grinding wide belt sander" },
      { product: "Handrails & Balustrades", req: "Continuous Hairline Round Pipe", speed: "Multi-pass centerless belt polisher" }
    ],
    videoPlaceholderText: "Elevator panel stainless steel sheet hairline finishing line demonstration",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "automobile",
    name: "Automotive",
    tagline: "Precision functional finishes to reduce friction and wear",
    description: "Automotive engine parts, shock absorber piston rods, bumper trims, and exhaust pipes require high-precision finishing. Polishing hydraulic piston rods decreases frictional coefficients and extends seal lifespans, while exhaust trims demand rich mirror aesthetics.",
    machines: ["CG-150B-L1 Centerless Round Pipe Polishing Machine", "STP100-16H Square & Rectangular Tube Polishing Machine", "VB150-L1 Conveyorised Flat Bar & Profile Polishing Machine"],
    useCases: [
      { product: "Shock Absorber Rods", req: "Ra ≤ 0.05 µm Super-Finish", speed: "Micro-abrasive belt feed polishing" },
      { product: "Exhaust Mufflers", req: "Super-Gloss Bright Polish", speed: "Multi-head indexing table buffing" },
      { product: "Structural Square Frames", req: "Continuous Grit Grinding", speed: "16-Head continuous auto-feed line" }
    ],
    videoPlaceholderText: "Heavy-duty shock absorber shock rod centerless super-finishing demo",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "furniture",
    name: "Furniture & Fixtures",
    tagline: "High-end decorative and tactile finishes on wood and steel",
    description: "From modern office steel structures and high-end retail display racks to wooden tabletops, chairs, and MDF moldings. Our manual and automatic belt sanding systems provide clean, paint-ready, or high-gloss tactile surfaces.",
    machines: ["BGM-50-2H Double-Head Manual Belt Polishing Machine", "STP100-16H Square & Rectangular Tube Polishing Machine", "TBP300-2H Trolley Type Polishing Machine"],
    useCases: [
      { product: "Wooden Panels & MDF", req: "Smooth paint-ready fine sand", speed: "Double-head manual belt sander" },
      { product: "Retail Display Frames", req: "Fine Satin Chrome Pre-Finish", speed: "Conveyorised flat bar belt polisher" },
      { product: "Office Chair Bases", req: "Circular Mirror Polish", speed: "Custom-formed cotton buffing spindles" }
    ],
    videoPlaceholderText: "Double-head manual belt sander wooden chair frame preparation",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "chemical",
    name: "Chemical & Industrial",
    tagline: "Corrosion-resistant metal prep and heavy deburring solutions",
    description: "Industrial chemical storage, acid scrubbers, paper mills, and water treatment tanks need high corrosion resistance. Rough surface preparation is crucial before applying protective linings, and smoothing out weld seams avoids stress-corrosion cracking.",
    machines: ["TPM-4500SD Vessel & Tank Polishing Machine", "TBP300-2H Trolley Type Polishing Machine", "BGM-50-2H Double-Head Manual Belt Polishing Machine"],
    useCases: [
      { product: "Storage Tanks", req: "Weld seam flat grinding", speed: "Boom-mounted heavy gantry grinding wheel" },
      { product: "Chemical Piping", req: "External oxide layer removal", speed: "Centerless dual-head belt grinding" },
      { product: "Heavy Metal Plates", req: "Scale & rust removal", speed: "Double-head manual belt grinder" }
    ],
    videoPlaceholderText: "Heavy-duty vessel weld-seam automatic grinding demonstration",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
  }
];

const ApplicationPage = () => {
  const [activeTab, setActiveTab] = useState("dairy");

  const currentIndustry = INDUSTRIES_DATA.find((ind) => ind.id === activeTab) || INDUSTRIES_DATA[0];

  return (
    <>
      <Helmet>
        <title>M.B. Finishing Technologies | Industrial Applications</title>
        <meta
          name="description"
          content="Discover how M.B. Finishing Technologies solves surface treatment challenges across Food & Dairy, Pharmaceutical, Beverage & Brewing, Architectural, Automotive, Furniture, and Chemical sectors."
        />
      </Helmet>

      <SiteLayout>
        {/* Interactive Industry Tabs Section */}
        <section className="section-shell bg-[#fbf7ef] pt-32 md:pt-40">
          <div className="container">
            <div className="text-center mb-12">
              <div className="industrial-badge mx-auto mb-4">Select Industry</div>
              <h2 className="font-display text-4xl tracking-tight text-stone-950 md:text-5xl">
                Tailored solutions for sector-specific standards
              </h2>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:flex justify-center gap-3 mb-12">
              {INDUSTRIES_DATA.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                    activeTab === ind.id
                      ? "bg-stone-950 text-white shadow-glow"
                      : "bg-white text-stone-600 border border-black/5 hover:bg-stone-100"
                  }`}
                >
                  {ind.name}
                </button>
              ))}
            </div>

            {/* Mobile Dropdown or Vertical List */}
            <div className="md:hidden flex flex-col gap-2 mb-8">
              {INDUSTRIES_DATA.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`rounded-xl px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                    activeTab === ind.id
                      ? "bg-stone-950 text-white"
                      : "bg-white text-stone-600 border border-black/5"
                  }`}
                >
                  {ind.name}
                </button>
              ))}
            </div>

            {/* Industry Specific Content Box */}
            <div className="premium-panel bg-white p-8 md:p-12 shadow-[0_24px_80px_-46px_rgba(20,20,20,0.4)] border-black/5">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
                <div>
                  <span className="text-[10px] uppercase font-bold text-primary tracking-[0.24em]">
                    Industry Sector Focus
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl text-stone-950 mt-2 leading-tight">
                    {currentIndustry.name}
                  </h3>
                  <p className="font-heading text-lg text-primary font-medium mt-2">
                    — {currentIndustry.tagline}
                  </p>

                  <div className="gold-line my-6" />

                  <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                    {currentIndustry.description}
                  </p>

                  {/* Machine tags */}
                  <div className="mt-8">
                    <h4 className="font-heading text-xs tracking-widest uppercase font-bold text-stone-900 mb-3 flex items-center gap-2">
                      <Layers className="size-4 text-primary" /> Recommended Finishing Machines:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentIndustry.machines.map((machine) => (
                        <span
                          key={machine}
                          className="bg-stone-900 text-white text-[10px] uppercase tracking-wider font-semibold rounded-lg px-3.5 py-2"
                        >
                          {machine}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases Table */}
                  <div className="mt-8">
                    <h4 className="font-heading text-xs tracking-widest uppercase font-bold text-stone-900 mb-3 flex items-center gap-2">
                      <Activity className="size-4 text-primary" /> Application Use Cases:
                    </h4>
                    <div className="overflow-x-auto border border-black/5 rounded-xl">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-stone-50 border-b border-black/5 font-semibold text-stone-700">
                            <th className="p-3">Target Component</th>
                            <th className="p-3">Finish Requirement</th>
                            <th className="p-3">System Advantage</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentIndustry.useCases.map((use, idx) => (
                            <tr key={idx} className="border-b border-black/5 last:border-b-0 hover:bg-stone-50/50">
                              <td className="p-3 font-semibold text-stone-900">{use.product}</td>
                              <td className="p-3 text-stone-600">{use.req}</td>
                              <td className="p-3 text-stone-600">{use.speed}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Right side Picture & Simulated video player */}
                <div className="space-y-6 lg:sticky lg:top-28">
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-[2rem] overflow-hidden border border-black/5 shadow-[0_16px_50px_-30px_rgba(0,0,0,0.3)]">
                    <img
                      src={currentIndustry.image}
                      alt={currentIndustry.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <Contact />
      </SiteLayout>
    </>
  );
};

export default ApplicationPage;
