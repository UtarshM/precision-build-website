import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageBanner } from "@/components/site/PageBanner";
import { Download, FileText, CheckCircle2 } from "lucide-react";

const CATALOGUE_SECTIONS = [
  {
    title: "Tank & Dishend Polishing Machinery",
    description: "Technical parameters and layout drawings for Column & Boom systems (TPM4500-SDX, TPM3000-SD, TPM1500-SD) and internal duct polishers."
  },
  {
    title: "Sheet & Plate Buffing Systems",
    description: "Dimensional standards, feed speeds, and head options for conveyor-fed dry/wet sheet polishers (SP1500B, SP1200, SP600B, VB150)."
  },
  {
    title: "Pipe & Tube Polishing Machines",
    description: "Through-feed centerless round pipe grinders and multi-head tube polishing configurations (CG15OB, CG15OW-2H)."
  },
  {
    title: "Cookware & Utensil Buffing Lines",
    description: "Semi-automatic and fully automatic hollowware buffing lines (UPM-120B) for rapid mirror finishing of cookware."
  }
];

const CataloguePage = () => {
  return (
    <>
      <Helmet>
        <title>Polishing Machine Catalogue | Download Brochure | M.B. Finishing</title>
        <meta
          name="description"
          content="Download our complete consolidated industrial polishing machine catalogue. Detailed technical specifications, layout blueprints, and US FDA finish standards."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/catalogue" />
        <meta name="keywords" content="Polishing Machine Catalogue, polishing machine catalogue, polishing machine manufacturer catalogue, industrial polishing machine catalogue, buffing machine catalogue, tank polishing machine catalogue, sheet polishing machine catalogue, pipe polishing machine catalogue, utensil polishing machine catalogue, polishing machine brochure" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Polishing Machine Catalogue | M.B. Finishing" />
        <meta property="og:description" content="Download our consolidated industrial polishing and buffing machine catalogue with full technical drawings and specifications." />
        <meta property="og:url" content="https://www.mbfinishtech.com/catalogue" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Polishing Machine Catalogue | M.B. Finishing" />
        <meta name="twitter:description" content="Download our industrial polishing machine catalogue." />
        <meta name="twitter:image" content="https://www.mbfinishtech.com/favicon.png" />
      </Helmet>

      <SiteLayout>
        <PageBanner
          title="Product Catalogue"
          subtitle="Download complete technical specifications and drawings of our machinery lines"
        />

        <section className="section-shell bg-[#fbf7ef] py-20">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: Mock brochure cover */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group max-w-sm w-full bg-white rounded-[2rem] border border-black/5 shadow-glow p-8 transition-transform duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-[#e0b040]/5 rounded-[2rem] pointer-events-none" />
                  <div className="aspect-[3/4] rounded-2xl bg-stone-950 p-6 flex flex-col justify-between text-white relative overflow-hidden">
                    {/* Background geometric flare */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div>
                      <div className="w-10 h-1 border-t-2 border-primary mb-4" />
                      <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-primary">
                        Corporate Catalogue
                      </span>
                      <h3 className="font-display text-2xl font-black uppercase mt-2 leading-none">
                        M.B. Finishing<br />Technologies
                      </h3>
                      <p className="text-[10px] text-stone-400 font-medium mt-1">
                        A Subsidiary of M.B. Tools
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <p className="text-[11px] font-bold tracking-widest text-primary uppercase">
                        Industrial Surface Finishing
                      </p>
                      <p className="text-[9px] text-stone-400 mt-1">
                        ISO 9001:2015 Certified Solutions
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <span className="text-stone-400 text-xs font-semibold">Format: PDF | Size: ~5.4 MB</span>
                  </div>
                </div>
              </div>

              {/* Right Side: What's inside & Download button */}
              <div className="lg:col-span-7">
                <div className="industrial-badge mb-4">Brochure Download</div>
                <h2 className="font-display text-4xl text-stone-950 uppercase font-black mb-6">
                  Consolidated Technical Catalogue
                </h2>
                <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-8">
                  Our official brochure consolidates design blueprints, configuration charts, and performance outputs for all standard and customizable automatic polishing systems. Designed for technical buyers, plant engineers, and procurement directors.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 mb-8">
                  {CATALOGUE_SECTIONS.map((section, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-display text-xs font-bold text-stone-900 uppercase">
                          {section.title}
                        </h4>
                        <p className="text-[11px] text-stone-500 mt-1 font-medium leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/mb-catalogue.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-stone-950 hover:text-white text-stone-950 px-8 py-4 font-heading text-[10px] font-bold uppercase tracking-widest transition-all shadow-md"
                  >
                    <Download className="size-4 shrink-0" /> Download Catalogue PDF
                  </a>
                  <a
                    href="/mb-catalogue.pdf"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white hover:bg-stone-50 text-stone-900 px-8 py-4 font-heading text-[10px] font-bold uppercase tracking-widest transition-all"
                  >
                    <FileText className="size-4 shrink-0" /> View in Browser
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
};

export default CataloguePage;
