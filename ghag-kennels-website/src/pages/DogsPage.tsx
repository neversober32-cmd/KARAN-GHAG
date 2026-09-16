import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Search, X } from "lucide-react";
import DogCard from "../components/DogCard";
import PageMeta from "../components/PageMeta";
import Reveal from "../components/Reveal";
import { DOGS, FILTERS } from "../data/dogs";

export default function DogsPage() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DOGS.filter((d) => {
      const matchesBreed = filter === "all" || d.breedKey === filter;
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.breed.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q));
      return matchesBreed && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section className="bg-white py-14">
      <PageMeta
        title="Our Dogs — Ghag Kennels"
        description="Meet the pups currently looking for homes at Ghag Kennels, Mumbai. Every dog is vet-checked, vaccinated, microchipped and honestly described."
      />
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <span className="eyebrow">Available now</span>
          <h1 className="font-display mt-3 max-w-[640px] text-[34px] font-bold leading-[1.05] tracking-[-0.01em] sm:text-[46px]">
            Meet the pups looking for homes
          </h1>
          <p className="mt-3 max-w-[520px] text-[15px] text-muted">
            All are 8+ weeks, vet-checked and microchipped — and they go home
            only after approval, never first-come-first-served.
          </p>
        </Reveal>

        {/* Controls */}
        <Reveal delay={80}>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter dogs by breed">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={filter === f.key}
                  onClick={() => setFilter(f.key)}
                  className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
                    filter === f.key
                      ? "border-ink bg-ink text-white"
                      : "border-sand bg-white text-muted hover:border-[#C6CBD6] hover:text-ink"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-[280px]">
              <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-faint" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name, breed, trait…"
                className="input !pl-10 !pr-10"
                aria-label="Search pups"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-faint transition-colors hover:bg-parchment hover:text-ink"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          <p className="mt-4 text-[13px] font-medium text-faint" aria-live="polite">
            Showing {visible.length} of {DOGS.length} pups
            {filter !== "all" && ` · ${FILTERS.find((f) => f.key === filter)?.label}`}
            {query && ` · “${query}”`}
          </p>
        </Reveal>

        {/* Grid */}
        {visible.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((dog, i) => (
              <DogCard key={`${filter}-${query}-${dog.id}`} dog={dog} index={i} />
            ))}

            {/* Advice CTA card */}
            <article className="card-in relative flex flex-col justify-center gap-4 overflow-hidden rounded-[24px] bg-ink p-8 text-white">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-25 blur-2xl"
                style={{ background: "radial-gradient(circle, #3E5C9B, transparent 70%)" }}
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Compass size={22} className="text-clay" />
              </span>
              <h3 className="font-display text-[25px] font-bold leading-[1.15] sm:text-[28px]">
                Not sure which breed fits your Mumbai life?
              </h3>
              <p className="text-[14px] leading-relaxed text-[#A8A8A8]">
                Tell us about your flat size, work hours and experience — we&rsquo;ll
                match you on temperament and lifestyle, not looks.
              </p>
              <Link to="/apply" className="btn btn-white mt-2 w-fit">
                Get honest advice <ArrowRight size={15} />
              </Link>
            </article>
          </div>
        ) : (
          <div className="fade-in mt-8 flex flex-col items-center rounded-[24px] border border-dashed border-[#C6CBD6] bg-cream px-6 py-16 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-faint shadow-sm">
              <Search size={22} />
            </span>
            <h3 className="font-display mt-4 text-[22px] font-bold">No pups match that</h3>
            <p className="mt-1.5 max-w-[320px] text-[14px] text-muted">
              Try a different breed or name — or tell us what you&rsquo;re looking
              for and we&rsquo;ll keep an eye out.
            </p>
            <button
              onClick={() => {
                setFilter("all");
                setQuery("");
              }}
              className="btn btn-secondary mt-6"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
