import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const dogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/dogs' }),
  schema: z.object({
    current: z.boolean().default(false),
    title: z.string(),
    status: z.string(),
    rescue: z.string(),
    location: z.string(),
    age: z.string(),
    sex: z.string(),
    breed: z.string(),
    color: z.string(),
    weight: z.string(),
    heroImage: z.string(),
    applyUrl: z.string().url(),
    bio: z.string(),
    traits: z.array(z.string()),
    quickFacts: z.array(z.string()),
    idealHome: z.array(z.string()),
    story: z.string(),
  }),
});

export const collections = { dogs };
