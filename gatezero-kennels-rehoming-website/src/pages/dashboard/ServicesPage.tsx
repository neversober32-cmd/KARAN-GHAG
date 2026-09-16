import { useState } from "react";
import { CalendarCheck, Clock, Scissors, Stethoscope, Dumbbell } from "lucide-react";
import { Card, CardTitle, Pill } from "../../components/dashboard/ui";
import { BOOKINGS } from "../../data/dashboard";

const TABS = ["All", "Grooming", "Training", "Vet"] as const;

const STAFF = [
  { name: "Sana", role: "Grooming lead", load: 82, color: "#DE9A55" },
  { name: "Coach Imran", role: "Training", load: 64, color: "#3E5C9B" },
  { name: "Dr. Meera", role: "Vet · Tue & Sat", load: 45, color: "#5E9B6A" },
  { name: "Ravi", role: "Boarding + daycare", load: 71, color: "#7C6AAE" },
];

const statusTone = (s: string): "green" | "blue" | "amber" => (s === "In progress" ? "green" : s === "Confirmed" ? "blue" : "amber");

export default function ServicesPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const rows = BOOKINGS.filter((b) => tab === "All" || b.service === tab);

  return (
    <div className="flex flex-col gap-5">
      {/* staff load */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STAFF.map((s) => (
          <Card key={s.name} className="!p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[13.5px] font-bold">{s.name}</p>
              <span className="text-[12px] font-bold" style={{ color: s.color }}>{s.load}%</span>
            </div>
            <p className="text-[11.5px] font-medium text-faint">{s.role}</p>
            <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-[#F1EFE9]">
              <div className="h-full rounded-full" style={{ width: `${s.load}%`, background: s.color }} />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.5fr_1fr]">
        <Card className="!p-0 overflow-hidden">
          <div className="flex flex-col gap-3 p-5 pb-0 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-[15px] font-bold tracking-tight">Bookings</h3>
            <div className="flex flex-wrap gap-1.5">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded-full px-3.5 py-1.5 text-[12px] font-bold transition-all ${
                    tab === t ? "bg-[#1C1E24] text-white" : "bg-[#F1EFE9] text-muted hover:text-ink"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-[13px]">
              <thead>
                <tr className="border-y border-[#F0EDE5] bg-[#FAF9F6] text-[11px] uppercase tracking-[0.1em] text-faint">
                  <th className="px-5 py-2.5 font-bold">Pet / Owner</th>
                  <th className="px-3 py-2.5 font-bold">Service</th>
                  <th className="px-3 py-2.5 font-bold">When · Staff</th>
                  <th className="px-5 py-2.5 text-right font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((b) => (
                  <tr key={b.id} className="border-b border-[#F4F2EC] last:border-0">
                    <td className="px-5 py-3"><p className="font-bold">{b.pet}</p><p className="text-[12px] text-faint">{b.owner}</p></td>
                    <td className="px-3 py-3"><Pill tone="blue">{b.service}</Pill></td>
                    <td className="px-3 py-3 text-muted">{b.when} · {b.staff}</td>
                    <td className="px-5 py-3 text-right"><Pill tone={statusTone(b.status)}>{b.status}</Pill></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {rows.length === 0 && <p className="px-5 py-8 text-center text-[13px] text-faint">No bookings in this view.</p>}
        </Card>

        <div className="flex flex-col gap-5">
          <Card>
            <CardTitle>Today at the facility</CardTitle>
            <ul className="space-y-3">
              {[
                { icon: <Scissors size={15} />, t: "3:30 pm — Chikoo, full groom (Sana)", c: "#DE9A55" },
                { icon: <Dumbbell size={15} />, t: "4:00 pm — Zara, obedience batch 2 (Imran)", c: "#3E5C9B" },
                { icon: <Stethoscope size={15} />, t: "6:00 pm — Litter health check (Dr. Meera)", c: "#5E9B6A" },
              ].map((r, i) => (
                <li key={i} className="flex items-start gap-3 rounded-[12px] bg-[#FAF9F6] px-3.5 py-3 text-[13px] font-semibold">
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white shadow-sm" style={{ color: r.c }}>{r.icon}</span>
                  {r.t}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <CardTitle>Service menu (public site)</CardTitle>
            <ul className="space-y-2.5 text-[13px]">
              {[
                ["Basic wash & blow-dry", "from ₹899"],
                ["Full groom + de-shedding", "from ₹1,799"],
                ["Puppy obedience · 8 sessions", "₹9,500"],
                ["Boarding · per night", "from ₹1,200"],
              ].map(([n, p]) => (
                <li key={n} className="flex items-center justify-between gap-3 border-b border-[#F4F2EC] pb-2.5 last:border-0 last:pb-0">
                  <span className="font-semibold">{n}</span>
                  <span className="font-bold text-[#2C4373]">{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 flex items-center gap-1.5 text-[11.5px] font-medium text-faint"><Clock size={12} /> Service revenue funds rescue & Indie care.</p>
            <p className="mt-2 flex items-center gap-1.5 text-[11.5px] font-medium text-faint"><CalendarCheck size={12} /> Live-animal adoption fees stay offline, receipted.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
