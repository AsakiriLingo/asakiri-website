// @ts-check
import { copyFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// Emits dist/ja/404.html (alongside the default dist/ja/404/index.html) so hosts
// that serve the nearest 404.html (e.g. Cloudflare Pages) use the Japanese 404
// for missing /ja/* routes. The root /404.html stays the universal fallback.
function localized404() {
  return {
    name: 'localized-404',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const out = fileURLToPath(dir);
        const src = path.join(out, 'ja', '404', 'index.html');
        const dest = path.join(out, 'ja', '404.html');
        if (existsSync(src)) copyFileSync(src, dest);
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
        },
      },
      namespaces: {
        news: false,
        video: false,
      },
    }),
  ],
});
