import type { ReactNode } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[20px] border border-[#E8E4DC] bg-white p-5 shadow-[0_1px_2px_rgba(28,30,36,0.04)] ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h3 className="text-[15px] font-bold tracking-tight">{children}</h3>
      {action}
    </div>
  );
}

export function StatCard({
  label,
  value,
  delta,
  up,
  sub,
  icon,
  spark,
}: {
  label: string;
  value: string;
  delta: string;
  up: boolean;
  sub: string;
  icon: ReactNode;
  spark?: ReactNode;
}) {
  return (
    <Card className="lift !p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-faint">{label}</p>
          <p className="font-display mt-1.5 text-[32px] font-bold leading-none">{value}</p>
        </div>
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-[#E9EFFA] text-[#2C4373]">
          {icon}
        </span>
      </div>
      {spark}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span
          className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${
            up ? "bg-[#D9EBD9] text-[#2E5B34]" : "bg-[#FBE3E3] text-[#9B3B3B]"
          }`}
        >
          {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {delta}
        </span>
        <span className="text-[11.5px] font-medium text-faint">{sub}</span>
      </div>
    </Card>
  );
}

export function Pill({ tone = "neutral", children }: { tone?: "neutral" | "green" | "amber" | "blue" | "red"; children: ReactNode }) {
  const tones: Record<string, string> = {
    neutral: "bg-[#F1EFE9] text-[#56575D]",
    green: "bg-[#D9EBD9] text-[#2E5B34]",
    amber: "bg-[#FFE9B5] text-[#7A5A17]",
    blue: "bg-[#E9EFFA] text-[#2F4A7E]",
    red: "bg-[#FBE3E3] text-[#9B3B3B]",
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold ${tones[tone]}`}>
      {children}
    </span>
  );
}
