<div id="top">
    <div align="center">
        <img alt='An abstract image of a donut-like object' title='Qezta' height=250 width=250 src='https://qezta.com/qezta.gif' />
        <h1 align='center'>site</h1>
        <strong>qezta.com: marketing site for Qezta</strong>
    </div>

</div>

---

<div align='center'>
    <a href="https://github.com/Qezta/site/stargazers">
        <img src="https://img.shields.io/github/stars/Qezta/site?&style=for-the-badge&logoColor=white&color=purple&logo=starship" alt="stars"/>
    </a>
    <a href="https://github.com/Qezta/site/">
        <img src="https://img.shields.io/github/repo-size/Qezta/site?&style=for-the-badge&logoColor=white&color=purple&logo=github" alt="size"/>
    </a>
    <a href="https://github.com/Qezta/site/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/license-HONCL--1.0-purple?style=for-the-badge&logo=unlicense&logoColor=white" alt="license"/>
    </a>
    <a href="https://github.com/nixos/nixpkgs">
        <img src="https://img.shields.io/badge/Nixpkgs-unstable-blue.svg?style=for-the-badge&logo=NixOS&logoColor=white&color=purple" alt="nixpkgs"/>
    </a>
    <a href="https://qezta.com">
        <img src="https://img.shields.io/badge/site-qezta.com-purple.svg?style=for-the-badge&logo=googlechrome&logoColor=white" alt="site"/>
    </a>
    <img src="https://img.shields.io/github/languages/top/Qezta/site?style=for-the-badge&color=purple" alt="repo-top-language"/>
</div>

---

<div align='center'>
    <a href="https://github.com/Qezta/site/actions/workflows/flake-check.yml">
        <img src="https://github.com/Qezta/site/actions/workflows/flake-check.yml/badge.svg" alt="flake-check"/>
    </a>
    <a href="https://github.com/Qezta/site/actions/workflows/gen-sitemap.yml">
        <img src="https://github.com/Qezta/site/actions/workflows/gen-sitemap.yml/badge.svg" alt="gen-sitemap"/>
    </a>
</div>

---

## Contents

- [Overview](#overview)
- [Stack](#stack)
- [Development](#development)

---

## Overview

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

<div align="right">

[![][back-to-top]](#top)

</div>

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square&color=purple
