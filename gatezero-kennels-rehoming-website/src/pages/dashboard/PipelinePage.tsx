import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, MapPin, Phone } from "lucide-react";
import { Card } from "../../components/dashboard/ui";
import { PIPELINE_INIT, type PipelineCard } from "../../data/dashboard";

const COLS = [
  { key: "applied", title: "Applied", hint: "reply < 24h", color: "#3E5C9B" },
  { key: "screening", title: "Screening call", hint: "15-min video", color: "#7C6AAE" },
  { key: "meet", title: "Meet & greet", hint: "at facility", color: "#DE9A55" },
  { key: "homecheck", title: "Home check", hint: "→ handover", color: "#5E9B6A" },
];

const STORE_KEY = "gz_pipeline";

function load(): Record<string, PipelineCard[]> {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return PIPELINE_INIT;
}

export default function PipelinePage() {
  const [board, setBoard] = useState<Record<string, PipelineCard[]>>(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(board));
    } catch { /* ignore */ }
  }, [board ]);

  const move = (colKey: string, idx: number, dir: -1 | 1) => {
    const order = COLS.map((c) => c.key);
    const target = order[order.indexOf(colKey) + dir];
    if (!target) return;
    setBoard((prev) => {
      const next = { ...prev, [colKey]: [...prev[colKey]], [target]: [...prev[target]] };
      const [card] = next[colKey].splice(idx, 1);
      next[target] = [card, ...next[target]];
      return next;
    });
  };

  const total = Object.values(board).flat().length;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center gap-3">
        <Card className="!p-4 flex-1 min-w-[160px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-faint">Active families</p>
          <p className="font-display mt-1 text-[28px] font-bold leading-none">{total}</p>
        </Card>
        {COLS.map((c) => (
          <Card key={c.key} className="!p-4 flex-1 min-w-[140px]">
            <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-faint">
              <span className="h-2 w-2 rounded-full" style={{ background: c.color }} /> {c.title}
            </p>
            <p className="font-display mt-1 text-[28px] font-bold leading-none">{board[c.key]?.length ?? 0}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {COLS.map((col) => (
          <div key={col.key} className="flex flex-col rounded-[20px] border border-[#E8E4DC] bg-[#EDEBE5] p-3">
            <div className="flex items-center justify-between px-1.5 pb-3 pt-1">
              <p className="flex items-center gap-2 text-[13px] font-bold">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: col.color }} />
                {col.title}
                <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-muted">
                  {board[col.key]?.length ?? 0}
                </span>
              </p>
              <span className="text-[11px] font-medium text-faint">{col.hint}</span>
            </div>

            <div className="flex flex-1 flex-col gap-2.5">
              {(board[col.key] ?? []).map((card, idx) => (
                <div key={card.id} className="card-in rounded-[16px] border border-[#E8E4DC] bg-white p-3.5 shadow-sm">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[13.5px] font-bold leading-snug">{card.family}</p>
                    <span className="flex-none rounded-full bg-[#E9EFFA] px-2 py-0.5 text-[10.5px] font-bold text-[#2F4A7E]">
                      {card.pup}
                    </span>
                  </div>
                  <p className="mt-1.5 flex items-center gap-1 text-[12px] font-medium text-faint">
                    <MapPin size={12} /> {card.city} · {card.age}
                  </p>
                  {card.tag && (
                    <p className="mt-2 inline-block rounded-full bg-[#F1EFE9] px-2 py-0.5 text-[11px] font-bold text-muted">
                      {card.tag}
                    </p>
                  )}
                  <div className="mt-3 flex items-center justify-between border-t border-[#F4F2EC] pt-2.5">
                    <button className="flex items-center gap-1 text-[11.5px] font-bold text-[#2C4373] hover:underline" aria-label={`Call ${card.family}`}>
                      <Phone size={12} /> Call
                    </button>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => move(col.key, idx, -1)}
                        disabled={col.key === "applied"}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E8E4DC] text-muted transition-colors hover:border-[#3E5C9B] hover:text-[#2C4373] disabled:opacity-30"
                        aria-label="Move back"
                      >
                        <ArrowLeft size={13} />
                      </button>
                      <button
                        onClick={() => move(col.key, idx, 1)}
                        disabled={col.key === "homecheck"}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3E5C9B] text-white transition-colors hover:bg-[#2C4373] disabled:opacity-30"
                        aria-label="Move forward"
                      >
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {(board[col.key] ?? []).length === 0 && (
                <p className="rounded-[14px] border border-dashed border-[#C9CDD6] px-3 py-6 text-center text-[12px] font-medium text-faint">
                  Nothing here — move a card in.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-[12px] font-medium text-faint">
        Tip: use ← → on any card to advance a family. Changes auto-save to this browser (localStorage demo).
      </p>
    </div>
  );
}
