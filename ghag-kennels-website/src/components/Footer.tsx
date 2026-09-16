import { Link } from "react-router-dom";
import { AtSign, Clock, MapPin, MessageCircle, PawPrint } from "lucide-react";
import { DOGS } from "../data/dogs";

const EXPLORE = [
  { label: "Home", to: "/" },
  { label: "Our Dogs", to: "/dogs" },
  { label: "About Us", to: "/about" },
  { label: "Adoption Process", to: "/process" },
  { label: "Health & Vet Care", to: "/health" },
  { label: "Legal & Ethics", to: "/legal" },
  { label: "Contact", to: "/contact" },
  { label: "Apply for Adoption", to: "/apply" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand bg-[#FFFDF8]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage text-forest">
                <PawPrint size={17} />
              </span>
              <span className="font-display text-[18px] font-bold tracking-tight">
                Ghag<span className="text-sage-deep"> Kennels</span>
              </span>
            </Link>
            <p className="mt-4 max-w-[260px] text-[13px] leading-relaxed text-muted">
              We don&rsquo;t sell dogs. We find them family. Ethical, screened,
              AWB-registered rehoming from Andheri West, Mumbai.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-mint px-3.5 py-2 text-[11px] font-bold tracking-wide text-mint-ink">
              Reg. MH-AWB-2024-XXXX
            </span>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-faint">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {EXPLORE.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[13.5px] font-medium text-[#475569] transition-colors hover:text-sage-deep">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pups */}
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-faint">Meet the pups</p>
            <ul className="mt-4 space-y-2.5">
              {DOGS.map((d) => (
                <li key={d.id}>
                  <Link to={`/dogs/${d.id}`} className="text-[13.5px] font-medium text-[#475569] transition-colors hover:text-sage-deep">
                    {d.name} <span className="text-faint">· {d.breed.split(" (")[0]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-faint">Visit us</p>
            <ul className="mt-4 space-y-3 text-[13.5px] font-medium text-[#475569]">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 flex-none text-clay" />
                Veera Desai Road, Andheri West, Mumbai 400053
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={15} className="mt-0.5 flex-none text-clay" />
                Visits by appointment · Tue–Sun, 10am–6pm
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle size={15} className="mt-0.5 flex-none text-clay" />
                WhatsApp-first — usually replies within a few hours
              </li>
              <li className="flex items-start gap-2.5">
                <AtSign size={15} className="mt-0.5 flex-none text-clay" />
                @ghagkennels on Instagram
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-sand pt-6 text-[13px] text-faint sm:flex-row">
          <p>© 2026 Ghag Kennels, Mumbai. Ethical Rehoming Only.</p>
          <p className="flex items-center gap-4">
            <Link to="/dashboard" className="transition-colors hover:text-sage-deep">
              Staff Dashboard
            </Link>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> Andheri West · No online payment for live animals, ever
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
