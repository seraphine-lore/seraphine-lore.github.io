import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Organisation Pages repository: seraphine-lore/seraphine-lore.github.io.
// This exact repository name publishes at the domain root, not a project subpath.
export default defineConfig({
  site: 'https://seraphine-lore.github.io',
  base: '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/investigation': '/seraphine-lore-misinformation-investigation/',
  },
});
