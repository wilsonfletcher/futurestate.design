import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  site: 'https://futurestate.design/',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    vue(),
    preact()
  ],
  markdown: {
    drafts: true
  }
})
