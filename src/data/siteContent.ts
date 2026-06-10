import manualBeltPolisher from "@/assets/manual-belt-polisher.jpg";
import cg150DoubleHead from "@/assets/cg150-double-head.jpg";
import dishEndPolisher from "@/assets/dish-end-polisher.jpg";
import sp600wWetPolisher from "@/assets/sp600w-wet-polisher.png";
import sp1200bSheetPolisher from "@/assets/sp1200b-sheet-polisher.jpg";
import tpm2500TankPolisher from "@/assets/tpm2500-tank-polisher.png";
import tpm4500TankPolisher from "@/assets/tpm4500-tank-polisher.png";
import flatbarConveyorPolisher from "@/assets/flatbar-conveyor-polisher.png";
import flatbarConveyorPolisherComparison from "@/assets/flatbar-conveyor-polisher-comparison.jpg";
import walkBehindSheetPolisher from "@/assets/walk-behind-sheet-polisher.jpg";
import tpm1500TankPolisher from "@/assets/tpm1500-tank-polisher.png";
import tpm3000TankPolisher from "@/assets/tpm3000-tank-polisher.png";
import pip3000DuctPolisher from "@/assets/pip3000-duct-polisher.png";

export type Product = {
  id: string;
  category: string;
  name: string;
  usp: string;
  image: string;
  description: string;
  specs: Record<string, string>;
  consumables: string[];
  applicationLink: string;
};

export const products: Product[] = [
  // --- TANK POLISHING MACHINES ---
  {
    id: "tank-machine",
    category: "tank",
    name: "TPM4500-SDX Tank & Dishend Polishing Machine",
    usp: "1st company to successfully develop Tank polishing in India",
    image: tpm4500TankPolisher,
    description: "Our flagship heavy-duty gantry tank polishing system designed for automatic internal (ID) and external (OD) polishing of storage tanks, processing vessels, and chemical reactors. Employs a pneumatically loaded, dual-axis tracking arm with robust PLC automation.",
    specs: {
      "Model Designation": "TPM-4500SDX (Column & Boom Gantry)",
      "Spindle Motor Power": "7.5 kW / 10 HP",
      "Spindle / Head Speed": "500 – 3,000 RPM (Variable VFD)",
      "Working Capacity (Shell OD)": "Ø 0.5 – 4.5 meters",
      "Working Capacity (Shell ID)": "Ø 1.1 – 4.5 meters",
      "Max Shell Length": "4.5 meters (Modular track extensions)",
      "Polishing Feed Speed": "0 – 3,000 mm/min",
      "Achievable Surface Ra": "Ra ≤ 0.2 µm (Sanitary Mirror Polish)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx 4,800 kg"
    },
    consumables: ["Hard-stitched Sisal Buffing Wheels", "Chromium Oxide Green Cutting Compound Bar", "Non-woven Abrasive Rollers"],
    applicationLink: "pharma"
  },
  {
    id: "tpm-2500-tank",
    category: "tank",
    name: "TPM1500-SD Tank & Dishend Polishing Machine",
    usp: "Medium gantry dual-axis system with HMI interface for tanks up to 1.5m diameter",
    image: tpm1500TankPolisher,
    description: "Advanced medium-capacity gantry tank polishing system designed for automatic internal (ID) and external (OD) polishing of storage tanks and chemical reactors. Ideal for medium-sized vessels.",
    specs: {
      "Model Designation": "TPM-1500SD (Gantry Boom)",
      "Spindle Motor Power": "5.5 kW / 7.5 HP",
      "Spindle / Head Speed": "500 – 2,800 RPM",
      "Working Capacity (Shell OD)": "Ø 0.5 – 1.5 meters",
      "Working Capacity (Shell ID)": "Ø 1.1 – 1.5 meters",
      "Max Shell Length": "1.5 meters",
      "Polishing Feed Speed": "0 – 3,000 mm/min",
      "Achievable Surface Ra": "Ra ≤ 0.4 µm",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx 3,200 kg"
    },
    consumables: ["Hard-stitched Sisal Buffing Wheels", "Chromium Oxide Green Compound", "Abrasive flap wheels"],
    applicationLink: "pharma"
  },
  {
    id: "special-purpose-tank",
    category: "tank",
    name: "TPM3000-SD Tank & Dishend Polishing Machine",
    usp: "Dual-axis automatic arm path tracking designed for elliptical & torispherical dish ends",
    image: tpm3000TankPolisher,
    description: "B2B workhorse built specifically to polish tank heads, torispherical, elliptical, and flat dish ends. Features dynamic pneumatic pressure tracking to avoid thin-spotting metal walls.",
    specs: {
      "Model Designation": "TPM-3000SD (Dished Head Polishing)",
      "Spindle Motor Power": "7.5 kW / 10 HP high-torque",
      "Spindle / Head Speed": "500 – 3,000 RPM (Variable VFD)",
      "Working Capacity (Dish OD)": "Ø 0.5 – 3.0 meters",
      "Rotation Table Speed": "1 – 15 RPM (VFD controlled)",
      "Polishing Feed Speed": "0 – 3,000 mm/min",
      "Achievable Surface Ra": "Ra ≤ 0.2 µm (Sanitary Grade Mirror)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx 3,900 kg"
    },
    consumables: ["Abrasive Emery flap discs (grit 60-320)", "High-gloss cotton buffs", "White animal-fat-free finish cake"],
    applicationLink: "pharma"
  },

  // --- PIPE & TUBE POLISHING MACHINES ---
  {
    id: "cg150-double-head",
    category: "pipe",
    name: "CG-150B-L1 Centerless Round Pipe Polishing Machine",
    usp: "Simultaneous dual-stage grinding and polishing for rapid, mirror-grade round pipes",
    image: cg150DoubleHead,
    description: "High-speed centerless finishing system designed for continuous external (OD) polishing of round tubes, bars, and pipes. Features independent motor controls for each polishing station to achieve a rough-cut and final polish in a single pass.",
    specs: {
      "Model Designation": "CG-150B-L1 (Single Head Centerless)",
      "Spindle Motor Power": "4.1 kW / 5.5 HP",
      "Spindle / Head Speed": "1,440 – 2,800 RPM",
      "Working Capacity (OD)": "Ø 10 mm – Ø 150 mm round pipes & bars",
      "Through-feed Speed Rate": "0.5 – 6.0 m/min (VFD continuous auto-feed)",
      "Polishing Consumables": "Abrasive Belt & Flap Wheel (150 mm width)",
      "Achievable Surface Ra": "Ra ≤ 0.1 µm (Mirror Finish)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx 1,200 kg"
    },
    consumables: ["Heavy abrasive flap wheels (Grit 80-220)", "High-gloss cotton buffing wheels", "Liquid buffing compound / paste"],
    applicationLink: "dairy"
  },
  {
    id: "square-tube-polisher",
    category: "pipe",
    name: "STP100-16H Square & Rectangular Tube Polishing Machine",
    usp: "16-Head continuous gantry auto-feed system for round, square and rectangular sections",
    image: flatbarConveyorPolisher,
    description: "High-productivity continuous machine designed to polish all four outer sides of square or rectangular hollow tubes in a single continuous linear feeding pass. Heavy industrial B2B workhorse.",
    specs: {
      "Model Designation": "STP100-16H (16 Heads)",
      "Spindle Motor Power": "62 kW / 84 HP (Total inline consumption)",
      "Spindle / Head Speed": "2,200 RPM",
      "Working Capacity": "Square/Rectangle sections up to 100mm x 100mm",
      "Through-feed Speed Rate": "Up to 6 m/min (Planetary gearbox auto-feed)",
      "Polishing Consumables": "Belt, Flap Wheel, Buff wheel",
      "Achievable Surface Ra": "Ra ≤ 0.4 µm (Satin/Mirror)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx 8,500 kg"
    },
    consumables: ["Continuous Sanding Emery belts (Grit 80-600)", "Four-sided brush wheels", "Dry compound friction bars"],
    applicationLink: "automobile"
  },
  {
    id: "pip-3000-pipe",
    category: "pipe",
    name: "PIP-3000 Pipe ID & Duct Polishing Machine",
    usp: "1st company to successfully develop Pipe ID polishing in India",
    image: pip3000DuctPolisher,
    description: "Specialized internal diameter (ID) pipe and duct polishing machine designed for high-efficiency mirror/matt finishing of stainless steel and alloy tubes. Features multi-station automatic expansion polishing heads.",
    specs: {
      "Model Designation": "PIP-3000 (Pipe ID & Duct)",
      "Pipe ID Range": "Ø 22 – 100 mm",
      "Polishing Length": "1.0 – 3.0 meters",
      "Number of Stations": "3 Stations",
      "Polishing Feed Rate": "0.5 – 5.0 m/min",
      "Consumables": "Flap Wheel / Buffing Wheels",
      "Total Power Requirement": "13.4 kW / 18 HP",
      "Achievable Surface Ra": "Ra ≤ 0.4 µm (Sanitary Mirror Finish)"
    },
    consumables: ["Emery Flap Wheels (Grit 80-400)", "Cotton Buffing Wheels", "Liquid mirror compound"],
    applicationLink: "dairy"
  },

  // --- SHEET & FLAT SURFACE POLISHING MACHINES ---
  {
    id: "sp-1200b-sheet",
    category: "sheet",
    name: "SP1200-3H Heavy-Duty Sheet Polishing Machine",
    usp: "3-station inline gantry belt-grinder for large architectural metal sheets",
    image: sp1200bSheetPolisher,
    description: "Continuous inline sheet feed polishing machine. Designed to produce No.4 Satin, Hairline, or No.8 Mirror finishes on stainless steel, brass, and aluminum sheets. Combines triple gantry inline finishing heads.",
    specs: {
      "Model Designation": "SP1200-3H (3 Heads)",
      "Spindle Motor Power": "30.5 kW / 41 HP (Total power consumption)",
      "Spindle / Head Speed": "1,500 RPM (With oscillating head)",
      "Working Capacity (Width)": "Up to 1200 mm",
      "Working Capacity (Thickness)": "1 to 100 mm",
      "Conveyor Feed Speed": "0.5 – 6.0 m/min (Variable VFD through-feed)",
      "Polishing Consumables": "Belt, Flap Wheel, Buff wheel",
      "Achievable Surface Ra": "Ra ≤ 0.4 µm (Mirror / Satin No.4)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx 6,200 kg"
    },
    consumables: ["Wide Emery Belts (Grit 120, 240, 320, 400)", "Scotch-Brite Satin Finishing Drums", "Synthetic cooling emulsion oil"],
    applicationLink: "dairy"
  },
  {
    id: "sp-600w-sheet",
    category: "sheet",
    name: "SP600B-1H Sheet Polishing Machine",
    usp: "Enclosed wet-grinding wide belt sander for dust-free, cool-running sheet finishing",
    image: sp600wWetPolisher,
    description: "A premium, fully enclosed wet-type wide belt polishing machine designed for high-precision finishing of stainless steel and alloy sheets. Utilizes recirculating coolant spray to prevent heat warping, control metal dust, and deliver a consistent satin or hairline finish.",
    specs: {
      "Model Designation": "SP600B-1H (Two Heads)",
      "Spindle Motor Power": "9.3 kW / 12.5 HP (Total consumption)",
      "Spindle / Head Speed": "1,500 RPM",
      "Working Capacity (Width)": "Up to 600 mm",
      "Working Capacity (Thickness)": "1 to 100 mm",
      "Conveyor Feed Speed": "0.5 – 6.0 m/min",
      "Polishing Consumables": "Flap Wheel, Buff wheel",
      "Achievable Surface Ra": "Ra ≤ 0.4 µm (Grit 120 to Satin No.4)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx 3,800 kg"
    },
    consumables: ["Waterproof silicon carbide sanding belts (Grit 60-600)", "Satin conditioning non-woven wide belts", "Anti-rust water-soluble grinding coolant"],
    applicationLink: "dairy"
  },
  {
    id: "trolley-machine",
    category: "sheet",
    name: "TBP300-2H Trolley Type Polishing Machine",
    usp: "Double-head trolley system for heavy sheet metal & flat plates",
    image: walkBehindSheetPolisher,
    description: "Advanced double-head trolley type polishing machine designed to grind and polish MS/SS flats, aluminium sections, sheets, punched, and blanked sheets. Easy to guide manually with pneumatic belt pressure control.",
    specs: {
      "Model Designation": "TBP300-2H (Double Head Trolley)",
      "Spindle Motor Power": "8.5 kW / 11.5 HP",
      "Spindle / Head Speed": "2,200 RPM",
      "Working Capacity (Width)": "Up to 300 mm",
      "Working Capacity (Thickness)": "1 to 80 mm",
      "Trolley Feed Speed": "0.5 to 6 m/min (Manual trolley guidance)",
      "Polishing Heads": "2 (Buff / Flap wheel combination)",
      "Achievable Surface Ra": "Ra ≤ 0.8 µm (Satin/Hairline)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx 850 kg"
    },
    consumables: ["Zirconia heavy-duty emery belts (Grit 36-120)", "Nylon non-woven surface conditioning belts", "Liquid grinding lubricants"],
    applicationLink: "dairy"
  },

  // --- SPECIAL PURPOSE / CUSTOM MACHINES ---
  {
    id: "flatbar-conveyor-polisher",
    category: "custom",
    name: "VB150-L1 Conveyorised Flat Bar & Profile Polishing Machine",
    usp: "Enclosed conveyor-feed linear polisher for flat bars, channels, and rectangular sections",
    image: flatbarConveyorPolisher,
    description: "A highly versatile, fully enclosed automatic conveyor-feed polishing machine designed to finish flat bars, rectangular tubes, and various steel structural profiles. Features vertical belt/wheel adjustments and variable speed conveyor.",
    specs: {
      "Model Designation": "VB150-L1 (Single Head Conveyor)",
      "Spindle Motor Power": "4.1 kW / 5.5 HP",
      "Spindle / Head Speed": "2,800 RPM",
      "Working Capacity (Width)": "Up to 150 mm",
      "Working Capacity (Thickness)": "1 to 80 mm",
      "Conveyor Feed Speed": "6.0 m/min conveyorized through-feed",
      "Polishing Consumables": "Abrasive Belt + Wheel",
      "Achievable Surface Ra": "Ra ≤ 0.4 µm (Grit 180 to Polish)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx 750 kg"
    },
    consumables: ["Sisal buffing wheels", "Flap grinding wheels (Grit 80-320)", "Concentric-stitched cotton buffs", "Refined finishing compound"],
    applicationLink: "automobile"
  },
  {
    id: "flatbar-conveyor-polisher-multi",
    category: "custom",
    name: "SP300W-3H Multi-Head Flat Bar & Profile Polishing Machine",
    usp: "Multi-station inline gantry-conveyor system configuration for single-pass finishing",
    image: flatbarConveyorPolisherComparison,
    description: "An advanced inline gantry-conveyor system configuration showing dual gantry setups for high-volume manufacturing. Polishes multiple sides or runs coarse-to-fine polishing stages in a single continuous pass.",
    specs: {
      "Model Designation": "SP300W-3H (Three Heads Conveyor)",
      "Spindle Motor Power": "19.3 kW / 26 HP (Total inline)",
      "Spindle / Head Speed": "2,800 RPM",
      "Working Capacity (Width)": "Up to 300 mm",
      "Working Capacity (Thickness)": "1 to 100 mm",
      "Conveyor Feed Speed": "0.5 – 6.0 m/min VFD conveyor feed",
      "Polishing Consumables": "Flap Wheel, Buff wheel",
      "Achievable Surface Ra": "Ra ≤ 0.4 µm",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx 2,400 kg"
    },
    consumables: ["Coarse flap wheels (Grit 60-120)", "Medium sisal buffs", "Fine cotton gloss wheels", "Laminated polishing bars"],
    applicationLink: "automobile"
  },

  // --- UTENSIL POLISHING SOLUTIONS ---
  {
    id: "utensil-machine",
    category: "utensil",
    name: "UPM-120B Automatic Utensil Polishing Machine",
    usp: "High-efficiency automated polishing for kitchenware, cookware and utensils",
    image: manualBeltPolisher,
    description: "Specialized automatic polishing machine designed for high-efficiency mirror polishing of stainless steel and aluminum cookware, pots, pans, utensils, and hollowware. Features multi-axis head movement for uniform surface quality.",
    specs: {
      "Model Designation": "UPM-120B (Automatic Utensil)",
      "Spindle Motor Power": "5.5 kW / 7.5 HP",
      "Spindle / Head Speed": "500 – 2,800 RPM (Variable VFD)",
      "Working Capacity": "Ø 50 mm – Ø 400 mm utensils & cookware",
      "Rotation Table Speed": "1 – 20 RPM",
      "Achievable Surface Ra": "Ra ≤ 0.2 µm (Sanitary Mirror Polish)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx 1,100 kg"
    },
    consumables: ["Sisal buffing wheels", "Cotton buffing wheels", "Animal-fat-free buffing cake"],
    applicationLink: "utensils"
  }
];

export const galleryItems = products.slice(0, 6).map((product, index) => ({
  ...product,
  category: [
    "Machine Gallery",
    "Industrial Finish",
    "Surface Quality",
    "Flat & Sheet Finish",
    "Production Setup",
    "Custom Machine",
  ][index],
  span: index === 0 ? "lg:col-span-2 lg:row-span-2" : index === 5 ? "lg:col-span-2" : "",
}));

export const companyStats = [
  { value: "35+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
  { value: "80+", label: "Happy Clients" },
  { value: "200+", label: "Projects Done" },
];
