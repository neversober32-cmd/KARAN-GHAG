import { Check, Package, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const POINTS = [
  {
    title: "Registered with Maharashtra State Animal Welfare Board",
    sub: "Registration certificate: MH-AWB-2024-XXXX — displayed at our facility",
  },
  {
    title: "No pup rehomed under 8 weeks — ever",
    sub: "Mother-raised, naturally weaned, age certified by our vet",
  },
  {
    title: "No online payment for live animals",
    sub: "The adoption fee is paid only after approval — offline, with a receipt",
  },
  {
    title: "Annual reporting to the AWB",
    sub: "Plus a lifetime take-back promise for every Ghag dog, no questions asked",
  },
];

const KIT = [
  "Vaccination booklet & deworming schedule",
  "Microchip certificate (AWB-traceable)",
  "7-day Royal Canin transition pack",
  "Vet records & socialization log",
  "Blanket carrying the mother's scent",
  "Direct vet line for the first 30 days",
];

export default function LegalSection() {
  return (
    <section id="legal" className="py-12">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="rounded-[32px] bg-forest px-6 py-12 text-[#DCEFDA] sm:px-10 lg:px-16 lg:py-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
              {/* Left */}
              <div>
                <span className="eyebrow !text-[#9FD4A2]">Compliance first</span>
                <h2 className="font-display mt-3 text-[30px] font-bold leading-[1.08] text-white sm:text-[40px]">
                  Legal, ethical, transparent
                </h2>
                <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-[#BFE3C0] sm:text-[16px]">
                  As per the Prevention of Cruelty to Animals (Dog Breeding and
                  Marketing) Rules 2017, we are registered with the Maharashtra
                  State Animal Welfare Board — and we hold ourselves to a
                  stricter standard than the law demands.
                </p>

                <ul className="mt-8 space-y-5">
                  {POINTS.map((point) => (
                    <li key={point.title} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white/10 text-[#9FD4A2]">
                        <ShieldCheck size={15} />
                      </span>
                      <div>
                        <p className="text-[15px] font-bold text-white">{point.title}</p>
                        <p className="mt-0.5 text-[13px] text-[#8FC794]">{point.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — health kit */}
              <div className="h-fit rounded-[20px] border border-white/15 bg-white/10 p-6 backdrop-blur-sm lg:mt-2">
                <div className="flex items-center gap-2.5">
                  <Package size={20} className="text-clay" />
                  <h4 className="font-display text-[19px] font-bold text-white">
                    Health Kit Included
                  </h4>
                </div>
                <p className="mt-1.5 text-[12px] font-medium text-[#8FC794]">
                  Free with every adoption — no add-ons, no upsells
                </p>
                <ul className="mt-5 space-y-3">
                  {KIT.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] font-medium text-[#DCEFDA]">
                      <Check size={15} strokeWidth={3} className="mt-0.5 flex-none text-[#9FD4A2]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-12 border-t border-white/10 pt-6 text-[11px] font-medium tracking-wide text-[#6FA476]">
              Prevention of Cruelty to Animals (Dog Breeding and Marketing) Rules, 2017 &nbsp;•&nbsp;
              Pet Shop Rules, 2018 &nbsp;•&nbsp; AWBI Guidelines &nbsp;•&nbsp; Registration No. MH-AWB-2024-XXXX
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
