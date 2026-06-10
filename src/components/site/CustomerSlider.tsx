import React from "react";

const CUSTOMER_LOGOS = [
  {
    name: "Metalloy Industries",
    logo: (
      <svg className="h-10 w-auto fill-stone-700" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 15h25v10H10zM20 28h25v10H20z" className="fill-amber-500" />
        <text x="55" y="34" className="font-sans font-black text-xl uppercase fill-stone-800 tracking-wide">METALLOY</text>
        <text x="55" y="46" className="font-sans font-bold text-[9px] fill-stone-500 tracking-[0.2em]">INDUSTRIES</text>
      </svg>
    )
  },
  {
    name: "Apex Cookware",
    logo: (
      <svg className="h-10 w-auto fill-stone-700" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 12L10 38h30z" className="fill-stone-800" />
        <circle cx="25" cy="28" r="6" className="fill-amber-500" />
        <text x="55" y="34" className="font-sans font-black text-xl uppercase fill-stone-800 tracking-wide">APEX</text>
        <text x="55" y="46" className="font-sans font-bold text-[9px] fill-stone-500 tracking-[0.2em]">COOKWARE</text>
      </svg>
    )
  },
  {
    name: "Precision Tubing",
    logo: (
      <svg className="h-10 w-auto fill-stone-700" viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="4" className="stroke-stone-800" />
        <circle cx="25" cy="30" r="7" fill="none" stroke="currentColor" strokeWidth="3" className="stroke-amber-500" />
        <text x="55" y="34" className="font-sans font-black text-xl uppercase fill-stone-800 tracking-wide">PRECISION</text>
        <text x="55" y="46" className="font-sans font-bold text-[9px] fill-stone-500 tracking-[0.15em]">TUBING CORP.</text>
      </svg>
    )
  },
  {
    name: "Stellar Steel",
    logo: (
      <svg className="h-10 w-auto fill-stone-700" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 12c0 8-2 13-10 13 8 0 10 5 10 13 0-8 2-13 10-13-8 0-10-5-10-13z" className="fill-amber-500" />
        <text x="55" y="34" className="font-sans font-black text-xl uppercase fill-stone-800 tracking-wide">STELLAR</text>
        <text x="55" y="46" className="font-sans font-bold text-[9px] fill-stone-500 tracking-[0.15em]">STEEL & COILS</text>
      </svg>
    )
  },
  {
    name: "Zenith Appliances",
    logo: (
      <svg className="h-10 w-auto fill-stone-700" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="15" width="30" height="30" rx="6" fill="none" stroke="currentColor" strokeWidth="4" className="stroke-stone-800" />
        <path d="M18 22h14L18 38h14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="stroke-amber-500" />
        <text x="55" y="34" className="font-sans font-black text-xl uppercase fill-stone-800 tracking-wide">ZENITH</text>
        <text x="55" y="46" className="font-sans font-bold text-[9px] fill-stone-500 tracking-[0.15em]">APPLIANCES</text>
      </svg>
    )
  },
  {
    name: "Atlas Engineering",
    logo: (
      <svg className="h-10 w-auto fill-stone-700" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 12L12 38h6l4-9h6l4 9h6z" className="fill-stone-800" />
        <path d="M20 25h10" fill="none" stroke="currentColor" strokeWidth="3" className="stroke-amber-500" />
        <text x="55" y="34" className="font-sans font-black text-xl uppercase fill-stone-800 tracking-wide">ATLAS</text>
        <text x="55" y="46" className="font-sans font-bold text-[9px] fill-stone-500 tracking-[0.15em]">ENGINEERING</text>
      </svg>
    )
  }
];

export const CustomerSlider = () => {
  // To create a seamless infinite marquee, we duplicate the logos list
  const duplicatedLogos = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];

  return (
    <section className="section-shell bg-white pt-32 md:pt-40 pb-16 border-t border-black/5">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-display text-4xl uppercase font-bold text-stone-950 tracking-tight">
            CUSTOMERS
          </h2>
          <div className="gold-line mt-4 mx-auto w-24" />
        </div>

        <div className="relative overflow-hidden w-full bg-stone-50 py-8 rounded-[2rem] border border-black/5">
          {/* Gradient masks for smooth fading edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-16 md:gap-24">
            {duplicatedLogos.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="flex items-center justify-center shrink-0 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                {item.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
