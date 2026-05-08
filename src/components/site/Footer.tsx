import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Clients", to: "/clients" },
  { label: "Gallery", to: "/gallery" },
  { label: "Career", to: "/career" },
  { label: "Contact Us", to: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="overflow-hidden bg-[#1b1611] text-white">
      <div className="container py-16 md:py-20">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.25fr)_0.7fr_0.9fr]">
          <div>
            <h2 className="font-display text-4xl leading-none text-white md:text-5xl">
              Refined finishing systems for industrial manufacturers.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/64 md:text-base">
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
              Contact Info
            </div>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/64">
              <div>
                <div className="mb-1 font-semibold text-white">
                  M.B. Finishing Technologies
                </div>
                <p>
                  Plot No. T-165/15/1, T- Block, Next to Trishul Auto, Bhosari,
                  MIDC, Pune - 411 026.
                </p>
              </div>
              <div>
                <div className="mb-1 font-semibold text-white">MB Tools</div>
                <p>
                  C-4(21)C, near Bharat Gas, T Block, MIDC, Bhosari, Pune,
                  Pimpri-Chinchwad, Maharashtra 411026
                </p>
              </div>
              <a
                href="mailto:info@mbtools.in"
                className="block transition-colors hover:text-white"
              >
                info@mbtools.in
              </a>
              <a
                href="tel:+919175282992"
                className="block transition-colors hover:text-white"
              >
                +91-9175282992
              </a>
              <a
                href="tel:+918956648126"
                className="block transition-colors hover:text-white"
              >
                +91-8956648126
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
