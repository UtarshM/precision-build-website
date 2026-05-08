import drylining from "@/assets/project-drylining.jpg";
import finishing from "@/assets/project-finishing.jpg";
import management from "@/assets/project-management.jpg";
import polishing from "@/assets/project-polishing.jpg";
import plastering from "@/assets/project-plastering.jpg";
import renovation from "@/assets/project-renovation.jpg";

export type Product = {
  name: string;
  category: string;
  image: string;
  description: string;
};

const productImages = [
  polishing,
  drylining,
  finishing,
  plastering,
  management,
  renovation,
];

const productDescriptions = [
  "High-precision machine built for consistent industrial surface finishing.",
  "Designed for smooth output, reliable operation and production efficiency.",
  "Suitable for demanding polishing applications with durable construction.",
  "Built for repeatable finish quality across industrial and fabrication needs.",
  "Production-ready equipment engineered for long service life and performance.",
  "Advanced polishing setup focused on quality, speed and process control.",
];

const productNames = [
  "Tank Polishing Machine",
  "Pipe ID Polishing Machine",
  "Sheet Polishing Machine",
  "Super-finishing Machine",
  "Heavy Rod OD Polishing Machine",
  "SS Coil Polishing Machine",
  "Flat Polishing Machine",
  "Manual Sheet Polishing Machine",
  "Cookware Buffing Machine",
  "Turnkey Solution for Cookware Buffing",
  "LID/Utensils Buffing/Polishing Machine",
  "Centerless Pipe/Bar Polishing Machine",
  "Turnkey Solution for Mirror/MATT Finish for LID/Utensils",
  "Square Tube Polishing Machine",
  "Trolley Type Polishing Machine",
  "Centerless Pipe Polishing Machine",
  "M/c Available in Multiple Heads",
  "Manual Belt Polishing Machine",
  "Manual Wheel Polishing Machine",
  "Special Purpose Polishing Machine",
];

export const products: Product[] = productNames.map((name, index) => ({
  name,
  category: index < 8 ? "Standard Machines" : "Specialized Systems",
  image: productImages[index % productImages.length],
  description: productDescriptions[index % productDescriptions.length],
}));

export const galleryItems = products.slice(0, 6).map((product, index) => ({
  ...product,
  category: [
    "Machine Gallery",
    "Industrial Finish",
    "Surface Quality",
    "Cookware Line",
    "Production Setup",
    "Custom Machine",
  ][index],
  span: index === 0 ? "lg:col-span-2 lg:row-span-2" : index === 5 ? "lg:col-span-2" : "",
}));

export const clients = [
  "Metalloy Industries",
  "Apex Cookware Ltd.",
  "Precision Tubing Corp.",
  "Stellar Steel & Coils",
  "Prime Ware Systems",
  "Global Pipe Solutions",
  "EverFinish Metals",
  "Zenith Kitchen Appliances",
  "Atlas Engineering & Fabricators",
];

export const companyStats = [
  { value: "35+", label: "Years Experience" },
  { value: "100", label: "Team Members" },
  { value: "1000", label: "Happy Clients" },
  { value: "1000", label: "Projects Done" },
];
