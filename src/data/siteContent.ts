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
import piop2000DuctPolisher from "@/assets/piop2000-duct-polisher.png";
import cg150bSingleHead from "@/assets/cg150b-single-head.png";

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
    description: "Our flagship heavy-duty tank polishing system designed for automatic internal (ID) and external (OD) polishing of storage tanks, processing vessels, and chemical reactors. Employs a pneumatically loaded, dual-axis tracking arm.",
    specs: {
      "Model Designation": "TPM-4500SDX (Column & Boom)",
      "Spindle Motor Power": "3.7 kW / 5 HP",
      "Spindle / Head Speed": "500 – 3,000 RPM (Variable VFD)",
      "Working Capacity (Shell OD)": "Ø 0.5 – 4.5 meters",
      "Working Capacity (Shell ID)": "Ø 1.1 – 4.5 meters",
      "Max Shell Length": "4000 mm",
      "Polishing Feed Speed": "0 – 3,000 mm/min",
      "Achievable Surface Ra": "Ra ≤ 0.2 µm (Sanitary Mirror Polish)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "3000 kg Approx."
    },
    consumables: ["Cloth Abrasive belt / Flap wheels", "Sisal & Cotton buffing wheels", "Compound Bar / Liquid for shine"],
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
      "Spindle Motor Power": "3.7 kW / 5 HP",
      "Spindle / Head Speed": "500 – 3,000 RPM (Variable VFD)",
      "Working Capacity (Dish OD)": "Ø 0.5 – 3.0 meters",
      "Rotation Table Speed": "1 – 15 RPM (VFD controlled)",
      "Polishing Feed Speed": "0 – 3,000 mm/min",
      "Achievable Surface Ra": "Ra ≤ 0.2 µm (Sanitary Grade Mirror)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "2000 kg Approx."
    },
    consumables: ["Cloth Abrasive belt / Flap wheels", "Sisal & Cotton buffing wheels", "Compound Bar / Liquid for shine"],
    applicationLink: "pharma"
  },
  {
    id: "tpm-2500-tank",
    category: "tank",
    name: "TPM1500-SD Tank & Dishend Polishing Machine",
    usp: "Medium gantry dual-axis system with HMI interface for tanks up to 1.5m diameter",
    image: tpm1500TankPolisher,
    description: "Advanced medium-capacity tank polishing system designed for automatic internal (ID) and external (OD) polishing of storage tanks and chemical reactors. Ideal for medium-sized vessels.",
    specs: {
      "Model Designation": "TPM-1500SD (Gantry Boom)",
      "Spindle Motor Power": "2.2 kW / 3 HP",
      "Spindle / Head Speed": "500 – 2,800 RPM",
      "Working Capacity (Shell OD)": "Ø 0.5 – 1.5 meters",
      "Working Capacity (Shell ID)": "Ø 0.5 – 1.5 meters",
      "Max Shell Length": "1.5 meters",
      "Polishing Feed Speed": "0 – 3,000 mm/min",
      "Achievable Surface Ra": "Ra ≤ 0.2 µm (Matt, Mirror)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "1500 kg Approx."
    },
    consumables: ["Cloth Abrasive belt / Flap wheels", "Sisal & Cotton buffing wheels", "Compound Bar / Liquid for shine"],
    applicationLink: "pharma"
  },
  {
    id: "piop-2000-tank",
    category: "tank",
    name: "PIOP2000 Duct Polishing Machine",
    usp: "Compact beauty to finish the small tanks in ID & OD applications",
    image: piop2000DuctPolisher,
    description: "The Compact beauty to finish the small tanks in ID & OD applications used in Ducts, Dairy, beverage, Pharma equipments. Heavy duty motor and enhanced polishing head assures to get the Matt & Mirror finish.",
    specs: {
      "Model Designation": "PIOP2000",
      "Spindle Motor Power": "5.5 kW / 7.5 HP",
      "Spindle / Head Speed": "500 – 3,000 RPM (Variable VFD)",
      "Working Capacity (Shell OD)": "Ø 200 – 1000 mm",
      "Working Capacity (Shell ID)": "Ø 200 – 1000 mm",
      "Max Shell Length": "2000 mm",
      "Polishing Feed Speed": "5 to 50 mm/min",
      "Achievable Surface Ra": "Ra ≤ 0.2 µm (Sanitary Mirror Polish)",
      "Total Machine Weight": "1450 kg"
    },
    consumables: ["Hard-stitched Sisal Buffing Wheels", "Chromium Oxide Green Cutting Compound Bar", "Non-woven Abrasive Rollers"],
    applicationLink: "dairy"
  },
  // --- PIPE & TUBE POLISHING MACHINES ---
  {
    id: "cg-150b-l1-pipe",
    category: "pipe",
    name: "CG15OB Centerless Round Pipe Polishing Machine",
    usp: "Simultaneous single-stage grinding and polishing for rapid, mirror-grade round pipes",
    image: cg150bSingleHead,
    description: "High-speed centerless finishing system designed for continuous external (OD) polishing of round tubes, bars, and pipes. Features a single high-performance polishing head to achieve a high-quality finish.",
    specs: {
      "Model Designation": "CG-150B-L1 (Single Head Centerless)",
      "Spindle Motor Power": "3.7 kW / 5 HP",
      "Spindle / Head Speed": "1,440 – 2,800 RPM",
      "Working Capacity (OD)": "Ø 10 mm – Ø 150 mm round pipes & bars",
      "Through-feed Speed Rate": "0.5 – 6.0 m/min (VFD continuous auto-feed)",
      "Polishing Consumables": "Abrasive Belt & Flap Wheel (150 mm width)",
      "Achievable Surface Ra": "Ra ≤ 0.2 µm (Matt, Mirror)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx. 400 kg"
    },
    consumables: ["Heavy abrasive flap wheels (Grit 80-220)", "High-gloss cotton buffing wheels", "Liquid buffing compound / paste"],
    applicationLink: "dairy"
  },
  {
    id: "cg-150w-2h-pipe",
    category: "pipe",
    name: "CG15OW-2H Centerless Round Pipe Polishing Machine",
    usp: "Simultaneous dual-stage grinding and polishing for rapid, mirror-grade round pipes",
    image: cg150DoubleHead,
    description: "High-speed centerless finishing system designed for continuous external (OD) polishing of round tubes, bars, and pipes. Features independent motor controls for each polishing station to achieve a rough-cut and final polish in a single pass.",
    specs: {
      "Model Designation": "CG-150W-2H (Double Head Centerless)",
      "Spindle Motor Power": "3.7 kW / 5 HP",
      "Spindle / Head Speed": "1,440 – 2,800 RPM",
      "Working Capacity (OD)": "Ø 10 mm – Ø 150 mm round pipes & bars",
      "Through-feed Speed Rate": "0.5 – 6.0 m/min (VFD continuous auto-feed)",
      "Polishing Consumables": "Abrasive Belt & Flap Wheel (150 mm width)",
      "Achievable Surface Ra": "Ra ≤ 0.2 µm (Matt, Mirror)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx. 700 kg"
    },
    consumables: ["Heavy abrasive flap wheels (Grit 80-220)", "High-gloss cotton buffing wheels", "Liquid buffing compound / paste"],
    applicationLink: "dairy"
  },
  // --- SHEET & FLAT SURFACE POLISHING MACHINES ---
  {
    id: "sp-1500b-sheet",
    category: "sheet",
    name: "SP1500B Sheet Polishing Machine",
    usp: "Wide belt sander for large sheets of SS, M.S., Aluminium & copper",
    image: sp1200bSheetPolisher,
    description: "Continuous inline sheet feed polishing machine. Designed to produce No.4 Satin, Hairline on stainless steel, brass, and aluminum sheets. Can have combination heads from 2 to 6 heads inline.",
    specs: {
      "Model Designation": "SP1500B",
      "Spindle Motor Power": "25 kW / 30 HP (Total power)",
      "Spindle / Head Speed": "1,500 RPM (With oscillating head)",
      "Working Capacity (Width)": "Upto 1550mm",
      "Working Capacity (Thickness)": "1 to 100 mm",
      "Conveyor Feed Speed": "0.5 – 6.0 m/min (Variable VFD through-feed)",
      "Polishing Consumables": "Wide belt emery, Flap wheel, Buffing wheels",
      "Achievable Surface Ra": "Ra ≤ 0.4 µm (Satin No.4)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "1450 kg Approx."
    },
    consumables: ["Wide Emery Belts (Grit 120, 240, 320, 400)", "Scotch-Brite Satin Finishing Drums"],
    applicationLink: "dairy"
  },
  {
    id: "sp-1200-sheet",
    category: "sheet",
    name: "SP1200 Heavy-Duty Sheet Polishing Machine",
    usp: "Wide belt sander for large sheets of SS, M.S., Aluminium & copper",
    image: sp1200bSheetPolisher,
    description: "Continuous inline sheet feed polishing machine. Designed to produce No.4 Satin, Hairline on stainless steel, brass, and aluminum sheets. Can have combination heads from 2 to 6 heads inline.",
    specs: {
      "Model Designation": "SP1200",
      "Spindle Motor Power": "15 kW / 20 HP (Total power)",
      "Spindle / Head Speed": "1,500 RPM (With oscillating head)",
      "Working Capacity (Width)": "Upto 1250mm",
      "Working Capacity (Thickness)": "1 to 100 mm",
      "Conveyor Feed Speed": "0.5 – 6.0 m/min (Variable VFD through-feed)",
      "Polishing Consumables": "Wide belt emery, Flap wheel, Buffing wheels",
      "Achievable Surface Ra": "Ra ≤ 0.4 µm (Satin No.4)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "1200 kg Approx."
    },
    consumables: ["Wide Emery Belts (Grit 120, 240, 320, 400)", "Scotch-Brite Satin Finishing Drums"],
    applicationLink: "dairy"
  },
  {
    id: "sp-600b-sheet",
    category: "sheet",
    name: "SP600B Sheet Polishing Machine",
    usp: "Enclosed wet-grinding wide belt sander for dust-free, cool-running sheet finishing",
    image: sp600wWetPolisher,
    description: "A premium, fully enclosed wide belt polishing machine designed for high-precision finishing of stainless steel and alloy sheets. Can be integrated as multiple head combination from 2 to 6 heads inline.",
    specs: {
      "Model Designation": "SP600B",
      "Spindle Motor Power": "7.5 kW / 10 HP (Total power)",
      "Spindle / Head Speed": "1,500 RPM",
      "Working Capacity (Width)": "Up to 600 mm",
      "Working Capacity (Thickness)": "1 to 100 mm",
      "Conveyor Feed Speed": "0.5 – 6.0 m/min",
      "Polishing Consumables": "Wide belt emery, Flap wheel, Buffing wheels",
      "Achievable Surface Ra": "Ra ≤ 0.4 µm (Grit 120 to Satin No.4)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "800 kg Approx."
    },
    consumables: ["Wide emery belts (Grit 60 to 1200)", "Non woven / Flap wheel rollers", "Buffing wheels"],
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
    id: "sp-300-sheet",
    category: "sheet",
    name: "SP300 Sheet Polishing Machine",
    usp: "Can have combination heads from 2 to 6 heads inline",
    image: flatbarConveyorPolisher,
    description: "Continuous inline sheet feed polishing machine. Designed to produce No.4 Satin, Hairline, or No.8 Mirror finishes on stainless steel, brass, and aluminum sheets. Can have combination heads from 2 to 6 heads inline.",
    specs: {
      "Model Designation": "SP300",
      "Spindle Motor Power": "5.5 kW / 7.5 HP",
      "Spindle / Head Speed": "Upto 2800 rpm (With oscillating head)",
      "Working Capacity (Width)": "Upto 300mm",
      "Working Capacity (Thickness)": "1 to 100 mm",
      "Conveyor Feed Speed": "0.5 – 6.0 m/min (variable VFD through-feed)",
      "Polishing Consumables": "Belt, Flap Wheel, buff wheel",
      "Achievable Surface Ra": "Ra ≤ 0.2 µm (Matt, Mirror)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx. 700 kg"
    },
    consumables: ["Wide emery belts (Grit 60 to 1200)", "Non woven / Flap wheel rollers", "Buffing wheels"],
    applicationLink: "dairy"
  },
  {
    id: "vb-150-sheet",
    category: "sheet",
    name: "VB150 Sheet Polishing Machine",
    usp: "Can have combination heads from 2 to 6 heads inline",
    image: flatbarConveyorPolisherComparison,
    description: "Continuous inline sheet feed polishing machine. Designed to produce No.4 Satin, Hairline, or No.8 Mirror finishes on stainless steel, brass, and aluminum sheets. Can have combination heads from 2 to 6 heads inline.",
    specs: {
      "Model Designation": "SP100",
      "Spindle Motor Power": "3.7 kW / 5 HP",
      "Spindle / Head Speed": "Upto 2800 rpm (With oscillating head)",
      "Working Capacity (Width)": "Upto 150mm",
      "Working Capacity (Thickness)": "1 to 100 mm",
      "Conveyor Feed Speed": "0.5 – 6.0 m/min (variable VFD through-feed)",
      "Polishing Consumables": "Belt, Flap Wheel, buff wheel",
      "Achievable Surface Ra": "Ra ≤ 0.2 µm (Matt, Mirror)",
      "CE Marking status": "CE-Ready / CE-Certifiable",
      "Total Machine Weight": "Approx. 550 kg"
    },
    consumables: ["Wide emery belts (Grit 60 to 1200)", "Non woven / Flap wheel rollers", "Buffing wheels"],
    applicationLink: "dairy"
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
