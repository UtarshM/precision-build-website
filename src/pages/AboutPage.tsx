import { Helmet } from "react-helmet-async";
import { About } from "@/components/site/About";
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
        <About />
        <WhyChoose />
      </SiteLayout>
    </>
  );
};

export default AboutPage;
