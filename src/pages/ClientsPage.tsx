import { Helmet } from "react-helmet-async";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyChoose } from "@/components/site/WhyChoose";

const ClientsPage = () => {
  return (
    <>
      <Helmet>
        <title>M.B. Finishing Technologies | Clients</title>
        <meta
          name="description"
          content="See the industries and clients served by M.B. Finishing Technologies across buffing and polishing applications."
        />
      </Helmet>

      <SiteLayout>
        <PageBanner
          eyebrow="Clients"
          title="Valued customers across industrial finishing sectors"
          description="Our machines are used where consistent output, strong build quality and dependable polishing performance are critical."
        />
        <Testimonials />
        <WhyChoose />
      </SiteLayout>
    </>
  );
};

export default ClientsPage;
