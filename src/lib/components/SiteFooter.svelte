<script lang="ts">
  import HuggingFaceIcon from "@qezta/ui/components/atoms/icons/HuggingFaceIcon.svelte";

  interface SocialLink {
    name: string;
    href: string;
    icon: "github" | "huggingface";
  }

  interface AccessLink {
    name: string;
    href: string;
  }

  export let socialLinks: SocialLink[] = [
    { name: "GitHub", href: "https://github.com/Qezta", icon: "github" },
    {
      name: "Hugging Face",
      href: "https://huggingface.co/Qezta",
      icon: "huggingface",
    },
  ];

  const plannedProfiles = [
    {
      name: "OpenCollective",
      path: "M12 1a11 11 0 1 0 7.78 18.78l-2.12-2.12A8 8 0 1 1 17.66 6.34l2.12-2.12A10.97 10.97 0 0 0 12 1Zm8.96 4.62-2.44 1.75a8 8 0 0 1 0 9.26l2.44 1.75a11 11 0 0 0 0-12.76Z",
    },
    {
      name: "Patreon",
      path: "M1.5 1.5h4v21h-4Zm13.75 0a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5Z",
    },
    {
      name: "X / Twitter",
      path: "M18.9 1.5h3.3l-7.2 8.2 8.5 12.8h-6.7l-5.3-8.1-7.1 8.1H1.1l8.8-10L1.7 1.5h6.9l4.8 7.4Zm-1.2 19h1.8L7.6 3.4H5.7Z",
    },
    {
      name: "Mastodon",
      path: "M12 1.5c-4.3 0-8.6.3-9.4 4.3-.4 2.1-.4 5.2.1 7.4.6 3.3 3.4 4.1 6.1 4.4 1.1.1 2.2.1 3.2 0v2.5c-3 .7-5.3.2-7-1.1.3 2.2 2.6 3.5 5.5 3.5 4.4 0 9.8-1.1 10.6-7.9.4-2.7.4-6.5-.1-8.8-.8-4-5-4.3-9.1-4.3ZM6.3 6.3h2.3l.7 1.2 1.2-1.2h3l1.2 1.2.7-1.2h2.3v8.1h-2.4V9.5c0-1-.4-1.3-1-1.3s-1 .4-1 1.3v2.6h-2.4V9.5c0-.9-.4-1.3-1-1.3s-1 .3-1 1.3v4.9H6.3Z",
    },
    {
      name: "Kaggle",
      path: "M6 1h2.5v13.3L14.8 8h3.4l-6.8 6.6L18.5 23h-3.3l-5.5-6.8-1.2 1.2V23H6Z",
    },
  ];

  export let alternateLinks: AccessLink[] = [
    { name: "HTTP", href: "https://qezta.com" },
    { name: "SSH", href: "ssh://qezta@qezta.com" },
  ];
</script>

<footer aria-label="Qezta links">
  <nav class="socials" aria-label="Qezta elsewhere">
    <span class="label">Elsewhere</span>
    <div class="links">
      {#each socialLinks as link (link.href)}
        <!-- Verified organization profiles are external URLs. -->
        <!-- eslint-disable svelte/no-navigation-without-resolve -->
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          title={link.name}
          aria-label={`Qezta on ${link.name}`}
        >
          <span aria-hidden="true">
            {#if link.icon === "github"}
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path
                  d="M12 .75a11.25 11.25 0 0 0-3.558 21.923c.563.103.768-.244.768-.542 0-.267-.01-.974-.015-1.912-3.13.68-3.79-1.508-3.79-1.508-.512-1.3-1.25-1.646-1.25-1.646-1.023-.699.077-.685.077-.685 1.13.08 1.724 1.16 1.724 1.16 1.005 1.72 2.637 1.223 3.279.935.102-.727.393-1.223.715-1.504-2.499-.284-5.126-1.25-5.126-5.563 0-1.229.439-2.232 1.159-3.019-.116-.284-.502-1.428.11-2.977 0 0 .945-.302 3.094 1.153A10.79 10.79 0 0 1 12 6.195c.956.004 1.918.13 2.818.379 2.149-1.455 3.092-1.153 3.092-1.153.614 1.55.228 2.693.112 2.977.722.787 1.157 1.79 1.157 3.019 0 4.324-2.631 5.276-5.137 5.555.404.35.765 1.042.765 2.1 0 1.517-.014 2.74-.014 3.112 0 .3.203.65.774.54A11.252 11.252 0 0 0 12 .75Z"
                />
              </svg>
            {:else}
              <HuggingFaceIcon size="20px" />
            {/if}
          </span>
        </a>
        <!-- eslint-enable svelte/no-navigation-without-resolve -->
      {/each}
      {#each plannedProfiles as profile (profile.name)}
        <span
          class="coming-soon"
          role="img"
          aria-label={`${profile.name} — coming soon`}
          title={`${profile.name} — coming soon`}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"><path d={profile.path} /></svg
          >
          <span class="soon-label" aria-hidden="true">soon</span>
        </span>
      {/each}
    </div>
  </nav>

  <nav class="access" aria-label="Alternate access">
    <span class="label">Alternate access</span>
    <div class="links">
      {#each alternateLinks as link (link.href)}
        <!-- External and alternate-protocol URLs are not application routes. -->
        <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
        <a href={link.href}>{link.name}</a>
      {/each}
    </div>
  </nav>
  <p class="network-note">Also available on IPFS and Tor.</p>
  <p class="trademark-note">
    The Qezta torus logo, including its animated version, is a trademark of Qezta.
  </p>
</footer>

<style>
  footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem 2rem;
    width: 100%;
    max-width: 40rem;
    margin-top: 1rem;
    padding-top: 0.75rem;
    border-top: 1px solid #444;
    text-align: left;
  }

  nav,
  .links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  nav {
    gap: 0.25rem 0.5rem;
  }

  .links {
    min-width: 0;
    max-width: 100%;
  }

  .coming-soon {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    min-width: 44px;
    min-height: 44px;
    color: #999;
  }

  .coming-soon svg,
  .coming-soon path,
  .soon-label {
    color: inherit;
  }

  .soon-label {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 9px;
    line-height: 1;
  }

  .label,
  .network-note,
  .trademark-note,
  a {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 12px;
  }

  .label,
  .network-note,
  .trademark-note {
    color: #aaa;
  }

  .network-note,
  .trademark-note {
    flex-basis: 100%;
    margin: 0;
    line-height: 1.6;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;
    color: #ddd;
    text-decoration: none;
  }

  a span {
    display: inline-flex;
    color: inherit;
  }

  a:hover {
    color: #ff477f;
  }

  a :global(svg),
  a :global(path) {
    color: inherit;
  }

  a:focus-visible {
    outline: 2px solid #ff477f;
    outline-offset: 2px;
  }
</style>
