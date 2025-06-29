"use server";

import { generatePersonalizedIntro } from "@/ai/flows/generate-personalized-intro";
import { tailorProfileContent } from "@/ai/flows/tailor-profile-content";
import { portfolioData } from "@/lib/data";
import { z } from "zod";

const personalizeSchema = z.object({
  viewerProfile: z.string().min(3),
});

export async function personalizeContentAction(prevState: any, formData: FormData) {
  try {
    const validatedFields = personalizeSchema.safeParse({
      viewerProfile: formData.get('viewerProfile'),
    });

    if (!validatedFields.success) {
      return {
        success: false,
        error: "Invalid input. Please describe what you're looking for.",
        data: null,
      };
    }
    
    const { viewerProfile } = validatedFields.data;

    const workHistory = portfolioData.workHistory.map(j => `${j.role} at ${j.company}: ${j.description}`).join('\n');
    const skills = portfolioData.skills.map(s => s.name).join(', ');
    const projects = portfolioData.projects.map(p => `${p.title}: ${p.description}`).join('\n');
    const portfolioHighlights = portfolioData.projects.map(p => p.title).join(', ');

    const [introResult, tailoredResult] = await Promise.all([
      generatePersonalizedIntro({ 
        visitorGoals: viewerProfile,
        resumeSummary: portfolioData.about,
        portfolioHighlights,
       }),
      tailorProfileContent({
        viewerProfile,
        workHistory,
        skills,
        projects,
      })
    ]);

    return {
        success: true,
        error: null,
        data: {
            personalizedIntro: introResult.personalizedIntro,
            tailoredWorkHistory: tailoredResult.tailoredWorkHistory,
            tailoredSkills: tailoredResult.tailoredSkills,
            tailoredProjects: tailoredResult.tailoredProjects,
        }
    }
  } catch (error) {
    console.error(error);
    return {
        success: false,
        error: "Failed to personalize content. Please try again later.",
        data: null
    };
  }
}
