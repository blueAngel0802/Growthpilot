import { Hero } from "@/components/Hero";
import { HomeHighlights } from "@/components/HomeHighlights";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HomeHighlights />
      <LeadCaptureForm />
    </main>
  );
}
