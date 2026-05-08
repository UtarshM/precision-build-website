import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/siteContent";

type ServicesProps = {
  limit?: number;
  showViewAll?: boolean;
};

export const Services = ({ limit, showViewAll = false }: ServicesProps) => {
  const visibleProducts =
    typeof limit === "number" ? products.slice(0, limit) : products;

  return (
    <section className="section-shell bg-[#f7f2e8]">
      <div className="absolute -right-28 top-16 size-[28rem] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container">
        <div className="mb-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div className="max-w-4xl">
            <div className="industrial-badge mb-6">Products</div>
            <h2 className="font-display text-5xl leading-[0.92] tracking-tight text-stone-950 md:text-6xl">
              A machine portfolio presented with more clarity, confidence and
              visual depth.
            </h2>
          </div>
          <div className="rounded-[1.75rem] border border-black/5 bg-white/75 p-6 backdrop-blur">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Standard and special-purpose buffing and polishing machines for
              cookware, pipe, coil, rod, sheet and high-demand industrial
              finishing environments.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visibleProducts.map((product, index) => (
            <article
              key={product.name}
              className="group hover-lift overflow-hidden rounded-[1.9rem] border border-black/6 bg-white shadow-[0_24px_80px_-46px_rgba(20,20,20,0.4)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,11,8,0)_20%,rgba(15,11,8,0.22)_100%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-stone-950/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                    {product.category}
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
                </div>
                <h3 className="font-display text-3xl leading-none text-stone-950">
                  {product.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-8 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white"
            >
              View All Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
