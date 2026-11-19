<script lang="ts">
  import SourceLink from "@qezta/ui/components/atoms/SourceLink.svelte";

  const mainSiteUrl = "https://divit.qezta.com";
  const logoSrc = "/qezta.gif";
  const logoAlt = "Qezta Logo";
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

  <nav class="ssh-access" aria-label="Qezta over SSH">
    <a href="ssh://qezta@qezta.com">Explore Qezta over SSH</a>
    <code>ssh qezta@qezta.com</code>
    <span class="status">SSH access is being set up.</span>
  </nav>

  <section class="contacts" aria-labelledby="contact-heading">
    <h2 id="contact-heading">Contact Qezta</h2>
    <p class="contact-note">
      For enquiries today, email <a href="mailto:divit@qezta.com"
        >divit@qezta.com</a
      >. The company inboxes below are opening soon.
    </p>
    <dl class="contact-list">
      {#each contacts as contact}
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
</div>

<SourceLink repo="https://github.com/Qezta/site" />

<style lang="scss">
  .placeholder-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
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

  h1 {
    margin-bottom: 0.5rem;
  }

  // Let copy wrap: `nowrap` clipped both edges of centred text on phones.
  p {
    line-height: 1.6;
    max-width: 40rem;
  }

  .link-paragraph a {
    overflow-wrap: anywhere;
  }

  .ssh-access {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem 1rem;
    max-width: 40rem;
    padding: 1rem;
    border: 1px solid var(--gray);
    border-radius: 12px;
  }

  code {
    font-family: monospace;
    overflow-wrap: anywhere;
    user-select: text;
  }

  .status {
    flex-basis: 100%;
    font-size: 0.85rem;
  }

  .contacts {
    width: 100%;
    max-width: 40rem;
    margin-top: 1rem;
  }

  h2 {
    font-size: 1.3rem;
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
    border: 1px solid var(--gray);
    border-radius: 12px;
    background: #131313;
  }

  dt {
    font-size: 0.85rem;
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
    border-radius: 2px;
  }

  a {
    text-decoration: underline;
    font-weight: bold;

    &:hover {
      text-decoration: none;
    }
  }
</style>
