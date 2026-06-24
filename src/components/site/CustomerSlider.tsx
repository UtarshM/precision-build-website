import React from "react";

// Import the 21 cropped logo images
import absolute from "@/assets/clients/absolute.png";
import acg from "@/assets/clients/acg.png";
import ameya from "@/assets/clients/ameya.png";
import atlas_copco from "@/assets/clients/atlas_copco.png";
import cat from "@/assets/clients/cat.png";
import cybernetik from "@/assets/clients/cybernetik.png";
import elite_screens from "@/assets/clients/elite_screens.png";
import gansons from "@/assets/clients/gansons.png";
import gopalan from "@/assets/clients/gopalan.png";
import icc from "@/assets/clients/icc.png";
import ima_copper from "@/assets/clients/ima_copper.png";
import jk_industries from "@/assets/clients/jk_industries.png";
import john_deere from "@/assets/clients/john_deere.png";
import jsw from "@/assets/clients/jsw.png";
import kores from "@/assets/clients/kores.png";
import kspg from "@/assets/clients/kspg.png";
import metal_forms from "@/assets/clients/metal_forms.png";
import reliable from "@/assets/clients/reliable.png";
import sk_pharma from "@/assets/clients/sk_pharma.png";
import stauff from "@/assets/clients/stauff.png";
import vulkan from "@/assets/clients/vulkan.png";

// Row 1 Logos (11 items) - Scrolling Right-to-Left
const ROW1_LOGOS = [
  { name: "Cybernetik Technologies", src: cybernetik },
  { name: "JSW", src: jsw },
  { name: "John Deere", src: john_deere },
  { name: "Caterpillar", src: cat },
  { name: "KSPG Automotive", src: kspg },
  { name: "Kores", src: kores },
  { name: "ACG", src: acg },
  { name: "Atlas Copco", src: atlas_copco },
  { name: "ICC", src: icc },
  { name: "Vulkan", src: vulkan },
  { name: "Elite Screens", src: elite_screens },
];

// Row 2 Logos (10 items) - Scrolling Left-to-Right
const ROW2_LOGOS = [
  { name: "Stauff", src: stauff },
  { name: "Absolute", src: absolute },
  { name: "Ameya Europe", src: ameya },
  { name: "Reliable Autotech", src: reliable },
  { name: "Gansons", src: gansons },
  { name: "J.K. Industries", src: jk_industries },
  { name: "S.K. Pharma Machinery", src: sk_pharma },
  { name: "Gopalan Aerospace", src: gopalan },
  { name: "Metal Forms", src: metal_forms },
  { name: "IMA Copper", src: ima_copper },
];

export const CustomerSlider = () => {
  // To create a seamless infinite marquee, we duplicate each list exactly once
  const duplicatedRow1 = [...ROW1_LOGOS, ...ROW1_LOGOS];
  const duplicatedRow2 = [...ROW2_LOGOS, ...ROW2_LOGOS];

  return (
    <section className="section-shell bg-white pt-32 md:pt-40 pb-20 border-t border-black/5">
      <div className="container">
        {/* Section Title */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-display text-4xl uppercase font-bold text-stone-950 tracking-tight">
            Our Valued Clients
          </h2>
          <p className="mt-4 text-sm uppercase tracking-widest text-stone-500 font-semibold">
            Trusted by industry leaders worldwide
          </p>
          <div className="gold-line mt-4 mx-auto w-24" />
        </div>

        {/* Logo Marquee Container */}
        <div className="relative overflow-hidden w-full bg-stone-50/50 py-12 rounded-[2.5rem] border border-black/5 flex flex-col gap-8">
          {/* Gradient masks for smooth fading edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Scrolling Right to Left */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee flex items-center gap-12 md:gap-16">
              {duplicatedRow1.map((item, idx) => (
                <div
                  key={`row1-${item.name}-${idx}`}
                  className="flex h-20 w-44 items-center justify-center shrink-0 px-4 py-2 bg-white rounded-2xl border border-black/[0.03] shadow-sm grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 hover:border-amber-500/30 hover:shadow-md transition-all duration-300 pointer-events-auto"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    title={item.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Left to Right */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee-reverse flex items-center gap-12 md:gap-16">
              {duplicatedRow2.map((item, idx) => (
                <div
                  key={`row2-${item.name}-${idx}`}
                  className="flex h-20 w-44 items-center justify-center shrink-0 px-4 py-2 bg-white rounded-2xl border border-black/[0.03] shadow-sm grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 hover:border-amber-500/30 hover:shadow-md transition-all duration-300 pointer-events-auto"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    title={item.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
