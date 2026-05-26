import { Disc, Car, Gauge, Database, Clock, Plane, Utensils, Layers } from "lucide-react";

const INDUSTRIES = [
  {
    icon: Disc,
    title: "Car / Truck Wheels",
    desc: "Mirror buffing systems for alloy wheels and rims."
  },
  {
    icon: Car,
    title: "Automotive Industry",
    desc: "High-volume finishing of engine components, shafts, and trim."
  },
  {
    icon: Gauge,
    title: "Calibrated",
    desc: "Exact micron finishing for gauges, valves, and measuring gear."
  },
  {
    icon: Database,
    title: "Bottoms / Tanks",
    desc: "Internal & external polishing of sanitary pharmaceutical tanks & reactors."
  },
  {
    icon: Clock,
    title: "Watch Industry",
    desc: "Micro-buffing solutions for high-end luxury watch cases and straps."
  },
  {
    icon: Plane,
    title: "Aeronautics",
    desc: "Super-finishing of turbine blades, aero-structures and landing gear."
  },
  {
    icon: Utensils,
    title: "Horeca",
    desc: "Hygienic mirror finishes for commercial kitchenware, hollowware, and utensils."
  },
  {
    icon: Layers,
    title: "Sheet Metal Working",
    desc: "Satin, hairline and mirror finishing of large metal sheets."
  }
];

export const IndustriesServed = () => {
  return (
    <section className="section-shell bg-[#faf6ed]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="industrial-badge mx-auto mb-6">Industries We Supply</div>
          <h2 className="font-display text-5xl leading-[0.92] tracking-tight text-stone-950 md:text-6xl">
            Precision engineering solutions across critical sectors.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            M.B. Finishing Technologies manufactures high-capacity automatic machinery configured to meet the stringent surface parameters of diverse global industries.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.title}
              className="premium-panel hover-lift bg-white border-black/5 p-8 flex flex-col items-center text-center shadow-soft"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-amber-500/10 text-primary mb-6 transition-transform duration-500 hover:scale-110">
                <industry.icon className="size-7" />
              </div>
              <h3 className="font-display text-2xl text-stone-950 uppercase font-semibold">
                {industry.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {industry.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
