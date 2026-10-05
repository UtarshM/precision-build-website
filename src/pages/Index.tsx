import { Helmet } from "react-helmet-async";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Hero } from "@/components/site/Hero";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";
import { SiteLayout } from "@/components/site/SiteLayout";
import { VideoSection } from "@/components/site/VideoSection";
import { WhyChoose } from "@/components/site/WhyChoose";
import { FaqSection } from "@/components/site/FaqSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Metal Polishing & Buffing Machines India | MB Finish Tech</title>
        <meta
          name="description"
          content="Source heavy-duty metal polishing and buffing machines engineered in India. Automate your plant finishing lines with custom systems from MB Finishing today."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/" />
        <meta name="keywords" content="Metal Polishing & Buffing Machines India, industrial polishing machine manufacturer, polishing machine manufacturer in India, automatic polishing machines, industrial buffing machines, metal polishing machines, automatic buffing machine, metal finishing machines, surface finishing machines, polishing and buffing machines" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Metal Polishing & Buffing Machines India | MB Finish Tech" />
        <meta property="og:description" content="Source heavy-duty metal polishing and buffing machines engineered in India. Automate your plant finishing lines with custom systems from MB Finishing today." />
        <meta property="og:url" content="https://www.mbfinishtech.com/" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        <meta property="og:site_name" content="M.B. Finishing Technologies" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Metal Polishing & Buffing Machines India | MB Finish Tech" />
        <meta name="twitter:description" content="Source heavy-duty metal polishing and buffing machines engineered in India. Automate your plant finishing lines with custom systems from MB Finishing today." />
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
        <FaqSection />
        <CTA />
      </SiteLayout>
    </>
  );
};

export default Index;
