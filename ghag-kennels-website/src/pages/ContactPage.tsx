import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  AtSign,
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";

const CHANNELS = [
  {
    icon: MessageCircle,
    title: "WhatsApp — fastest",
    lines: ["Usually replies within a few hours", "Screening calls happen here too"],
    cta: { label: "Open WhatsApp", href: "https://wa.me/919999999999?text=Hello%20Ghag%20Kennels!" },
  },
  {
    icon: MapPin,
    title: "Visit the facility",
    lines: ["Veera Desai Road, Andheri West", "Mumbai 400053, Maharashtra"],
    cta: {
      label: "Get directions",
      href: "https://www.google.com/maps/search/Veera+Desai+Road+Andheri+West+Mumbai",
    },
  },
  {
    icon: Clock,
    title: "Visiting hours",
    lines: ["Tuesday – Sunday · 10am – 6pm", "By appointment only — no walk-ins"],
    cta: null,
  },
  {
    icon: AtSign,
    title: "Email & social",
    lines: ["hello@ghagkennels.in", "@ghagkennels on Instagram"],
    cta: { label: "Send an email", href: "mailto:hello@ghagkennels.in" },
  },
];

const TOPICS = [
  "Adoption enquiry",
  "Boarding & services",
  "Volunteering / rescue intake",
  "Press or partnership",
  "Something else",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const existing = JSON.parse(localStorage.getItem("gk_messages") || "[]");
      existing.push({ ...data, submittedAt: new Date().toISOString() });
      localStorage.setItem("gk_messages", JSON.stringify(existing));
    } catch {
      /* storage unavailable — still show success for demo */
    }
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <PageMeta
        title="Contact Us — Ghag Kennels"
        description="Contact Ghag Kennels in Andheri West, Mumbai. WhatsApp-first, visits by appointment Tue–Sun 10am–6pm. No online payment for live animals, ever."
      />

      <section className="py-14">
        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <span className="eyebrow">Say hello</span>
            <h1 className="font-display mt-4 max-w-[640px] text-[38px] font-bold leading-[1.04] tracking-[-0.02em] sm:text-[50px]">
              Questions are welcome.{" "}
              <span className="italic text-sage-deep">Pressure is not.</span>
            </h1>
            <p className="mt-4 max-w-[600px] text-[15.5px] leading-relaxed text-muted">
              Whether you&rsquo;re ready to apply, still deciding, or just want
              honest advice about whether a dog fits your life right now — reach
              out. We answer everything ourselves.
            </p>
          </Reveal>

          {/* Channels */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="lift flex h-full flex-col rounded-[24px] border border-sand bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint text-sage-deep">
                    <c.icon size={19} />
                  </span>
                  <h2 className="mt-4 text-[15.5px] font-bold">{c.title}</h2>
                  <div className="mt-2 flex-1 space-y-1">
                    {c.lines.map((l) => (
                      <p key={l} className="text-[13px] leading-relaxed text-muted">
                        {l}
                      </p>
                    ))}
                  </div>
                  {c.cta && (
                    <a
                      href={c.cta.href}
                      target={c.cta.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.cta.href.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-sage-deep transition-colors hover:text-sage"
                    >
                      {c.cta.label} <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Form + side panel */}
          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="rounded-[28px] border border-sand bg-white p-6 sm:p-9">
                {sent ? (
                  <div className="fade-in flex flex-col items-center justify-center px-6 py-16 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mint">
                      <CheckCircle2 size={34} className="text-sage-deep" />
                    </span>
                    <h2 className="font-display mt-5 text-[26px] font-bold">Message received</h2>
                    <p className="mt-2 max-w-[380px] text-[14.5px] leading-relaxed text-muted">
                      Thank you for writing to Ghag Kennels. We read every
                      message ourselves and usually reply within a few hours —
                      always within 24.
                    </p>
                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                      <button onClick={() => setSent(false)} className="btn btn-secondary">
                        Send another message
                      </button>
                      <Link to="/dogs" className="btn btn-primary">
                        Browse the pups <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="font-display text-[24px] font-bold">Drop us a line</h2>
                    <p className="mt-1.5 text-[13.5px] text-muted">
                      Fields marked * are required. We&rsquo;ll reply on
                      WhatsApp or email — whichever you prefer.
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="label" htmlFor="c-name">Full name *</label>
                        <input id="c-name" name="name" required placeholder="e.g. Aditi Kulkarni" className="input" />
                      </div>
                      <div>
                        <label className="label" htmlFor="c-phone">Phone / WhatsApp *</label>
                        <input id="c-phone" name="phone" required type="tel" placeholder="10-digit mobile number" className="input" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="label" htmlFor="c-email">Email</label>
                        <input id="c-email" name="email" type="email" placeholder="you@example.com" className="input" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="label" htmlFor="c-topic">What&rsquo;s it about? *</label>
                        <select id="c-topic" name="topic" required defaultValue="" className="input">
                          <option value="" disabled>
                            Choose a topic
                          </option>
                          {TOPICS.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="label" htmlFor="c-message">Your message *</label>
                        <textarea
                          id="c-message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell us a little about yourself, your home, and what you're looking for…"
                          className="input resize-none"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <button type="submit" className="btn btn-primary !px-7 !py-3.5 !text-[15px]">
                        Send message <ArrowRight size={15} />
                      </button>
                      <p className="text-[12px] text-faint">
                        We never share your details. No spam, ever.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex h-full flex-col gap-6">
                {/* Map / directions card */}
                <div className="relative flex-1 overflow-hidden rounded-[28px] border border-sand bg-parchment">
                  <img
                    src="/images/facility.jpg"
                    alt="Ghag Kennels facility in Andheri West, Mumbai"
                    className="h-full min-h-[260px] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16">
                    <p className="flex items-center gap-2 text-[14px] font-bold text-white">
                      <MapPin size={16} className="text-clay" />
                      Ghag Kennels · Andheri West
                    </p>
                    <a
                      href="https://www.google.com/maps/search/Veera+Desai+Road+Andheri+West+Mumbai"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/85 underline-offset-4 hover:underline"
                    >
                      Open in Google Maps <ArrowRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Prefer talking card */}
                <div className="rounded-[28px] border border-sand bg-white p-6">
                  <h3 className="text-[15.5px] font-bold">Prefer talking it through?</h3>
                  <ul className="mt-4 space-y-3 text-[13.5px] font-medium text-muted">
                    <li className="flex items-start gap-2.5">
                      <Phone size={15} className="mt-0.5 flex-none text-clay" />
                      Call the facility: +91 99999 99999 (Tue–Sun, 10am–6pm)
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Camera size={15} className="mt-0.5 flex-none text-clay" />
                      DM us @ghagkennels — we post every new pup there first
                    </li>
                    <li className="flex items-start gap-2.5">
                      <MessageCircle size={15} className="mt-0.5 flex-none text-clay" />
                      Already shortlisted a pup? Start the{" "}
                      <Link to="/apply" className="font-bold text-sage-deep underline-offset-2 hover:underline">
                        adoption application
                      </Link>{" "}
                      instead
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
