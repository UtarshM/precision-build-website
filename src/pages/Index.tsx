import { Helmet } from "react-helmet-async";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Hero } from "@/components/site/Hero";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";
import { SiteLayout } from "@/components/site/SiteLayout";
import { VideoSection } from "@/components/site/VideoSection";
import { WhyChoose } from "@/components/site/WhyChoose";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>M.B. Finishing Technologies | Industrial Buffing & Polishing Machines</title>
        <meta
          name="description"
          content="ISO 9001:2015 certified manufacturer of automatic buffing and polishing machines in India. Tailored solutions for tanks, vessels, dished ends, sheets, tubes, and pipes."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/" />
        <meta name="keywords" content="vessel polishing machine, tank buffing machine, dishend polishing machine, sheet polishing machine, pipe polishing machine, automatic metal polisher, industrial buffing Pune, M.B. Finishing Technologies" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="M.B. Finishing Technologies | Industrial Buffing & Polishing Machines" />
        <meta property="og:description" content="ISO 9001:2015 certified manufacturer of automatic buffing and polishing machines in India. High-precision surface finishing solutions." />
        <meta property="og:url" content="https://www.mbfinishtech.com/" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        <meta property="og:site_name" content="M.B. Finishing Technologies" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="M.B. Finishing Technologies | Industrial Buffing & Polishing Machines" />
        <meta name="twitter:description" content="ISO 9001:2015 certified manufacturer of automatic buffing and polishing machines in India." />
        <meta name="twitter:image" content="https://www.mbfinishtech.com/favicon.png" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "M.B. Finishing Technologies",
              "image": "https://www.mbfinishtech.com/favicon.png",
              "@id": "https://www.mbfinishtech.com/#localbusiness",
              "url": "https://www.mbfinishtech.com/",
              "telephone": "+91-9175282992",
              "email": "sale@mbtools.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gat No 669 & 670, Balghare Vasti, Chikhali",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411062",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.6738,
                "longitude": 73.8150
              },
              "sameAs": [
                "https://www.linkedin.com/company/m-b-finishing-technologies"
              ]
            }
          `}
        </script>
      </Helmet>

      <SiteLayout>
        <Hero />
        <About />
        <Services limit={8} showViewAll />
        <WhyChoose />
        <Projects />
        <VideoSection />
        <CTA />
      </SiteLayout>
    </>
  );
};

export default Index;
