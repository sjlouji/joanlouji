// src/ai/flows/generate-personalized-intro.ts
'use server';

/**
 * @fileOverview Generates a personalized introduction based on the visitor's perceived goals.
 *
 * - generatePersonalizedIntro - A function that generates a personalized introduction.
 * - GeneratePersonalizedIntroInput - The input type for the generatePersonalizedIntro function.
 * - GeneratePersonalizedIntroOutput - The return type for the generatePersonalizedIntro function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedIntroInputSchema = z.object({
  visitorGoals: z
    .string()
    .describe(
      'The perceived goals or interests of the visitor.  For example, "looking for a software engineer", or "interested in your design work".'
    ),
  resumeSummary: z
    .string()
    .describe('A brief summary of the resume, including key skills and experiences.'),
  portfolioHighlights: z
    .string()
    .describe('A summary of the key projects in the portfolio.'),
});
export type GeneratePersonalizedIntroInput = z.infer<typeof GeneratePersonalizedIntroInputSchema>;

const GeneratePersonalizedIntroOutputSchema = z.object({
  personalizedIntro: z
    .string()
    .describe('A personalized introduction tailored to the visitor goals.'),
});
export type GeneratePersonalizedIntroOutput = z.infer<typeof GeneratePersonalizedIntroOutputSchema>;

export async function generatePersonalizedIntro(
  input: GeneratePersonalizedIntroInput
): Promise<GeneratePersonalizedIntroOutput> {
  return generatePersonalizedIntroFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedIntroPrompt',
  input: {schema: GeneratePersonalizedIntroInputSchema},
  output: {schema: GeneratePersonalizedIntroOutputSchema},
  prompt: `You are an expert at creating personalized introductions for websites.

  Based on the visitor's goals, create a short and engaging introduction that highlights the most relevant aspects of the resume and portfolio.

  Visitor Goals: {{{visitorGoals}}}
  Resume Summary: {{{resumeSummary}}}
  Portfolio Highlights: {{{portfolioHighlights}}}

  Personalized Introduction:`,
});

const generatePersonalizedIntroFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedIntroFlow',
    inputSchema: GeneratePersonalizedIntroInputSchema,
    outputSchema: GeneratePersonalizedIntroOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
