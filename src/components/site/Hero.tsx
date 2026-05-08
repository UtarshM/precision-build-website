import { useState, useEffect } from "react";
import { Award, Cog, ShieldCheck } from "lucide-react";
import heroFallback from "@/assets/hero-fallback.jpg";
import { MadeInIndiaLogo } from "./MadeInIndiaLogo";

const FLASHING_SLIDES = [
  {
    type: "INDUSTRY",
    title: "Pharmaceutical, Cookware & Automotive",
    desc: "Serving heavy fabrication industries, aerospace, vessel manufacturers, and household appliance sectors.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600"
  },
  {
    type: "APPLICATION",
    title: "Sanitary ID/OD Pipe & Tank Polishing",
    desc: "Achieving microscopic roughness average parameters (Ra < 0.2) with uniform automatic buffing paths.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"
  },
  {
    type: "PRODUCT",
    title: "Custom SPMs & Heavy-Duty Machinery",
    desc: "Precision engineering automated Special Purpose Machines (SPMs) built for extreme durability.",
    image: heroFallback
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
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-amber-700">
                <MadeInIndiaLogo size={18} />
                Made In India
              </div>
            </div>

            <div className="mb-6 max-w-4xl">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight text-stone-950 uppercase font-bold">
                PREMIUM BUFFING AND
                <span className="block text-primary mt-1">POLISHING MACHINES</span>
              </h1>
            </div>

            {/* Writeup Change */}
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Enhance surface quality with advanced buffing and polishing machines
              built for efficiency, durability and flawless industrial finishing across
              cookware, sheets, pipes, coils, rods and custom applications.
            </p>
          </div>

          {/* Right Visual Container: Flashing Industry vs Application vs Product Slider */}
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[2.4rem] bg-primary/12 blur-3xl pointer-events-none" />
            
            <div className="premium-panel relative overflow-hidden p-4 md:p-5 bg-white border-black/5">
              {/* Image Transition area */}
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-stone-950">
                {FLASHING_SLIDES.map((slide, idx) => (
                  <div
                    key={slide.type}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      idx === slideIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover opacity-60 saturate-[0.85]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                    
                    <div className="absolute left-6 top-6 z-20">
                      <span className="rounded-full bg-primary/90 text-stone-950 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] backdrop-blur-sm">
                        {slide.type}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                      <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight text-primary">
                        {slide.title}
                      </h3>
                      <p className="text-white/80 text-xs mt-2 leading-relaxed max-w-md hidden sm:block">
                        {slide.desc}
                      </p>
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
                      idx === slideIndex ? "w-6 bg-primary" : "w-1.5 bg-stone-300"
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
