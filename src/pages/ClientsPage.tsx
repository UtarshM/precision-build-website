import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WhyChoose } from "@/components/site/WhyChoose";
import { IndustriesServed } from "@/components/site/IndustriesServed";
import { CustomerSlider } from "@/components/site/CustomerSlider";

const ClientsPage = () => {
  return (
    <>
      <Helmet>
        <title>Industrial Surface Finishing Applications | MB Tech India</title>
        <meta
          name="description"
          content="Deliver Ra 0.2 micron mirror finishes across pharmaceutical tanks, dairy vessels, and automotive parts with automated buffing lines engineered for your plant."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/clients" />
        <meta name="keywords" content="polishing clients, pharmaceutical polishing, automotive buffing, client logos, M.B. Finishing customers" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Industrial Surface Finishing Applications | MB Tech India" />
        <meta property="og:description" content="Deliver Ra 0.2 micron mirror finishes across pharmaceutical tanks, dairy vessels, and automotive parts with automated buffing lines engineered for your plant." />
        <meta property="og:url" content="https://www.mbfinishtech.com/clients" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industrial Surface Finishing Applications | MB Tech India" />
        <meta name="twitter:description" content="Deliver Ra 0.2 micron mirror finishes across pharmaceutical tanks, dairy vessels, and automotive parts with automated buffing lines engineered for your plant." />
        <meta name="twitter:image" content="https://www.mbfinishtech.com/favicon.png" />
      </Helmet>

      <SiteLayout>
        <CustomerSlider />
        <IndustriesServed />
        <WhyChoose />
      </SiteLayout>
    </>
  );
};

export default ClientsPage;
