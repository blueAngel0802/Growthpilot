import { LayoutDashboard } from "lucide-react";
import { campaignData } from "@/lib/data";

export function CampaignDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 p-5">
        <div>
          <h3 className="text-lg font-bold text-slate-950">Campaign Performance</h3>
          <p className="text-sm text-slate-500">Sample SEM/SEO dashboard with conversion tracking.</p>
        </div>
        <LayoutDashboard className="text-slate-500" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-4">Channel</th>
              <th className="px-5 py-4">Spend</th>
              <th className="px-5 py-4">Conversions</th>
              <th className="px-5 py-4">CPA</th>
              <th className="px-5 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {campaignData.map((row) => (
              <tr key={row.channel} className="hover:bg-slate-50">
                <td className="px-5 py-4 font-semibold text-slate-800">{row.channel}</td>
                <td className="px-5 py-4 text-slate-600">{row.spend}</td>
                <td className="px-5 py-4 text-slate-600">{row.conversions}</td>
                <td className="px-5 py-4 text-slate-600">{row.cpa}</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
