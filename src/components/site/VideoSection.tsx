import { useState } from "react";
import { Play } from "lucide-react";
import heroFallback from "@/assets/hero-fallback.jpg";

const VIDEO_TAGS = ["Demonstration", "Industrial", "Customers"];

export const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="industrial-badge mb-6">Our Videos</div>
            <h2 className="font-heading text-4xl md:text-6xl uppercase tracking-tight leading-[0.95] text-balance text-stone-950">
              Watch our machines in <span className="text-primary">action</span>
            </h2>
          </div>
          <p className="md:max-w-md text-muted-foreground">
            Product demonstrations, industrial process footage and customer
            application highlights.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          {VIDEO_TAGS.map((tag) => (
            <div
              key={tag}
              className="px-4 py-2 rounded-full border border-primary/20 bg-[#fbf7ef] text-xs font-heading uppercase tracking-[0.16em] text-primary"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-primary/10 bg-[#fbf7ef] shadow-[0_24px_70px_-40px_rgba(20,20,20,0.32)] group">
          {playing ? (
            <video autoPlay controls className="w-full h-full object-cover">
              <source
                src="https://videos.pexels.com/video-files/8961590/8961590-uhd_2560_1440_25fps.mp4"
                type="video/mp4"
              />
            </video>
          ) : (
            <>
              <img
                src={heroFallback}
                alt="Industrial polishing machine demonstration"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent" />
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play video"
              >
                <span className="size-20 md:size-28 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_18px_50px_-28px_rgba(20,20,20,0.4)]">
                  <Play className="size-8 md:size-10 text-primary fill-primary ml-1" />
                </span>
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] font-heading uppercase tracking-widest text-primary mb-1">
                  Featured Demonstration
                </div>
                <h3 className="font-heading text-xl md:text-2xl uppercase text-white">
                  Industrial Buffing & Polishing Machine Walkthrough
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
