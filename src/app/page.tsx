import { LandingPage } from "@/app/landing-page";
import { portfolioData } from "@/lib/data";
import { fetchMediumPosts } from "@/lib/fetchMedium";

export default async function Page() {
  const blogs = await fetchMediumPosts("sjlouji10");
  return <LandingPage initialData={portfolioData} blogs={blogs} />;
}
