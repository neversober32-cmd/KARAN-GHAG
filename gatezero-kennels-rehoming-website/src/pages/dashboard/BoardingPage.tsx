import { BedDouble, CalendarPlus, LogOut, Sparkles } from "lucide-react";
import { Card, CardTitle, Pill } from "../../components/dashboard/ui";
import { BOOKINGS, KENNELS } from "../../data/dashboard";

export default function BoardingPage() {
  const occupied = KENNELS.filter((k) => k.occupant).length;
  const pct = Math.round((occupied / KENNELS.length) * 100);
  const stays = BOOKINGS.filter((b) => b.service === "Boarding");

  return (
    <div className="flex flex-col gap-5">
      {/* occupancy hero */}
      <Card className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-[#E9EFFA] text-[#2C4373]">
          <BedDouble size={24} />
        </span>
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-3">
            <p className="font-display text-[30px] font-bold leading-none">{occupied}/{KENNELS.length} suites full</p>
            <Pill tone={pct >= 75 ? "amber" : "green"}>{pct}% occupancy</Pill>
          </div>
          <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-[#F1EFE9]">
            <div className="h-full rounded-full bg-gradient-to-r from-[#3E5C9B] to-[#DE9A55] transition-all" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-2 text-[12.5px] font-medium text-faint">Festive season (Diwali) forecast: 92% — consider opening 2 overflow daycare pens.</p>
        </div>
        <button className="btn btn-primary flex-none">
          <CalendarPlus size={15} /> New booking
        </button>
      </Card>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.2fr_1fr]">
        {/* suite grid */}
        <Card>
          <CardTitle action={<span className="text-[12px] font-medium text-faint">Tap a suite for details</span>}>
            Suite map · Andheri facility
          </CardTitle>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {KENNELS.map((k) => (
              <div
                key={k.id}
                className={`lift rounded-[16px] border p-4 ${
                  k.occupant ? "border-[#EBD9BE] bg-[#FFFDF6]" : "border-[#DCE4D3] bg-[#F4F9F1]"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[13px] font-bold">{k.name}</p>
                  <Pill tone={k.occupant ? "amber" : "green"}>{k.occupant ? "Occupied" : "Free"}</Pill>
                </div>
                {k.occupant ? (
                  <>
                    <p className="mt-2 text-[14px] font-bold">{k.occupant}</p>
                    <p className="text-[12px] font-medium text-muted">{k.detail}{k.until ? ` · till ${k.until}` : ""}</p>
                    <div className="mt-3 flex gap-2">
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-full border border-[#E8E4DC] py-1.5 text-[11.5px] font-bold transition-colors hover:border-[#3E5C9B] hover:text-[#2C4373]">
                        <Sparkles size={12} /> Add grooming
                      </button>
                      <button className="flex flex-1 items-center justify-center gap-1 rounded-full border border-[#E8E4DC] py-1.5 text-[11.5px] font-bold transition-colors hover:border-[#9B3B3B] hover:text-[#9B3B3B]">
                        <LogOut size={12} /> Check out
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="mt-2 text-[12.5px] font-medium text-muted">{k.detail}</p>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* upcoming stays */}
        <div className="flex flex-col gap-5">
          <Card className="!p-0 overflow-hidden">
            <h3 className="px-5 pt-5 text-[15px] font-bold tracking-tight">Upcoming stays</h3>
            <ul className="mt-3">
              {stays.map((b) => (
                <li key={b.id} className="flex items-center justify-between gap-3 border-t border-[#F4F2EC] px-5 py-3.5">
                  <div>
                    <p className="text-[13.5px] font-bold">{b.pet}</p>
                    <p className="text-[12px] text-faint">{b.owner} · {b.when} · {b.staff}</p>
                  </div>
                  <Pill tone={b.status === "In progress" ? "green" : "amber"}>{b.status}</Pill>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="bg-[#232F4B] !border-[#232F4B] text-white">
            <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/50">Care standard</p>
            <p className="font-display mt-1 text-[20px] font-bold leading-snug">2 walks · 3 meals · play + rest log, every day.</p>
            <p className="mt-2 text-[12.5px] leading-relaxed text-white/60">Owners get photo updates twice daily on WhatsApp — the #1 reason boarding reviews mention us by name.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
