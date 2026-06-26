import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    titleAccent: z.string(),
    titleTail: z.string(),
    urduTag: z.string(),
    category: z.string(),
    readMinutes: z.number(),
    date: z.string(),
    excerpt: z.string(),
    ogImage: z.string().optional(),
  }),
});

const marketplace = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/marketplace' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    category: z.enum(['Template', 'Checklist', 'Guide', 'UI Kit', 'Spreadsheet']),
    price: z.object({
      pkr: z.number().nullable(),
      usd: z.number().nullable(),
      free: z.boolean(),
    }),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    downloadUrl: z.string().optional(),
  }),
});

export const collections = { blog, marketplace };
