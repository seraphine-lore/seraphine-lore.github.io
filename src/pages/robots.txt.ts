export function GET({ site, url }: { site: URL | undefined; url: URL }) {
  const base = site ?? new URL(url.origin);
  const sitemap = new URL('sitemap-index.xml', base).toString();
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
