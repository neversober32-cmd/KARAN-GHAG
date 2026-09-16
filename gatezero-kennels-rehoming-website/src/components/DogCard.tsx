import { Link } from "react-router-dom";
import { ArrowRight, Check, Heart, MessageCircle } from "lucide-react";
import { HEALTH_POINTS, type Dog } from "../data/dogs";
import { useInquiry } from "../context/InquiryContext";

export default function DogCard({ dog, index = 0 }: { dog: Dog; index?: number }) {
  const openInquiry = useInquiry();

  return (
    <article
      className="lift card-in flex flex-col overflow-hidden rounded-[24px] border border-sand bg-white"
      style={{ animationDelay: `${index * 70}ms` }}
      data-breed={dog.breedKey}
    >
      <Link to={`/dogs/${dog.id}`} className="relative block overflow-hidden" aria-label={`View ${dog.name}'s profile`}>
        <img
          src={dog.image}
          alt={`${dog.name} — ${dog.breed} puppy, ${dog.age}, ${dog.coat}`}
          className="h-[280px] w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        <span
          className={`status-badge absolute left-4 top-4 shadow-sm ${
            dog.status === "Available" ? "status-available" : "status-reserved"
          }`}
        >
          {dog.status}
        </span>
        {dog.rescued && (
          <span className="status-badge status-rescued absolute right-4 top-4 shadow-sm">
            <Heart size={11} strokeWidth={2.6} /> Rescued
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-[18px]">
        <div className="flex items-center justify-between gap-3">
          <Link to={`/dogs/${dog.id}`} className="transition-colors hover:text-sage-deep">
            <h3 className="font-display text-[22px] font-bold leading-none">{dog.name}</h3>
          </Link>
          <span
            className={`flex items-center gap-1.5 text-[11px] font-bold ${
              dog.status === "Available" ? "text-sage-deep" : "text-[#A5821F]"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${dog.status === "Available" ? "bg-sage" : "bg-[#E3B94E]"}`} />
            {dog.status === "Available" ? "Ready to meet" : "Waitlist open"}
          </span>
        </div>

        <p className="mt-2 text-[13px] font-medium text-muted">
          {dog.breed} &nbsp;•&nbsp; {dog.age} &nbsp;•&nbsp; {dog.gender} &nbsp;•&nbsp; {dog.coat}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {dog.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-[#EAE7DF] pt-4">
          {HEALTH_POINTS.map((point) => (
            <span key={point} className="flex items-center gap-1.5 text-[12px] font-semibold text-mint-ink">
              <Check size={13} strokeWidth={3} />
              {point}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-2">
          <Link to={`/dogs/${dog.id}`} className="btn btn-secondary flex-1 !px-4">
            Profile <ArrowRight size={15} />
          </Link>
          <button
            onClick={() => openInquiry(dog.name)}
            className="btn btn-primary flex-[1.4] !px-4"
            aria-label={`Inquire about ${dog.name}`}
          >
            <MessageCircle size={15} /> Inquire
          </button>
        </div>
      </div>
    </article>
  );
}
