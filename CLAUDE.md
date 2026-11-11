# This site

CMO Kit's marketing site at cmokit.ai: a static Astro site on GitHub Pages, with no Worker of its
own. `www.cmokit.ai` redirects to `cmokit.ai` through GitHub Pages.

The home page is a placeholder holding the waitlist form, until the site is designed from CMO Kit's
design system.

## The waitlist

- The form and its script come from CMO Kit's account page at app.cmokit.ai, under Waitlist. It
  posts to `https://app.cmokit.ai/join/<brand>`, which keeps the list in the hosted backend
  (ADR-0043 in cmokit/cmokit) and answers with the person's referral link: the page they joined on,
  with its query parameters and their code in `ref`.
- The hosted waitlist takes joins only from pages on the sites listed on the account page, which is
  `https://cmokit.ai`. A page served from another address, including `www` or a local server, is
  refused.
- Keep the form's field names (`email`, and `website`, a field only bots fill in) and its
  `data-cmokit-waitlist` and `data-cmokit-referral` attributes as the account page gives them. Style
  it freely.
- Joining sends nothing. Activation happens on the account page, and the hosted waitlist sends no
  email yet, so the page must not promise one.

## The beta terms

- `src/pages/beta-terms.astro` is the closed beta terms at `https://cmokit.ai/beta-terms/`, which a
  person accepts at their first sign-in after activation. The hosted content server's `TERMS_URL`
  is that address and its `TERMS_VERSION` is the page's `version`.
- Any change to the terms' text is a new version: change `version` and `TERMS_VERSION` together.
  The waitlist page links to the terms.

## Deployment

A push to `main` builds the site and deploys it to GitHub Pages. A pull request builds it only.
