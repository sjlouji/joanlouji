import { LandingPage } from "@/app/landing-page";
import { portfolioData } from "@/lib/data";
import { fetchMediumPosts } from "@/lib/fetchMedium";

export default async function Page() {
  let blogs = [];
  try {
    blogs = await fetchMediumPosts("sjlouji10");
  } catch (error) {
    console.warn("Failed to fetch blogs in page:", error);
    blogs = [
      {
        title: "Sample Blog Post",
        link: "https://medium.com/@sjlouji10",
        date: "Dec 15, 2023",
        summary:
          "This is a sample blog post. Check out my Medium profile for the latest articles.",
        image: "",
        tags: ["Sample", "Blog"],
      },
    ];
  }

  return <LandingPage initialData={portfolioData} blogs={blogs} />;
}
