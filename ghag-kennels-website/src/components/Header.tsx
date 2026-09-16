import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, PawPrint, X } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Dogs", to: "/dogs" },
  { label: "About", to: "/about" },
  { label: "Process", to: "/process" },
  { label: "Health", to: "/health" },
  { label: "Legal", to: "/legal" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      // Scroll-progress indicator (Scroll-Triggered Storytelling pattern)
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(100, (doc.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  const linkClass = (isActive: boolean) =>
    `rounded-full px-4 py-2.5 text-[14px] font-semibold transition-colors duration-200 ${
      isActive ? "bg-[#CFEDD0] text-ink" : "text-[#3F6247] hover:bg-[#DFF2E0] hover:text-ink"
    }`;

  return (
    <header
      id="header"
      className={`sticky top-0 z-50 backdrop-blur-[12px] bg-[rgba(234,246,236,0.9)] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_#C4E4C6,0_8px_24px_rgba(11,46,16,0.06)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-2" aria-label="Ghag Kennels home">
          <PawPrint
            size={30}
            strokeWidth={0}
            fill="currentColor"
            className="text-clay transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
            aria-hidden
          />
          <span className="font-display text-[20px] font-bold leading-none tracking-tight sm:text-[21px]">
            Ghag<span className="text-sage"> Kennels</span>
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

        {/* scroll progress */}
        <div
          aria-hidden
          className="scroll-progress"
          style={{ width: `${progress}%` }}
        />

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-sand bg-white text-ink lg:hidden"
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
                  isActive ? "bg-[#CFEDD0] text-ink" : "text-ink hover:bg-[#DFF2E0]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/apply" className="btn btn-primary mt-2 w-full">
            Apply for Adoption
          </Link>
          <Link
            to="/dashboard"
            className="mt-1 flex items-center justify-center gap-1.5 rounded-2xl px-4 py-2.5 text-[13px] font-semibold text-faint transition-colors hover:bg-[#DFF2E0] hover:text-ink"
          >
            Staff Dashboard <ArrowUpRight size={14} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
