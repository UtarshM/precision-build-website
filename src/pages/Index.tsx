import { Helmet } from "react-helmet-async";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Hero } from "@/components/site/Hero";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Testimonials } from "@/components/site/Testimonials";
import { VideoSection } from "@/components/site/VideoSection";
import { WhyChoose } from "@/components/site/WhyChoose";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>M.B. Finishing Technologies | Home</title>
        <meta
          name="description"
          content="Premium buffing and polishing machines from M.B. Finishing Technologies for cookware, pipe, sheet, coil and industrial applications."
        />
      </Helmet>

      <SiteLayout>
        <Hero />
        <About />
        <Services limit={8} showViewAll />
        <WhyChoose />
        <Projects />
        <VideoSection />
        <Testimonials />
        <CTA />
      </SiteLayout>
    </>
  );
};

export default Index;
