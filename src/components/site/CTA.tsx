import { ArrowRight, ShieldCheck, Clock, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="section-shell overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,162,63,0.12),transparent_34%)]" />

      <div className="container relative">
        <div className="dark-panel mx-auto max-w-5xl overflow-hidden p-10 text-center md:p-16">
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          {/* Badge */}
          <div className="industrial-badge mx-auto mb-8 border-white/15 bg-white/10 text-white/90">
            GET IN TOUCH
          </div>

          {/* H2 Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white uppercase font-bold max-w-4xl mx-auto">
            Upgrade Your Production Line with High-Precision Finishing Machines.
          </h2>

          {/* Sub-text Paragraph */}
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/80 font-medium">
            Looking for robust metal polishing machines or custom automatic buffing systems? Share your technical specifications and production targets with our engineering team for an exact machine layout and direct factory quote.
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-stone-950 shadow-glow"
            >
              Request a Custom Quotation →
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Micro-Trust Line */}
          <p className="mt-8 text-xs sm:text-sm text-stone-400 font-semibold tracking-wide flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>Response within 24 business hours</span>
            <span className="text-primary">•</span>
            <span>Custom tooling support</span>
            <span className="text-primary">•</span>
            <span>Factory-direct warranty</span>
          </p>
        </div>
      </div>
    </section>
  );
};
