import { Link } from "react-router-dom";
import mbLogo from "@/assets/mb-finishing-logo.png";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Clients", to: "/clients" },
  { label: "Application", to: "/application" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];

const PRODUCT_CATEGORIES = [
  { label: "Tank polishing solutions", to: "/products?category=tank" },
  { label: "Sheet polishing solutions", to: "/products?category=sheet" },
  { label: "Utensil polishing solutions", to: "/products?category=utensil" },
  { label: "Pipe polishing solutions", to: "/products?category=pipe" },
  { label: "Customised solutions", to: "/products?category=custom" },
];

export const Footer = () => {
  return (
    <footer className="overflow-hidden bg-[#1b1611] text-white">
      <div className="container py-16 md:py-20">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_0.6fr_0.8fr_0.9fr]">
          <div>
            {/* Logo and brand name */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src={mbLogo}
                alt="MB Finishing Logo"
                className="h-12 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col text-left">
                <span className="text-xs uppercase font-black text-primary tracking-[0.08em] leading-none">
                  M.B. Finishing Technologies
                </span>
                <span className="text-[8px] text-white/50 tracking-wider font-semibold uppercase mt-1 leading-none">
                  Redefining Finishing Excellence…
                </span>
              </div>
            </div>

            <h2 className="font-display text-xl sm:text-2xl leading-[1.2] text-white/90 uppercase font-semibold">
              Delivering world-class buffing & polishing solutions for industries that demand perfection.
            </h2>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-white/60">
              M.B. Finishing Technologies, a subsidiary of M.B. Tools Pvt. Ltd.
              established in 1990, specializes in automatic buffing and
              polishing machines for automotive and industrial applications.
            </p>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/80">
              Quick Links
            </div>
            <ul className="mt-6 space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/64 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/80">
              Product Range
            </div>
            <ul className="mt-6 space-y-3">
              {PRODUCT_CATEGORIES.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/64 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/80">
              Contact Info
            </div>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/64">
              <div>
                <div className="mb-1 font-semibold text-white">
                  M.B. Finishing Technologies
                </div>
                <p>
                  Gat No 669 & 670, Balghare Vasti, Chikhali, Pune - 411062.
                </p>
              </div>
              <div>
                <div className="mb-1 font-semibold text-white">MB Tools (Tool Room)</div>
                <p>
                  C-4(21)C, near Bharat Gas, T Block, MIDC, Bhosari, Pune,
                  Maharashtra 411026
                </p>
              </div>
              <div className="flex flex-col">
                <a
                  href="mailto:sale@mbtools.in"
                  className="transition-colors hover:text-white"
                >
                  sale@mbtools.in
                </a>
                <a
                  href="mailto:sales.mbtools@gmail.com"
                  className="transition-colors hover:text-white text-xs text-white/50"
                >
                  sales.mbtools@gmail.com
                </a>
              </div>
              <a
                href="tel:+919175282992"
                className="block font-semibold text-white/80 transition-colors hover:text-white text-sm"
              >
                +91-91752 82992
              </a>
              <a
                href="tel:+918956648126"
                className="block font-semibold text-white/80 transition-colors hover:text-white text-sm"
              >
                +91-89566 48126
              </a>
            </div>
          </div>
        </div>

        <div className="gold-line" />
        <div className="mt-8 flex flex-col gap-4 text-xs text-white/48 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} M.B. Finishing Technologies. All rights
            reserved.
          </p>
          <p className="uppercase tracking-[0.24em] text-primary/70">
            Redefining Finishing Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};
