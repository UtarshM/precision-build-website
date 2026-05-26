import { Helmet } from "react-helmet-async";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Testimonials } from "@/components/site/Testimonials";
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
          content="See the industries we supply (automotive, aerospace, horeca, tanks, etc.) and our valued global customers."
        />
      </Helmet>

      <SiteLayout>
        <PageBanner
          eyebrow="Clients & Industries"
          title="Valued customers across industrial finishing sectors"
          description="Our machines are engineered to meet the strict surface finishing requirements of global manufacturers across critical sectors."
        />
        <CustomerSlider />
        <IndustriesServed />
        <Testimonials />
        <WhyChoose />
      </SiteLayout>
    </>
  );
};

export default ClientsPage;
