import { Link, NavLink } from "react-router-dom";
import {
  BedDouble,
  HeartHandshake,
  Inbox,
  LayoutDashboard,
  PawPrint,
  Scissors,
  X,
} from "lucide-react";

export const DASH_NAV = [
  { to: "/dashboard", end: true, label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard/dogs", label: "Dogs", icon: PawPrint },
  { to: "/dashboard/pipeline", label: "Adoptions", icon: HeartHandshake },
  { to: "/dashboard/boarding", label: "Boarding", icon: BedDouble },
  { to: "/dashboard/services", label: "Services", icon: Scissors },
  { to: "/dashboard/enquiries", label: "Enquiries", icon: Inbox },
];

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* mobile scrim */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[264px] flex-col bg-[#232F4B] text-white transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 pb-5 pt-6">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/12 text-[#F2C078]">
              <PawPrint size={18} />
            </span>
            <span className="leading-tight">
              <span className="font-display block text-[16px] font-bold">Ghag</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Ops Dashboard
              </span>
            </span>
          </Link>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 lg:hidden"
            aria-label="Close menu"
          >
            <X size={17} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3" aria-label="Dashboard">
          {DASH_NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-[14px] px-4 py-3 text-[13.5px] font-semibold transition-all ${
                  isActive
                    ? "bg-white text-[#232F4B] shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
                    : "text-white/65 hover:bg-white/8 hover:text-white"
                }`
              }
            >
              <item.icon size={17} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4">
          <div className="rounded-[16px] bg-white/8 p-4">
            <p className="text-[12px] font-bold">Saturday rush</p>
            <p className="mt-1 text-[12px] leading-relaxed text-white/60">
              2 Meet & Greets · 3 groomings · 1 home check. All staffed.
            </p>
            <Link
              to="/dashboard/boarding"
              onClick={onClose}
              className="mt-3 block rounded-full bg-[#DE9A55] py-2 text-center text-[12px] font-bold text-[#232F4B] transition-transform hover:-translate-y-0.5"
            >
              View day plan
            </Link>
          </div>
          <Link
            to="/"
            className="mt-3 block text-center text-[12px] font-semibold text-white/50 transition-colors hover:text-white"
          >
            ← Back to public site
          </Link>
        </div>
      </aside>
    </>
  );
}
