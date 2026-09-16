import { Syringe } from "lucide-react";
import HealthSection from "../components/HealthSection";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";

const SCHEDULE = [
  { stage: "Weeks 6–8", items: "DHPPi Dose 1 · First deworming · First vet exam", done: true },
  { stage: "Weeks 9–11", items: "DHPPi Dose 2 · Second deworming · Socialization window", done: true },
  { stage: "Weeks 12–14", items: "Rabies vaccination · Microchip check · Pre-handover exam", done: false },
  { stage: "Annually", items: "Boosters · Full health check · Dental review (with your vet)", done: false },
];

export default function HealthPage() {
  return (
    <div className="pt-14">
      <PageMeta
        title="Health & Vet Care — Ghag Kennels"
        description="Every Ghag Kennels pup is vet-examined, vaccinated, dewormed and microchipped with complete medical records and lifetime vet support on WhatsApp."
      />
      <HealthSection />

      {/* Vaccination schedule */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <div className="rounded-[28px] border border-sand bg-white p-7 sm:p-10">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <span className="eyebrow">Know the timeline</span>
                  <h2 className="font-display mt-3 text-[28px] font-bold leading-[1.08] sm:text-[34px]">
                    The first-year health schedule
                  </h2>
                </div>
                <p className="max-w-[380px] text-[14px] text-muted">
                  You&rsquo;ll always know exactly what&rsquo;s been done and
                  what&rsquo;s next — it&rsquo;s printed in every pup&rsquo;s file.
                </p>
              </div>

              <div className="mt-8 overflow-x-auto">
                <div className="min-w-[640px]">
                  {SCHEDULE.map((row, i) => (
                    <div
                      key={row.stage}
                      className={`flex items-center gap-5 border-b border-[#EAE7DF] px-2 py-5 last:border-b-0 ${
                        i % 2 === 1 ? "bg-[#FAF9F6]" : ""
                      } rounded-[14px]`}
                    >
                      <span
                        className={`flex h-10 w-10 flex-none items-center justify-center rounded-full ${
                          row.done ? "bg-mint text-mint-ink" : "bg-parchment text-[#93825C]"
                        }`}
                      >
                        <Syringe size={16} />
                      </span>
                      <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-[15px] font-bold">{row.stage}</p>
                        <p className="text-[14px] text-muted">{row.items}</p>
                      </div>
                      <span
                        className={`flex-none rounded-full px-3 py-1 text-[11px] font-bold ${
                          row.done ? "status-available" : "bg-parchment text-[#7C6A45]"
                        }`}
                      >
                        {row.done ? "Done with us" : "We guide you"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 rounded-[16px] bg-mint px-5 py-4 text-[13px] font-semibold leading-relaxed text-mint-ink">
                Every Ghag pup arrives already through the first two rows —
                and your free 7-day check-up plus 30-day vet helpline cover the
                transition into rows three and four.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
