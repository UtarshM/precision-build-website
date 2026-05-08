import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Contact } from "@/components/site/Contact";
import { Check, Info, ShieldAlert, Zap, Layers, Activity } from "lucide-react";

const INDUSTRIES_DATA = [
  {
    id: "pharma",
    name: "Pharmaceutical & Chemical",
    tagline: "Ultra-pure sanitary finishes with certified Ra parameters",
    description: "In pharmaceutical and chemical manufacturing, surface finish plays a major safety role. Mirror polishing removes microscopic fissures and pits where bacterial colonization can start. Our automated solutions achieve uniform high-grade finishes for critical vessels, tubes, and valves.",
    machines: ["Tank Polishing Machine", "Trolley Type Polishing Machine", "Pipe ID/OD Polishing Setup"],
    useCases: [
      { product: "Reaction Vessels", req: "Mirror polish (Ra < 0.2 µm)", speed: "Full automation path control" },
      { product: "Sanitary SS Tubes", req: "Internal Diameter ID mirror buffing", speed: "Continuous feed centerless" },
      { product: "Storage Tank Shells", req: "Outer Diameter grit polishing", speed: "Trolley-driven abrasive heads" }
    ],
    videoPlaceholderText: "Pharmaceutical vessels weld-seam mirror polishing demo video",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "utensil",
    name: "Utensils & Cookware",
    tagline: "High-volume, repeatable mirror and matte finishing",
    description: "The housewares and commercial utensils sector demands flawless aesthetic appeal at rapid production cycle times. From heavy aluminum cookers to stainless steel kitchen pots, lids, and pans, our turnkey buffing and polishing systems deliver rich finishes reliably.",
    machines: ["Cookware Buffing Machine", "LID/Utensils Buffing/Polishing Machine", "Turnkey Solution for Cookware Buffing"],
    useCases: [
      { product: "Pressure Cookers", req: "Heavy OD/ID cut & color stage buffing", speed: "Multi-head indexing table" },
      { product: "SS Lids & Bowls", req: "LID mirror & matte circle patterns", speed: "Pneumatic pressure regulated heads" },
      { product: "Industrial Utensils", req: "Deep cavity internal wall finishing", speed: "Custom-formed cotton buffing pads" }
    ],
    videoPlaceholderText: "Cookware automated indexing table mirror buffing demonstration",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "automobile",
    name: "Automotive & Heavy Engineering",
    tagline: "Durability, tight tolerances, and functional surface quality",
    description: "Polishing in automotive components and shock absorbers is functional. It reduces frictional coefficients, seal wear, and mechanical noise. Our special purpose heavy-duty machines are built to polish cylindrical piston rods, shock tubes, and hydraulic cylinders with microscopic consistency.",
    machines: ["Centerless Pipe/Bar Polishing Machine", "Heavy Rod OD Polishing Machine", "Super-finishing Machine"],
    useCases: [
      { product: "Piston Rods", req: "Super-finishing (Ra < 0.05 µm) for friction control", speed: "Sub-micron abrasive belt feed" },
      { product: "Bumper Bars & Guards", req: "Polishing complex curves before chrome plating", speed: "Bespoke robotic path profiles" },
      { product: "Hydraulic Cylinders", req: "Precision Outer Diameter polishing", speed: "Heavy centerless feed rollers" }
    ],
    videoPlaceholderText: "Heavy rod OD centerless super-finishing video showcase",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dairy",
    name: "Dairy & Food Processing",
    tagline: "Sanitary grade finishes to ensure complete compliance",
    description: "Milk and food processing environments require highly sanitary equipment surfaces. Any surface roughness can trap organic elements, jeopardizing hygiene. Our polishing technology ensures that SS tanks, pipes, and pasteurizer components achieve clean, smooth, non-porous finishes.",
    machines: ["Sheet Polishing Machine", "Square Tube Polishing Machine", "SS Coil Polishing Machine"],
    useCases: [
      { product: "Milk Storage Silos", req: "High-grade uniform mirror sheets", speed: "Wide belt flat sheet polishing" },
      { product: "Processing Pipes", req: "Consistent sanitizing internal ID polish", speed: "Continuous ID honing tools" },
      { product: "Coils and Strips", req: "Dual side coil surface polishing", speed: "De-coiler & re-coiler automation line" }
    ],
    videoPlaceholderText: "Dairy-grade flat sheet automatic polishing machine video demo",
    image: "https://images.unsplash.com/photo-1527324688151-0e627063f26a?auto=format&fit=crop&q=80&w=600"
  }
];

const ApplicationPage = () => {
  const [activeTab, setActiveTab] = useState("pharma");

  const currentIndustry = INDUSTRIES_DATA.find((ind) => ind.id === activeTab) || INDUSTRIES_DATA[0];

  return (
    <>
      <Helmet>
        <title>M.B. Finishing Technologies | Industrial Applications</title>
        <meta
          name="description"
          content="Discover how M.B. Finishing Technologies solves surface treatment challenges across Pharmaceutical, Utensil, Automotive, and Dairy industries."
        />
      </Helmet>

      <SiteLayout>
        <PageBanner
          eyebrow="Applications"
          title="Finishing excellence across global industries"
          description="Different metals, strict tolerances, and high aesthetics. Discover how our specialized polishing systems are optimized for your industry's specific surface requirements."
        />

        {/* Interactive Industry Tabs Section */}
        <section className="section-shell bg-[#fbf7ef]">
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

                  <div className="rounded-[1.75rem] border border-primary/25 bg-stone-950 text-white p-6 shadow-card relative overflow-hidden">
                    <div className="absolute top-0 right-0 size-24 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                    <div className="flex gap-4">
                      <div className="size-11 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                        <Info className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-display text-xl text-primary font-semibold">
                          Process Demonstration
                        </h4>
                        <p className="text-white/60 text-xs mt-2 italic leading-relaxed">
                          "{currentIndustry.videoPlaceholderText}"
                        </p>
                        <p className="text-white/72 text-xs mt-3 leading-relaxed">
                          Need raw video demonstrations of our automatic machines running your exact tube, tank, or cooker dimensions? Connect with us to schedule an on-site or video demo.
                        </p>
                      </div>
                    </div>
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
