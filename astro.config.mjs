import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import preact from '@astrojs/preact'
import compress from 'astro-compress'

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
    preact(),
    compress()
  ],
  markdown: {
    drafts: true
  }
})
