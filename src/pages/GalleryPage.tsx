import { Helmet } from "react-helmet-async";
import { PageBanner } from "@/components/site/PageBanner";
import { Projects } from "@/components/site/Projects";
import { SiteLayout } from "@/components/site/SiteLayout";
import { VideoSection } from "@/components/site/VideoSection";

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Industrial Polishing Machine Working Videos | MB Finish</title>
        <meta
          name="description"
          content="Watch automatic tank, sheet, and centerless pipe buffing machines operate on factory floors. See actual surface finishing results on industrial metal parts."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/gallery" />
        <meta name="keywords" content="polishing gallery, machine videos, buffing photos, industrial machinery gallery" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Industrial Polishing Machine Working Videos | MB Finish" />
        <meta property="og:description" content="Watch automatic tank, sheet, and centerless pipe buffing machines operate on factory floors. See actual surface finishing results on industrial metal parts." />
        <meta property="og:url" content="https://www.mbfinishtech.com/gallery" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industrial Polishing Machine Working Videos | MB Finish" />
        <meta name="twitter:description" content="Watch automatic tank, sheet, and centerless pipe buffing machines operate on factory floors. See actual surface finishing results on industrial metal parts." />
        <meta name="twitter:image" content="https://www.mbfinishtech.com/favicon.png" />
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
