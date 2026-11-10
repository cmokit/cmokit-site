# CMO Kit's site

CMO Kit's marketing site at cmokit.ai and www.cmokit.ai, made from CMOkit's starter
(`npm create cmokit`). Today it holds the closed beta's waitlist: a form that puts a person on the
list and gives them their own referral link, and the "you're in" email sent when someone is
activated on CMO Kit's account page at app.cmokit.ai.

## Set up

Each value goes in this repository's **Settings > Secrets and variables > Actions**. You enter every
key yourself; a key never goes in a chat, an issue or a file in this repository.

1. **GitHub Pages.** Under **Settings > Pages**, set the source to GitHub Actions and the custom
   domain to `cmokit.ai`. GitHub Pages then sends `www.cmokit.ai` to it.
2. **Cloudflare.** In the `cmokit.ai` zone, add GitHub Pages' four apex `A` records for `cmokit.ai`
   and a `CNAME` for `www` pointing at `cmokit.github.io`, all proxied, with SSL/TLS set to Full.
   Add the repository variable `CLOUDFLARE_ACCOUNT_ID`, which must be hosted CMO Kit's own account,
   since its content server binds this site's lifecycle, and the secret `CLOUDFLARE_API_TOKEN` (the
   "Edit Cloudflare Workers" template, for that account and the `cmokit.ai` zone).
3. **PostHog.** Put the site's project key in `cmokit.config.ts`.
4. **Hosted CMO Kit.** After this site's first deploy, in cmokit/cmokit's `production` environment,
   save the variable `WAITLIST_CUSTOMER` with your brand's slug from your account page, then run
   **deploy-hosted** again. Your account page then lists the waitlist with an Activate button for
   each person.
5. **SendGrid, when email is ready.** Authenticate `cmokit.ai` under Settings > Sender
   Authentication, unless hosted sign-in codes already did. Create an unsubscribe group, and fill
   in `messaging` in `cmokit.config.ts`: the postal address and the group's id. Create an API key
   with Mail Send and Suppressions access and save it as the secret `SENDGRID_API_KEY`. Turn on the
   signed event webhook, posting to `https://cmokit.ai/_cmokit/leads/events`, and save its
   verification key as the variable `SENDGRID_WEBHOOK_KEY`. Until then people still join and can be
   activated; you tell them yourself.

A push to `main` deploys the site, the lifecycle and the edge.

## The waitlist

Your account page at app.cmokit.ai lists everyone, those who referred the most people first.
Activating a person there lets them in and sends them `messages/youre-in.md` once. The
`cmokit waitlist` command does the same from a terminal, but only with the secret `WAITLIST_KEY`
set here and in your shell as `CMOKIT_WAITLIST_KEY`, which the account page doesn't need.

## Work on it

```
npm install
npm run dev
```

See `CLAUDE.md` for how the waitlist, experiments and messages work.
