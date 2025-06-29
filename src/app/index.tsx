import { LandingPage } from "./landing-page";
import { portfolioData } from "../lib/data";

export default function Home() {
  return <LandingPage initialData={portfolioData} />;
}
