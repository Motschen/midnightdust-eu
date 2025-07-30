import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

import alpinejs from "@astrojs/alpinejs";
import rehypeCitation from 'rehype-citation';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.midnightdust.eu',
  compressHTML: true,
  integrations: [
    mdx(
      {rehypePlugins: [[rehypeCitation, {
        bibliography: "https://raw.githubusercontent.com/timlrx/rehype-citation/main/test/references-data.bib",
        linkCitations: true,
        showTooltips: true,
        inlineClass: ["citation"],
        csl: "https://raw.githubusercontent.com/citation-style-language/styles/master/acm-sig-proceedings.csl"
      }]]}
    ),
    icon(),
    tailwind({
      applyBaseStyles: false
    }
  ), alpinejs()],
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    }
  }
});
