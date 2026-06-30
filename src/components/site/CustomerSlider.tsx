import React from "react";

// Import the 38 customer logo images
import acg_pharma from "@/assets/clients/acg_pharma.png";
import al_can_exports from "@/assets/clients/al_can_exports.png";
import bioaspire from "@/assets/clients/bioaspire.png";
import cybernetik from "@/assets/clients/cybernetik.png";
import diam_display from "@/assets/clients/diam_display.png";
import difacto from "@/assets/clients/difacto.png";
import gmm_pfaudler from "@/assets/clients/gmm_pfaudler.png";
import gansons from "@/assets/clients/gansons.png";
import gopalan_aerospace from "@/assets/clients/gopalan_aerospace.png";
import griffyn from "@/assets/clients/griffyn.png";
import gurukrupa_bellows from "@/assets/clients/gurukrupa_bellows.png";
import indian_oil_logo from "@/assets/clients/indian_oil_logo.png";
import indo_mim from "@/assets/clients/indo_mim.png";
import jk_industries from "@/assets/clients/jk_industries.png";
import kgn_industries from "@/assets/clients/kgn_industries.png";
import kspg_logo from "@/assets/clients/kspg_logo.svg";
import l_t from "@/assets/clients/l_t.png";
import metal_forms from "@/assets/clients/metal_forms.png";
import new_bio_scientific from "@/assets/clients/new_bio_scientific.png";
import nutech from "@/assets/clients/nutech.png";
import primesol from "@/assets/clients/primesol.png";
import reliable_auto from "@/assets/clients/reliable_auto.png";
import s2_engg from "@/assets/clients/s2_engg.png";
import sk_pharma from "@/assets/clients/sk_pharma.png";
import scutes_india from "@/assets/clients/scutes_india.png";
import standard_glass from "@/assets/clients/standard_glass.png";
import sudhir_auto from "@/assets/clients/sudhir_auto.png";
import surya from "@/assets/clients/surya.png";
import vulkan from "@/assets/clients/vulkan.png";
import watermass from "@/assets/clients/watermass.png";
import cn_water_logo from "@/assets/clients/cn_water_logo.png";
import elitescreens_logo from "@/assets/clients/elitescreens_logo.png";
import essem_industries from "@/assets/clients/essem_industries.png";
import fermexsolutions_logo from "@/assets/clients/fermexsolutions_logo.png";
import magtech from "@/assets/clients/magtech.png";
import mapsons_process_equipment_pvt_ltd_logo from "@/assets/clients/mapsons_process_equipment_pvt_ltd_logo.png";
import quadra_logo from "@/assets/clients/quadra_logo.png";
import saan_engineers_pvt_ltd_logo from "@/assets/clients/saan_engineers_pvt_ltd_logo.png";

// Row 1 Logos (19 items) - Scrolling Right-to-Left
const ROW1_LOGOS = [
  { name: "ACG Pharma", src: acg_pharma },
  { name: "Al-Can Exports", src: al_can_exports },
  { name: "Bioaspire", src: bioaspire },
  { name: "Cybernetik", src: cybernetik },
  { name: "Diam Display", src: diam_display },
  { name: "Difacto", src: difacto },
  { name: "GMM Pfaudler", src: gmm_pfaudler },
  { name: "Gansons", src: gansons },
  { name: "Gopalan Aerospace", src: gopalan_aerospace },
  { name: "Griffyn", src: griffyn },
  { name: "Gurukrupa Bellows", src: gurukrupa_bellows },
  { name: "Indian Oil", src: indian_oil_logo },
  { name: "Indo MIM", src: indo_mim },
  { name: "J.K. Industries", src: jk_industries },
  { name: "KGN Industries", src: kgn_industries },
  { name: "KSPG", src: kspg_logo },
  { name: "L&T", src: l_t },
  { name: "Metal Forms", src: metal_forms },
  { name: "New Bio Scientific", src: new_bio_scientific },
];

// Row 2 Logos (19 items) - Scrolling Left-to-Right
const ROW2_LOGOS = [
  { name: "Nutech", src: nutech },
  { name: "Primesol", src: primesol },
  { name: "Reliable Auto", src: reliable_auto },
  { name: "S2 Engg", src: s2_engg },
  { name: "SK Pharma", src: sk_pharma },
  { name: "Scutes India", src: scutes_india },
  { name: "Standard Glass", src: standard_glass },
  { name: "Sudhir Auto", src: sudhir_auto },
  { name: "Surya", src: surya },
  { name: "Vulkan", src: vulkan },
  { name: "Watermass", src: watermass },
  { name: "CN Water", src: cn_water_logo },
  { name: "Elite Screens", src: elitescreens_logo },
  { name: "Essem Industries", src: essem_industries },
  { name: "Fermex Solutions", src: fermexsolutions_logo },
  { name: "Magtech", src: magtech },
  { name: "Mapsons Process Equipment", src: mapsons_process_equipment_pvt_ltd_logo },
  { name: "Quadra", src: quadra_logo },
  { name: "Saan Engineers", src: saan_engineers_pvt_ltd_logo },
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
                  className="flex h-28 w-60 items-center justify-center shrink-0 px-6 py-3 bg-white rounded-2xl border border-black/[0.03] shadow-sm hover:scale-105 hover:border-amber-500/30 hover:shadow-md transition-all duration-300 pointer-events-auto"
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
                  className="flex h-28 w-60 items-center justify-center shrink-0 px-6 py-3 bg-white rounded-2xl border border-black/[0.03] shadow-sm hover:scale-105 hover:border-amber-500/30 hover:shadow-md transition-all duration-300 pointer-events-auto"
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
