import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WhyChoose } from "@/components/site/WhyChoose";
import { IndustriesServed } from "@/components/site/IndustriesServed";
import { CustomerSlider } from "@/components/site/CustomerSlider";

const ClientsPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Valued Clients & Industries Served | M.B. Finishing</title>
        <meta
          name="description"
          content="See the diverse sectors we serve (pharmaceutical, dairy, aerospace, utensil, pipe, automotive, sheet metal) and the global customers who trust our buffing machinery."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/clients" />
        <meta name="keywords" content="polishing clients, pharmaceutical polishing, automotive buffing, client logos, M.B. Finishing customers" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Valued Clients & Industries Served | M.B. Finishing" />
        <meta property="og:description" content="Discover our clients and the diverse industrial sectors we serve globally." />
        <meta property="og:url" content="https://www.mbfinishtech.com/clients" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Valued Clients & Industries Served | M.B. Finishing" />
        <meta name="twitter:description" content="Learn about our clients and industries served." />
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
