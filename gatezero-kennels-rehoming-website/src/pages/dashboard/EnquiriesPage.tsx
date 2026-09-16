import { useEffect, useMemo, useState } from "react";
import { MessageCircle, Phone, Search } from "lucide-react";
import { Card, Pill } from "../../components/dashboard/ui";
import { ENQUIRIES_INIT, type Enquiry } from "../../data/dashboard";

const STATUSES = ["All", "New", "Contacted", "Visit booked", "Converted", "Dropped"] as const;

const toneFor = (s: Enquiry["status"]) =>
  s === "New" ? "blue" : s === "Contacted" ? "amber" : s === "Visit booked" ? "neutral" : s === "Converted" ? "green" : "red";

const STORE_KEY = "gz_enquiries";

function load(): Enquiry[] {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return ENQUIRIES_INIT;
}

export default function EnquiriesPage() {
  const [rows, setRows] = useState<Enquiry[]>(load);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("All");

  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(rows));
    } catch { /* ignore */ }
  }, [rows]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return rows.filter((r) => {
      const okS = status === "All" || r.status === status;
      const okQ =
        !needle ||
        r.name.toLowerCase().includes(needle) ||
        r.interest.toLowerCase().includes(needle) ||
        r.phone.includes(needle);
      return okS && okQ;
    });
  }, [rows, q, status]);

  const newCount = rows.filter((r) => r.status === "New").length;

  const cycle = (id: string) => {
    const order: Enquiry["status"][] = ["New", "Contacted", "Visit booked", "Converted"];
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: order[(order.indexOf(r.status) + 1) % order.length] ?? "New" } : r))
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { l: "Open enquiries", v: String(rows.filter((r) => !["Converted", "Dropped"].includes(r.status)).length), s: "needs a human reply" },
          { l: "New (uncontacted)", v: String(newCount), s: "SLA: reply < 24h" },
          { l: "Visits booked", v: String(rows.filter((r) => r.status === "Visit booked").length), s: "this week" },
          { l: "Converted", v: String(rows.filter((r) => r.status === "Converted").length), s: "adoptions + plans" },
        ].map((s) => (
          <Card key={s.l} className="!p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-faint">{s.l}</p>
            <p className="font-display mt-1 text-[28px] font-bold leading-none">{s.v}</p>
            <p className="mt-1 text-[11.5px] font-medium text-faint">{s.s}</p>
          </Card>
        ))}
      </div>

      <Card className="!p-0 overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-[#F0EDE5] p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-[280px]">
            <Search size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-faint" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search name, interest, phone…"
              className="input !rounded-full !py-2.5 !pl-9 !text-[13px]"
              aria-label="Search enquiries"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {STATUSES.map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`rounded-full px-3.5 py-1.5 text-[12px] font-bold transition-all ${
                  status === s ? "bg-[#1C1E24] text-white" : "bg-[#F1EFE9] text-muted hover:text-ink"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left text-[13px]">
            <thead>
              <tr className="bg-[#FAF9F6] text-[11px] uppercase tracking-[0.1em] text-faint">
                <th className="px-5 py-3 font-bold">Family</th>
                <th className="px-3 py-3 font-bold">Interested in</th>
                <th className="px-3 py-3 font-bold">Source</th>
                <th className="px-3 py-3 font-bold">Status</th>
                <th className="px-5 py-3 text-right font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} className="border-t border-[#F4F2EC] align-top transition-colors hover:bg-[#FCFBF8]">
                  <td className="px-5 py-3.5">
                    <p className="font-bold">{r.name}</p>
                    <p className="text-[12px] text-faint">{r.phone} · {r.city} · {r.time}</p>
                    <p className="mt-1 max-w-[260px] text-[12px] italic text-muted">“{r.note}”</p>
                  </td>
                  <td className="px-3 py-3.5 font-semibold">{r.interest}</td>
                  <td className="px-3 py-3.5"><Pill tone="neutral">{r.source}</Pill></td>
                  <td className="px-3 py-3.5">
                    <button onClick={() => cycle(r.id)} title="Click to advance status">
                      <Pill tone={toneFor(r.status)}>{r.status}</Pill>
                    </button>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex justify-end gap-2">
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(`Hello ${r.name}! This is Gatezero Kennels — following up on your enquiry about ${r.interest}.`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 rounded-full bg-[#3E5C9B] px-3.5 py-1.5 text-[12px] font-bold text-white transition-colors hover:bg-[#2C4373]"
                      >
                        <MessageCircle size={12} /> WhatsApp
                      </a>
                      <a
                        href={`tel:${r.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-1 rounded-full border border-[#E8E4DC] px-3.5 py-1.5 text-[12px] font-bold transition-colors hover:border-[#3E5C9B] hover:text-[#2C4373]"
                      >
                        <Phone size={12} /> Call
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <p className="px-5 py-10 text-center text-[13px] font-medium text-faint">No enquiries match — try a different filter.</p>
        )}
      </Card>
      <p className="text-[12px] font-medium text-faint">Click any status pill to advance it (New → Contacted → Visit booked → Converted). Saved locally for demo.</p>
    </div>
  );
}
