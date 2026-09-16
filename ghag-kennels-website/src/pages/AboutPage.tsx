import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartHandshake,
  PawPrint,
  Scale,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Homes, not sales",
    desc: "There is no cart, no instant buy button and no online payment for a living animal — ever. Every match starts with a conversation.",
  },
  {
    icon: Stethoscope,
    title: "Health comes first",
    desc: "Every pup is vet-examined, vaccinated on schedule, dewormed and microchipped before it meets a family. Full records travel with the dog.",
  },
  {
    icon: Scale,
    title: "Radical honesty",
    desc: "If a breed doesn't fit your home, we'll say so — even when it costs us an adoption. We'd rather lose a sale than rehome a dog twice.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime promise",
    desc: "If life changes and a Ghag dog can no longer stay with you, the dog comes back to us. No questions, no judgment, for life.",
  },
];

const TIMELINE = [
  {
    year: "2021",
    title: "A family, a compound, one beagle",
    desc: "Ghag Kennels began as the Ghag family rehoming a single litter of beagles properly — with vet checks and home visits — in Andheri West.",
  },
  {
    year: "2022",
    title: "First rescue intake",
    desc: "We started taking in abandoned pups from across Mumbai's western suburbs, running a full rescue health protocol before rehoming.",
  },
  {
    year: "2024",
    title: "AWB registration",
    desc: "Registered with the Animal Welfare Board of India, Maharashtra — our screening, records and facilities audited to exceed the minimum.",
  },
  {
    year: "2026",
    title: "200+ dogs, zero returns",
    desc: "Over two hundred dogs placed in screened Mumbai homes, with a lifetime take-back promise behind every single one of them.",
  },
];

const TEAM = [
  {
    name: "Karan Ghag",
    role: "Founder & Head of Rehoming",
    bio: "Runs screening and every family match personally. Has talked more families out of the wrong dog than into the right one.",
  },
  {
    name: "Dr. Meera Joshi",
    role: "Consulting Veterinarian",
    bio: "Oversees vaccination schedules, health certifications and the rescue protocol. Available to adopters on WhatsApp after handover.",
  },
  {
    name: "Sunita Ghag",
    role: "Facility & Socialisation",
    bio: "Raises every litter in the whelping room — household sounds, gentle handling and crate comfort start long before adoption day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Us — Ghag Kennels"
        description="Ghag Kennels is a family-run, AWB-registered ethical dog rehoming kennel in Andheri West, Mumbai. Meet the story, the values and the people behind every placement."
      />

      {/* Intro */}
      <section className="relative overflow-hidden pt-14 pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-8%] h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, #FFEDD5 0%, rgba(255,237,213,0) 70%)" }}
        />
        <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h1 className="font-display mt-4 max-w-[720px] text-[38px] font-bold leading-[1.04] tracking-[-0.02em] sm:text-[52px]">
              A family kennel that measures success in{" "}
              <span className="italic text-sage-deep">decades</span>, not sales
            </h1>
            <p className="mt-5 max-w-[620px] text-[16px] leading-relaxed text-muted">
              Ghag Kennels is run by the Ghag family out of Andheri West, Mumbai.
              We breed a small number of litters a year, take in rescued pups,
              and place every one of them through the same slow, screened,
              honest process. We are not a pet shop, and we never will be.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                { n: "2021", l: "Rehoming ethically since" },
                { n: "200+", l: "Dogs placed in Mumbai homes" },
                { n: "24h", l: "Answer on every application" },
                { n: "100%", l: "Lifetime take-back promise" },
              ].map((s) => (
                <div key={s.l} className="rounded-[20px] border-[3px] border-sand bg-white p-5 text-center">
                  <p className="font-display text-[28px] font-bold text-sage-deep">{s.n}</p>
                  <p className="mt-1 text-[12.5px] font-medium leading-snug text-muted">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facility / story image */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative">
                <div className="overflow-hidden rounded-[28px] border-[3px] border-sand">
                  <img
                    src="/images/facility.jpg"
                    alt="Inside the Ghag Kennels facility in Andheri West, Mumbai"
                    className="h-[340px] w-full object-cover sm:h-[420px]"
                    loading="lazy"
                  />
                </div>
                <span className="absolute -bottom-4 left-6 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[12px] font-bold text-white shadow-lg">
                  <PawPrint size={14} className="text-[#FDBA74]" /> Our facility · Veera Desai Road, Andheri West
                </span>
              </div>
              <div>
                <span className="eyebrow">What we believe</span>
                <h2 className="font-display mt-3 text-[30px] font-bold leading-[1.08] tracking-[-0.01em] sm:text-[38px]">
                  Four rules we&rsquo;ve never broken
                </h2>
                <div className="mt-7 space-y-5">
                  {VALUES.map((v) => (
                    <div key={v.title} className="flex items-start gap-4">
                      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-mint text-sage-deep">
                        <v.icon size={19} />
                      </span>
                      <div>
                        <h3 className="text-[15.5px] font-bold">{v.title}</h3>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-parchment py-20">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <span className="eyebrow">How we got here</span>
            <h2 className="font-display mt-3 text-[32px] font-bold leading-[1.05] tracking-[-0.01em] sm:text-[42px]">
              Five years, one standard
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 90}>
                <div className="lift flex h-full flex-col rounded-[24px] border-[3px] border-sand bg-white p-6">
                  <span className="font-display text-[26px] font-bold text-clay-deep">{t.year}</span>
                  <h3 className="mt-2 text-[15.5px] font-bold leading-snug">{t.title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <span className="eyebrow">The people</span>
            <h2 className="font-display mt-3 text-[32px] font-bold leading-[1.05] tracking-[-0.01em] sm:text-[42px]">
              Who you&rsquo;ll actually meet
            </h2>
            <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-muted">
              No call centres, no sales staff. The people below are the ones who
              answer your WhatsApp, run your screening call and hand you your dog.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <div className="lift flex h-full flex-col rounded-[24px] border-[3px] border-sand bg-white p-7">
                  <span className="font-display flex h-14 w-14 items-center justify-center rounded-full bg-sage/12 text-[19px] font-bold text-sage-deep">
                    {m.name
                      .split(" ")
                      .map((w) => w.charAt(0))
                      .join("")}
                  </span>
                  <h3 className="mt-5 text-[17px] font-bold">{m.name}</h3>
                  <p className="mt-0.5 text-[12px] font-bold uppercase tracking-[0.12em] text-clay-deep">
                    {m.role}
                  </p>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-muted">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-clay to-[#1E3A8A] px-6 py-14 text-center text-white sm:px-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
              />
              <h2 className="font-display relative text-[30px] font-bold leading-[1.08] sm:text-[40px]">
                Come see for yourself.
                <span className="block italic text-[#EFF6FF]">Visits are by appointment.</span>
              </h2>
              <p className="relative mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-[#EFF6FF]">
                Meet the pups, walk the facility and ask us the hard questions —
                that&rsquo;s exactly what the process is for.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="btn btn-white !px-7 !py-3.5 !text-[15px]">
                  Contact us <ArrowRight size={16} />
                </Link>
                <Link
                  to="/dogs"
                  className="btn !px-7 !py-3.5 !text-[15px] border border-white/40 text-white hover:bg-white/10 hover:-translate-y-0.5"
                >
                  Meet the pups
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
