import { Helmet } from "react-helmet-async";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BadgeCheck, ShieldAlert, Cpu, Truck, Hammer, Zap, Wrench } from "lucide-react";
import { Contact } from "@/components/site/Contact";

const SERVICES_LIST = [
  {
    title: "Dedicated Service Support",
    icon: Wrench,
    badge: "24/7 Field Support",
    desc: "Our highly trained service engineers offer expert setup, commissioning, preventative maintenance, and rapid troubleshooting to minimize downtime and keep your production lines operating at peak efficiency.",
    points: [
      "On-site installation & expert training",
      "Preventative maintenance & audit plans",
      "Ready-to-dispatch critical spare parts",
      "Specialized PLC & automation support"
    ]
  },
  {
    title: "All Types of Abrasives & Consumables",
    icon: Truck,
    badge: "Fastest Delivery",
    desc: "We supply premium-grade abrasives and finishing consumables with the fastest turnaround. Maintain consistent finish quality with our field-tested buffers, belts, and compounds.",
    points: [
      "Cotton, Sisal, and Flannel Buffs",
      "Flap wheels & non-woven abrasive wheels",
      "Emery belts of custom grits and sizes",
      "High-gloss green & white polishing bars"
    ]
  },
  {
    title: "Pipe ID & OD Machining",
    icon: Cpu,
    badge: "Precision Engineered",
    desc: "Expertly designed setups for internal (ID) and external (OD) pipe polishing. Achieve specified sub-micron Ra (roughness average) finishes for sanitary, food, and pharmaceutical process tubes.",
    points: [
      "Mirror finishing for ID & OD surfaces",
      "Centerless multi-head tube polishing",
      "Sanitary & food-grade compliance",
      "Uniform finish across entire pipe lengths"
    ]
  },
  {
    title: "Automated Fettling Solutions",
    icon: Hammer,
    badge: "Heavy-Duty Castings",
    desc: "Production-ready fettling and grinding systems engineered for castings, forgings, and structural fabrications. Remove flash, gates, and parting lines with absolute repeatability.",
    points: [
      "Robotic & automated grinding integration",
      "Heavy-duty metal removal systems",
      "Dust extraction and containment hoods",
      "Improved safety and process control"
    ]
  },
  {
    title: "Custom & Complex Polishing",
    icon: Zap,
    badge: "Bespoke SPM Engineering",
    desc: "When standard machines won't suffice, our design team builds Custom Special Purpose Machines (SPMs) optimized for intricate, complex, or unusual metal geometries.",
    points: [
      "Bespoke CNC & multi-axis path control",
      "Custom fixture & clamp engineering",
      "Cycle-time and throughput optimization",
      "Turnkey automotive & appliance finishing"
    ]
  }
];

const ABRASIVE_ITEMS = [
  { name: "Sisal Polishing Buffs", material: "Heavy-duty steel cut", size: "12\" to 18\" Dia", use: "Pre-polishing / Cut-stage" },
  { name: "Laminated Cotton Buffs", material: "Premium soft cotton", size: "8\" to 16\" Dia", use: "High-gloss mirror finish" },
  { name: "Non-Woven Flap Wheels", material: "Nylon abrasive mesh", size: "Custom width & grits", use: "Satin / Matte scratch finishes" },
  { name: "Polishing Bar (Green Cake)", material: "Chromium oxide compound", size: "Standard 1kg bars", use: "Super-finish SS buffing" },
  { name: "Aluminium Oxide Belts", material: "Coated abrasive grain", size: "As per machine spec", use: "Weld seam / tube grinding" },
  { name: "Felt Polishing Bob", material: "Compressed pure wool", size: "Various shapes & shanks", use: "ID / internal cavity polishing" }
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>M.B. Finishing Technologies | Professional Services</title>
        <meta
          name="description"
          content="Explore professional services from M.B. Finishing Technologies: dedicated technical support, fastest abrasive deliveries, pipe machining, and automated fettling."
        />
      </Helmet>

      <SiteLayout>
        <PageBanner
          eyebrow="Our Services"
          title="Engineered support to guarantee finishing excellence"
          description="We do more than build finishing machinery. We provide ready consumable stocks, technical process consultations, heavy-duty fettling setups, and dedicated engineering support."
        />

        {/* Core Services Section */}
        <section className="section-shell bg-[#fbf7ef]">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-1">
              {SERVICES_LIST.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="premium-panel bg-white p-8 md:p-12 shadow-[0_20px_70px_-42px_rgba(20,20,20,0.28)] border-black/5 hover-lift transition-all"
                  >
                    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-start">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Icon className="size-6" />
                          </div>
                          <div>
                            <span className="industrial-badge px-3 py-1 text-[9px]">
                              {service.badge}
                            </span>
                          </div>
                        </div>

                        <h2 className="font-display text-4xl tracking-tight text-stone-950 md:text-5xl">
                          {service.title}
                        </h2>
                        
                        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                          {service.desc}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#fbf7ef] border border-black/5 p-6 md:p-8">
                        <h3 className="font-heading text-xs tracking-widest text-primary uppercase font-bold mb-5">
                          Service Offerings & Capabilities
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {service.points.map((pt) => (
                            <div key={pt} className="flex items-start gap-2.5">
                              <BadgeCheck className="size-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-sm text-stone-800 leading-snug">
                                {pt}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Consumables store catalog */}
        <section className="section-shell bg-white relative">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-full max-w-4xl h-72 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="industrial-badge mx-auto mb-6">Consumables Store</div>
              <h2 className="font-display text-5xl tracking-tight text-stone-950">
                All types of abrasives with the fastest delivery
              </h2>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                We stock a comprehensive range of premium polishing buffs, wheels, grits, and chemical polishing cakes optimized specifically for automated and manual buffing applications.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ABRASIVE_ITEMS.map((item) => (
                <div key={item.name} className="metal-card hover-lift p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-[9px] font-semibold uppercase tracking-widest">
                        {item.use}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl text-stone-900 leading-snug">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                      <strong>Material:</strong> {item.material}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-black/5 flex justify-between items-center text-xs">
                    <span className="text-stone-500 font-medium">Standard Sizes:</span>
                    <span className="text-stone-900 font-semibold">{item.size}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] bg-stone-950 text-white p-8 md:p-12 mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <span className="text-[10px] uppercase font-semibold text-primary tracking-[0.24em]">
                  Consumable Stock Inquiry
                </span>
                <h3 className="font-display text-3xl md:text-4xl mt-2 leading-tight">
                  Need custom abrasives, wheel sizes, or bulk supply?
                </h3>
                <p className="text-white/70 text-sm mt-3 max-w-xl">
                  Contact our logistics team today. We maintain ready stocks to dispatch shipments within 24–48 hours across industrial hubs.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="#contact-form"
                  className="inline-flex rounded-full bg-primary hover:bg-white text-stone-950 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all"
                >
                  Request Fast Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiries */}
        <div id="contact-form">
          <Contact />
        </div>
      </SiteLayout>
    </>
  );
};

export default ServicesPage;
