import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import mbLogo from "@/assets/mb-finishing-logo.jpg";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products", hasDropdown: true },
  { label: "Clients", to: "/clients" },
  { label: "Application", to: "/application" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];

const PRODUCT_DROPDOWN_ITEMS = [
  { label: "Tank Polishing Solutions", to: "/products?category=tank" },
  { label: "Sheet Polishing Solutions", to: "/products?category=sheet" },
  { label: "Utensil Polishing Solutions", to: "/products?category=utensil" },
  { label: "Customised Solutions", to: "/products?category=customised" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "pt-3" : "pt-5"
      )}
    >
      <div
        className={cn(
          "container transition-all duration-500",
          scrolled ? "max-w-[1380px]" : "max-w-[1420px]"
        )}
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between gap-4 rounded-full border px-4 py-2 md:px-6",
            scrolled
              ? "glass"
              : "border-white/45 bg-white/70 backdrop-blur-xl shadow-[0_24px_60px_-36px_rgba(37,29,18,0.28)]"
          )}
        >
          {/* Logo Brand Area with Tagline */}
          <Link to="/" className="flex items-center gap-3 min-w-0 rounded-full px-2 py-1.5 hover:opacity-90 transition-opacity">
            <img
              src={mbLogo}
              alt="M.B. Finishing Logo"
              className="h-11 w-11 rounded-full object-contain border border-black/10 bg-white p-0.5 shrink-0"
            />
            <div className="min-w-0 flex flex-col justify-center">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-stone-900 leading-none">
                M.B. Finishing
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary mt-1 leading-none">
                Technologies
              </div>
              <div className="text-[6.5px] text-stone-500 tracking-wider mt-1 font-medium leading-none">
                Pioneers in Metal Polishing Technology
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links with Dropdown */}
          <div className="hidden xl:flex items-center gap-2 rounded-full border border-black/5 bg-white/75 px-2 py-2">
            {NAV_LINKS.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.to} className="relative group/dropdown">
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        cn(
                          "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300",
                          isActive
                            ? "bg-stone-950 text-white shadow-[0_14px_28px_-20px_rgba(0,0,0,0.45)]"
                            : "text-foreground/72 hover:bg-black/5 hover:text-foreground"
                        )
                      }
                    >
                      {link.label}
                      <ChevronDown className="size-3.5 transition-transform group-hover/dropdown:rotate-180" />
                    </NavLink>
                    
                    {/* Hover Dropdown panel */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 scale-95 group-hover/dropdown:visible group-hover/dropdown:opacity-100 group-hover/dropdown:scale-100 transition-all duration-300 z-50">
                      <div className="w-64 rounded-2xl border border-black/5 bg-white p-2.5 shadow-xl backdrop-blur-xl">
                        {PRODUCT_DROPDOWN_ITEMS.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block rounded-xl px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-stone-700 hover:bg-primary/15 hover:text-stone-950 transition-all"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300",
                      isActive
                        ? "bg-stone-950 text-white shadow-[0_14px_28px_-20px_rgba(0,0,0,0.45)]"
                        : "text-foreground/72 hover:bg-black/5 hover:text-foreground"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-stone-950 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
            >
              Request Quote
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <button
            className="rounded-full border border-black/5 bg-white/80 p-2 text-foreground xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="container xl:hidden">
          <div className="mt-3 overflow-hidden rounded-[2rem] border border-black/5 bg-white/95 p-5 shadow-[0_24px_60px_-40px_rgba(24,20,16,0.35)] backdrop-blur-2xl animate-fade-in">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.to} className="flex flex-col gap-1">
                      <button
                        onClick={() => setMobileDropdownOpen((val) => !val)}
                        className="flex justify-between items-center rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/78 hover:bg-black/5"
                      >
                        {link.label}
                        <ChevronDown className={cn("size-4 transition-transform", mobileDropdownOpen && "rotate-180")} />
                      </button>
                      
                      {mobileDropdownOpen && (
                        <div className="pl-4 flex flex-col gap-1 mt-1 border-l-2 border-primary/20 ml-4">
                          {PRODUCT_DROPDOWN_ITEMS.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={() => setOpen(false)}
                              className="rounded-xl px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:bg-black/5 hover:text-foreground transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition-colors",
                        isActive
                          ? "bg-stone-950 text-white"
                          : "text-foreground/78 hover:bg-black/5 hover:text-foreground"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-foreground"
            >
              Request Quote
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
