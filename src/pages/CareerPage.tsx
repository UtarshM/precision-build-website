import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PageBanner } from "@/components/site/PageBanner";
import { SiteLayout } from "@/components/site/SiteLayout";

const CareerPage = () => {
  return (
    <>
      <Helmet>
        <title>M.B. Finishing Technologies | Career</title>
        <meta
          name="description"
          content="Career opportunities at M.B. Finishing Technologies for engineers, technicians and industrial machine professionals."
        />
      </Helmet>

      <SiteLayout>
        <PageBanner
          eyebrow="Career"
          title="Join a team building industrial finishing technology"
          description="We welcome skilled professionals who want to contribute to machine design, production, service and industrial engineering excellence."
        />

        <section className="py-24 md:py-32 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
              <div className="rounded-[2rem] border border-primary/10 bg-[#fbf7ef] p-8 md:p-10 shadow-[0_20px_70px_-42px_rgba(20,20,20,0.28)]">
                <div className="industrial-badge mb-6">Why Work With Us</div>
                <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight leading-[0.95] text-stone-950 mb-6">
                  Precision manufacturing with long-term growth
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  M.B. Finishing Technologies works on practical industrial
                  engineering challenges across polishing, buffing and
                  production-focused machine systems.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Machine design and fabrication exposure</li>
                  <li>Industrial manufacturing environment</li>
                  <li>Opportunities for technicians and engineers</li>
                  <li>Work on standard and special purpose machines</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-primary/10 bg-white p-8 md:p-10 shadow-[0_20px_70px_-42px_rgba(20,20,20,0.28)]">
                <div className="industrial-badge mb-6">Apply</div>
                <h3 className="font-heading text-3xl uppercase tracking-tight text-stone-950 mb-4">
                  Send your details
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Share your profile, role interest and experience with our team
                  and we will get back to you.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-heading text-sm uppercase tracking-widest text-primary-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  Contact HR / Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SiteLayout>
    </>
  );
};

export default CareerPage;
