import { BadgeCheck, Check, Clock, MapPin, MessageCircle, ShieldCheck, Stethoscope } from "lucide-react";
import Reveal from "./Reveal";

const CHECKLIST = [
  { title: "Vaccination — DHPPi + Rabies", sub: "Certificate included in your handover file" },
  { title: "Deworming schedule — up to date", sub: "Next dose date clearly marked for your vet" },
  { title: "Microchip, AWB-traceable", sub: "Registered and linked to adoption records" },
  { title: "Diet — Royal Canin starter plan", sub: "Plus a 7-day transition pack so tummies stay calm" },
  { title: "Socialization log", sub: "People, sounds, surfaces and short car rides — documented" },
];

export default function HealthSection() {
  return (
    <section id="health" className="pb-20">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Health & vet care</span>
          <div className="mt-3 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <h2 className="font-display max-w-[560px] text-[32px] font-bold leading-[1.05] tracking-[-0.01em] sm:text-[42px]">
              Healthy pups. Honest paperwork.
            </h2>
            <p className="max-w-[380px] text-[15px] text-muted">
              Every Ghag pup leaves with complete medical records — nothing
              verbal, everything on paper.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Checklist card */}
          <Reveal>
            <div className="lift h-full rounded-[24px] border border-sand bg-white p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint text-mint-ink">
                  <ShieldCheck size={21} />
                </span>
                <h3 className="font-display text-[20px] font-bold">Every pup goes home with</h3>
              </div>
              <ul className="mt-4">
                {CHECKLIST.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 border-b border-[#EAE7DF] py-3.5 last:border-b-0"
                  >
                    <span className="mt-0.5 flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-mint text-mint-ink">
                      <Check size={12} strokeWidth={3.2} />
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold">{item.title}</p>
                      <p className="mt-0.5 text-[12px] text-faint">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Vet card */}
          <Reveal delay={120}>
            <div className="lift flex h-full flex-col rounded-[24px] border border-sand bg-white p-7 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-sage/15 text-sage-deep">
                  <Stethoscope size={24} />
                </span>
                <div>
                  <h3 className="font-display text-[20px] font-bold leading-tight">
                    Dr. Meera Kulkarni
                  </h3>
                  <p className="mt-0.5 text-[13px] font-medium text-muted">
                    BVSc & AH — Consulting Veterinarian, Andheri West
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5">
                <li className="flex items-start gap-3 text-[14px] text-[#45464D]">
                  <Clock size={17} className="mt-0.5 flex-none text-clay" />
                  Facility clinic hours: Tue & Sat, 10:00 am – 1:00 pm
                </li>
                <li className="flex items-start gap-3 text-[14px] text-[#45464D]">
                  <MapPin size={17} className="mt-0.5 flex-none text-clay" />
                  Ghag Facility, Veera Desai Road, Andheri West, Mumbai 400053
                </li>
                <li className="flex items-start gap-3 text-[14px] text-[#45464D]">
                  <MessageCircle size={17} className="mt-0.5 flex-none text-clay" />
                  WhatsApp-first support — usually replies within a few hours
                </li>
              </ul>

              <div className="mt-6 flex items-start gap-3 rounded-[16px] bg-mint p-4 text-mint-ink">
                <BadgeCheck size={19} className="mt-0.5 flex-none" />
                <p className="text-[13px] font-semibold leading-relaxed">
                  Your first post-adoption check-up is free within 7 days — and our
                  vet stays on call for 30 days after handover.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
