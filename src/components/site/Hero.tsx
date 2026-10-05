import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Award, Cog, ShieldCheck } from "lucide-react";
import tpm4500TankPolisher from "@/assets/tpm4500-tank-polisher.png";
import sp1200bSheetPolisher from "@/assets/sp1200b-sheet-polisher.jpg";
import cg150DoubleHead from "@/assets/cg150-double-head.jpg";
import { MadeInIndiaLogo } from "./MadeInIndiaLogo";

const FLASHING_SLIDES = [
  {
    type: "VESSEL & TANK",
    title: "TPM4500-SDX Tank Polishing Machine",
    desc: "1st company to successfully develop Tank polishing in India. Automatic dual-axis shell and dished end polishing.",
    image: tpm4500TankPolisher
  },
  {
    type: "SHEET FINISHING",
    title: "SP1200B Sheet Polishing Machine",
    desc: "Premium 3-station inline belt-grinder designed to produce flawless satin, hairline, and mirror finishes.",
    image: sp1200bSheetPolisher
  },
  {
    type: "TUBE & PIPE",
    title: "CG15OW-2H Centerless Polishing Machine",
    desc: "Simultaneous dual-stage grinding and polishing for rapid, mirror-grade round pipes and bars.",
    image: cg150DoubleHead
  }
];

const HORIZONTAL_VALUES = [
  {
    title: "Industrial Buffing Systems",
    icon: Cog,
    text: "Engineered for consistent, high-precision surface finishing across demanding metal production lines."
  },
  {
    title: "Automated Polishing Setup",
    icon: Award,
    text: "Reliable equipment tailored for tanks, dished ends, and custom industrial finishing needs."
  },
  {
    title: "Certified Manufacturing",
    icon: ShieldCheck,
    text: "Built under ISO 9001:2015 standards to ensure long machine life, low maintenance, and uniform Ra values."
  }
];

export const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Automatic flashing transition
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % FLASHING_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex flex-col justify-between overflow-hidden pb-12 pt-32 md:pb-16 md:pt-40 bg-[#faf6ed]">
      {/* Background aesthetics */}
      <div className="absolute inset-0 -z-30 bg-gradient-hero" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(60,45,22,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(60,45,22,0.55) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />

      <div className="container flex-grow mb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          
          {/* Left Text Block */}
          <div className="animate-fade-in-up">
            {/* Made in India Badge & Tag */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <div className="industrial-badge">
                <span className="size-2 rounded-full bg-primary animate-ping" />
                Welcome To M.B. Finishing
              </div>
              
              {/* Premium Made in India Logo Graphic */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-stone-950/5 border border-stone-950/10 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-stone-900">
                <MadeInIndiaLogo size={18} />
                Made In India
              </div>
            </div>

            <div className="mb-6 max-w-5xl">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.12] tracking-tight text-stone-950 uppercase font-bold">
                High-Performance Metal Polishing Machines & Automatic Buffing Systems
              </h1>
            </div>

            {/* Writeup Change */}
            <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-stone-600 font-medium">
              As a trusted industrial polishing machine manufacturer, M.B. Finishing Technologies designs advanced automatic buffing machines and heavy-duty metal finishing machines. From pharmaceutical vessels and automotive components to cookware, our precision polishing and buffing machines deliver uniform surface finishing, high Ra control, and unmatched durability.
            </p>

            {/* Why Choose Us detailed bullets */}
            <div className="mt-8 space-y-4 text-xs sm:text-sm font-semibold text-stone-900">
              <div className="flex items-start gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary font-bold text-xs mt-0.5">✔</span>
                <p className="text-stone-700 font-medium leading-relaxed">
                  <strong className="text-stone-950 font-bold">Advanced Automation</strong> – High-speed automatic polishing machines engineered for repeatable Ra value and mirror finish.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary font-bold text-xs mt-0.5">✔</span>
                <p className="text-stone-700 font-medium leading-relaxed">
                  <strong className="text-stone-950 font-bold">Built for Heavy Industry</strong> – Reliable industrial buffing machines serving pharma, automotive, aerospace, and utensil sectors.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary font-bold text-xs mt-0.5">✔</span>
                <p className="text-stone-700 font-medium leading-relaxed">
                  <strong className="text-stone-950 font-bold">Custom Surface Finishing</strong> – Tailored metal finishing solutions built to strict international manufacturing standards.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary font-bold text-xs mt-0.5">✔</span>
                <p className="text-stone-700 font-medium leading-relaxed">
                  <strong className="text-stone-950 font-bold">Pan-India Support</strong> – Rapid service support and genuine machine parts across India.
                </p>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-stone-950 text-white hover:bg-primary hover:text-stone-950 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-95"
              >
                Request a Quote →
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white text-stone-800 hover:bg-stone-100 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all shadow-sm active:scale-95"
              >
                Explore Machines
              </Link>
            </div>
          </div>

          {/* Right Visual Container: Flashing Industry vs Application vs Product Slider */}
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2.4rem] bg-primary/12 blur-3xl pointer-events-none" />
            
            <div className="relative overflow-hidden">
              {/* Image Transition area */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-white shadow-[0_24px_60px_-24px_rgba(0,0,0,0.15)] border border-stone-200">
                {FLASHING_SLIDES.map((slide, idx) => (
                  <div
                    key={slide.title}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      idx === slideIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-contain pb-20 pt-6 px-6 opacity-95 saturate-[1.05]"
                    />
                    
                    <div className="absolute bottom-6 inset-x-0 z-20 flex justify-center px-4 text-white">
                      <h3 className="font-display text-xs sm:text-sm font-bold leading-tight text-white uppercase tracking-tight bg-stone-950/85 backdrop-blur-[3px] rounded-full px-5 py-2.5 text-center shadow-md">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center gap-1.5 mt-4">
                {FLASHING_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSlideIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === slideIndex ? "w-6 bg-primary" : "w-1.5 bg-stone-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Horizontal Transferred Value Cards (at the bottom of home page / hero) */}
      <div className="border-t border-black/5 bg-white/40 backdrop-blur-md py-12">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {HORIZONTAL_VALUES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="metal-card hover-lift flex gap-5 p-6 md:p-8 bg-white/90 border-black/5 shadow-soft"
                >
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl leading-tight text-stone-950">
                      {item.title}
                    </h3>
                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};
