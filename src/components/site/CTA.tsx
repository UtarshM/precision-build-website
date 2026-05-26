import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="section-shell overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,162,63,0.12),transparent_34%)]" />

      <div className="container relative">
        <div className="dark-panel mx-auto max-w-5xl overflow-hidden p-10 text-center md:p-16">
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="industrial-badge mx-auto mb-8 border-white/15 bg-white/10 text-white/76">
            Careers
          </div>
          <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-white md:text-7xl">
            Build your future with a team that treats engineering as craft.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            We’re always interested in hearing from skilled engineers,
            technicians, machine builders and production professionals who care
            about precision.
          </p>
          <Link
            to="/career"
            className="group mt-12 inline-flex items-center gap-4 rounded-full bg-primary px-10 py-5 text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-stone-950"
          >
            Explore Careers
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
