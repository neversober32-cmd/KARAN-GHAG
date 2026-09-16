import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import PageMeta from "../../components/PageMeta";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen bg-[#F4F3EF] text-ink">
      <PageMeta title="Ops Dashboard — Ghag Kennels" />
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar path={pathname} onMenu={() => setOpen(true)} />
        <div className="flex-1 px-4 py-6 sm:px-7">
          <div className="mx-auto w-full max-w-[1180px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
