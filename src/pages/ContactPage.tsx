import { Helmet } from "react-helmet-async";
import { Contact } from "@/components/site/Contact";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/SiteLayout";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact M.B. Finishing Technologies | Machine Quotes & Support</title>
        <meta
          name="description"
          content="Get in touch with M.B. Finishing Technologies. Contact us for buffing and polishing machine sales, customized technical quotes, and after-sales support."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/contact" />
        <meta name="keywords" content="contact M.B. Finishing, buffing machine support, sales inquiries Pune, industrial machinery contact" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact M.B. Finishing Technologies | Machine Quotes & Support" />
        <meta property="og:description" content="Reach out to our offices in Bhosari or Chikhali, Pune. Contact us for custom quotes and machine information." />
        <meta property="og:url" content="https://www.mbfinishtech.com/contact" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact M.B. Finishing Technologies | Machine Quotes & Support" />
        <meta name="twitter:description" content="Get in touch with our team for machine specifications, pricing, and sales inquiries." />
        <meta name="twitter:image" content="https://www.mbfinishtech.com/favicon.png" />
      </Helmet>

      <SiteLayout>
        <Contact isHeroSection={true} />
      </SiteLayout>
    </>
  );
};

export default ContactPage;
