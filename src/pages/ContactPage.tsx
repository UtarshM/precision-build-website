import { Helmet } from "react-helmet-async";
import { Contact } from "@/components/site/Contact";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/SiteLayout";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Polishing Machine Manufacturer Pune | Contact MB Tech India</title>
        <meta
          name="description"
          content="Connect with an industrial polishing machine manufacturer in Bhosari MIDC, Pune. Talk to our machinery team to discuss custom surface finishing build quotes."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/contact" />
        <meta name="keywords" content="Polishing Machine Manufacturer Pune, polishing machine manufacturer Pune, polishing machine manufacturer Maharashtra, polishing machine supplier Pune, industrial polishing machine manufacturer Pune, polishing machine company Pune, polishing machine manufacturer India, buffing machine manufacturer Pune" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Polishing Machine Manufacturer Pune | Contact MB Tech India" />
        <meta property="og:description" content="Connect with an industrial polishing machine manufacturer in Bhosari MIDC, Pune. Talk to our machinery team to discuss custom surface finishing build quotes." />
        <meta property="og:url" content="https://www.mbfinishtech.com/contact" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Polishing Machine Manufacturer Pune | Contact MB Tech India" />
        <meta name="twitter:description" content="Connect with an industrial polishing machine manufacturer in Bhosari MIDC, Pune. Talk to our machinery team to discuss custom surface finishing build quotes." />
        <meta name="twitter:image" content="https://www.mbfinishtech.com/favicon.png" />
      </Helmet>

      <SiteLayout>
        <Contact isHeroSection={true} />
      </SiteLayout>
    </>
  );
};

export default ContactPage;
