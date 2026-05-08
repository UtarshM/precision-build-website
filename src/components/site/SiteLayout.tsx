import { ReactNode } from "react";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

type SiteLayoutProps = {
  children: ReactNode;
};

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      {children}
      <Footer />
      <WhatsAppFab />
    </main>
  );
};
