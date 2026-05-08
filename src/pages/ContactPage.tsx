import { Helmet } from "react-helmet-async";
import { Contact } from "@/components/site/Contact";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/SiteLayout";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>M.B. Finishing Technologies | Contact Us</title>
        <meta
          name="description"
          content="Contact M.B. Finishing Technologies for buffing and polishing machine inquiries, product details and industrial finishing solutions."
        />
      </Helmet>

      <SiteLayout>
        <PageBanner
          eyebrow="Contact Us"
          title="Talk to our team about your finishing requirement"
          description="Reach out for product details, machine inquiries, special-purpose requirements or industrial polishing solutions."
        />
        <Contact />
      </SiteLayout>
    </>
  );
};

export default ContactPage;
