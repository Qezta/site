# qezta.com

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

## License

MIT — see [LICENSE](./LICENSE).
