import { FileText, ScrollText, ShieldCheck } from "lucide-react";
import LegalSection from "../components/LegalSection";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";

const LAWS = [
  {
    title: "Prevention of Cruelty to Animals Act, 1960",
    desc: "The foundation of animal welfare law in India — every practice at Ghag is built to exceed it.",
  },
  {
    title: "Dog Breeding & Marketing Rules, 2017",
    desc: "Requires breeder registration, age minimums, medical records and traceability. We comply, and report annually.",
  },
  {
    title: "Pet Shop Rules, 2018",
    desc: "Standards for housing, care and sale of animals. Our facility is open for you to inspect at every Meet & Greet.",
  },
  {
    title: "AWBI & State Board Guidelines",
    desc: "We are registered with the Maharashtra State Animal Welfare Board and follow AWBI breeding advisories.",
  },
];

const DOCS = [
  { title: "Adoption agreement", desc: "Plain-language, both parties signed — including our lifetime take-back clause" },
  { title: "Vaccination booklet", desc: "DHPPi + Rabies record with batch stickers and due dates" },
  { title: "Microchip certificate", desc: "Registered number, transferred to your name" },
  { title: "Fee receipt", desc: "For the offline adoption fee — itemized, no hidden charges" },
];

export default function LegalPage() {
  return (
    <div className="py-12">
      <PageMeta
        title="Legal & Ethics — Ghag Kennels"
        description="How Ghag Kennels complies with Indian animal welfare law: AWB registration, PCA Act standards, no online payment for live animals, and a lifetime take-back promise."
      />
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-4">
            <span className="eyebrow">Legal & ethics</span>
            <h1 className="font-display mt-3 max-w-[680px] text-[34px] font-bold leading-[1.05] tracking-[-0.01em] sm:text-[46px]">
              Registered, inspected, accountable
            </h1>
            <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-muted">
              Ethics you can verify — not just a vibe. Our registration number
              is on this page, on our facility wall, and in every adoption file.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Reuse the dark banner */}
      <LegalSection />

      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-6 pb-16 lg:grid-cols-2">
          {/* Laws */}
          <Reveal>
            <div className="lift h-full rounded-[24px] border border-sand bg-white p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint text-mint-ink">
                  <ScrollText size={20} />
                </span>
                <h2 className="font-display text-[20px] font-bold">The rules we answer to</h2>
              </div>
              <ul className="mt-5 space-y-5">
                {LAWS.map((law) => (
                  <li key={law.title} className="flex items-start gap-3.5">
                    <ShieldCheck size={18} className="mt-0.5 flex-none text-sage" />
                    <div>
                      <p className="text-[14.5px] font-bold leading-snug">{law.title}</p>
                      <p className="mt-1 text-[13px] leading-relaxed text-muted">{law.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Documents */}
          <Reveal delay={100}>
            <div className="lift h-full rounded-[24px] border border-sand bg-white p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-parchment text-[#7C6A45]">
                  <FileText size={20} />
                </span>
                <h2 className="font-display text-[20px] font-bold">Documents in your handover file</h2>
              </div>
              <ul className="mt-5 space-y-4">
                {DOCS.map((doc, i) => (
                  <li key={doc.title} className="flex items-start gap-4 rounded-[16px] bg-cream p-4">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white text-[13px] font-bold text-sage-deep shadow-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[14.5px] font-bold">{doc.title}</p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-muted">{doc.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
