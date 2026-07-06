import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageBanner } from "@/components/site/PageBanner";
import { Contact } from "@/components/site/Contact";
import { Info, BadgeCheck, Settings, ShoppingBag, Eye, X, ArrowUpRight, FileText, Download } from "lucide-react";
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

  // Modal State for Individual Product Specifications
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Auto-open product modal if ID is in the URL query params
  useEffect(() => {
    const productId = searchParams.get("id");
    if (productId) {
      const prod = products.find((p) => p.id === productId);
      if (prod) {
        setSelectedProduct(prod);
      }
    } else {
      setSelectedProduct(null);
    }
  }, [searchParams]);

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
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="inline-flex items-center gap-2 rounded-full bg-stone-950 hover:bg-primary hover:text-stone-950 text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-colors"
                    >
                      <Eye className="size-3.5" /> View Specifications
                    </button>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest flex items-center gap-1">
                      Specs <Settings className="size-3.5 animate-spin-slow" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Specification Modal (Click for Individual Detail Page) */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-black/10 bg-white p-6 md:p-10 shadow-2xl animate-scale-in">
              
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  if (searchParams.has("id")) {
                    const newParams = new URLSearchParams(searchParams);
                    newParams.delete("id");
                    setSearchParams(newParams);
                  }
                }}
                className="absolute right-5 top-5 p-2 rounded-full border border-black/5 bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                aria-label="Close details"
              >
                <X className="size-5" />
              </button>

              <div className="grid lg:grid-cols-[1fr_1fr] gap-8 md:gap-10 items-start mt-4">
                
                {/* Left Area (Product Visual, Consumables & Interlinks) */}
                <div className="space-y-6">
                  <div className="rounded-[2rem] overflow-hidden aspect-[4/3] border border-black/5 shadow-soft bg-white p-6">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Consumables (Slide 3 spec) */}
                  <div className="rounded-[1.5rem] bg-[#faf6ed] p-5 border border-primary/10">
                    <h4 className="font-heading text-xs tracking-widest uppercase font-bold text-stone-900 mb-3 flex items-center gap-2">
                      <ShoppingBag className="size-4 text-primary" /> Recommended Consumables:
                    </h4>
                    <ul className="space-y-2 text-xs text-muted-foreground font-semibold">
                      {selectedProduct.consumables.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <BadgeCheck className="size-4 text-primary shrink-0" />
                          <span className="text-stone-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interlinked with Application Page (Slide 3 spec) */}
                  <div className="rounded-[1.5rem] border border-black/5 p-5 bg-stone-50 flex justify-between items-center">
                    <div>
                      <h5 className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest">
                        See In Real Operation
                      </h5>
                      <h4 className="font-display text-lg text-stone-900 font-semibold mt-0.5">
                        Industry-wise Application
                      </h4>
                    </div>
                    <Link
                      to={`/application?sector=${selectedProduct.applicationLink}`}
                      className="inline-flex size-10 rounded-full bg-stone-900 text-white hover:bg-primary hover:text-stone-950 items-center justify-center transition-colors"
                    >
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Area (Specs details) */}
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-primary tracking-[0.24em]">
                      {selectedProduct.usp}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl text-stone-900 uppercase font-bold mt-1">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mt-2.5 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Technical Specifications Table (Slide 3 spec) */}
                  <div>
                    <h4 className="font-heading text-xs tracking-widest uppercase font-bold text-stone-900 mb-3 flex items-center gap-2">
                      <Settings className="size-4 text-primary animate-spin-slow" /> Technical Specifications:
                    </h4>
                    <div className="border border-black/5 rounded-xl overflow-hidden shadow-soft">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-stone-50 border-b border-black/5 font-semibold text-stone-700">
                            <th className="p-3">Parameter Name</th>
                            <th className="p-3">Specification Target</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(selectedProduct.specs).map(([key, value]) => (
                            <tr key={key} className="border-b border-black/5 last:border-b-0 hover:bg-[#faf6ed]/40">
                              <td className="p-3 font-semibold text-stone-900">{key}</td>
                              <td className="p-3 text-stone-600">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="#inquiry-form"
                      onClick={() => setSelectedProduct(null)}
                      className="flex-1 rounded-full bg-primary hover:bg-stone-950 hover:text-white text-stone-950 text-center font-heading text-[10px] font-bold uppercase tracking-widest py-3.5 transition-colors"
                    >
                      Request Fast Machine Quote
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Inquiries */}
        <div id="inquiry-form">
          <Contact />
        </div>
      </SiteLayout>
    </>
  );
};

export default ProductsPage;
