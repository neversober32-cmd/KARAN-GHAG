import { Link, useParams } from "react-router-dom";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Baby,
  Building2,
  Cat,
  Check,
  Cpu,
  Dog as DogIcon,
  Heart,
  Home,
  MessageCircle,
  Pill,
  ShieldCheck,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import DogCard from "../components/DogCard";
import Reveal from "../components/Reveal";
import { useInquiry } from "../context/InquiryContext";
import { DOGS, getDog } from "../data/dogs";

const GOOD_WITH_ICONS: Record<string, LucideIcon> = {
  Kids: Baby,
  "Other dogs": DogIcon,
  Cats: Cat,
  Apartments: Building2,
  "First-time parents": Heart,
  "Active families": Activity,
  "Experienced handlers": ShieldCheck,
  "Large homes": Home,
};

const HEALTH_ICONS: Record<string, LucideIcon> = {
  Vaccination: Syringe,
  Deworming: Pill,
  Microchip: Cpu,
  "Vet exam": Stethoscope,
};

const ENERGY_LEVEL: Record<string, number> = { Low: 1, Moderate: 2, High: 3 };

export default function DogProfilePage() {
  const { dogId } = useParams();
  const dog = getDog(dogId);
  const openInquiry = useInquiry();

  if (!dog) {
    return (
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 py-24 text-center sm:px-8">
        <h1 className="font-display text-[32px] font-bold">That pup isn&rsquo;t here</h1>
        <p className="mt-2 text-[15px] text-muted">It may have found its family already — wonderful news.</p>
        <Link to="/dogs" className="btn btn-primary mt-7">
          <ArrowLeft size={15} /> Back to all pups
        </Link>
      </div>
    );
  }

  const similar = DOGS.filter((d) => d.id !== dog.id).slice(0, 3);
  const energy = ENERGY_LEVEL[dog.energy];

  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        {/* Breadcrumb */}
        <Reveal>
          <nav className="flex items-center gap-2 text-[13px] font-semibold" aria-label="Breadcrumb">
            <Link to="/" className="text-faint transition-colors hover:text-sage-deep">Home</Link>
            <span className="text-sand">/</span>
            <Link to="/dogs" className="text-faint transition-colors hover:text-sage-deep">Dogs</Link>
            <span className="text-sand">/</span>
            <span className="text-ink">{dog.name}</span>
          </nav>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left — image + health */}
          <div>
            <Reveal>
              <div className="relative overflow-hidden rounded-[32px]">
                <img
                  src={dog.image}
                  alt={`${dog.name} — ${dog.breed}, ${dog.age}, ${dog.coat}`}
                  className="h-[380px] w-full object-cover sm:h-[480px]"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <span
                  className={`status-badge absolute left-5 top-5 shadow-sm ${
                    dog.status === "Available" ? "status-available" : "status-reserved"
                  }`}
                >
                  {dog.status}
                </span>
                {dog.rescued && (
                  <span className="status-badge status-rescued absolute right-5 top-5 shadow-sm">
                    <Heart size={11} strokeWidth={2.6} /> Rescued
                  </span>
                )}
              </div>
            </Reveal>

            {/* Health records */}
            <Reveal delay={100}>
              <h2 className="font-display mt-10 text-[24px] font-bold">Health records</h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {dog.health.map((rec) => {
                  const Icon = HEALTH_ICONS[rec.label] ?? ShieldCheck;
                  return (
                    <div key={rec.label} className="lift rounded-[20px] border border-sand bg-white p-5">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-mint text-mint-ink">
                          <Icon size={16} />
                        </span>
                        <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-mint-ink">{rec.label}</p>
                      </div>
                      <p className="mt-3 text-[13.5px] font-medium leading-relaxed text-[#45464D]">{rec.value}</p>
                    </div>
                  );
                })}
              </div>
              <p className="mt-4 flex items-center gap-2 text-[12px] font-medium text-faint">
                <Check size={13} className="text-sage" /> Originals and certificates are handed over with the adoption file.
              </p>
            </Reveal>
          </div>

          {/* Right — info panel */}
          <Reveal delay={60}>
            <div className="lg:sticky lg:top-24">
              <div className="rounded-[28px] border border-sand bg-white p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="font-display text-[40px] font-bold leading-none sm:text-[46px]">{dog.name}</h1>
                    <p className="mt-2.5 text-[14px] font-medium text-muted">
                      {dog.breed} &nbsp;•&nbsp; {dog.age} &nbsp;•&nbsp; {dog.gender} &nbsp;•&nbsp; {dog.coat}
                    </p>
                  </div>
                  <span
                    className={`mt-1 flex flex-none items-center gap-1.5 text-[12px] font-bold ${
                      dog.status === "Available" ? "text-sage-deep" : "text-[#A5821F]"
                    }`}
                  >
                    <span className={`dot-pulse ${dog.status !== "Available" ? "!bg-[#E3B94E]" : ""}`} />
                    {dog.status === "Available" ? "Ready to meet" : "Waitlist"}
                  </span>
                </div>

                {dog.status === "Reserved" && (
                  <div className="mt-5 rounded-[14px] bg-[#FFF6DE] px-4 py-3 text-[13px] font-semibold text-[#7A5A17]">
                    {dog.name} is reserved while a family completes their home check.
                    Waitlist is open — we&rsquo;ll reach out if it doesn&rsquo;t complete.
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {dog.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <p className="mt-6 text-[15px] leading-relaxed text-[#45464D]">{dog.story}</p>

                {/* Facts */}
                <div className="mt-7 space-y-5 border-t border-[#EAE7DF] pt-6">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-faint">Energy level</p>
                    <div className="mt-2.5 flex items-center gap-2">
                      {[1, 2, 3].map((seg) => (
                        <span
                          key={seg}
                          className={`h-2.5 w-14 rounded-full ${seg <= energy ? "bg-sage" : "bg-[#EEEDF0]"}`}
                        />
                      ))}
                      <span className="ml-1.5 text-[13px] font-bold text-sage-deep">{dog.energy}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-faint">Expected adult size</p>
                    <p className="mt-1.5 text-[14px] font-semibold">{dog.adultSize}</p>
                  </div>

                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-faint">Great for</p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {dog.goodWith.map((g) => {
                        const Icon = GOOD_WITH_ICONS[g] ?? Check;
                        return (
                          <span
                            key={g}
                            className="flex items-center gap-1.5 rounded-full border border-sand bg-cream px-3 py-1.5 text-[12px] font-semibold text-[#45464D]"
                          >
                            <Icon size={13} className="text-clay" /> {g}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-faint">Training so far</p>
                    <p className="mt-1.5 text-[14px] font-medium leading-relaxed text-[#45464D]">{dog.training}</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 border-t border-[#EAE7DF] pt-6 sm:flex-row">
                  <button onClick={() => openInquiry(dog.name)} className="btn btn-primary flex-1 !py-3.5 !text-[15px]">
                    <MessageCircle size={16} /> Inquire about {dog.name}
                  </button>
                  <Link to={`/apply?pup=${dog.id}`} className="btn btn-secondary flex-1 !py-3.5 !text-[15px]">
                    Apply for adoption <ArrowRight size={15} />
                  </Link>
                </div>
                <p className="mt-3.5 text-center text-[11px] leading-relaxed text-faint">
                  No payment online. The adoption fee is disclosed after approval and paid offline, with a receipt.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Similar pups */}
        <section className="mt-20">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-[28px] font-bold leading-[1.1] sm:text-[34px]">
                Other pups worth meeting
              </h2>
              <Link to="/dogs" className="btn btn-secondary hidden w-fit sm:flex">
                View all <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((d, i) => (
              <DogCard key={d.id} dog={d} index={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
