<script lang="ts">
  import SourceLink from "@qezta/ui/components/atoms/SourceLink.svelte";
  import SiteFooter from "$lib/components/SiteFooter.svelte";

  const mainSiteUrl = "https://divit.qezta.com";
  const logoSrc = "./qezta.gif";
  const logoAlt = "Animated Qezta torus logo";
  const contacts = [
    { purpose: "General enquiries", email: "hello@qezta.com" },
    { purpose: "Security reports", email: "security@qezta.com" },
    { purpose: "Privacy requests", email: "privacy@qezta.com" },
    { purpose: "Legal notices", email: "legal@qezta.com" },
  ];
</script>

<div class="placeholder-container">
  <img src={logoSrc} alt={logoAlt} class="logo" />

  <h1>Under Development</h1>

  <p>
    This version of the site is currently under active development. Thanks for
    stopping by!
  </p>

  <p class="link-paragraph">
    Until then, visit Divit's portfolio:
    <a href={mainSiteUrl} target="_blank" rel="noopener noreferrer"
      >{mainSiteUrl}</a
    >
  </p>

  <section class="contacts" aria-labelledby="contact-heading">
    <h2 id="contact-heading">Contact Qezta</h2>
    <p class="contact-note">
      For enquiries today, email <a href="mailto:divit@qezta.com"
        >divit@qezta.com</a
      >. The company inboxes below are opening soon.
    </p>
    <dl class="contact-list">
      {#each contacts as contact (contact.email)}
        <div class="contact-card">
          <dt>{contact.purpose}</dt>
          <dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd>
        </div>
      {/each}
    </dl>
    <p class="alias-note">
      General-contact alias: <a href="mailto:hi@qezta.com">hi@qezta.com</a>.
    </p>
  </section>

  <SiteFooter />
</div>

<SourceLink repo="https://github.com/Qezta/site" />

<style lang="scss">
  /* Use the same captured shader frame only when WebGL is unavailable. */
  :global(body.portfolio-static::before) {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background: #000 var(--shader-grain) repeat;
    background-size: 256px 256px;
  }

  .placeholder-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: min(100%, 48rem);
    min-height: 80vh;
    margin-inline: auto;
    text-align: center;
    padding: 2rem;
    padding-bottom: 6rem;
    gap: 1.5rem;
  }

  .logo {
    max-width: 250px;
    height: auto;
    margin-bottom: 1rem;
  }

  h1,
  h2 {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #eee;
  }

  h1 {
    margin-bottom: 0.5rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
  }

  // Let copy wrap: `nowrap` clipped both edges of centred text on phones.
  p {
    line-height: 1.6;
    max-width: 40rem;
    color: #bbb;
  }

  .link-paragraph a {
    overflow-wrap: anywhere;
  }

  .contacts {
    width: 100%;
    max-width: 40rem;
    margin-top: 1rem;
  }

  h2 {
    font-size: 1.1rem;
  }

  .contact-note,
  .alias-note {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .contact-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    text-align: left;
  }

  .contact-card {
    min-width: 0;
    padding: 1rem;
    border: 1px solid #555;
    border-radius: 0;
    background: #131313eb;
  }

  dt {
    color: #bbb;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 0.8rem;
  }

  dd {
    margin: 0.4rem 0 0;
    overflow-wrap: anywhere;
    user-select: text;
  }

  .contact-card a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    max-width: 100%;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    .contact-card {
      background: rgb(13 13 13 / 88%);
    }
  }

  @media (max-width: 480px) {
    .placeholder-container {
      padding-inline: 1rem;
    }

    .contact-list {
      grid-template-columns: 1fr;
    }
  }

  a:focus-visible {
    outline: 2px solid var(--highlight);
    outline-offset: 4px;
    border-radius: 0;
  }

  a {
    text-decoration: underline;
    font-weight: 500;

    &:hover {
      color: #fff;
    }
  }
  // This site's controls follow the portfolio without changing the shared component.
  .placeholder-container ~ :global(.source-link) {
    box-sizing: border-box;
    min-height: 44px;
    padding: 0 14px;
    bottom: calc(20px + env(safe-area-inset-bottom));
    left: calc(20px + env(safe-area-inset-left));
    border: 1px solid #777;
    border-radius: 0;
    background: #090909;
    color: #f5f5f5;
    font-size: 12px;
    backdrop-filter: none;
    transition:
      border-color 0.15s ease,
      background-color 0.15s ease;
  }

  .placeholder-container ~ :global(.source-link),
  .placeholder-container ~ :global(.source-link *) {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  }

  .placeholder-container ~ :global(.source-link:hover) {
    border-color: #f5f5f5;
    background: #222;
    transform: none;
    box-shadow: none;
  }

  .placeholder-container ~ :global(.source-link:focus-visible) {
    outline: 2px solid #ff477f;
    outline-offset: 3px;
  }
</style>
