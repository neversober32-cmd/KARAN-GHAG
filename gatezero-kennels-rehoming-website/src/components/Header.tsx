import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, PawPrint, X } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Dogs", to: "/dogs" },
  { label: "Process", to: "/process" },
  { label: "Health", to: "/health" },
  { label: "Legal", to: "/legal" },
  { label: "Dashboard", to: "/dashboard" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  const linkClass = (isActive: boolean) =>
    `rounded-full px-4 py-2.5 text-[14px] font-semibold transition-colors duration-200 ${
      isActive ? "bg-[#E9EEF6] text-ink" : "text-[#64666E] hover:bg-[#F2F4F9] hover:text-ink"
    }`;

  return (
    <header
      id="header"
      className={`sticky top-0 z-50 backdrop-blur-[12px] bg-[rgba(255,251,245,0.8)] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_#E8E4DC,0_8px_24px_rgba(30,30,30,0.04)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Gatezero Kennels home">
          <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-sage text-white transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            <PawPrint size={19} strokeWidth={2.2} />
          </span>
          <span className="font-display text-[19px] font-bold leading-none tracking-tight sm:text-[20px]">
            Gatezero<span className="text-sage-deep"> Kennels</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={({ isActive }) => linkClass(isActive)}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/apply" className="btn btn-primary ml-3">
            Apply
          </Link>
        </nav>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sand bg-white text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-sand bg-cream transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-[15px] font-semibold transition-colors ${
                  isActive ? "bg-[#E9EEF6] text-ink" : "text-ink hover:bg-[#F2F4F9]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/apply" className="btn btn-primary mt-2 w-full">
            Apply for Adoption
          </Link>
        </nav>
      </div>
    </header>
  );
}
