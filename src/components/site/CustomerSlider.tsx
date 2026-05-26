import React from "react";

const CUSTOMER_LOGOS = [
  {
    name: "XCMG",
    logo: (
      <svg className="h-10 w-auto fill-stone-700" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 10h12v40H10zM15 10l20 20-20 20zM35 10v40h12V10z" className="fill-amber-500" />
        <text x="60" y="38" className="font-sans font-black text-2xl uppercase fill-stone-800 tracking-wider">XCMG</text>
        <text x="60" y="50" className="font-sans font-bold text-[8px] fill-stone-500">徐工集团</text>
      </svg>
    )
  },
  {
    name: "CONSUEGRA",
    logo: (
      <svg className="h-10 w-auto fill-stone-700" viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="30" r="18" fill="none" stroke="currentColor" strokeWidth="4" />
        <text x="17" y="36" className="font-serif font-black text-lg fill-stone-800">SC</text>
        <text x="55" y="35" className="font-sans font-black text-lg tracking-widest fill-stone-800">CONSUEGRA</text>
        <text x="55" y="47" className="font-sans font-medium text-[8px] fill-stone-500 tracking-widest">CHAPISTERIA DE PRECISION</text>
      </svg>
    )
  },
  {
    name: "Infrico",
    logo: (
      <svg className="h-10 w-auto fill-stone-700" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 15l10 10-10 10-10-10z" className="fill-primary" />
        <path d="M35 15l10 10-10 10-10-10z" className="fill-stone-400" />
        <text x="55" y="38" className="font-sans font-black text-2xl fill-stone-800 tracking-tight">Infrico</text>
      </svg>
    )
  },
  {
    name: "FAGOR",
    logo: (
      <svg className="h-10 w-auto fill-stone-700" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="38" className="font-sans font-black italic text-2xl fill-stone-800 tracking-wider">FAGOR</text>
        <circle cx="120" cy="30" r="14" className="fill-stone-800" />
        <path d="M112 30h16M120 22v16" stroke="white" strokeWidth="3" />
      </svg>
    )
  },
  {
    name: "GKN AEROSPACE",
    logo: (
      <svg className="h-9 w-auto fill-stone-700" viewBox="0 0 260 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20l15 10-15 10v-20zM22 20l15 10-15 10v-20z" className="fill-stone-800" />
        <text x="45" y="38" className="font-sans font-black text-xl fill-stone-800 tracking-wider">GKN AEROSPACE</text>
      </svg>
    )
  }
];

export const CustomerSlider = () => {
  // To create a seamless infinite marquee, we duplicate the logos list
  const duplicatedLogos = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];

  return (
    <section className="section-shell bg-white py-16 border-t border-black/5">
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
