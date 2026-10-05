import { Helmet } from "react-helmet-async";
import { About } from "@/components/site/About";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WhyChoose } from "@/components/site/WhyChoose";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Industrial Polishing Machine Manufacturer Pune Maharashtra</title>
        <meta
          name="description"
          content="Partner with an ISO 9001:2015 certified metal finishing and buffing machine manufacturer in Pune, India, engineering custom surface systems for your shop line."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/about" />
        <meta name="keywords" content="Industrial Polishing Machine Manufacturer Pune Maharashtra, industrial polishing machine manufacturer, automatic polishing machine manufacturer, buffing machine manufacturer, metal finishing machine manufacturer, polishing machine company India, polishing machine manufacturer Pune, polishing machine manufacturer Maharashtra, Indian polishing machine manufacturer" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Industrial Polishing Machine Manufacturer Pune Maharashtra" />
        <meta property="og:description" content="Partner with an ISO 9001:2015 certified metal finishing and buffing machine manufacturer in Pune, India, engineering custom surface systems for your shop line." />
        <meta property="og:url" content="https://www.mbfinishtech.com/about" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industrial Polishing Machine Manufacturer Pune Maharashtra" />
        <meta name="twitter:description" content="Partner with an ISO 9001:2015 certified metal finishing and buffing machine manufacturer in Pune, India, engineering custom surface systems for your shop line." />
        <meta name="twitter:image" content="https://www.mbfinishtech.com/favicon.png" />
      </Helmet>

      <SiteLayout>
        {/* About Page Top Hero Header */}
        <section className="bg-[#faf6ed] pt-32 pb-14 md:pt-40 md:pb-18 border-b border-black/5">
          <div className="container max-w-4xl text-center">
            <div className="industrial-badge mx-auto mb-4 text-emerald-800 border-emerald-800/20 bg-emerald-50">
              ESTABLISHED 1990
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-stone-950 tracking-tight leading-tight">
              About M.B. Finishing Technologies
            </h1>
            <p className="mt-6 text-base sm:text-lg text-stone-600 font-medium leading-relaxed max-w-3xl mx-auto">
              With over three decades of engineering expertise, we design and manufacture heavy-duty automatic buffing machines, metal finishing systems, and custom surface finishing solutions built for continuous industrial production across India.
            </p>
          </div>
        </section>

        <About />
        <WhyChoose />
      </SiteLayout>
    </>
  );
};

export default AboutPage;
