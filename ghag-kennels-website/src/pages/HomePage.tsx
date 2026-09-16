import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  HeartHandshake,
  Quote,
  ShieldCheck,
} from "lucide-react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import PageMeta from "../components/PageMeta";
import DogCard from "../components/DogCard";
import LegalSection from "../components/LegalSection";
import Reveal from "../components/Reveal";
import { DOGS } from "../data/dogs";

const STATS = [
  { icon: CalendarCheck, label: "Rehoming ethically since 2021" },
  { icon: ShieldCheck, label: "AWB registered, Maharashtra" },
  { icon: Clock, label: "Every application answered in 24h" },
  { icon: HeartHandshake, label: "Lifetime take-back promise" },
];

const MINI_STEPS = [
  { n: "1", title: "Apply", desc: "3-min online form" },
  { n: "2", title: "Screening", desc: "15-min video call" },
  { n: "3", title: "Meet & Greet", desc: "At our Andheri facility" },
  { n: "4", title: "Handover", desc: "Home check + health kit" },
];

const TESTIMONIALS = [
  {
    quote:
      "We expected a shop. Instead we got a counselling session, a home visit, and the calmest beagle in Mumbai.",
    name: "Priya & Rohan S.",
    detail: "Adopted Milo · Beagle · 2025",
  },
  {
    quote:
      "They gently talked us out of a husky for our 1BHK and towards an indie. Best advice we never asked for.",
    name: "Aditi K.",
    detail: "Adopted Chikoo · Indie · 2024",
  },
  {
    quote:
      "The health kit, the vet on WhatsApp, the honesty about what a dog actually costs. This is how it should be done.",
    name: "Farhan M.",
    detail: "Adopted Zara · Labrador · 2025",
  },
];

export default function HomePage() {
  const featured = DOGS.filter((d) => d.status === "Available").slice(0, 3);

  return (
    <>
      <PageMeta
        title="Ghag Kennels — Ethical Dog Rehoming in Mumbai"
        description="Ghag Kennels is an ethical dog rehoming platform in Andheri West, Mumbai. Vet-checked, vaccinated, microchipped pups. No cart, no instant buy — only screened, loving homes."
      />
      <Hero />
      <Marquee />

      {/* Featured pups */}
      <section className="bg-white py-[72px]">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="eyebrow">Looking for homes</span>
                <h2 className="font-display mt-3 text-[32px] font-bold leading-[1.05] tracking-[-0.01em] sm:text-[42px]">
                  A few of the pups
                  <br className="hidden sm:block" /> waiting right now
                </h2>
              </div>
              <Link to="/dogs" className="btn btn-secondary w-fit">
                View all pups <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((dog, i) => (
              <DogCard key={dog.id} dog={dog} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <div className="grid grid-cols-1 gap-4 rounded-[28px] bg-mint p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-white text-sage-deep shadow-sm">
                    <s.icon size={20} />
                  </span>
                  <p className="text-[14px] font-bold leading-snug text-mint-ink">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process preview */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="eyebrow">No instant buying</span>
                <h2 className="font-display mt-3 text-[32px] font-bold leading-[1.05] tracking-[-0.01em] sm:text-[42px]">
                  Four calm steps to
                  <br className="hidden sm:block" /> the right dog
                </h2>
              </div>
              <Link to="/process" className="btn btn-secondary w-fit">
                See the full process <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MINI_STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <Link
                  to="/process"
                  className="lift group block h-full rounded-[20px] border-[3px] border-sand bg-white p-6"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-[14px] font-bold text-white transition-colors group-hover:bg-clay">
                    {step.n}
                  </span>
                  <h4 className="mt-4 text-[16px] font-bold">{step.title}</h4>
                  <p className="mt-1 text-[13px] text-muted">{step.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-parchment py-20">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <span className="eyebrow">From Ghag families</span>
            <h2 className="font-display mt-3 max-w-[600px] text-[32px] font-bold leading-[1.05] tracking-[-0.01em] sm:text-[42px]">
              Homes, not transactions
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="lift flex h-full flex-col rounded-[24px] border-[3px] border-sand bg-white p-7">
                  <Quote size={22} className="text-clay" fill="currentColor" strokeWidth={0} />
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[#475569]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-[#F6E3CC] pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/15 text-[13px] font-bold text-sage-deep">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-[14px] font-bold">{t.name}</p>
                      <p className="text-[12px] text-faint">{t.detail}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Legal banner (shared component) */}
      <LegalSection />

      {/* CTA band */}
      <section className="pb-20 pt-4">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-clay to-[#1E3A8A] px-6 py-14 text-center text-white sm:px-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#F97316]/30 blur-2xl"
              />
              <h2 className="font-display relative text-[30px] font-bold leading-[1.08] sm:text-[40px]">
                Ready when you are.
                <span className="block italic text-[#EFF6FF]">The pups certainly are.</span>
              </h2>
              <p className="relative mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-[#EFF6FF]">
                Start a 3-minute application today — no payment, no pressure,
                and an honest answer within 24 hours.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/apply" className="btn btn-white !px-7 !py-3.5 !text-[15px]">
                  Apply for adoption <ArrowRight size={16} />
                </Link>
                <Link
                  to="/dogs"
                  className="btn !px-7 !py-3.5 !text-[15px] border border-white/40 text-white hover:bg-white/10 hover:-translate-y-0.5"
                >
                  Browse pups first
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
