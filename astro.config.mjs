import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://futurestate.design/',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    })
    // compress()
  ],
  markdown: {
    drafts: true
  }
})
