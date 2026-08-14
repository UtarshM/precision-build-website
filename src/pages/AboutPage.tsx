import { Helmet } from "react-helmet-async";
import { About } from "@/components/site/About";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WhyChoose } from "@/components/site/WhyChoose";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Polishing Machine Manufacturer India | About Us | M.B. Finishing</title>
        <meta
          name="description"
          content="M.B. Finishing is a certified industrial polishing machine manufacturer in India, producing automatic buffing, grinding, and metal finishing machines since 1990."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/about" />
        <meta name="keywords" content="Polishing Machine Manufacturer India, industrial polishing machine manufacturer, automatic polishing machine manufacturer, buffing machine manufacturer, metal finishing machine manufacturer, polishing machine company India, polishing machine manufacturer Pune, polishing machine manufacturer Maharashtra, Indian polishing machine manufacturer" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Polishing Machine Manufacturer India | About Us | M.B. Finishing" />
        <meta property="og:description" content="Certified industrial polishing machine manufacturer in India. Leading supplier of automatic buffing and metal finishing machines." />
        <meta property="og:url" content="https://www.mbfinishtech.com/about" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Polishing Machine Manufacturer India | About Us | M.B. Finishing" />
        <meta name="twitter:description" content="Certified industrial polishing machine manufacturer in India since 1990." />
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
