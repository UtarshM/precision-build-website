import { Helmet } from "react-helmet-async";
import { PageBanner } from "@/components/site/PageBanner";
import { Projects } from "@/components/site/Projects";
import { SiteLayout } from "@/components/site/SiteLayout";
import { VideoSection } from "@/components/site/VideoSection";

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>M.B. Finishing Technologies | Gallery</title>
        <meta
          name="description"
          content="View gallery images and demonstration videos of buffing and polishing machines from M.B. Finishing Technologies."
        />
      </Helmet>

      <SiteLayout>
        <PageBanner
          eyebrow="Gallery"
          title="Machines, applications and finishing demonstrations"
          description="Browse a curated gallery of machine visuals and video demonstrations built around our finishing technology portfolio."
        />
        <Projects />
        <VideoSection />
      </SiteLayout>
    </>
  );
};

export default GalleryPage;
