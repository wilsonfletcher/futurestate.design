import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import preact from '@astrojs/preact';

import astro from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://futurestate.design/',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), vue(), preact(), astro()],
  markdown: {
    drafts: true
  }
});