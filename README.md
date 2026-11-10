# CMO Kit's site

The site at app.cmokit.ai, made from CMOkit's starter (`npm create cmokit`). Today it holds the
closed beta's waitlist: a form that puts a person on the list and gives them their own referral
link, and the "you're in" email a maintainer sends when they activate someone.

## Set up

Each value goes in this repository's **Settings > Secrets and variables > Actions**. You enter every
key yourself; a key never goes in a chat, an issue or a file in this repository.

1. **GitHub Pages.** Under **Settings > Pages**, set the source to GitHub Actions and the custom
   domain to `app.cmokit.ai`.
2. **Cloudflare.** Add a DNS record for `app.cmokit.ai` pointing at GitHub Pages, proxied, with
   SSL/TLS set to Full. Add the repository variable `CLOUDFLARE_ACCOUNT_ID` and the secret
   `CLOUDFLARE_API_TOKEN` (the "Edit Cloudflare Workers" template, for the `cmokit.ai` zone).
3. **PostHog.** Put the site's project key in `cmokit.config.ts`.
4. **The waitlist key.** Make a long random string and save it as the secret `WAITLIST_KEY`. Keep
   the same string in your shell as `CMOKIT_WAITLIST_KEY` to read and activate the list.
5. **SendGrid, when email is ready.** Authenticate `cmokit.ai` under Settings > Sender
   Authentication, unless hosted sign-in codes already did. Create an unsubscribe group, and fill
   in `messaging` in `cmokit.config.ts`: the postal address and the group's id. Create an API key
   with Mail Send and Suppressions access and save it as the secret `SENDGRID_API_KEY`. Turn on the
   signed event webhook, posting to `https://app.cmokit.ai/_cmokit/leads/events`, and save its
   verification key as the variable `SENDGRID_WEBHOOK_KEY`. Until then people still join and can be
   activated; you tell them yourself.

A push to `main` deploys the site, the lifecycle and the edge.

## The waitlist

```
npx cmokit waitlist --site https://app.cmokit.ai
npx cmokit waitlist activate <email> --site https://app.cmokit.ai
```

The first lists everyone, those who referred the most people first. The second lets one person in
and sends them `messages/youre-in.md` once. Both read the key from `CMOKIT_WAITLIST_KEY`.

## Work on it

```
npm install
npm run dev
```

See `CLAUDE.md` for how the waitlist, experiments and messages work.
