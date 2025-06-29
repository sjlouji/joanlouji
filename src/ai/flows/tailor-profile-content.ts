'use server';
/**
 * @fileOverview This file defines a Genkit flow to tailor profile content based on viewer profile.
 *
 * - tailorProfileContent - A function that tailors the profile content based on viewer information.
 * - TailorProfileContentInput - The input type for the tailorProfileContent function.
 * - TailorProfileContentOutput - The output type for the tailorProfileContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailorProfileContentInputSchema = z.object({
  viewerProfile: z
    .string()
    .describe(
      'A description of the website visitor including industry, job title, and seniority.'
    ),
  workHistory: z.string().describe('The complete work history of the profile owner.'),
  skills: z.string().describe('The skills of the profile owner.'),
  projects: z.string().describe('A description of the projects the profile owner has worked on.'),
});
export type TailorProfileContentInput = z.infer<typeof TailorProfileContentInputSchema>;

const TailorProfileContentOutputSchema = z.object({
  tailoredWorkHistory: z
    .string()
    .describe('The work history tailored to the viewer profile.'),
  tailoredSkills: z.string().describe('The skills tailored to the viewer profile.'),
  tailoredProjects: z.string().describe('The projects tailored to the viewer profile.'),
});
export type TailorProfileContentOutput = z.infer<typeof TailorProfileContentOutputSchema>;

export async function tailorProfileContent(
  input: TailorProfileContentInput
): Promise<TailorProfileContentOutput> {
  return tailorProfileContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tailorProfileContentPrompt',
  input: {schema: TailorProfileContentInputSchema},
  output: {schema: TailorProfileContentOutputSchema},
  prompt: `You are an AI expert at tailoring profile content to be relevant to the viewer.

  Given the following information about the viewer:
  {{viewerProfile}}

  And the following information about the profile owner:
  Work History: {{workHistory}}
  Skills: {{skills}}
  Projects: {{projects}}

  Tailor the work history, skills, and projects to be most relevant to the viewer. Only include the most relevant information.
  Do not add or invent any information. Use the same formatting and style as the original content.
  The tailored content should be concise and easy to read.

  Return the tailored content as a JSON object.
  `,
});

const tailorProfileContentFlow = ai.defineFlow(
  {
    name: 'tailorProfileContentFlow',
    inputSchema: TailorProfileContentInputSchema,
    outputSchema: TailorProfileContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
