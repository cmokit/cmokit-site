# CMO Kit's design system

Small on purpose. Tokens live in `src/styles/tokens.css` and every component in
`src/styles/site.css` is built from them. Change a token, not a component, when the look changes.

## Direction

Reserved in structure, warm in feel. The brand stays quiet so the customer's own content is the
expressive part. Modern and gender neutral: earthy neutrals, one confident accent, real people and
real footage when photography arrives. Avoid feed clichés (singing bowls, sunsets, quote cards) as
much as startup gradients.

## Color

One accent, spruce. Everything else is a neutral. Light follows the visitor's setting; dark is
defined for every token, and `data-theme="light"` or `"dark"` on `<html>` forces either.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--color-bg` | `#f2efe8` linen | `#141613` | The page |
| `--color-surface` | `#fffcf6` paper | `#1d201c` | Cards, fields |
| `--color-surface-sunk` | `#e9e4da` | `#191b18` | Alternate section bands |
| `--color-ink` | `#1f1c18` | `#ece8df` | Text |
| `--color-ink-muted` | `#5c564e` | `#a39c90` | Secondary text |
| `--color-line` | `#ddd5c8` | `#33362f` | Borders, hairlines |
| `--color-accent` | `#2d5a4a` spruce | `#86c2a9` | Primary buttons, links, marks |
| `--color-on-accent` | `#ffffff` | `#141613` | Text on the accent |

Every text pairing meets WCAG AA (body text 6.3:1 or better). Use the accent for one thing per
view: the main action.

## Type

Both faces are from Google Fonts, self-hosted through Fontsource so a visit calls no third party.

- **Schibsted Grotesk** for headings, semibold, tracked slightly tight.
- **Instrument Sans** for everything else.

Scale (`--text-*`): xs 13, sm 15, base 17, lg 20, xl 26, 2xl 30 to 40, 3xl 38 to 64 (the last two
are fluid). Body line height 1.6, headings 1.1. Uppercase only for small eyebrow labels.

## Space and shape

A 4px base: `--space-1` 4 through `--space-9` 96. Radius 6, 10 and 16, with pills for buttons and
fields. Page width 72rem, reading width 40rem, gutter 16 to 32px.

## Components

- **Button**: `.button` plus `--primary` (accent, the one main action) or `--quiet` (outline);
  `--small` for the nav.
- **Field**: `.field`, a pill input on the surface color.
- **Waitlist**: `.waitlist` wraps the hosted form. Keep its field names, its `data-cmokit-*`
  attributes and its script as the account page gives them.
- **Referral**: `.referral` is each box shown after joining. The first holds the place line
  (`.referral__place`) and the person's link in a copy block (`.referral__copy`) with a Copy link
  button, whose script is separate and only reads the link. The second is the Instagram step, whose code sits in the same copy block.
- **Card**: `.card`, a surface with a hairline border. `.grid` lays cards out and wraps on phones.
- **Steps**: `.steps`, an ordered list of cards, numbered automatically.
- **Nav** and **footer**: in `src/layouts/Page.astro`, on every page.
- **Prose**: `.prose` for long text such as the beta terms and privacy policy.
- **Mark**: an open ring, the weekly loop, in the accent color. `public/favicon.svg` is the same.

## Words

Plain, warm and specific, written for independent creators: people who make content for a living,
usually for themselves. No em dashes, no hype, no funnel or growth talk, no health or healing claims. Say what isn't proven yet. An
example on the page is labeled as one.
