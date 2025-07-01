import { LandingPage } from "@/app/landing-page";
import { portfolioData } from "@/lib/data";

export default function Home() {
  return <LandingPage initialData={portfolioData} />;
}
