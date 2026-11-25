# Seraphine Lore — HUNTtheTRUTH

Independent, source-led research website based on the latest HUNTtheTRUTH Confluence investigation reviewed on 26 November 2026. The reader-facing pages separate Riot's original October 2020 sources, the subsequent lore revisions, contemporary criticism and the later search/AI information-provenance investigation.

## Repository and URL

- Organisation: `seraphine-lore`
- Repository: `seraphine-lore.github.io`
- GitHub Pages URL (after deployment): https://seraphine-lore.github.io/

## Routes

| Route | Subject |
| --- | --- |
| `/` | Investigation overview |
| `/seraphine-original-lore/` | October 2020 Riot material |
| `/seraphine-skarner/` | Seraphine and Skarner |
| `/seraphine-brackern/` | Brackern crystals and Hextech |
| `/seraphine-lore-changes/` | Original and revised biography |
| `/seraphine-controversy/` | Reasons for the release backlash |
| `/seraphine-misinformation/` | Creators, wiki, search and AI provenance |
| `/sources/` | Source register |

## Build locally

Requires a Node.js version supported by the current Astro release. From the repository root:

```bash
npm install
npm run dev
npm run build
```

Commit the generated `package-lock.json` after installing dependencies so subsequent builds can be reproduced. The site uses Astro and `@astrojs/sitemap`.

## Deploy with GitHub Actions

1. Put the **contents** of this project at the root of the GitHub repository, keeping `.github/workflows/deploy.yml`.
2. Push to `main`.
3. In GitHub **Settings → Pages**, select **GitHub Actions** under Build and deployment.
4. Inspect the deployment run in **Actions** and confirm the live root URL.

The provided workflow uses `withastro/action` and `actions/deploy-pages` for a static GitHub Pages deployment. The Astro configuration sets the site at `https://seraphine-lore.github.io/` with `/` as the base path, so links must not include the repository name as a prefix.

## Content and editorial status

The provided pages are the *initial website draft*, not a verbatim mirror of the long Confluence investigation. Their facts and chronology were developed from the most recent report retrieved on 26 November 2026. Review individual articles and their citations before treating the website as a completed publication; in particular, preserve historical distinctions and avoid silently substituting current lore for 2020 sources. The private Confluence/Jira workflow is not part of the public website copy.

## Technical references

- [Astro — GitHub Pages deployment](https://docs.astro.build/en/guides/deploy/github/)
- [Astro — sitemap integration](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
