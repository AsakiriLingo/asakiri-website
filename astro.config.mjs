// @ts-check
import { copyFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// Emits dist/<locale>/404.html (alongside the default dist/<locale>/404/index.html)
// so hosts that serve the nearest 404.html (e.g. Cloudflare Pages) use the localized
// 404 for missing /<locale>/* routes. The root /404.html stays the universal fallback.
const localizedLocales = ['ja', 'es', 'it', 'pt'];

function localized404() {
  return {
    name: 'localized-404',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const out = fileURLToPath(dir);
        for (const locale of localizedLocales) {
          const src = path.join(out, locale, '404', 'index.html');
          const dest = path.join(out, locale, '404.html');
          if (existsSync(src)) copyFileSync(src, dest);
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.asakiri.com',
  integrations: [
    localized404(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          ja: 'ja-JP',
          es: 'es-ES',
          it: 'it-IT',
          pt: 'pt-PT',
        },
      },
      namespaces: {
        news: false,
        video: false,
      },
    }),
  ],
});
