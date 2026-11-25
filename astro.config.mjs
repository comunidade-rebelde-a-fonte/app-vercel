// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const githubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  ...(githubPages && {
    site: 'https://comunidade-rebelde-a-fonte.github.io',
    base: '/app-vercel',
  }),
});
