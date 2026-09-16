import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, X } from "lucide-react";

interface InquiryModalProps {
  dog: string | null;
  onClose: () => void;
}

export default function InquiryModal({ dog, onClose }: InquiryModalProps) {
  const [sent, setSent] = useState(false);

  // Lock scroll + escape-to-close while open
  useEffect(() => {
    if (!dog) return;
    setSent(false);
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [dog, onClose]);

  if (!dog) return null;

  const quickSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const name = String(data.name || "");
    const phone = String(data.phone || "");
    try {
      const existing = JSON.parse(localStorage.getItem("gz_inquiries") || "[]");
      existing.push({ dog, name, phone, at: new Date().toISOString() });
      localStorage.setItem("gz_inquiries", JSON.stringify(existing));
    } catch {
      /* storage unavailable — continue */
    }
    const text = encodeURIComponent(
      `Hello Gatezero Kennels! I'm ${name} (${phone}). I'd like to inquire about ${dog} for adoption.`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener");
    setSent(true);
  };

  return (
    <div
      id="modal"
      className="fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-5 backdrop-blur-[2px]"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Inquire about ${dog}`}
    >
      <div className="modal-pop w-full max-w-[480px] rounded-[24px] bg-cream p-7 shadow-2xl">
        {sent ? (
          <div className="flex flex-col items-center py-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mint">
              <CheckCircle2 size={34} className="text-sage-deep" />
            </span>
            <h3 className="font-display mt-5 text-[24px] font-bold">Inquiry Sent</h3>
            <p className="mt-2 max-w-[300px] text-[14px] leading-relaxed text-muted">
              WhatsApp should have opened with your message pre-filled. We
              usually reply within a few hours.
            </p>
            <button onClick={onClose} className="btn btn-primary mt-7">
              Done <ArrowRight size={15} />
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-[24px] font-bold leading-tight">
                  Inquire about {dog}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                  Quick inquiry — no payment, no commitment. We reply on
                  WhatsApp, usually within a few hours.
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-sand bg-white text-muted transition-colors hover:text-ink"
                aria-label="Close"
              >
                <X size={17} />
              </button>
            </div>

            <form onSubmit={quickSubmit} className="mt-6 flex flex-col gap-4">
              <div>
                <label htmlFor="qName" className="label">Your Name</label>
                <input id="qName" name="name" required placeholder="Aarav Mehta" className="input" autoComplete="name" />
              </div>
              <div>
                <label htmlFor="qPhone" className="label">Phone (WhatsApp)</label>
                <input id="qPhone" name="phone" type="tel" required pattern="[0-9+()\-\s]{10,16}" placeholder="98200 12345" className="input" autoComplete="tel" />
              </div>
              <button type="submit" className="btn btn-primary w-full !py-3.5 !text-[15px]">
                <MessageCircle size={17} /> Send Inquiry on WhatsApp
              </button>
              <p className="text-center text-[11px] text-faint">
                Opens WhatsApp with your message pre-filled. Nothing is charged.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
