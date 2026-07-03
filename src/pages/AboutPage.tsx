import { Helmet } from "react-helmet-async";
import { About } from "@/components/site/About";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WhyChoose } from "@/components/site/WhyChoose";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About M.B. Finishing Technologies | Buffing Machine Manufacturer</title>
        <meta
          name="description"
          content="Established in 1990, M.B. Finishing Technologies (a subsidiary of M.B. Tools) is an ISO 9001:2015 certified pioneer in automated buffing and polishing machines in India."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/about" />
        <meta name="keywords" content="about M.B. Finishing, polishing machine manufacturer, buffing machine exporter India, Pune machine manufacturer, ISO 9001:2015 machinery" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About M.B. Finishing Technologies | Buffing Machine Manufacturer" />
        <meta property="og:description" content="Read about our journey, engineering standards, and ISO 9001:2015 certified manufacturing facility." />
        <meta property="og:url" content="https://www.mbfinishtech.com/about" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About M.B. Finishing Technologies | Buffing Machine Manufacturer" />
        <meta name="twitter:description" content="ISO 9001:2015 certified manufacturer of automatic buffing and polishing machines." />
        <meta name="twitter:image" content="https://www.mbfinishtech.com/favicon.png" />
      </Helmet>

      <SiteLayout>
        <About />
        <WhyChoose />
      </SiteLayout>
    </>
  );
};

export default AboutPage;
