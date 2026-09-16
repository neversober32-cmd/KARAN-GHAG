import { useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { DOGS, getDog } from "../data/dogs";
import Reveal from "../components/Reveal";

const NEXT_STEPS = [
  { icon: Clock, text: "We review every application within 24 hours" },
  { icon: MessageCircle, text: "A screening call on WhatsApp — relaxed, 15 minutes" },
  { icon: MapPin, text: "Meet the pups at our Andheri West facility" },
];

export default function ApplyPage() {
  const [searchParams] = useSearchParams();
  const preselected = getDog(searchParams.get("pup") ?? undefined)?.name ?? "";
  const [pup, setPup] = useState(preselected);
  const [refId, setRefId] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const id = `GZ-2026-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    try {
      const existing = JSON.parse(localStorage.getItem("gz_applications") || "[]");
      existing.push({ id, ...data, submittedAt: new Date().toISOString() });
      localStorage.setItem("gz_applications", JSON.stringify(existing));
    } catch {
      /* storage unavailable — still show success for demo */
    }
    setRefId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-14">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 rounded-[32px] border border-sand bg-white p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left */}
            <div>
              <span className="eyebrow">Start here</span>
              <h1 className="font-display mt-3 text-[30px] font-bold leading-[1.08] tracking-[-0.01em] sm:text-[38px]">
                Apply for adoption
              </h1>
              <p className="mt-3 max-w-[440px] text-[15px] leading-relaxed text-muted">
                No payment now. Tell us about your life, and we&rsquo;ll tell you
                honestly whether a Gatezero pup fits into it. We review in 24
                hours and WhatsApp you.
              </p>

              <div className="mt-7 rounded-[16px] bg-parchment p-5">
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#7C6A45]">
                  What happens next
                </p>
                <ul className="mt-4 space-y-3.5">
                  {NEXT_STEPS.map((step) => (
                    <li key={step.text} className="flex items-start gap-3 text-[14px] font-medium text-[#45464D]">
                      <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white text-sage-deep shadow-sm">
                        <step.icon size={14} />
                      </span>
                      {step.text}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-start gap-2.5 border-t border-[#E4DED0] pt-4">
                  <ShieldCheck size={16} className="mt-0.5 flex-none text-sage-deep" />
                  <p className="text-[12px] leading-relaxed text-[#7C6A45]">
                    We never ask for payment online. If approved, the adoption
                    fee is paid offline at handover — against a receipt.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form / success */}
            {refId ? (
              <div className="fade-in flex flex-col items-center justify-center rounded-[24px] border border-sand bg-cream px-6 py-16 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mint">
                  <CheckCircle2 size={34} className="text-sage-deep" />
                </span>
                <h2 className="font-display mt-5 text-[26px] font-bold">Application Received</h2>
                <p className="mt-2 max-w-[320px] text-[14px] leading-relaxed text-muted">
                  We&rsquo;ve saved your application. Our team will review it and
                  WhatsApp you within 24 hours.
                </p>
                <span className="mt-5 rounded-full border border-sand bg-white px-4 py-2 text-[12px] font-bold tracking-wide text-sage-deep">
                  Ref: {refId}
                </span>
                <Link to="/dogs" className="btn btn-secondary mt-7">
                  Browse pups meanwhile <ArrowRight size={15} />
                </Link>
              </div>
            ) : (
              <form id="applyForm" onSubmit={handleSubmit} className="flex flex-col gap-4">
                {preselected && (
                  <div className="fade-in flex items-center gap-2.5 rounded-[14px] bg-mint px-4 py-3 text-[13px] font-semibold text-mint-ink">
                    <CheckCircle2 size={16} />
                    Applying with {preselected} in mind — you can change this below.
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="label">Full Name</label>
                    <input id="fullName" name="fullName" required placeholder="Aarav Mehta" className="input" autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="label">Phone (WhatsApp)</label>
                    <input id="phone" name="phone" type="tel" required pattern="[0-9+()\-\s]{10,16}" placeholder="98200 12345" className="input" autoComplete="tel" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="label">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" className="input" autoComplete="email" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="city" className="label">City</label>
                    <select id="city" name="city" required className="input" defaultValue="Mumbai">
                      <option>Mumbai</option>
                      <option>Pune</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="homeType" className="label">Home Type</label>
                    <select id="homeType" name="homeType" required className="input" defaultValue="Apartment">
                      <option>Apartment</option>
                      <option>Bungalow</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="pup" className="label">Preferred Pup</label>
                  <select
                    id="pup"
                    name="pup"
                    required
                    className="input"
                    value={pup}
                    onChange={(e) => setPup(e.target.value)}
                  >
                    <option value="" disabled>Select a pup</option>
                    {DOGS.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} — {d.breed}{d.status === "Reserved" ? " (waitlist)" : ""}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet — advise me</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="why" className="label">Why do you want a dog?</label>
                  <textarea
                    id="why"
                    name="why"
                    rows={3}
                    required
                    placeholder="Your daily routine, family members, any past experience with dogs…"
                    className="input resize-none"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full !py-4 !text-[16px]">
                  Submit Application <ArrowRight size={17} />
                </button>
                <p className="text-center text-[11px] leading-relaxed text-faint">
                  By applying you agree to a screening call and home visit.
                  No payment is collected online — ever.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
