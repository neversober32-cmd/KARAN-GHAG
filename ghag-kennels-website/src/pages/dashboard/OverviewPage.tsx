import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BedDouble,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  Inbox,
  Scissors,
  Users,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardTitle, Pill, StatCard } from "../../components/dashboard/ui";
import { ADOPTION_TREND, BOOKINGS, BREED_MIX, KENNELS, KPIS, SERVICE_SPLIT, TASKS } from "../../data/dashboard";

const KPI_ICONS = [
  <HeartHandshake size={19} />,
  <Users size={19} />,
  <BedDouble size={19} />,
  <Scissors size={19} />,
];

const PIE_COLORS = ["#3E5C9B", "#DE9A55", "#6FA287", "#B9BEC9", "#7C6AAE"];

const tooltipStyle = {
  background: "#fff",
  border: "1px solid #E8E4DC",
  borderRadius: 12,
  fontSize: 12,
  fontWeight: 600,
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
};

export default function OverviewPage() {
  const [tasks, setTasks] = useState(TASKS);
  const occupied = KENNELS.filter((k) => k.occupant).length;

  return (
    <div className="flex flex-col gap-5">
      {/* KPI row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {KPIS.map((kpi, i) => (
          <StatCard
            key={kpi.id}
            label={kpi.label}
            value={kpi.value}
            delta={kpi.delta}
            up={kpi.deltaUp}
            sub={kpi.sub}
            icon={KPI_ICONS[i]}
          />
        ))}
      </div>

      {/* Trend + breed mix */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.6fr_1fr]">
        <Card>
          <CardTitle
            action={
              <div className="flex items-center gap-4 text-[11px] font-bold text-muted">
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#3E5C9B]" /> Applications</span>
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#DE9A55]" /> Handovers</span>
              </div>
            }
          >
            Adoption funnel · last 7 months
          </CardTitle>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ADOPTION_TREND} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="gApps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3E5C9B" stopOpacity={0.28} />
                    <stop offset="100%" stopColor="#3E5C9B" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gHand" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DE9A55" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#DE9A55" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#ECE8DE" vertical={false} />
                <XAxis dataKey="m" tick={{ fontSize: 11, fontWeight: 600, fill: "#8B8D94" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fontWeight: 600, fill: "#8B8D94" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="applications" stroke="#3E5C9B" strokeWidth={2.5} fill="url(#gApps)" />
                <Area type="monotone" dataKey="handovers" stroke="#DE9A55" strokeWidth={2.5} fill="url(#gHand)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <CardTitle action={<Link to="/dashboard/dogs" className="text-[12px] font-bold text-[#2C4373] hover:underline">Manage →</Link>}>
            Pups by breed
          </CardTitle>
          <div className="h-[190px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={BREED_MIX} dataKey="value" nameKey="name" innerRadius={52} outerRadius={78} paddingAngle={3} strokeWidth={0}>
                  {BREED_MIX.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5">
            {BREED_MIX.map((b, i) => (
              <div key={b.name} className="flex items-center gap-2 text-[12px] font-semibold text-muted">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                {b.name} · {b.value}%
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Boarding load + services + tasks */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <Card>
          <CardTitle
            action={<Pill tone={occupied >= 6 ? "amber" : "green"}>{occupied}/{KENNELS.length} occupied</Pill>}
          >
            Kennel occupancy
          </CardTitle>
          <div className="grid grid-cols-4 gap-2">
            {KENNELS.map((k) => (
              <div
                key={k.id}
                title={`${k.name} — ${k.occupant ?? "free"}`}
                className={`flex h-[64px] flex-col items-center justify-center rounded-[12px] border text-center ${
                  k.occupant ? "border-[#EBD9BE] bg-[#FBF3E4]" : "border-[#DCE4D3] bg-[#EFF6EC]"
                }`}
              >
                <span className="text-[10px] font-bold text-muted">{k.name.replace("Suite ", "").replace("Daycare ", "D")}</span>
                <span className={`mt-0.5 h-2 w-2 rounded-full ${k.occupant ? "bg-[#DE9A55]" : "bg-[#5E9B6A]"}`} />
              </div>
            ))}
          </div>
          <Link to="/dashboard/boarding" className="btn btn-secondary mt-4 w-full !py-2.5 !text-[13px]">
            Open boarding board <ArrowRight size={14} />
          </Link>
        </Card>

        <Card>
          <CardTitle>Boarding nights / month</CardTitle>
          <div className="h-[190px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ADOPTION_TREND} margin={{ top: 4, right: 4, left: -22, bottom: 0 }}>
                <CartesianGrid stroke="#ECE8DE" vertical={false} />
                <XAxis dataKey="m" tick={{ fontSize: 11, fontWeight: 600, fill: "#8B8D94" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fontWeight: 600, fill: "#8B8D94" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="boarding" fill="#3E5C9B" radius={[8, 8, 4, 4]} maxBarSize={26} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 text-[12px] font-medium text-faint">Diwali peak ahead — 78% of festive slots already held.</p>
        </Card>

        <Card>
          <CardTitle>Today&rsquo;s checklist</CardTitle>
          <ul className="space-y-2.5">
            {tasks.map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => setTasks((prev) => prev.map((x) => (x.id === t.id ? { ...x, done: !x.done } : x)))}
                  className={`flex w-full items-start gap-2.5 rounded-[12px] border px-3 py-2.5 text-left transition-colors ${
                    t.done ? "border-[#DCE4D3] bg-[#F2F8F1]" : "border-[#E8E4DC] bg-white hover:border-[#C6CBD6]"
                  }`}
                >
                  <CheckCircle2 size={17} className={`mt-0.5 flex-none ${t.done ? "text-[#5E9B6A]" : "text-[#C9CDD6]"}`} />
                  <span>
                    <span className={`block text-[13px] font-semibold ${t.done ? "text-faint line-through" : ""}`}>{t.text}</span>
                    <span className="text-[11px] font-medium text-faint">{t.meta}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.6fr_1fr]">
        <Card className="!p-0 overflow-hidden">
          <div className="flex items-center justify-between px-5 pt-5">
            <h3 className="text-[15px] font-bold tracking-tight">Upcoming bookings</h3>
            <Link to="/dashboard/services" className="text-[12px] font-bold text-[#2C4373] hover:underline">All bookings →</Link>
          </div>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-[13px]">
              <thead>
                <tr className="border-y border-[#F0EDE5] bg-[#FAF9F6] text-[11px] uppercase tracking-[0.1em] text-faint">
                  <th className="px-5 py-2.5 font-bold">Pet / Owner</th>
                  <th className="px-3 py-2.5 font-bold">Service</th>
                  <th className="px-3 py-2.5 font-bold">When</th>
                  <th className="px-5 py-2.5 text-right font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {BOOKINGS.slice(0, 4).map((b) => (
                  <tr key={b.id} className="border-b border-[#F4F2EC] last:border-0">
                    <td className="px-5 py-3">
                      <p className="font-bold">{b.pet}</p>
                      <p className="text-[12px] text-faint">{b.owner} · {b.staff}</p>
                    </td>
                    <td className="px-3 py-3"><Pill tone="blue">{b.service}</Pill></td>
                    <td className="px-3 py-3 font-medium text-muted">{b.when}</td>
                    <td className="px-5 py-3 text-right">
                      <Pill tone={b.status === "In progress" ? "green" : b.status === "Confirmed" ? "neutral" : "amber"}>{b.status}</Pill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="bg-[#232F4B] !border-[#232F4B] text-white">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-[#F2C078]"><Inbox size={18} /></span>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/50">Needs attention</p>
              <p className="font-display text-[22px] font-bold leading-tight">6 new enquiries</p>
            </div>
          </div>
          <div className="mt-4 space-y-2.5">
            {[["Aarav M.", "Simba · 2h ago"], ["Sana S.", "Chai · 6h ago"], ["Dev P.", "Boarding Diwali · walk-in"]].map(([n, d]) => (
              <div key={n} className="flex items-center justify-between rounded-[12px] bg-white/8 px-3.5 py-2.5 text-[13px]">
                <span className="font-bold">{n}</span>
                <span className="text-white/55">{d}</span>
              </div>
            ))}
          </div>
          <Link to="/dashboard/enquiries" className="btn mt-4 w-full !bg-[#DE9A55] !text-[#232F4B] hover:!bg-[#E8AC68]">
            Open enquiry inbox <ArrowRight size={14} />
          </Link>
          <div className="mt-4 flex items-center gap-5 border-t border-white/10 pt-4 text-[12px] font-semibold text-white/60">
            <span className="flex items-center gap-1.5"><CalendarCheck size={14} /> 2 visits Sat</span>
            <span className="flex items-center gap-1.5"><Users size={14} /> 4 staff on floor</span>
          </div>
        </Card>
      </div>

      {/* service mix strip */}
      <Card>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-[15px] font-bold tracking-tight">Revenue mix by vertical</h3>
            <p className="text-[12.5px] text-muted">Boarding leads — exactly like Premium Pet Palace&rsquo;s model: care funds the rescue work.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {SERVICE_SPLIT.map((s, i) => (
              <span key={s.name} className="flex items-center gap-2 rounded-full border border-[#E8E4DC] px-3 py-1.5 text-[12px] font-bold">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: PIE_COLORS[i % PIE_COLORS.length] }} />
                {s.name} · {s.value}%
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex h-3.5 w-full overflow-hidden rounded-full bg-[#F1EFE9]">
          {SERVICE_SPLIT.map((s, i) => (
            <span key={s.name} style={{ width: `${s.value}%`, background: PIE_COLORS[i % PIE_COLORS.length] }} />
          ))}
        </div>
      </Card>
    </div>
  );
}
