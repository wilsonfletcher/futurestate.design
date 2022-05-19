import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import preact from '@astrojs/preact'
// import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: 'https://futurestatedesign.surge.sh/',
  integrations: [
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      config: { applyBaseStyles: false }
    }),
    vue(),
    preact()
    // partytown()
  ],
  markdown: {
    drafts: true
  }
})
