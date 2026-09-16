import { PawPrint } from "lucide-react";

const ITEMS = [
  "Vet Checked",
  "Vaccinated & Dewormed",
  "Microchipped",
  "8+ Weeks Only",
  "AWB Registered",
  "Lifetime Support",
  "No Instant Buying",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee overflow-hidden border-y-[3px] border-sand bg-[#FFF3E4] py-4" aria-hidden>
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-8 pr-8 text-[12px] font-bold uppercase tracking-[0.22em] text-sage-deep"
              >
                {item}
                <PawPrint size={13} className="text-clay" strokeWidth={2.4} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
