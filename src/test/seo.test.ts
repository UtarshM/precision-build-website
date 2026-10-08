import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

// Table of 38 URLs and expected metadata
export const SEO_EXPECTATIONS = [
  {
    "url": "https://www.mbfinishtech.com/",
    "title": "Metal Polishing & Buffing Machines India | MB Finish Tech",
    "description": "Source heavy-duty metal polishing and buffing machines engineered in India. Automate your plant finishing lines with custom systems from MB Finishing today."
  },
  {
    "url": "https://www.mbfinishtech.com/about",
    "title": "Industrial Polishing Machine Manufacturer Pune Maharashtra",
    "description": "Partner with an ISO 9001:2015 certified metal finishing and buffing machine manufacturer in Pune, India, engineering custom surface systems for your shop line."
  },
  {
    "url": "https://www.mbfinishtech.com/products",
    "title": "Automatic Metal Polishing Machinery in India | MB Tech",
    "description": "Automate your production lines with high-output sheet, pipe, and tank polishing machines made in India. Download direct machinery catalogues from MB Tech now."
  },
  {
    "url": "https://www.mbfinishtech.com/products/category/tank",
    "title": "Stainless Steel Tank & Dish End Polishing Machine India",
    "description": "Finish chemical and pharmaceutical stainless steel storage vessels to mirror standards. Source automatic tank buffing machines engineered for your factory line."
  },
  {
    "url": "https://www.mbfinishtech.com/products/category/dishend",
    "title": "Automatic Dish End & Tank Head Polishing Machine India",
    "description": "Polish torispherical, elliptical, and flat dishends uniformly. Source heavy-duty tank head buffing machinery engineered in India by MB Finishing Technologies."
  },
  {
    "url": "https://www.mbfinishtech.com/products/category/centerless",
    "title": "Centerless Tube & Pipe Polishing Machines | MB Finish Tech",
    "description": "Finish round tubes and cylindrical rods with continuous centerless polishing machinery built in India. Boost throughput across your automated production line."
  },
  {
    "url": "https://www.mbfinishtech.com/products/category/sheet",
    "title": "Automatic Stainless Steel Sheet Polishing Machines India",
    "description": "Deliver consistent No.4, hairline, and mirror finishes on stainless steel, brass, and aluminium plates with wide belt sheet buffing systems made in India."
  },
  {
    "url": "https://www.mbfinishtech.com/products/category/utensil",
    "title": "Automatic SS Utensil Polishing Machines | MB Finish Tech",
    "description": "Scale your cookware output with automatic kitchenware, pot, and pan polishing systems made in India. Cut manual buffing bottlenecks across your factory floor."
  },
  {
    "url": "https://www.mbfinishtech.com/products/category/pipe",
    "title": "Stainless Steel Pipe & Tube Polishing Machines | MB Tech",
    "description": "Deliver high-precision mirror finishes on stainless steel round tubes and industrial pipes. Source automatic pipe buffing machinery made in India for your plant."
  },
  {
    "url": "https://www.mbfinishtech.com/products/category/custom",
    "title": "Special Purpose Metal Polishing Machines | MB Finish Tech",
    "description": "Cut finishing bottlenecks on irregular parts with special purpose polishing and buffing machines engineered in India to match your plant build"
  },
  {
    "url": "https://www.mbfinishtech.com/catalogue",
    "title": "Industrial Polishing Machine Catalogue PDF | MB Finish Tech",
    "description": "Download our technical metal polishing machine catalogue PDF. Review engineering specs for automatic tube, sheet, and dishend buffing systems built in India."
  },
  {
    "url": "https://www.mbfinishtech.com/clients",
    "title": "Industrial Surface Finishing Applications | MB Tech India",
    "description": "Deliver Ra 0.2 micron mirror finishes across pharmaceutical tanks, dairy vessels, and automotive parts with automated buffing lines engineered for your plant."
  },
  {
    "url": "https://www.mbfinishtech.com/application",
    "title": "Industrial Surface Finishing Applications | MB Finish Tech",
    "description": "Deliver precision surface finishes across pharma vessels, dairy tanks, and automotive parts with automated polishing machinery engineered for your plant line."
  },
  {
    "url": "https://www.mbfinishtech.com/services",
    "title": "Industrial Polishing Machine Maintenance and Spare Parts",
    "description": "Keep your production running with on-site polishing machine maintenance, precision commissioning, and genuine spare parts across industrial plants in India."
  },
  {
    "url": "https://www.mbfinishtech.com/contact",
    "title": "Polishing Machine Manufacturer Pune | Contact MB Tech India",
    "description": "Connect with an industrial polishing machine manufacturer in Bhosari MIDC, Pune. Talk to our machinery team to discuss custom surface finishing build quotes."
  },
  {
    "url": "https://www.mbfinishtech.com/finishes",
    "title": "Ra Surface Roughness Values Explained | MB Finishing Tech",
    "description": "Achieve precise Ra 0.40 \u00b5m pharma sanitary standards, No.4 satin, and No.8 mirror polishes on stainless steel using automated machinery built for your plant."
  },
  {
    "url": "https://www.mbfinishtech.com/career",
    "title": "SPM Machine Manufacturing Jobs in Pune | MB Finish Tech",
    "description": "Grow your engineering career in Bhosari MIDC, Pune. We hire machine design engineers, assembly technicians, and fabrication specialists for industrial SPM lines."
  },
  {
    "url": "https://www.mbfinishtech.com/gallery",
    "title": "Industrial Polishing Machine Working Videos | MB Finish",
    "description": "Watch automatic tank, sheet, and centerless pipe buffing machines operate on factory floors. See actual surface finishing results on industrial metal parts."
  },
  {
    "url": "https://www.mbfinishtech.com/products/tpm4500-sdx-automatic-tank-polishing-machine",
    "title": "TPM4500-SDX Automatic Tank & Dish End Polishing Machine",
    "description": "Automate internal ID and external OD polishing on chemical reactors and large storage tanks with the TPM4500-SDX system. Built for heavy manufacturing plants."
  },
  {
    "url": "https://www.mbfinishtech.com/products/tpm3000-sd-dished-end-polishing-machine",
    "title": "TPM3000-SD Dish End Polishing Machine | MB Finish Tech",
    "description": "Polish torispherical, elliptical, and flat vessel heads with the TPM3000-SD automatic dishend buffing machine. Built in India for industrial fabricators."
  },
  {
    "url": "https://www.mbfinishtech.com/products/tpm2500-sdx-tank-shell-polisher",
    "title": "TPM2500-SDX Automatic Tank Shell Polishing Machine | MB",
    "description": "Achieve mirror finishes on medium stainless steel tank shells and chemical vessels with the TPM2500-SDX internal and external surface finishing polisher."
  },
  {
    "url": "https://www.mbfinishtech.com/products/piop2000-automatic-duct-polisher",
    "title": "PIOP2000 Automatic Duct Polishing Machine | MB Finish Tech",
    "description": "Polish stainless steel ducting, small vessels, and pharma equipment to mirror finishes. Source the PIOP2000 automatic duct polisher built for factory lines."
  },
  {
    "url": "https://www.mbfinishtech.com/products/cg150b-single-head-round-pipe-polishing-machine",
    "title": "CG150B Centerless Round Pipe Polishing Machine | MB Tech",
    "description": "Finish round tubes continuously with the CG150B single-head centerless pipe polishing machine. Achieve uniform mirror finishes across stainless steel lines."
  },
  {
    "url": "https://www.mbfinishtech.com/products/cg150w-double-head-pipe-polisher",
    "title": "CG150W-2H Dual Head Centerless Pipe Polishing Machine",
    "description": "Cut cycle times with two-stage grinding and polishing on stainless steel tubes. Equip your workshop with the CG150W-2H dual-head centerless machine today."
  },
  {
    "url": "https://www.mbfinishtech.com/products/sp1500b-heavy-duty-sheet-polisher",
    "title": "SP1500B Heavy Duty Stainless Steel Sheet Polishing Machine",
    "description": "Produce No.4 satin and hairline finishes on wide stainless steel and aluminium plates with the heavy-duty SP1500B sheet polishing system made in India."
  },
  {
    "url": "https://www.mbfinishtech.com/products/sp1200b-automatic-sheet-buffing-machine",
    "title": "SP1200 Heavy Duty Sheet Buffing Machine | MB Finish Tech",
    "description": "Deliver uniform surface finishes across wide stainless steel and aluminium plates. Equip your sheet metal production facility with the SP1200 buffing system."
  },
  {
    "url": "https://www.mbfinishtech.com/products/sp600b-compact-sheet-polisher",
    "title": "SP600B Wet Sheet Polishing Machine | MB Finish Tech India",
    "description": "Eliminate factory dust and heat warp with the SP600B enclosed wet sheet polishing machine. Engineered in India for high-precision stainless steel finishing."
  },
  {
    "url": "https://www.mbfinishtech.com/products/manual-belt-trolley-polishing-machine",
    "title": "TBP300-2H Trolley Type Plate Polishing Machine | MB Tech",
    "description": "Polish flat plates, MS sheets, and aluminium sections with the TBP300-2H double-head trolley polisher. Heavy-duty build designed for industrial fabrication."
  },
  {
    "url": "https://www.mbfinishtech.com/products/sp300b-wet-sheet-polisher",
    "title": "SP300 Wet Sheet Polishing Machine for Stainless Steel | MB",
    "description": "Achieve No.8 mirror and No.4 satin finishes on stainless steel, copper, and brass plates with the SP300 wet belt sheet polishing machine built in India."
  },
  {
    "url": "https://www.mbfinishtech.com/products/vb150-vacuum-bed-sheet-polisher",
    "title": "VB150 Vacuum Bed Automatic Sheet Polishing Machine | MB",
    "description": "Secure thin metal plates firmly during high-speed finishing. The VB150 vacuum bed sheet polisher delivers uniform No.4 and hairline textures without slip."
  },
  {
    "url": "https://www.mbfinishtech.com/products/automatic-utensil-buffing-machine",
    "title": "UPM-120B Automatic Utensil Polishing Machine | MB Tech",
    "description": "Automate mirror polishing on cookware, pots, and hollowware. The UPM-120B automatic utensil buffing machine eliminates manual finishing steps on your shop line."
  },
  {
    "url": "https://www.mbfinishtech.com/blog",
    "title": "Industrial Metal Finishing Blog | MB Finishing Technologies",
    "description": "Read practical engineering guides on industrial polishing techniques, buffing wheel setups, and surface roughness control for heavy manufacturing production lines."
  },
  {
    "url": "https://www.mbfinishtech.com/blog/how-to-achieve-mirror-polish-on-vessels-and-tanks",
    "title": "How to Achieve Mirror Polish on Metal Vessels & Tanks | MB",
    "description": "Master step-by-step techniques to achieve sanitary Ra mirror finishes on stainless steel vessels and storage tanks using automated buffing setups on your line."
  },
  {
    "url": "https://www.mbfinishtech.com/blog/manual-vs-automated-sheet-polishing-conveyor-machines",
    "title": "Manual vs Automated Sheet Polishing Conveyor Machines | MB",
    "description": "Compare cycle speed, labour costs, and finish quality between manual buffing and automated conveyor sheet polishing machines for your industrial workshop."
  },
  {
    "url": "https://www.mbfinishtech.com/blog/what-is-a-tank-polishing-machine-and-how-does-it-work",
    "title": "What Is a Tank Polishing Machine & How It Works",
    "description": "A tank polishing machine automates surface finishing on tanks and vessels. Know how it works, its components, and why industries rely on it daily."
  },
  {
    "url": "https://www.mbfinishtech.com/blog/how-to-choose-the-right-tank-polishing-machine-for-stainless-steel-tanks",
    "title": "How to Choose the Right Tank Polishing Machine",
    "description": "Choosing the right tank polishing machine for stainless steel tanks depends on size, finish grade, and volume. This guide covers every factor you need."
  },
  {
    "url": "https://www.mbfinishtech.com/blog/tank-polishing-vs-manual-polishing",
    "title": "Tank Polishing vs Manual Polishing: Key Differences",
    "description": "Tank polishing vs manual polishing compared on finish quality, speed, cost, and safety. See which method fits your stainless steel production needs."
  },
  {
    "url": "https://www.mbfinishtech.com/blog/what-is-dish-end-polishing",
    "title": "What Is Dish End Polishing? Process & Machines",
    "description": "Dish end polishing removes surface defects from curved tank caps using abrasive and buffing stages. Know the process, machine types, and applications."
  }
];

describe("SEO Expectations Verification", () => {
  it("should have exactly 38 target URLs", () => {
    expect(SEO_EXPECTATIONS.length).toBe(38);
  });

  it("should find every expected title and meta description present in codebase files", () => {
    const srcDir = path.resolve(__dirname, "..");
    const allFiles: string[] = [];

    function walkDir(dir: string) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory() && entry.name !== "test") {
          walkDir(fullPath);
        } else if (entry.isFile() && (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts"))) {
          allFiles.push(fullPath);
        }
      }
    }

    walkDir(srcDir);
    const combinedCode = allFiles.map((f) => fs.readFileSync(f, "utf8")).join("\n");

    for (const item of SEO_EXPECTATIONS) {
      expect(
        combinedCode.includes(item.title),
        `Expected title not found in codebase: "${item.title}" for URL ${item.url}`
      ).toBe(true);

      expect(
        combinedCode.includes(item.description),
        `Expected description not found in codebase: "${item.description}" for URL ${item.url}`
      ).toBe(true);
    }
  });
});
