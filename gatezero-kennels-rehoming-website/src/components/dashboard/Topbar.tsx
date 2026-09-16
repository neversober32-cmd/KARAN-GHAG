import { Link } from "react-router-dom";
import { Bell, Menu, Search } from "lucide-react";

const TITLES: Record<string, { title: string; sub: string }> = {
  "/dashboard": { title: "Good morning, Team Gatezero", sub: "Here's what's happening across the kennel today." },
  "/dashboard/dogs": { title: "Dog inventory", sub: "Resident pups, health status and availability." },
  "/dashboard/pipeline": { title: "Adoption pipeline", sub: "Every family, from first form to final handover." },
  "/dashboard/boarding": { title: "Boarding & daycare", sub: "Suites, occupancy and upcoming stays." },
  "/dashboard/services": { title: "Grooming, training & vet", sub: "Bookings, staff load and today's schedule." },
  "/dashboard/enquiries": { title: "Enquiry inbox", sub: "Website, Instagram, walk-ins and WhatsApp — in one place." },
};

export default function Topbar({ path, onMenu }: { path: string; onMenu: () => void }) {
  const meta = TITLES[path] ?? TITLES["/dashboard"];
  return (
    <div className="sticky top-0 z-30 border-b border-[#E8E4DC] bg-[#FAF9F6]/85 backdrop-blur-[12px]">
      <div className="flex items-center gap-3 px-4 py-4 sm:px-7">
        <button
          onClick={onMenu}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E4DC] bg-white lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="font-display truncate text-[20px] font-bold leading-tight sm:text-[24px]">{meta.title}</h1>
          <p className="hidden truncate text-[13px] text-muted sm:block">{meta.sub}</p>
        </div>
        <div className="relative hidden w-[240px] md:block">
          <Search size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-faint" />
          <input placeholder="Search pups, families…" className="input !rounded-full !py-2.5 !pl-9 !text-[13px]" aria-label="Search dashboard" />
        </div>
        <button
          className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[#E8E4DC] bg-white transition-transform hover:-translate-y-0.5"
          aria-label="Notifications"
        >
          <Bell size={17} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#DE9A55] ring-2 ring-white" />
        </button>
        <Link to="/apply" className="btn btn-primary hidden !py-2.5 sm:inline-flex">
          + New application
        </Link>
      </div>
    </div>
  );
}
