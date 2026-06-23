import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WhyChoose } from "@/components/site/WhyChoose";
import { IndustriesServed } from "@/components/site/IndustriesServed";
import { CustomerSlider } from "@/components/site/CustomerSlider";

const ClientsPage = () => {
  return (
    <>
      <Helmet>
        <title>M.B. Finishing Technologies | Clients & Industries Served</title>
        <meta
          name="description"
          content="See the industries we supply (pharma/chemical, automotive, hygienic pipe, dairy, aerospace, utensil polishing, sheet metal) and our valued global customers."
        />
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
