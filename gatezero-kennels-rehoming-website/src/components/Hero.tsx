import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const TRUST = ["Vet Checked", "Vaccinated", "Microchipped", "Lifetime Support"];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* soft background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, #E9EFFA 0%, rgba(232,240,233,0) 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-12%] h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #F6E5CF 0%, rgba(244,227,211,0) 70%)" }}
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 px-5 pt-16 pb-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-24">
        {/* Left — copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-mint-ink">
              <ShieldCheck size={14} strokeWidth={2.4} />
              AWB REGISTERED &nbsp;•&nbsp; MUMBAI &nbsp;•&nbsp; NO PUPS UNDER 8 WEEKS
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="font-display mt-6 max-w-[640px] text-[42px] font-bold leading-[1.02] tracking-[-0.02em] sm:text-[56px] lg:text-[64px] lg:leading-[0.95]">
              We don&rsquo;t sell dogs.{" "}
              <span className="block">
                We find them{" "}
                <span className="relative inline-block whitespace-nowrap italic text-sage-deep">
                  family.
                  <svg
                    aria-hidden
                    viewBox="0 0 220 22"
                    className="absolute -bottom-2 left-0 w-full text-clay"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M4 15 C 40 6, 75 20, 110 12 S 185 5, 216 13"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-muted sm:text-[18px]">
              Gatezero is an ethical rehoming platform in Mumbai. Every pup is
              vet-checked, vaccinated, microchipped and socialized. No cart. No
              instant buy. Only screened, loving homes.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/dogs" className="btn btn-primary !px-6 !py-3.5 !text-[15px]">
                Meet Our Dogs <ArrowRight size={17} />
              </Link>
              <Link to="/process" className="btn btn-secondary !px-6 !py-3.5 !text-[15px]">
                How it Works
              </Link>
            </div>
          </Reveal>

          <Reveal delay={310}>
            <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap">
              {TRUST.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] font-semibold text-mint-ink">
                  <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-mint">
                    <Check size={11} strokeWidth={3.2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Right — visual */}
        <Reveal delay={150} className="relative">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -z-0 rotate-[2.5deg] scale-[1.015] rounded-[40px] bg-mint"
            />
            <img
              src="/images/hero.jpg"
              alt="Happy Indian family playing with two golden retriever puppies in a bright Mumbai apartment"
              className="relative h-[420px] w-full rounded-[32px] object-cover shadow-[0_24px_64px_rgba(0,0,0,0.12)] sm:h-[500px] lg:h-[560px]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />

            {/* floating card */}
            <div className="animate-floaty absolute bottom-6 left-4 flex items-center gap-3 rounded-[16px] bg-white px-[18px] py-[14px] shadow-[0_16px_40px_rgba(0,0,0,0.14)] sm:left-6 lg:-left-8">
              <span className="dot-pulse" aria-hidden />
              <div>
                <p className="text-[13px] font-bold leading-tight">2 Happy Homes This Week</p>
                <p className="mt-0.5 text-[11px] font-medium text-faint">Andheri, Mumbai</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
