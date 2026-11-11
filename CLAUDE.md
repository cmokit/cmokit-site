# This site

CMO Kit's marketing site at cmokit.ai: a static Astro site on GitHub Pages, with no Worker of its
own. `www.cmokit.ai` redirects to `cmokit.ai` through GitHub Pages.

The home page holds the waitlist form. Every page is styled from CMO Kit's design system:
`DESIGN.md` describes it, `src/styles/tokens.css` holds its tokens and `src/styles/site.css` its
components. Fonts are self-hosted through Fontsource, so a visit calls no third party, as the
privacy policy says; don't link Google Fonts or any other host.

## The waitlist

- The form and its script come from CMO Kit's account page at app.cmokit.ai, under Waitlist. It
  posts to `https://app.cmokit.ai/join/<brand>`, which keeps the list in the hosted backend
  (ADR-0043 in cmokit/cmokit) and answers with the person's referral link: the page they joined on,
  with its query parameters and their code in `ref`.
- The hosted waitlist takes joins only from pages on the sites listed on the account page, which is
  `https://cmokit.ai`. A page served from another address, including `www` or a local server, is
  refused.
- The form is a funnel: join with an email, then the person's place and referral link, then a code
  to comment on CMO Kit's Reels, which stays hidden until the hosted waitlist offers it. Keep the
  field names (`email`, and `website`, a field only bots fill in), every `data-cmokit-*` attribute
  and the script's logic as the account page gives them. Style it freely. The script fires `cmokit:joined` for any hook.
- The form sends the page's address, and the hosted waitlist keeps its `utm_` tags with each signup,
  so links in posts can carry them.
- Joining sends nothing. Activation happens on the account page, and the hosted waitlist sends no
  email yet, so the page must not promise one.

## The beta terms

- `src/pages/beta-terms.astro` is the closed beta terms at `https://cmokit.ai/beta-terms/`, which a
  person accepts at their first sign-in after activation. The hosted content server's `TERMS_URL`
  is that address and its `TERMS_VERSION` is the page's `version`.
- Any change to the terms' text is a new version: change `version` and `TERMS_VERSION` together.
  The waitlist page links to the terms.

## The privacy policy

- `src/pages/privacy.astro` is the privacy policy at `https://cmokit.ai/privacy/`, linked from the
  waitlist page, the beta terms and every page's footer. It says only what the site and the hosted
  waitlist actually collect: change it, and its date, when either collects something new, such as
  analytics.

## Deployment

A push to `main` builds the site and deploys it to GitHub Pages. A pull request builds it only.
