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

    // Narrative content
    story: z.string(),
    firstThing: z.string(),
    dayInLife: z.array(z.object({ time: z.string(), activity: z.string() })),
    personality: z.string(),
    confidence: z.string(),
    aroundHouseIntro: z.string(),
    aroundHouseList: z.array(z.string()),
    walking: z.string(),
    otherDogs: z.string(),
    children: z.string(),
    food: z.string(),
    health: z.string(),
    carRides: z.string(),
    grooming: z.string(),
    loves: z.array(z.string()),
    quirks: z.array(z.string()),
    stillWorking: z.string(),
    lookingFor: z.string(),
    finalThoughts: z.string(),
  }),
});

export const collections = { dogs };
