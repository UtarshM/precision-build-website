import { CheckCircle2, Shield, Sparkles, Zap } from "lucide-react";
import { companyStats } from "@/data/siteContent";

const REASONS = [
  {
    icon: Sparkles,
    title: "High-Quality Finish",
    text: "Mirror-like surface quality delivered with controlled buffing and polishing performance.",
  },
  {
    icon: Shield,
    title: "Robust & Durable",
    text: "Built with industrial-grade materials for demanding use and long service life.",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    text: "Optimized motor power and speed control for confident, production-ready throughput.",
  },
  {
    icon: CheckCircle2,
    title: "Customizable Solutions",
    text: "Tailored machine configurations and attachments for specialized polishing requirements.",
  },
];

export const WhyChoose = () => {
  return (
    <section className="section-shell bg-white">
      <div className="container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="industrial-badge mx-auto mb-6">Why Choose Us</div>
          <h2 className="font-display text-5xl leading-[0.92] tracking-tight text-stone-950 md:text-6xl">
            Built for performance, trusted for more exacting finishing results.
          </h2>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`rounded-[1.8rem] border p-8 md:p-10 ${
                index === 0
                  ? "bg-stone-950 text-white border-primary/20"
                  : "bg-[#f7f2e8] border-black/5"
              }`}
            >
              <div
                className={`font-display text-6xl leading-none ${
                  index === 0 ? "text-primary" : "text-stone-950"
                }`}
              >
                {stat.value}
              </div>
              <div
                className={`mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] ${
                  index === 0 ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="metal-card hover-lift p-6"
            >
              <reason.icon className="size-8 text-primary" />
              <h3 className="mt-6 font-display text-3xl leading-none text-stone-950">
                {reason.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
