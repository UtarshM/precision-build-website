import { clients } from "@/data/siteContent";

export const Testimonials = () => {
  return (
    <section className="section-shell bg-[#f5efe3]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="industrial-badge mx-auto mb-6">
            Our Valuable Clients
          </div>
          <h2 className="font-display text-5xl leading-[0.92] tracking-tight text-stone-950 md:text-6xl">
            Trusted by industries that value consistent finish quality.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            Our machines support production environments where surface quality,
            durability and process efficiency genuinely matter.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="metal-card hover-lift p-6"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                Client {String(index + 1).padStart(2, "0")}
              </div>
              <div className="gold-line my-4" />
              <div className="font-display text-3xl leading-none text-stone-950">
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
