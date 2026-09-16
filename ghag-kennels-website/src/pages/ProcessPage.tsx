import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  FileText,
  Home,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";

interface Step {
  n: string;
  icon: LucideIcon;
  title: string;
  time: string;
  desc: string;
  points: string[];
}

const STEPS: Step[] = [
  {
    n: "1",
    icon: FileText,
    title: "Application",
    time: "3 minutes, online",
    desc: "Tell us about your home, your routine, and the life a dog would walk into.",
    points: [
      "Home type, family members, work hours",
      "Any past experience with dogs",
      "We reply within 24 hours — always",
    ],
  },
  {
    n: "2",
    icon: Video,
    title: "Screening Call",
    time: "15 minutes, video call",
    desc: "A relaxed conversation, not an interrogation. You interview us too.",
    points: [
      "Lifestyle fit and expectations",
      "Honest talk about costs and effort",
      "Ask us anything — including the hard stuff",
    ],
  },
  {
    n: "3",
    icon: Users,
    title: "Meet & Greet",
    time: "45–60 min at Andheri West",
    desc: "Spend unhurried time with the pups at our facility, with our vet present.",
    points: [
      "Whole family is welcome — bring the kids",
      "See where and how the pups are raised",
      "Zero obligation to proceed",
    ],
  },
  {
    n: "4",
    icon: Home,
    title: "Home Check & Handover",
    time: "One visit, then welcome home",
    desc: "We verify your home is safe, then hand over your pup the right way.",
    points: [
      "Balcony grills, wires, escape routes checked",
      "Adoption agreement + full health kit",
      "Fee paid offline, against a receipt",
    ],
  },
];

const FAQS = [
  {
    q: "Do you charge an adoption fee?",
    a: "Yes — a transparent adoption fee that covers vaccinations, microchipping, deworming, the health kit and part of the mother's care. The exact amount is shared after your application is approved, and it is always paid offline at handover, against a receipt. We never take payment online for a live animal.",
  },
  {
    q: "Can I reserve a pup online right now?",
    a: "No — and that's deliberate. A pup goes to the best-matched home, not the fastest click. 'Reserved' on a profile means a family is mid-process; you can still join the waitlist, and we're honest about your chances.",
  },
  {
    q: "I live outside Mumbai. Can I still adopt?",
    a: "We currently rehome within Mumbai and Pune, because every adoption includes a physical home check and a 7-day follow-up visit. If you're further away, write to us — we'll happily point you to a registered, ethical rehoming group near you.",
  },
  {
    q: "What if it doesn't work out?",
    a: "Every Ghag dog has a lifetime take-back promise — no questions, no judgment, ever. We'd far rather a dog come back to us than end up abandoned or passed around. That said, our screening exists precisely so this rarely happens.",
  },
  {
    q: "Are Indies really good apartment dogs?",
    a: "Genuinely, yes. Indian Pariah dogs evolved here — they handle the climate, need moderate exercise, and are famously hardy and intelligent. Chai, for example, is calmer than most pedigree pups her age. We'll still assess fit honestly for your specific home.",
  },
  {
    q: "What documents do I need?",
    a: "A government ID, address proof, and — if you live in a housing society — a pet-friendly confirmation or NOC. If your society is resistant, we'll share the legal position (societies cannot ban pets outright) and help you draft the request.",
  },
];

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-[20px] border transition-colors duration-300 ${open ? "border-sage/40 bg-white" : "border-sand bg-white"}`}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-bold">{q}</span>
        <span
          className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border-[3px] border-sand text-muted transition-transform duration-300 ${
            open ? "rotate-180 border-sage/40 bg-mint text-sage-deep" : ""
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-[14px] leading-relaxed text-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProcessPage() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="py-14">
      <PageMeta
        title="Adoption Process — Ghag Kennels"
        description="The four-step Ghag Kennels adoption process: apply, screening call, meet & greet, and handover with a home check. No instant buying, no online payment."
      />
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        {/* Intro */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <span className="eyebrow">How it works</span>
            <h1 className="font-display mt-3 text-[34px] font-bold leading-[1.05] tracking-[-0.01em] sm:text-[46px]">
              Adopt in four calm steps.
              <span className="block italic text-sage-deep">Never in one click.</span>
            </h1>
            <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-muted">
              Good matches aren&rsquo;t made at checkout. Our process takes 5–9
              days on purpose — long enough to be sure, short enough to be kind
              to a waiting pup.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/apply" className="btn btn-primary !px-6 !py-3.5 !text-[15px]">
                Start your application <ArrowRight size={16} />
              </Link>
              <Link to="/dogs" className="btn btn-secondary !px-6 !py-3.5 !text-[15px]">
                Meet the pups first
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div aria-hidden className="absolute inset-0 rotate-[2deg] scale-[1.01] rounded-[36px] bg-mint" />
              <img
                src="/images/facility.jpg"
                alt="A family meeting puppies at the Ghag facility in Andheri West"
                className="relative h-[300px] w-full rounded-[28px] object-cover shadow-[0_20px_48px_rgba(0,0,0,0.1)] sm:h-[380px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-[14px] bg-white px-4 py-3 shadow-lg">
                <Clock size={15} className="text-sage-deep" />
                <p className="text-[12.5px] font-bold">Average: application → handover in 5–9 days</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Steps */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <div className="lift h-full rounded-[24px] border-[3px] border-sand bg-white p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-[16px] font-bold text-white">
                    {step.n}
                  </span>
                  <step.icon size={22} strokeWidth={1.8} className="text-clay" />
                </div>
                <h2 className="font-display mt-5 text-[22px] font-bold">{step.title}</h2>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.12em] text-sage">{step.time}</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[#3F6247]">{step.desc}</p>
                <ul className="mt-4 space-y-2 border-t border-[#CBE7CD] pt-4">
                  {step.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[13.5px] font-medium text-muted">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-clay" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* FAQ */}
        <section className="mt-24">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow !justify-center">Honest answers</span>
              <h2 className="font-display mt-3 text-[32px] font-bold leading-[1.05] tracking-[-0.01em] sm:text-[42px]">
                Questions every family asks
              </h2>
              <p className="mx-auto mt-3 max-w-[480px] text-[15px] text-muted">
                Including the uncomfortable ones about money, society NOCs and
                what happens if things go wrong.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 flex max-w-[760px] flex-col gap-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <FaqItem q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mx-auto mt-10 max-w-[760px] rounded-[24px] bg-forest px-7 py-8 text-center sm:px-10">
              <h3 className="font-display text-[24px] font-bold text-white">Still unsure? Talk to a human.</h3>
              <p className="mx-auto mt-2 max-w-[420px] text-[14px] leading-relaxed text-[#BFE3C0]">
                Send us your questions on WhatsApp before you apply — we&rsquo;d
                rather talk you out of the wrong dog than into one.
              </p>
              <Link to="/apply" className="btn btn-white mt-6">
                Start the conversation <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
