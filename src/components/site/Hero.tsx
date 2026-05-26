import { useState, useEffect } from "react";
import { Award, Cog, ShieldCheck } from "lucide-react";
import tpm4500TankPolisher from "@/assets/tpm4500-tank-polisher.png";
import sp1200bSheetPolisher from "@/assets/sp1200b-sheet-polisher.jpg";
import cg150DoubleHead from "@/assets/cg150-double-head.jpg";

const FLASHING_SLIDES = [
  {
    type: "VESSEL & TANK",
    title: "TPM-4500SD Tank Polishing Machine",
    desc: "1st company to successfully develop Tank polishing in India. Automatic dual-axis shell and dished end polishing.",
    image: tpm4500TankPolisher
  },
  {
    type: "SHEET FINISHING",
    title: "SP1200-3H Sheet Polishing Machine",
    desc: "Premium 3-station inline gantry belt-grinder designed to produce flawless satin, hairline, and mirror finishes.",
    image: sp1200bSheetPolisher
  },
  {
    type: "TUBE & PIPE",
    title: "CG-150B-L1 Centerless Polishing Machine",
    desc: "Simultaneous dual-stage grinding and polishing for rapid, mirror-grade round pipes and bars.",
    image: cg150DoubleHead
  }
];

const HORIZONTAL_VALUES = [
  {
    title: "High-Precision Buffing Machines",
    icon: Cog,
    text: "Engineered for high-quality surface finishing across demanding industrial production lines."
  },
  {
    title: "Advanced Polishing Solutions",
    icon: Award,
    text: "Efficient and cost-effective machine solutions tailored for standard and special-purpose requirements."
  },
  {
    title: "Certified Manufacturing Quality",
    icon: ShieldCheck,
    text: "Built under an ISO 9001:2015 certified system to improve durability, consistency and aesthetics."
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
                Welcome To MB Finishing
              </div>
              
              {/* Premium Made in India Logo Graphic */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-stone-950/5 border border-stone-950/10 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-stone-900">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Make_In_India.svg"
                  className="h-4.5 w-auto object-contain shrink-0"
                  alt="Make in India Logo"
                />
                Made In India
              </div>
            </div>

            <div className="mb-6 max-w-5xl">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight text-stone-950 uppercase font-bold">
                Delivering world-class
                <span className="block text-primary mt-2">buffing & polishing solutions</span>
                <span className="block text-stone-700 text-3xl sm:text-4xl mt-3 tracking-normal normal-case font-semibold">
                  for industries that demand perfection.
                </span>
              </h1>
            </div>

            {/* Writeup Change */}
            <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-stone-600 font-medium">
              We specialize in precision buffing and polishing solutions designed to enhance durability, aesthetics, and performance. From pharmaceutical tanks and automotive components to high-end metal finishes, our expertise ensures every surface reflects excellence.
            </p>

            {/* Why Choose Us detailed bullets */}
            <div className="mt-8 space-y-4 text-xs sm:text-sm font-semibold text-stone-900">
              <div className="flex items-start gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary font-bold text-xs mt-0.5">✔</span>
                <p className="text-stone-700 font-medium leading-relaxed">
                  <strong className="text-stone-950 font-bold">Cutting-Edge Technology</strong> – Advanced machines and polishing systems for consistent, flawless results to achieve desired finish & Ra value.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary font-bold text-xs mt-0.5">✔</span>
                <p className="text-stone-700 font-medium leading-relaxed">
                  <strong className="text-stone-950 font-bold">Industry Expertise</strong> – Experience serving pharma, automotive, Aerospace, Utensil and other manufacturing sectors.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary font-bold text-xs mt-0.5">✔</span>
                <p className="text-stone-700 font-medium leading-relaxed">
                  <strong className="text-stone-950 font-bold">Customized Solutions</strong> – Tailored processes to meet your specifications and compliance standards.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/25 text-primary font-bold text-xs mt-0.5">✔</span>
                <p className="text-stone-700 font-medium leading-relaxed">
                  <strong className="text-stone-950 font-bold">Excellent customer service</strong> – Dedicated team for after sales service covering pan India.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Container: Flashing Industry vs Application vs Product Slider */}
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2.4rem] bg-primary/12 blur-3xl pointer-events-none" />
            
            <div className="relative overflow-hidden">
              {/* Image Transition area */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-stone-950 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)] border border-black/5">
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
                      className="w-full h-full object-cover opacity-70 saturate-[0.9]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                      <h3 className="font-display text-2xl md:text-3xl font-extrabold leading-tight text-white uppercase tracking-tight">
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
