import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Plus, Search, Syringe } from "lucide-react";
import { Card, Pill } from "../../components/dashboard/ui";
import { DOGS } from "../../data/dogs";

type Avail = "All" | "Available" | "Reserved";

export default function DogsInventoryPage() {
  const [q, setQ] = useState("");
  const [avail, setAvail] = useState<Avail>("All");

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return DOGS.filter((d) => {
      const okAvail = avail === "All" || d.status === avail;
      const okQ =
        !needle ||
        d.name.toLowerCase().includes(needle) ||
        d.breed.toLowerCase().includes(needle);
      return okAvail && okQ;
    });
  }, [q, avail]);

  const available = DOGS.filter((d) => d.status === "Available").length;

  return (
    <div className="flex flex-col gap-5">
      {/* summary strip */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { l: "Resident pups", v: String(DOGS.length), s: "across all breeds" },
          { l: "Ready to meet", v: String(available), s: "approved families only" },
          { l: "Reserved", v: String(DOGS.length - available), s: "mid-process" },
          { l: "Vaccination due", v: "2", s: "Bruno + Biscuit this week" },
        ].map((s) => (
          <Card key={s.l} className="!p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-faint">{s.l}</p>
            <p className="font-display mt-1 text-[28px] font-bold leading-none">{s.v}</p>
            <p className="mt-1 text-[11.5px] font-medium text-faint">{s.s}</p>
          </Card>
        ))}
      </div>

      <Card className="!p-0 overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-[#F0EDE5] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-[300px]">
            <Search size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-faint" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search pups…"
              className="input !rounded-full !py-2.5 !pl-9 !text-[13px]"
              aria-label="Search pups"
            />
          </div>
          <div className="flex items-center gap-2">
            {(["All", "Available", "Reserved"] as Avail[]).map((a) => (
              <button
                key={a}
                onClick={() => setAvail(a)}
                className={`rounded-full px-4 py-2 text-[12.5px] font-bold transition-all ${
                  avail === a ? "bg-[#1C1E24] text-white" : "bg-[#F1EFE9] text-muted hover:text-ink"
                }`}
              >
                {a}
              </button>
            ))}
            <button className="btn btn-primary !py-2.5">
              <Plus size={15} /> Add pup
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-[13px]">
            <thead>
              <tr className="bg-[#FAF9F6] text-[11px] uppercase tracking-[0.1em] text-faint">
                <th className="px-5 py-3 font-bold">Pup</th>
                <th className="px-3 py-3 font-bold">Breed · Age</th>
                <th className="px-3 py-3 font-bold">Health</th>
                <th className="px-3 py-3 font-bold">Status</th>
                <th className="px-5 py-3 text-right font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((d) => (
                <tr key={d.id} className="border-t border-[#F4F2EC] transition-colors hover:bg-[#FCFBF8]">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <img src={d.image} alt={d.name} className="h-11 w-11 rounded-[12px] object-cover" loading="lazy" />
                      <div>
                        <p className="font-bold">{d.name} <span className="font-medium text-faint">· {d.gender}</span></p>
                        <p className="text-[12px] text-faint">{d.coat}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3.5">
                    <p className="font-semibold">{d.breed}</p>
                    <p className="text-[12px] text-faint">{d.age}</p>
                  </td>
                  <td className="px-3 py-3.5">
                    <div className="flex flex-wrap gap-1">
                      <span className="flex items-center gap-1 rounded-full bg-[#EFF6EC] px-2 py-0.5 text-[11px] font-bold text-[#2E5B34]">
                        <Check size={11} strokeWidth={3} /> Vax
                      </span>
                      <span className="flex items-center gap-1 rounded-full bg-[#EFF6EC] px-2 py-0.5 text-[11px] font-bold text-[#2E5B34]">
                        <Check size={11} strokeWidth={3} /> Chip
                      </span>
                      {d.id === "bruno" && (
                        <span className="flex items-center gap-1 rounded-full bg-[#FFE9B5] px-2 py-0.5 text-[11px] font-bold text-[#7A5A17]">
                          <Syringe size={11} /> Rabies due
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-3 py-3.5">
                    <Pill tone={d.status === "Available" ? "green" : "amber"}>{d.status}</Pill>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex justify-end gap-2">
                      <Link to={`/dogs/${d.id}`} className="rounded-full border border-[#E8E4DC] px-3.5 py-1.5 text-[12px] font-bold transition-colors hover:border-[#3E5C9B] hover:text-[#2C4373]">
                        Profile
                      </Link>
                      <Link to={`/apply?pup=${d.id}`} className="rounded-full bg-[#3E5C9B] px-3.5 py-1.5 text-[12px] font-bold text-white transition-colors hover:bg-[#2C4373]">
                        Match <ArrowRight size={12} className="inline" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {rows.length === 0 && (
          <p className="px-5 py-10 text-center text-[13px] font-medium text-faint">No pups match — try clearing the search.</p>
        )}
      </Card>
    </div>
  );
}
