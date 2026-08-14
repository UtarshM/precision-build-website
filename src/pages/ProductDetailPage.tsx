import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Contact } from "@/components/site/Contact";
import { 
  ArrowLeft, 
  BadgeCheck, 
  Settings, 
  ShoppingBag, 
  ArrowUpRight, 
  ChevronRight, 
  Home 
} from "lucide-react";
import { products } from "@/data/siteContent";

const CATEGORY_MAP: Record<string, string> = {
  tank: "Tank Polishing Solutions",
  sheet: "Sheet Polishing Solutions",
  utensil: "Utensil Polishing Solutions",
  pipe: "Pipe Polishing Solutions",
  custom: "Customised Solutions"
};

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  // Fallback if product does not exist
  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const categoryLabel = CATEGORY_MAP[product.category] || "Solutions";

  // Get up to 3 related products in the same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Dynamic Structured Data (JSON-LD) for SEO
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": `https://www.mbfinishtech.com${product.image}`,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "M.B. Finishing Technologies"
    },
    "category": categoryLabel,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "price": "Contact for pricing",
      "url": `https://www.mbfinishtech.com/products/${product.id}`,
      "seller": {
        "@type": "Organization",
        "name": "M.B. Finishing Technologies"
      }
    }
  };

  const PRODUCT_SEO: Record<string, { title: string; keywords: string; description: string }> = {
    "tpm4500-sdx-automatic-tank-polishing-machine": {
      title: "TPM4500-SDX Tank & Dish End Polishing Machine | M.B. Finishing",
      description: "Highly automated TPM4500-SDX Tank & Dish End Polishing Machine for heavy-duty storage tanks, vessels, and pharmaceutical reactor shell internal/external buffing.",
      keywords: "TPM4500-SDX, automatic tank polishing machine, heavy duty tank polishing machine, stainless steel tank polishing machine, internal tank polishing machine, external tank polishing machine, ID OD tank polishing machine, vessel polishing machine, chemical reactor polishing machine, storage tank polishing machine, tank buffing machine"
    },
    "tpm3000-sd-dished-end-polishing-machine": {
      title: "TPM3000-SD Dish End Polishing Machine | M.B. Finishing",
      description: "Automatic TPM3000-SD Dish End Polishing Machine featuring dual-axis head tracking for torispherical, elliptical, and flat tank/vessel head buffing.",
      keywords: "TPM3000-SD, tank head polishing machine, vessel head polishing machine, tank dish end polishing machine, torispherical dish end polishing machine, elliptical dish end polishing machine, flat dish end polishing machine, automatic dish end polishing machine, tank head buffing machine"
    },
    "tpm2500-sdx-tank-shell-polisher": {
      title: "TPM1500-SD Automatic Tank Polishing Machine | M.B. Finishing",
      description: "High-productivity TPM1500-SD Automatic Tank Polishing Machine for medium vessel shells, chemical tanks, and storage tanks ID/OD polishing.",
      keywords: "TPM1500-SD, medium tank polishing machine, stainless steel vessel polishing machine, chemical vessel polishing machine, automatic vessel polishing machine, internal tank polishing machine, external tank polishing machine, ID OD tank polishing machine"
    },
    "piop2000-automatic-duct-polisher": {
      title: "PIOP2000 Duct Polishing Machine | M.B. Finishing",
      description: "Compact PIOP2000 Duct Polishing Machine for internal/external finishing of small tanks, ducts, and vessels in pharma, dairy, and beverage industries.",
      keywords: "PIOP2000, duct polishing machine manufacturer, small tank polishing machine, small vessel polishing machine, internal duct polishing machine, external duct polishing machine, stainless steel duct polishing machine, pharma equipment polishing machine, dairy equipment polishing machine, beverage equipment polishing machine, mirror finish polishing machine"
    },
    "cg150b-single-head-round-pipe-polishing-machine": {
      title: "CG15OB Centerless Round Pipe Polishing Machine | M.B. Finishing",
      description: "High-speed CG15OB Centerless Round Pipe Polishing Machine. Continuous OD through-feed grinding and buffing for mirror finish round pipes and tubes.",
      keywords: "CG15OB, centerless pipe polishing machine, centreless pipe polishing machine, round tube polishing machine, round pipe polishing machine, tube polishing machine, stainless steel pipe polishing machine, automatic pipe polishing machine, continuous pipe polishing machine, OD pipe polishing machine, mirror finish pipe polishing machine"
    },
    "cg150w-double-head-pipe-polisher": {
      title: "CG15OW-2H 2-Head Centerless Pipe Polishing Machine | M.B. Finishing",
      description: "Dual-head CG15OW-2H Centerless Pipe Polishing Machine. Simultaneous grinding and polishing for stainless steel tubes, rods, and bars.",
      keywords: "CG15OW-2H, dual head pipe polishing machine, double head pipe polishing machine, centerless tube polishing machine, automatic tube polishing machine, stainless steel tube polishing machine, pipe grinding and polishing machine, two-stage pipe polishing machine, mirror finish tube polishing machine"
    },
    "sp1500b-heavy-duty-sheet-polisher": {
      title: "SP1500B Stainless Steel Sheet Polishing Machine | M.B. Finishing",
      description: "High-efficiency SP1500B Stainless Steel Sheet Polishing Machine. Wide belt sander for No.4 satin, hairline, and mirror finishing on metal plates.",
      keywords: "SP1500B, SS sheet polishing machine, automatic sheet polishing machine, wide belt sheet polishing machine, industrial sheet polishing machine, stainless steel sheet finishing machine, aluminium sheet polishing machine, brass sheet polishing machine, copper sheet polishing machine, No.4 satin finish machine, hairline finish machine"
    },
    "sp1200b-automatic-sheet-buffing-machine": {
      title: "SP1200 Heavy Duty Sheet Polishing Machine | M.B. Finishing",
      description: "Robust SP1200 Heavy Duty Sheet Polishing Machine. Automated wide belt system for consistent hairline and satin finishes on wide metal plates.",
      keywords: "SP1200, heavy duty sheet polishing machine, industrial sheet polishing machine, stainless steel sheet polishing machine, automatic sheet polishing machine, wide belt polishing machine, metal sheet finishing machine, SS sheet buffing machine, aluminium sheet finishing machine"
    },
    "sp600b-compact-sheet-polisher": {
      title: "SP600B Wet Sheet Polishing Machine | M.B. Finishing",
      description: "Enclosed SP600B Wet Sheet Polishing Machine. Dust-free wet belt grinding and polishing for stainless steel, copper, and aluminium sheets.",
      keywords: "SP600B, wet grinding polishing machine, wet polishing machine for stainless steel, enclosed sheet polishing machine, dust free polishing machine, stainless steel sheet finishing machine, wet belt polishing machine, wide belt wet polishing machine, metal sheet wet grinding machine"
    },
    "manual-belt-trolley-polishing-machine": {
      title: "TBP300-2H Trolley Type Polishing Machine | M.B. Finishing",
      description: "Double-head TBP300-2H Trolley Type Polishing Machine. Heavy-duty flat plate, section, and scale/rust grinding for carbon and stainless steel sheets.",
      keywords: "TBP300-2H, trolley polishing machine, trolley type polishing machine, flat plate polishing machine, flat sheet polishing machine, MS sheet polishing machine, SS sheet polishing machine, metal plate polishing machine, double head polishing machine, aluminium section polishing machine"
    },
    "sp300b-wet-sheet-polisher": {
      title: "SP300 Sheet Polishing Machine | M.B. Finishing",
      description: "Multi-head SP300 Sheet Polishing Machine. Specialized in No.4 satin, hairline, and No.8 mirror finish for high-volume stainless steel plate production.",
      keywords: "SP300, No.8 mirror finish machine, No.4 satin finish machine, hairline finish machine, stainless steel mirror polishing machine, aluminium sheet polishing machine, brass sheet polishing machine, inline sheet polishing machine, multi-head sheet polishing machine"
    },
    "vb150-vacuum-bed-sheet-polisher": {
      title: "VB150 Automatic Sheet Polishing Machine | M.B. Finishing",
      description: "Inline multi-head VB150 Automatic Sheet Polishing Machine with vacuum bed. Ensures precise flatness, hairline, and mirror polishing on thin metal sheets.",
      keywords: "VB150, inline sheet polishing machine, multi-head polishing machine, stainless steel sheet polishing, metal sheet finishing machine, No.4 finish polishing, hairline polishing machine, mirror finish polishing machine, industrial sheet buffing machine"
    },
    "automatic-utensil-buffing-machine": {
      title: "UPM-120B Automatic Utensil Polishing Machine | M.B. Finishing",
      description: "UPM-120B Automatic Utensil Polishing Machine. Automated high-efficiency surface polishing for stainless steel pots, pans, cookware, and hollowware.",
      keywords: "UPM-120B, stainless steel utensil polishing machine, cookware polishing machine, automatic cookware polishing machine, kitchenware polishing machine, utensil buffing machine, stainless steel pot polishing machine, stainless steel pan polishing machine, hollowware polishing machine, mirror polishing machine for utensils"
    }
  };

  const seo = PRODUCT_SEO[product.id] || {
    title: `${product.name} | Sizing & Specifications | M.B. Finishing`,
    description: product.description,
    keywords: `${product.name}, ${categoryLabel}, M.B. Finishing Technologies`
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`https://www.mbfinishtech.com/products/${product.id}`} />
        <meta name="keywords" content={seo.keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={`https://www.mbfinishtech.com/products/${product.id}`} />
        <meta property="og:image" content={`https://www.mbfinishtech.com${product.image}`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={`https://www.mbfinishtech.com${product.image}`} />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <SiteLayout>
        {/* Breadcrumbs Navigation */}
        <div className="bg-[#faf6ed] pt-28 pb-4 md:pt-36">
          <div className="container">
            <nav className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-widest text-stone-500">
              <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                <Home className="size-3" /> Home
              </Link>
              <ChevronRight className="size-3 text-stone-400" />
              <Link to="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <ChevronRight className="size-3 text-stone-400" />
              <Link to={`/products?category=${product.category}`} className="hover:text-primary transition-colors">
                {categoryLabel}
              </Link>
              <ChevronRight className="size-3 text-stone-400" />
              <span className="text-stone-900 truncate max-w-[200px] md:max-w-none">
                {product.name}
              </span>
            </nav>
          </div>
        </div>

        {/* Back link & main content grid */}
        <section className="pb-16 bg-[#faf6ed]">
          <div className="container">
            <div className="mb-8">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-stone-800 hover:bg-stone-50 transition-colors shadow-soft"
              >
                <ArrowLeft className="size-3.5" /> Back to Products
              </Link>
            </div>

            <div className="grid lg:grid-cols-[1fr_1fr] gap-8 md:gap-12 items-start">
              
              {/* Left Column - Visuals & Consumables */}
              <div className="space-y-6">
                <div className="rounded-[2rem] overflow-hidden aspect-[4/3] border border-black/5 shadow-soft bg-white p-6 md:p-10 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Consumables Card */}
                <div className="rounded-[2rem] bg-white p-6 md:p-8 border border-black/5 shadow-soft">
                  <h4 className="font-heading text-xs tracking-widest uppercase font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <ShoppingBag className="size-4 text-primary" /> Recommended Consumables:
                  </h4>
                  <ul className="space-y-3 text-xs text-stone-600 font-semibold">
                    {product.consumables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <BadgeCheck className="size-4 text-primary shrink-0" />
                        <span className="text-stone-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Application Link Card */}
                <div className="rounded-[2rem] border border-black/5 p-6 md:p-8 bg-white shadow-soft flex justify-between items-center hover:border-primary/20 transition-colors">
                  <div>
                    <h5 className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest">
                      See In Real Operation
                    </h5>
                    <h4 className="font-display text-lg text-stone-900 font-semibold mt-0.5">
                      Industry-wise Application
                    </h4>
                  </div>
                  <Link
                    to={`/application?sector=${product.applicationLink}`}
                    className="inline-flex size-11 rounded-full bg-stone-950 text-white hover:bg-primary hover:text-stone-950 items-center justify-center transition-colors shadow-md"
                  >
                    <ArrowUpRight className="size-4.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column - Spec table and details */}
              <div className="space-y-6 bg-white rounded-[2rem] border border-black/5 p-6 md:p-10 shadow-soft">
                <div>
                  <span className="text-[10px] uppercase font-bold text-primary tracking-[0.24em] block">
                    {product.usp}
                  </span>
                  <h1 className="font-display text-3xl md:text-4xl text-stone-900 uppercase font-black mt-2 leading-[1.1]">
                    {product.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-stone-500 mt-4 leading-relaxed font-medium">
                    {product.description}
                  </p>
                </div>

                {/* Technical Specifications Table */}
                <div className="pt-2">
                  <h4 className="font-heading text-xs tracking-widest uppercase font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <Settings className="size-4 text-primary animate-spin-slow" /> Technical Specifications:
                  </h4>
                  <div className="border border-black/5 rounded-2xl overflow-hidden shadow-soft">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-stone-50 border-b border-black/5 font-bold text-stone-800 uppercase tracking-wider text-[9px]">
                          <th className="p-4">Parameter Name</th>
                          <th className="p-4">Specification Target</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(product.specs).map(([key, value]) => (
                          <tr key={key} className="border-b border-black/5 last:border-b-0 hover:bg-[#faf6ed]/40 transition-colors">
                            <td className="p-4 font-semibold text-stone-900">{key}</td>
                            <td className="p-4 text-stone-600 font-medium">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#inquiry-form"
                    className="block w-full rounded-full bg-primary hover:bg-stone-950 hover:text-white text-stone-950 text-center font-heading text-[10px] font-bold uppercase tracking-widest py-4 transition-colors shadow-md active:scale-[0.99]"
                  >
                    Request Fast Machine Quote
                  </a>
                </div>
              </div>

            </div>

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
              <div className="mt-20 pt-16 border-t border-black/5">
                <h3 className="font-display text-2xl text-stone-900 uppercase font-black mb-8 text-center md:text-left">
                  Related Machinery Solutions
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedProducts.map((p) => (
                    <article 
                      key={p.id}
                      className="group/item hover-lift overflow-hidden rounded-[2rem] border border-black/5 bg-white p-6 shadow-soft flex flex-col justify-between transition-all duration-300"
                    >
                      <div>
                        <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-black/5 shadow-soft bg-white p-4 mb-4 flex items-center justify-center">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-[9px] uppercase font-bold text-primary tracking-[0.2em] block mb-1">
                          {p.usp}
                        </span>
                        <h4 className="font-display text-base font-bold text-stone-900 leading-snug group-hover/item:text-primary transition-colors">
                          <Link to={`/products/${p.id}`}>
                            {p.name}
                          </Link>
                        </h4>
                      </div>
                      <div className="pt-4 mt-4 border-t border-black/5">
                        <Link 
                          to={`/products/${p.id}`}
                          className="inline-flex w-full items-center justify-center rounded-full bg-stone-950 text-white hover:bg-primary hover:text-stone-950 py-2.5 text-[9px] font-bold uppercase tracking-widest transition-colors"
                        >
                          View Specifications
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* Direct Product Inquiry Form */}
        <div id="inquiry-form" className="bg-white border-t border-black/5">
          <div className="container pt-16 -mb-12 text-center">
            <div className="industrial-badge mx-auto mb-4">Request Quotes</div>
            <h2 className="font-display text-4xl leading-none tracking-tight text-stone-950 uppercase font-black">
              Get Quotation for {product.name}
            </h2>
            <p className="mt-4 text-sm text-stone-500 max-w-xl mx-auto font-medium">
              Submit your production details and finish standard requirements below. Our technical sales engineers will send a custom proposal.
            </p>
          </div>
          <Contact />
        </div>
      </SiteLayout>
    </>
  );
};

export default ProductDetailPage;
