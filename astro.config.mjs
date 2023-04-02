import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://numifx.live",
  integrations: [tailwind(), vue(), robotsTxt()],
  experimental: {
    assets: true
  }
});