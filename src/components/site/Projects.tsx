import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { galleryItems } from "@/data/siteContent";

export const Projects = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section-shell bg-[#f8f4ec]">
      <div className="container">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="industrial-badge mb-6">Gallery</div>
            <h2 className="font-display text-5xl leading-[0.92] tracking-tight text-stone-950 md:text-6xl">
              Product and application imagery with a stronger luxury-editorial
              feel.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            A visual gallery of machine categories, production setups and
            polishing applications arranged to feel more curated and premium.
          </p>
        </div>

        <div className="grid auto-rows-[250px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => setActive(index)}
              className={`group relative overflow-hidden rounded-[1.9rem] text-left shadow-[0_24px_80px_-46px_rgba(20,20,20,0.42)] ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,11,8,0.04)_10%,rgba(15,11,8,0.84)_100%)]" />
              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
                {item.category}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-3xl leading-none text-white md:text-[2rem]">
                    {item.name}
                  </h3>
                  <ArrowUpRight className="size-5 text-white transition-all group-hover:rotate-45 group-hover:text-primary" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-6 top-6 flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-primary hover:text-primary-foreground"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X />
          </button>
          <div
            className="w-full max-w-5xl animate-scale-in"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={galleryItems[active].image}
              alt={galleryItems[active].name}
              className="max-h-[80vh] w-full rounded-[1.8rem] object-contain"
            />
            <div className="mt-5 text-center">
              <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                {galleryItems[active].category}
              </div>
              <h3 className="mt-2 font-display text-4xl text-white">
                {galleryItems[active].name}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
