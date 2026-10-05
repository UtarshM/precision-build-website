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
      title: "TPM4500-SDX Automatic Tank Polishing Machine | MB Finish",
      description: "Polish stainless steel tanks and dished ends with the TPM4500-SDX. Delivers Ra 0.20 µm mirror finishes on pharmaceutical and chemical vessels up to 4500 mm dia.",
      keywords: "TPM4500-SDX, automatic tank polishing machine, heavy duty tank polishing machine, stainless steel tank polishing machine, internal tank polishing machine, external tank polishing machine, ID OD tank polishing machine, vessel polishing machine, chemical reactor polishing machine, storage tank polishing machine, tank buffing machine"
    },
    "tpm3000-sd-dished-end-polishing-machine": {
      title: "TPM3000-SD Dished End Polishing Machine | MB Finish Tech",
      description: "Automate dish end and torispherical head polishing with the TPM3000-SD. Built for dished ends up to 3000 mm diameter across dairy and pharma storage vessels.",
      keywords: "TPM3000-SD, tank head polishing machine, vessel head polishing machine, tank dish end polishing machine, torispherical dish end polishing machine, elliptical dish end polishing machine, flat dish end polishing machine, automatic dish end polishing machine, tank head buffing machine"
    },
    "tpm2500-sdx-tank-shell-polisher": {
      title: "TPM2500-SDX Tank Shell Polishing Machine | MB Finish Tech",
      description: "Achieve mirror finishes on tank shells and cylindrical vessels up to 2500 mm diameter with the TPM2500-SDX automatic Column and Boom polishing machine.",
      keywords: "TPM2500-SDX, medium tank polishing machine, stainless steel vessel polishing machine, chemical vessel polishing machine, automatic vessel polishing machine, internal tank polishing machine, external tank polishing machine, ID OD tank polishing machine"
    },
    "piop2000-automatic-duct-polisher": {
      title: "PIOP2000 Automatic Duct Polishing Machine | MB Tech India",
      description: "Polish inner and outer duct surfaces with the PIOP2000 duct polishing machine. Built for HVAC, dairy, and sanitary duct fabricators needing clean Ra finishes.",
      keywords: "PIOP2000, duct polishing machine manufacturer, small tank polishing machine, small vessel polishing machine, internal duct polishing machine, external duct polishing machine, stainless steel duct polishing machine, pharma equipment polishing machine, dairy equipment polishing machine, beverage equipment polishing machine, mirror finish polishing machine"
    },
    "cg150b-single-head-round-pipe-polishing-machine": {
      title: "CG150B Single Head Round Pipe Polishing Machine | MB Tech",
      description: "Grind and buff stainless steel round pipes with the CG150B single-head centerless polisher. Handles pipe OD from 10 mm to 150 mm for clean industrial finishes.",
      keywords: "CG150B, centerless pipe polishing machine, centreless pipe polishing machine, round tube polishing machine, round pipe polishing machine, tube polishing machine, stainless steel pipe polishing machine, automatic pipe polishing machine, continuous pipe polishing machine, OD pipe polishing machine, mirror finish pipe polishing machine"
    },
    "cg150w-double-head-pipe-polisher": {
      title: "CG150W Double Head Pipe Polishing Machine | MB Finish",
      description: "Cut cycle times with two-stage grinding and buffing in one pass. The CG150W double-head pipe polishing machine delivers satin to mirror finishes on SS pipes.",
      keywords: "CG150W, dual head pipe polishing machine, double head pipe polishing machine, centerless tube polishing machine, automatic tube polishing machine, stainless steel tube polishing machine, pipe grinding and polishing machine, two-stage pipe polishing machine, mirror finish tube polishing machine"
    },
    "sp1500b-heavy-duty-sheet-polisher": {
      title: "SP1500B Heavy Duty Sheet Polishing Machine | MB Tech India",
      description: "Polish stainless steel plates up to 1500 mm width with the SP1500B heavy-duty sheet polisher. Delivers uniform No.4 satin and hairline finishes with ease.",
      keywords: "SP1500B, SS sheet polishing machine, automatic sheet polishing machine, wide belt sheet polishing machine, industrial sheet polishing machine, stainless steel sheet finishing machine, aluminium sheet polishing machine, brass sheet polishing machine, copper sheet polishing machine, No.4 satin finish machine, hairline finish machine"
    },
    "sp1200b-automatic-sheet-buffing-machine": {
      title: "SP1200B Automatic Sheet Buffing Machine | MB Finish Tech",
      description: "Automate plate polishing for sheets up to 1200 mm width with the SP1200B. Built for stainless steel and aluminum finishing lines needing high throughput.",
      keywords: "SP1200B, heavy duty sheet polishing machine, industrial sheet polishing machine, stainless steel sheet polishing machine, automatic sheet polishing machine, wide belt polishing machine, metal sheet finishing machine, SS sheet buffing machine, aluminium sheet finishing machine"
    },
    "sp600b-compact-sheet-polisher": {
      title: "SP600B Compact Sheet Polishing Machine | MB Finish Tech",
      description: "Finish metal sheets up to 600 mm width with the compact SP600B sheet polisher. Ideal for small to mid-scale fabricators wanting consistent hairline finishes.",
      keywords: "SP600B, wet grinding polishing machine, wet polishing machine for stainless steel, enclosed sheet polishing machine, dust free polishing machine, stainless steel sheet finishing machine, wet belt polishing machine, wide belt wet polishing machine, metal sheet wet grinding machine"
    },
    "manual-belt-trolley-polishing-machine": {
      title: "Manual Belt Trolley Polishing Machine | MB Finish Tech",
      description: "Remove scale, rust, and heavy weld seams on flat plates and structural sections with our manual belt trolley polishing machine. Built for heavy fabrication.",
      keywords: "TBP300-2H, trolley polishing machine, trolley type polishing machine, flat plate polishing machine, flat sheet polishing machine, MS sheet polishing machine, SS sheet polishing machine, metal plate polishing machine, double head polishing machine, aluminium section polishing machine"
    },
    "sp300b-wet-sheet-polisher": {
      title: "SP300B Wet Sheet Polishing Machine | MB Tech India",
      description: "Prevent heat deformation on thin metal sheets with the SP300B wet sheet polishing machine. Built for precision wet grinding on SS, brass, and aluminum plates.",
      keywords: "SP300B, No.8 mirror finish machine, No.4 satin finish machine, hairline finish machine, stainless steel mirror polishing machine, aluminium sheet polishing machine, brass sheet polishing machine, inline sheet polishing machine, multi-head sheet polishing machine"
    },
    "vb150-vacuum-bed-sheet-polisher": {
      title: "VB150 Vacuum Bed Sheet Polishing Machine | MB Finish Tech",
      description: "Hold thin sheet metal securely during buffing with the VB150 vacuum bed polisher. Prevents plate slippage and warpage for precision hairline and satin polishes.",
      keywords: "VB150, inline sheet polishing machine, multi-head polishing machine, stainless steel sheet polishing, metal sheet finishing machine, No.4 finish polishing, hairline polishing machine, mirror finish polishing machine, industrial sheet buffing machine"
    },
    "automatic-utensil-buffing-machine": {
      title: "Automatic Utensil Buffing Machine | MB Finish Tech India",
      description: "Automate mirror buffing on stainless steel pots, pans, and cookware. Our automatic utensil polishing machine boosts output while cutting manual labor costs.",
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
