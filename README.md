# CMO Kit's site

CMO Kit's marketing site at cmokit.ai, a static Astro site on GitHub Pages. Its home page holds the
closed beta's waitlist form. The form posts to CMO Kit's hosted waitlist at app.cmokit.ai, which keeps the
list and answers with the person's own referral link. The site runs no Worker and holds no key.

The look comes from CMO Kit's design system, described in [DESIGN.md](DESIGN.md).

## Set up

1. **GitHub Pages.** Under **Settings > Pages**, set the source to GitHub Actions and the custom
   domain to `cmokit.ai`. With a `www` record pointing at `cmokit.github.io`, GitHub Pages sends
   `www.cmokit.ai` to `cmokit.ai`.
2. **Hosted waitlist.** On your account page at app.cmokit.ai, under **Waitlist**, list
   `https://cmokit.ai` as a site. The form is refused from any other address, `www` included.

A push to `main` deploys the site. A pull request only builds it.

## The waitlist

Your account page at app.cmokit.ai lists everyone, those who referred the most people first, and
lets you activate each person. It sends no email yet, so you tell each person yourself.

## Work on it

```
npm install
npm run dev
```

The form works only from https://cmokit.ai, so a local join is refused.
