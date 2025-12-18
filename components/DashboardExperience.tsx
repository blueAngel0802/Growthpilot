"use client";

import { useMemo, useState } from "react";
import type { ElementType } from "react";
import { BarChart3, DollarSign, Filter, MousePointerClick, TrendingUp, Users } from "lucide-react";
import { campaignMetrics } from "@/lib/data";
import type { CampaignMetric } from "@/lib/types";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function MetricCard({ label, value, icon: Icon }: { label: string; value: string; icon: ElementType }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-black tracking-tight text-slate-950">{value}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
          <Icon size={22} />
        </div>
      </div>
    </div>
  );
}

function Funnel({ metrics }: { metrics: CampaignMetric[] }) {
  const visits = metrics.reduce((sum, row) => sum + row.visits, 0);
  const leads = metrics.reduce((sum, row) => sum + row.leads, 0);
  const proposals = Math.round(leads * 0.42);
  const customers = Math.round(proposals * 0.38);
  const rows = [
    { label: "Visits", value: visits, width: "100%" },
    { label: "Leads", value: leads, width: `${Math.max(18, (leads / visits) * 100 * 8)}%` },
    { label: "Proposals", value: proposals, width: `${Math.max(15, (proposals / visits) * 100 * 8)}%` },
    { label: "Customers", value: customers, width: `${Math.max(12, (customers / visits) * 100 * 8)}%` },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-black text-slate-950">Conversion Funnel</h3>
      <p className="mt-1 text-sm text-slate-500">Modeled client funnel based on selected channels.</p>
      <div className="mt-6 space-y-4">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="mb-2 flex justify-between text-sm font-bold text-slate-700">
              <span>{row.label}</span>
              <span>{row.value.toLocaleString()}</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-slate-950" style={{ width: row.width }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardExperience() {
  const [selectedChannel, setSelectedChannel] = useState<"All" | CampaignMetric["channel"]>("All");

  const filtered = useMemo(() => {
    if (selectedChannel === "All") return campaignMetrics;
    return campaignMetrics.filter((metric) => metric.channel === selectedChannel);
  }, [selectedChannel]);

  const totals = useMemo(() => {
    const spend = filtered.reduce((sum, row) => sum + row.spend, 0);
    const visits = filtered.reduce((sum, row) => sum + row.visits, 0);
    const leads = filtered.reduce((sum, row) => sum + row.leads, 0);
    const revenue = filtered.reduce((sum, row) => sum + row.revenue, 0);
    return {
      spend,
      visits,
      leads,
      revenue,
      roi: spend === 0 ? 0 : ((revenue - spend) / spend) * 100,
      cpl: leads === 0 ? 0 : spend / leads,
    };
  }, [filtered]);

  const channels: Array<"All" | CampaignMetric["channel"]> = ["All", "SEO", "Google Ads", "Retargeting", "Email"];

  return (
    <main>
      <section className="bg-white">
        <div className="container-page py-14">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-500">Client Dashboard</p>
              <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Interactive campaign performance dashboard.</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Filter channels, review ROI, inspect funnel movement, and translate marketing data into client-facing recommendations.</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Filter size={18} className="text-slate-500" />
              {channels.map((channel) => (
                <button
                  key={channel}
                  onClick={() => setSelectedChannel(channel)}
                  className={`rounded-2xl px-4 py-2 text-sm font-black transition ${selectedChannel === channel ? "bg-slate-950 text-white" : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`}
                >
                  {channel}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard label="Revenue" value={formatCurrency(totals.revenue)} icon={DollarSign} />
          <MetricCard label="ROI" value={`${totals.roi.toFixed(0)}%`} icon={TrendingUp} />
          <MetricCard label="Leads" value={totals.leads.toLocaleString()} icon={Users} />
          <MetricCard label="Cost / Lead" value={formatCurrency(totals.cpl)} icon={MousePointerClick} />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <h2 className="text-lg font-black text-slate-950">Channel Breakdown</h2>
                <p className="text-sm text-slate-500">Client-ready view for SEO, SEM, retargeting, and email performance.</p>
              </div>
              <BarChart3 className="text-slate-600" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-5 py-4">Channel</th>
                    <th className="px-5 py-4">Spend</th>
                    <th className="px-5 py-4">Visits</th>
                    <th className="px-5 py-4">Leads</th>
                    <th className="px-5 py-4">Revenue</th>
                    <th className="px-5 py-4">CPL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((row) => (
                    <tr key={row.channel} className="hover:bg-slate-50">
                      <td className="px-5 py-4 font-black text-slate-800">{row.channel}</td>
                      <td className="px-5 py-4 text-slate-600">{formatCurrency(row.spend)}</td>
                      <td className="px-5 py-4 text-slate-600">{row.visits.toLocaleString()}</td>
                      <td className="px-5 py-4 text-slate-600">{row.leads.toLocaleString()}</td>
                      <td className="px-5 py-4 text-slate-600">{formatCurrency(row.revenue)}</td>
                      <td className="px-5 py-4 text-slate-600">{formatCurrency(row.spend / row.leads)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Funnel metrics={filtered} />
        </div>
      </section>
    </main>
  );
}
