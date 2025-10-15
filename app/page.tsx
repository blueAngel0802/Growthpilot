import { AIRecommendations } from "@/components/AIRecommendations";
import { AuditScores } from "@/components/AuditScores";
import { CampaignDashboard } from "@/components/CampaignDashboard";
import { CaseStudySection } from "@/components/CaseStudySection";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { MetricsGrid } from "@/components/MetricsGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { ServiceCards } from "@/components/ServiceCards";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <MetricsGrid />
      <CaseStudySection />
      <ServiceCards />
      <section id="dashboard" className="container-section py-16">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Dashboard</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            SEO, SEM, analytics, and AI recommendations in one client-friendly workflow.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            This dashboard demonstrates how campaign performance, tracking quality, and AI-generated next steps can be presented clearly to clients and internal strategy teams.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <CampaignDashboard />
          <AIRecommendations />
        </div>
      </section>
      <AuditScores />
      <ProcessSection />
      <CTASection />
    </main>
  );
}
