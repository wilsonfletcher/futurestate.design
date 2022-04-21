import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import preact from '@astrojs/preact';
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://futurestatedesign.surge.sh/',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), vue(), preact(), partytown()]
});