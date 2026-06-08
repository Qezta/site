<div id="top">
    <div align="center">
  <h1 align='center'>qezta.com</h1>
  <strong>Marketing and landing site for Qezta.</strong>
    </div>
</div>

---

<div align='center'>
    <a href="https://qezta.com/">
  <img src="https://img.shields.io/badge/site-qezta.com-orange?style=for-the-badge&logo=svelte&logoColor=white" alt="site" />
    </a>
    <a href="https://github.com/Qezta/site/blob/main/LICENSE">
  <img src="https://img.shields.io/badge/license-MIT-orange?style=for-the-badge&logo=unlicense&logoColor=white" alt="license"/>
    </a>
    <a href="https://svelte.dev/">
  <img src="https://img.shields.io/badge/SvelteKit-static-orange?style=for-the-badge&logo=svelte&logoColor=white" alt="sveltekit"/>
    </a>
    <img src="https://img.shields.io/badge/language-TypeScript-orange?style=for-the-badge&logo=typescript&logoColor=white" alt="repo-top-language"/>
</div>

---

<div align='center'>
    <a href="https://github.com/Qezta/site/actions/workflows/flake-check.yml">
  <img src="https://github.com/Qezta/site/actions/workflows/flake-check.yml/badge.svg" alt="nix-flake-check"/>
    </a>
    <a href="https://github.com/Qezta/site/actions/workflows/gen-sitemap.yml">
  <img src="https://github.com/Qezta/site/actions/workflows/gen-sitemap.yml/badge.svg" alt="gen-sitemap"/>
    </a>
    <a href="https://github.com/Qezta/site/actions/workflows/flake-lock-update.yml">
  <img src="https://github.com/Qezta/site/actions/workflows/flake-lock-update.yml/badge.svg" alt="nix-flake-lock-update"/>
    </a>
</div>

---

Marketing/landing site for [qezta.com](https://qezta.com).

## Stack

- **SvelteKit** with `@sveltejs/adapter-static`
- **Three.js** WebGL cursor
- Shared design system: [`@qezta/ui`](https://github.com/qezta/ui) (git dep, pinned to a tag)

## Development

```sh
pnpm install
pnpm dev        # vite dev server on :5174
pnpm check      # svelte-check
pnpm lint       # prettier + eslint
pnpm build      # static site build
```
