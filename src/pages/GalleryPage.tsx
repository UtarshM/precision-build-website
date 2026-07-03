import { Helmet } from "react-helmet-async";
import { PageBanner } from "@/components/site/PageBanner";
import { Projects } from "@/components/site/Projects";
import { SiteLayout } from "@/components/site/SiteLayout";
import { VideoSection } from "@/components/site/VideoSection";

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Machine Gallery & Polishing Projects | M.B. Finishing</title>
        <meta
          name="description"
          content="View high-resolution machine photos and video demonstrations of automatic buffing and polishing machines in action at M.B. Finishing."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/gallery" />
        <meta name="keywords" content="polishing gallery, machine videos, buffing photos, industrial machinery gallery" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Machine Gallery & Polishing Projects | M.B. Finishing" />
        <meta property="og:description" content="Watch video demonstrations and browse machine category photos." />
        <meta property="og:url" content="https://www.mbfinishtech.com/gallery" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Machine Gallery & Polishing Projects | M.B. Finishing" />
        <meta name="twitter:description" content="View machine photo galleries and video demonstrations." />
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
