import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageBanner } from "@/components/site/PageBanner";
import { Contact } from "@/components/site/Contact";
import { Info, BadgeCheck, Settings, ShoppingBag, Eye, X, ArrowUpRight } from "lucide-react";

// Robust Products Dataset
const PRODUCTS_DATA = [
  // --- TANK SOLUTIONS ---
  {
    id: "tank-machine",
    category: "tank",
    name: "Tank Polishing Machine",
    usp: "Pneumatically balanced automatic head feed for flawless internal tank weld lines",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    description: "Designed for internal (ID) and external (OD) polishing of storage tanks, processing vessels, and chemical reactors. Employs a pneumatically loaded buffing arm that tracks welded seams with high consistency.",
    specs: {
      "Tank Diameter Range": "500 mm – 6,000 mm",
      "Max Shell Length": "Up to 12 meters",
      "Spindle Motor Power": "5.5 kW / 7.5 HP",
      "Variable Wheel Speed": "500 – 2,800 RPM",
      "Control System": "PLC-driven automatic speed/pressure",
      "Machine Weight": "Approx 3,800 kg"
    },
    consumables: ["Hard-stitched Sisal Buffing Wheels", "Chromium Oxide Green Cutting Compound Bar", "Non-woven Abrasive Rollers"],
    applicationLink: "pharma"
  },
  {
    id: "trolley-machine",
    category: "tank",
    name: "Trolley Type Polishing Machine",
    usp: "Heavy-duty mobile carriage system with high-speed linear track tracking",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
    description: "Highly stable horizontal track carriage system built to polish flat steel sheets or elongated cylindrical structures. Features motorized track-travel with fine adjustment coordinate controls.",
    specs: {
      "Carriage Track Length": "3 meters to 12 meters (Modular)",
      "Horizontal Travel Speed": "0.5 – 12 meters/min",
      "Vertical Head Travel": "450 mm pneumatic stroke",
      "Main Spindle Power": "7.5 HP heavy-duty motor",
      "Abrasive Head Compatibility": "Flap wheel, cotton buff, sisal disc",
      "Dust Extraction Ports": "Dual 100mm outlets"
    },
    consumables: ["Silicon Carbide Wide Emery Belts", "Flannel Gloss Color Buffing Pads", "Fine alumina grinding lubricants"],
    applicationLink: "dairy"
  },
  {
    id: "special-purpose-tank",
    category: "tank",
    name: "Dish End Polishing Machine",
    usp: "Dual-axis automatic arm path tracking designed for elliptical & torispherical dish ends",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?auto=format&fit=crop&q=80&w=600",
    description: " B2B workhorse built specifically to polish tank heads, torispherical, elliptical, and flat dish ends. Features dynamic pneumatic pressure tracking to avoid thin-spotting metal walls.",
    specs: {
      "Dish Diameter Capacity": "1,000 mm – 4,500 mm",
      "Dish Material Thickness": "Up to 25 mm SS/MS",
      "Rotation Table Speed": "1 – 15 RPM (Variable VFD)",
      "Tracking Automation": "Pneumatic feedback balance",
      "Grinding Motor Power": "10 HP high-torque",
      "Polishing Cycle Time": "Adjustable based on dish size"
    },
    consumables: ["Abrasive Emery flap discs (grit 60-320)", "High-gloss cotton buffs", "White animal-fat-free finish cake"],
    applicationLink: "pharma"
  },

  // --- SHEET SOLUTIONS ---
  {
    id: "sheet-machine",
    category: "sheet",
    name: "Flat Sheet Polishing Machine",
    usp: "Continuous multi-head conveyor feed system for perfect architectural satin/mirror sheets",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
    description: "Continuous inline sheet feed polishing machine. Designed to produce No.4 Satin, Hairline, or No.8 Mirror finishes on stainless steel, brass, and aluminum sheets.",
    specs: {
      "Max Sheet Width": "1,250 mm / 1,500 mm",
      "Sheet Thickness Range": "0.5 mm – 8.0 mm",
      "Conveyor Feed Speed": "1 – 15 meters/min (VFD)",
      "Polishing Heads": "Available in 1 to 4 heads inline",
      "Main Drum Motor": "15 HP per grinding head",
      "Abrasive Drum Size": "Ø 350 mm x 1250 mm"
    },
    consumables: ["Wide Emery Belts (Grit 120, 240, 320, 400)", "Scotch-Brite Satin Finishing Drums", "Synthetic cooling emulsion oil"],
    applicationLink: "dairy"
  },
  {
    id: "ss-coil-machine",
    category: "sheet",
    name: "SS Coil Polishing Machine",
    usp: "Integrated uncoiler & recoiler feed lines for uninterrupted high-volume coil finishing",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    description: "Heavy-duty processing line engineered for automatic continuous polishing of wide metal coils. Features automatic strip-tension controls and active coolant spray systems.",
    specs: {
      "Coil Weight Capacity": "Up to 10 Metric Tons",
      "Coil Strip Width": "600 mm – 1,300 mm",
      "Line Working Speed": "5 – 30 meters/min",
      "Water Spray Pressure": "3 Bar continuous wash",
      "Drive Power": "Total line approx 120 kW",
      "Cooling Medium": "Recirculating water-soluble oil"
    },
    consumables: ["Heavy-duty segmented sanding belts", "Satin conditioning abrasive rollers", "High-efficiency belt tracking spray"],
    applicationLink: "dairy"
  },

  // --- UTENSIL SOLUTIONS ---
  {
    id: "cookware-machine",
    category: "utensil",
    name: "Cookware Buffing Machine",
    usp: "High-speed indexed rotary stations with pneumatic automatic buff wear compensation",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600",
    description: "The ultimate solution for utensils manufacturers. Features a rotary indexing table that rotates cookware parts through cutting, semi-polishing, and color-buffing stations.",
    specs: {
      "Indexing Table Stations": "3 to 8 Stations",
      "Utensil Chuck Speed": "100 – 600 RPM (Adjustable)",
      "Main Buffing Motors": "5 HP or 7.5 HP per station",
      "Max Cookware Diameter": "350 mm internal / external",
      "Production Output": "180 to 240 pieces / hour",
      "Wear Compensation": "Automatic micro-feed actuator"
    },
    consumables: ["Sisal-Cotton Spiral Buffing Wheels", "Fast-cutting Grey bar", "Medium-cut Pink compound bar"],
    applicationLink: "utensil"
  },
  {
    id: "lid-machine",
    category: "utensil",
    name: "LID & Bowl Buffing Machine",
    usp: "Dual-spindle pneumatic clamping for mirror-grade concentric circle finishes",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    description: "Highly specialized dual-spindle machine engineered to polish flat lids, bowls, containers, and shallow cookware cavities. Delivers clean concentric circular finishes.",
    specs: {
      "Working Spindles": "2 Independent spindle heads",
      "Max Lid Diameter": "450 mm",
      "Pneumatic Feed Stroke": "300 mm",
      "Spindle Motor Power": "3 HP dual motors",
      "Buffing Wheel Diameter": "Ø 300 mm max",
      "Operating Cycle Time": "12 to 18 seconds / lid"
    },
    consumables: ["Concentric-stitched cotton buffs", "Super-gloss White polishing cake", "Pneumatic rubber-clamping chucks"],
    applicationLink: "utensil"
  },

  // --- CUSTOMISED SOLUTIONS ---
  {
    id: "super-finisher",
    category: "customised",
    name: "Super-Finishing Machine",
    usp: "Sub-micron surface polishing utilizing ultra-fine oscilla-belt path tracking",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600",
    description: "Precision-designed finishing setup that mounts to standard lathe beds or independent tracks to execute sub-micron surface polishing. Drastically improves seal-life on moving shafts.",
    specs: {
      "Target Ra Roughness": "< 0.05 Micrometer (Super-Finish)",
      "Pneumatic Oscillation": "500 strokes / min",
      "Abrasive Film Width": "50 mm to 100 mm",
      "Oscillation Amplitude": "± 2.5 mm fine pitch",
      "Piston Rod Diameter": "Ø 20 mm to Ø 300 mm",
      "Coolant Compatibility": "Highly refined polishing oil"
    },
    consumables: ["Premium Diamond Polishing Film", "Fine Silicon Oxide tapes", "Refined spindle lubricator oils"],
    applicationLink: "automobile"
  },
  {
    id: "heavy-rod-machine",
    category: "customised",
    name: "Heavy Rod OD Polishing Machine",
    usp: "Heavy-duty centerless rollers optimized for hydraulic rods & multi-meter shafts",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    description: "Continuous feed centerless finishing machine built for extremely heavy cylindrical parts, stainless steel hydraulic piston rods, and engineering shaft rollers.",
    specs: {
      "Diameter Working Range": "Ø 20 mm – Ø 250 mm",
      "Max Rod Length Capacity": "Up to 9 meters linear",
      "Feeding Roller VFD": "Variable linear feed 1 – 6 m/min",
      "Polishing Heads Inline": "1 to 3 multi-head configuration",
      "Grinding Motor Power": "10 HP per station",
      "Feed Support Rollers": "Polyurethane coated anti-scratch rollers"
    },
    consumables: ["High-density Non-woven flap cylinders", "Nylon abrasive wheels", "Water-soluble grinding coolants"],
    applicationLink: "automobile"
  },
  {
    id: "square-tube-polisher",
    category: "customised",
    name: "Square & Rectangular Tube Polisher",
    usp: "Simultaneous 4-sided automatic outer dimension (OD) finishing in a single pass",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
    description: "High-productivity continuous machine designed to polish all four outer sides of square or rectangular hollow tubes in a single continuous linear feeding pass.",
    specs: {
      "Tube Section Capacity": "10 mm x 10 mm up to 120 mm x 120 mm",
      "Polishing Heads": "4 Independent heads (Top, Bottom, Left, Right)",
      "Spindle Motor Power": "5 HP x 4 motors",
      "Linear Feeding Speed": "2 – 18 meters / min",
      "Infeed & Outfeed Track": "3 meters linear track included",
      "Pneumatic tensioner": "Automatic self-adjusting belt pressure"
    },
    consumables: ["Continuous Sanding Emery belts (Grit 80-600)", "Four-sided brush wheels", "Dry compound friction bars"],
    applicationLink: "automobile"
  }
];

const CATEGORIES = [
  { id: "all", label: "All Solutions" },
  { id: "tank", label: "Tank Polishing Solutions" },
  { id: "sheet", label: "Sheet Polishing Solutions" },
  { id: "utensil", label: "Utensil Polishing Solutions" },
  { id: "customised", label: "Customised Solutions" }
];

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  // Modal State for Individual Product Specifications
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS_DATA[0] | null>(null);

  // Sync state if category parameter is updated
  const handleCategoryChange = (category: string) => {
    setSearchParams({ category });
  };

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>M.B. Finishing Technologies | Automatic Polishing Machines</title>
        <meta
          name="description"
          content="Browse our high-capacity automatic buffing and polishing machine portfolio: tank polishing, sheet, utensils, and custom Special Purpose Machines (SPMs)."
        />
      </Helmet>

      <SiteLayout>
        <PageBanner
          eyebrow="Our Products"
          title="Industrial machinery engineered to deliver consistent perfection"
          description="Standard and custom special-purpose polishing machines configured precisely for your workpiece shape, metal thickness, cycle time, and target surface roughness parameters."
        />

        {/* Categories Tab Selector */}
        <section className="py-12 bg-[#faf6ed]">
          <div className="container">
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-2.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-stone-950 text-white shadow-glow"
                      : "bg-white text-stone-600 border border-black/5 hover:bg-stone-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group hover-lift overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-soft flex flex-col justify-between"
                >
                  <div>
                    {/* Visual area */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,11,8,0)_30%,rgba(15,11,8,0.3)_100%)]" />
                      
                      {/* Category tag */}
                      <div className="absolute left-5 top-5 rounded-lg border border-white/10 bg-stone-950/75 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                        {product.category} solutions
                      </div>
                    </div>

                    {/* Text area */}
                    <div className="p-6">
                      <div className="text-[10px] uppercase font-bold text-primary tracking-[0.22em] mb-2">
                        {product.usp}
                      </div>
                      <h3 className="font-display text-2xl text-stone-950">
                        {product.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Button Area */}
                  <div className="p-6 pt-0 border-t border-black/5 mt-4 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="inline-flex items-center gap-2 rounded-full bg-stone-950 hover:bg-primary hover:text-stone-950 text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-colors"
                    >
                      <Eye className="size-3.5" /> View Specifications
                    </button>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest flex items-center gap-1">
                      Specs <Settings className="size-3.5 animate-spin-slow" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Specification Modal (Click for Individual Detail Page) */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-black/10 bg-white p-6 md:p-10 shadow-2xl animate-scale-in">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-5 top-5 p-2 rounded-full border border-black/5 bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                aria-label="Close details"
              >
                <X className="size-5" />
              </button>

              <div className="grid lg:grid-cols-[1fr_1fr] gap-8 md:gap-10 items-start mt-4">
                
                {/* Left Area (Product Visual, Consumables & Interlinks) */}
                <div className="space-y-6">
                  <div className="rounded-[2rem] overflow-hidden aspect-[4/3] border border-black/5 shadow-soft">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Consumables (Slide 3 spec) */}
                  <div className="rounded-[1.5rem] bg-[#faf6ed] p-5 border border-primary/10">
                    <h4 className="font-heading text-xs tracking-widest uppercase font-bold text-stone-900 mb-3 flex items-center gap-2">
                      <ShoppingBag className="size-4 text-primary" /> Recommended Consumables:
                    </h4>
                    <ul className="space-y-2 text-xs text-muted-foreground font-semibold">
                      {selectedProduct.consumables.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <BadgeCheck className="size-4 text-primary shrink-0" />
                          <span className="text-stone-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interlinked with Application Page (Slide 3 spec) */}
                  <div className="rounded-[1.5rem] border border-black/5 p-5 bg-stone-50 flex justify-between items-center">
                    <div>
                      <h5 className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest">
                        See In Real Operation
                      </h5>
                      <h4 className="font-display text-lg text-stone-900 font-semibold mt-0.5">
                        Industry-wise Application
                      </h4>
                    </div>
                    <Link
                      to={`/application?sector=${selectedProduct.applicationLink}`}
                      className="inline-flex size-10 rounded-full bg-stone-900 text-white hover:bg-primary hover:text-stone-950 items-center justify-center transition-colors"
                    >
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Area (Specs details) */}
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-primary tracking-[0.24em]">
                      {selectedProduct.usp}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl text-stone-900 uppercase font-bold mt-1">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mt-2.5 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Technical Specifications Table (Slide 3 spec) */}
                  <div>
                    <h4 className="font-heading text-xs tracking-widest uppercase font-bold text-stone-900 mb-3 flex items-center gap-2">
                      <Settings className="size-4 text-primary animate-spin-slow" /> Technical Specifications:
                    </h4>
                    <div className="border border-black/5 rounded-xl overflow-hidden shadow-soft">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-stone-50 border-b border-black/5 font-semibold text-stone-700">
                            <th className="p-3">Parameter Name</th>
                            <th className="p-3">Specification Target</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(selectedProduct.specs).map(([key, value]) => (
                            <tr key={key} className="border-b border-black/5 last:border-b-0 hover:bg-[#faf6ed]/40">
                              <td className="p-3 font-semibold text-stone-900">{key}</td>
                              <td className="p-3 text-stone-600">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="#inquiry-form"
                      onClick={() => setSelectedProduct(null)}
                      className="flex-1 rounded-full bg-primary hover:bg-stone-950 hover:text-white text-stone-950 text-center font-heading text-[10px] font-bold uppercase tracking-widest py-3.5 transition-colors"
                    >
                      Request Fast Machine Quote
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Inquiries */}
        <div id="inquiry-form">
          <Contact />
        </div>
      </SiteLayout>
    </>
  );
};

export default ProductsPage;
