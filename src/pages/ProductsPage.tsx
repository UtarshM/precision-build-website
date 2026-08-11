import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageBanner } from "@/components/site/PageBanner";
import { Contact } from "@/components/site/Contact";
import { Settings, Eye, FileText, Download } from "lucide-react";
import { products, type Product } from "@/data/siteContent";

const CATEGORIES = [
  { id: "all", label: "All Solutions" },
  { id: "tank", label: "Tank Polishing Solutions" },
  { id: "sheet", label: "Sheet Polishing Solutions" },
  { id: "utensil", label: "Utensil Polishing Solutions" },
  { id: "pipe", label: "Pipe Polishing Solutions" },
  { id: "custom", label: "Customised Solutions" }
];

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";



  // Sync state if category parameter is updated
  const handleCategoryChange = (category: string) => {
    setSearchParams({ category });
  };

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Industrial Buffing & Polishing Machines Catalog | M.B. Finishing</title>
        <meta
          name="description"
          content="Explore our precision automatic buffing & polishing machines. We offer custom polishing solutions for tanks, vessels, dished ends, metal sheets, and round pipes."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/products" />
        <meta name="keywords" content="polishing machine catalog, sheet grinder, tank polishing machinery, automatic buffing systems, custom industrial polishers" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Industrial Buffing & Polishing Machines Catalog | M.B. Finishing" />
        <meta property="og:description" content="Explore our advanced machine catalog: tank, vessel, sheet, utensil, and pipe buffing equipment." />
        <meta property="og:url" content="https://www.mbfinishtech.com/products" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industrial Buffing & Polishing Machines Catalog | M.B. Finishing" />
        <meta name="twitter:description" content="Explore our range of industrial sheet, pipe, tank and custom buffing machines." />
        <meta name="twitter:image" content="https://www.mbfinishtech.com/favicon.png" />
      </Helmet>

      <SiteLayout>
        {/* Categories Tab Selector */}
        <section className="pt-32 md:pt-40 pb-12 bg-[#faf6ed]">
          <div className="container">
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-2.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-stone-950 text-white shadow-glow"
                      : "bg-white text-stone-600 border border-black/5 hover:bg-stone-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Category Description Banner */}
            {activeCategory !== "all" && (
              <div className="mt-8 mx-auto max-w-3xl text-center animate-scale-in">
                <div className="inline-block bg-white border border-stone-200 rounded-2xl px-6 py-4 shadow-soft">
                  <p className="text-stone-850 font-body text-xs sm:text-sm font-semibold tracking-wide leading-relaxed">
                    {activeCategory === "sheet" && "Sheet Polishing segment varies as per width from 150mm to 1500mm (VB150, SP300, SP450, SP600, SP1200, SP1500)"}
                    {activeCategory === "tank" && "Heavy-duty automatic dual-axis shell and dished end polishing solutions for vessel & tank manufacturing."}
                    {activeCategory === "pipe" && "High-speed centerless round pipe and multi-head square tube polishing systems."}
                    {activeCategory === "utensil" && "Automated mirror and satin buffing machines for pots, pans, and kitchenware."}
                    {activeCategory === "custom" && "Special purpose machines custom-engineered for profiles, flats, and complex workpiece geometries."}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Catalog Download Section */}
        <section className="bg-stone-50 border-y border-stone-200/60 py-10">
          <div className="container max-w-4xl">
            <div className="bg-white rounded-3xl border border-stone-200/80 p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
                  <FileText className="size-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-display text-2xl font-bold text-stone-950">
                    Product Catalogue
                  </h3>
                  <p className="mt-1 text-sm text-stone-500 font-medium">
                    Download our official brochure for detailed specifications and sizing options.
                  </p>
                </div>
              </div>
              
              <div className="flex shrink-0 w-full md:w-auto justify-center">
                <a
                  href="/mb-catalogue.pdf"
                  download="MB_Finishing_Technologies_Catalog.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-stone-950 text-white hover:bg-stone-850 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  <Download className="size-4" />
                  Download Catalogue
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group hover-lift overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-soft flex flex-col justify-between"
                >
                  <div>
                    {/* Visual area */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-white p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,11,8,0)_30%,rgba(15,11,8,0.03)_100%)] pointer-events-none" />
                      
                      {/* Category tag */}
                      <div className="absolute left-5 top-5 rounded-lg border border-white/10 bg-stone-950/75 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                        {product.category} solutions
                      </div>
                    </div>

                    {/* Text area */}
                    <div className="p-6">
                      <div className="text-[10px] uppercase font-bold text-primary tracking-[0.22em] mb-2">
                        {product.usp}
                      </div>
                      <h3 className="font-display text-2xl text-stone-950">
                        {product.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Button Area */}
                  <div className="p-6 pt-0 border-t border-black/5 mt-4 flex items-center justify-between">
                    <Link
                      to={`/products/${product.id}`}
                      className="inline-flex items-center gap-2 rounded-full bg-stone-950 hover:bg-primary hover:text-stone-950 text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-[0.98]"
                    >
                      <Eye className="size-3.5" /> View Specifications
                    </Link>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest flex items-center gap-1">
                      Specs <Settings className="size-3.5 animate-spin-slow" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>



        {/* Inquiries */}
        <div id="inquiry-form">
          <Contact />
        </div>
      </SiteLayout>
    </>
  );
};

export default ProductsPage;
