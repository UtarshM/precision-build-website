import { Helmet } from "react-helmet-async";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { WhyChoose } from "@/components/site/WhyChoose";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>M.B. Finishing Technologies | About Us</title>
        <meta
          name="description"
          content="Learn about M.B. Finishing Technologies, an ISO 9001:2015 certified manufacturer of buffing and polishing machines."
        />
      </Helmet>

      <SiteLayout>
        <PageBanner
          eyebrow="About Us"
          title="Engineering finishing solutions since 1990"
          description="M.B. Finishing Technologies combines manufacturing experience, precision engineering and application-focused design to deliver industrial buffing and polishing machines."
        />
        <About />
        <WhyChoose />
        <CTA />
      </SiteLayout>
    </>
  );
};

export default AboutPage;
