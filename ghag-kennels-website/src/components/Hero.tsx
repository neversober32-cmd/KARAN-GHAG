import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Play, ShieldCheck, Star } from "lucide-react";
import Reveal from "./Reveal";
import { DOGS } from "../data/dogs";

export default function Hero() {
  const featured = DOGS.find((d) => d.status === "Available") ?? DOGS[0];

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* soft background washes — mint + faint orange */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(circle, #D7F0D9 0%, rgba(215,240,217,0) 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10%] left-[-12%] h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%)" }}
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-5 pt-14 sm:px-8">
        {/* Centered hook */}
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-[11px] font-extrabold tracking-[0.12em] text-mint-ink">
              <ShieldCheck size={14} strokeWidth={2.6} />
              AWB REGISTERED &nbsp;•&nbsp; MUMBAI &nbsp;•&nbsp; NO PUPS UNDER 8 WEEKS
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="font-display mt-6 max-w-[820px] text-[44px] leading-[1.02] tracking-[-0.02em] sm:text-[62px] lg:text-[72px] lg:leading-[0.98]">
              We don&rsquo;t sell dogs.
              <span className="block">
                We find them{" "}
                <span className="relative inline-block whitespace-nowrap text-sage">
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
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-muted sm:text-[17px]">
              Every pup at Ghag Kennels is vet-checked, vaccinated, microchipped
              and socialized. No cart. No instant buy. Only screened, loving homes.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/dogs" className="btn btn-primary !px-7 !py-3.5 !text-[15px]">
                Meet Our Dogs <ArrowRight size={17} />
              </Link>
              <Link to="/process" className="btn btn-secondary !px-7 !py-3.5 !text-[15px]">
                How it Works
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Stage: floating cards + hero visual */}
        <div className="mt-14 grid grid-cols-1 items-center gap-6 lg:grid-cols-[0.85fr_1.3fr_0.85fr]">
          {/* Left floating card — featured pup */}
          <Reveal delay={120}>
            <Link
              to={`/dogs/${featured.id}`}
              className="lift mx-auto block w-full max-w-[260px] rounded-[24px] border-[3px] border-sand bg-white p-4 text-left"
            >
              <div className="relative">
                <img
                  src={featured.image}
                  alt={`${featured.name} — ${featured.breed} puppy`}
                  className="h-[150px] w-full rounded-[16px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute -bottom-4 -right-3 flex h-11 w-11 items-center justify-center rounded-full bg-sage-deep text-white shadow-lg transition-transform duration-300 hover:scale-110">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <p className="mt-5 text-[14px] font-extrabold">{featured.name} · {featured.breed.split(" (")[0]}</p>
              <p className="mt-1 text-[13px] font-bold text-sage">{featured.age} · Ready to meet</p>
            </Link>
          </Reveal>

          {/* Center hero visual */}
          <Reveal delay={60}>
            <img
              src="/images/hero.jpg"
              alt="Happy Indian family playing with two golden retriever puppies in a bright Mumbai apartment"
              className="h-[320px] w-full rounded-[32px] border-[3px] border-sand object-cover shadow-[0_24px_64px_rgba(11,46,16,0.18)] sm:h-[420px] lg:h-[460px]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </Reveal>

          {/* Right floating card — meet & greet reels */}
          <Reveal delay={180}>
            <div className="lift mx-auto block w-full max-w-[260px] rounded-[24px] border-[3px] border-sand bg-white p-4">
              <div className="relative">
                <img
                  src="/images/facility.jpg"
                  alt="Inside the Ghag Kennels facility in Andheri West"
                  className="h-[150px] w-full rounded-[16px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute -bottom-4 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-sage-deep text-white shadow-lg">
                  <Play size={17} fill="currentColor" strokeWidth={0} />
                </span>
              </div>
              <p className="mt-5 text-center text-[13px] font-bold leading-snug">
                Watch meet &amp; greet reels on Instagram
                <span className="mt-0.5 block text-clay-deep">@ghagkennels</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Peeking pups + 3-panel band (CozyPaws-style) */}
      <div className="relative mt-16">
        <img
          src="/images/peek.png"
          alt=""
          aria-hidden
          className="pointer-events-none relative z-10 mx-auto -mb-px block w-full max-w-[1050px] select-none mix-blend-multiply"
        />
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left soft-green stat */}
          <div className="bg-mint px-8 py-10 text-center">
            <p className="font-display text-[40px] leading-none text-ink sm:text-[46px]">200+</p>
            <p className="mx-auto mt-3 max-w-[240px] text-[13.5px] font-bold leading-relaxed text-mint-ink">
              Happy homes across Mumbai since 2021 — and counting
            </p>
          </div>

          {/* Center dark-green CTA */}
          <div className="flex flex-col items-center justify-center bg-forest px-8 py-10 text-center">
            <h2 className="font-display text-[26px] leading-tight text-white sm:text-[30px]">
              Best friends
              <span className="block">for your family</span>
            </h2>
            <Link to="/dogs" className="btn btn-primary mt-5 !px-7 !py-3.5 !text-[15px]">
              Meet the pups <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right soft-green rating */}
          <div className="flex flex-col items-center justify-center bg-mint px-8 py-10 text-center">
            <p className="flex items-center gap-2 font-display text-[40px] leading-none text-ink sm:text-[46px]">
              4.9
              <Star size={34} className="text-clay" fill="currentColor" strokeWidth={0} />
            </p>
            <p className="mx-auto mt-3 max-w-[240px] text-[13.5px] font-bold leading-relaxed text-mint-ink">
              Based on reviews from Ghag families across the city
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
