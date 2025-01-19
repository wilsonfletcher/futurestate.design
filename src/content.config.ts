import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/pages' })
})

// const people = defineCollection({
//   loader: glob({ pattern: '**/*.md', base: './src/data/people' })
// })

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/reviews' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    author: z.object({
      giveName: z.string(),
      familyName: z.string()
    })
  })
})

export const collections = { pages, reviews }
