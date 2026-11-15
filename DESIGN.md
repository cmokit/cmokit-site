# CMO Kit's design system

The source of truth is CMO Kit's design system in Claude Design, which the product (cmokit/cmokit)
and this site share. This file is the site's copy of it. Tokens live in `src/styles/tokens.css` and
every component in `src/styles/site.css` is built from them. When the look changes, change it in
Claude Design first, then the token here, not a component.

## Direction

Reserved in structure, warm in feel. The brand stays quiet so the customer's own content is the
expressive part. Modern and gender neutral, with real people and real footage when photography
arrives. Avoid feed clichés (singing bowls, sunsets, quote cards) as much as startup gradients.

## Color

The palette comes from plant and earth pigments: elderberry, lupine, cedar, sage and buckskin. It
draws on colors, never on patterns, motifs or symbols. The five pigments (`--elderberry`,
`--lupine`, `--cedar`, `--sage`, `--buckskin`) only feed the semantic tokens; build with these.
Light follows the visitor's setting; dark, a deep elderberry ground with buckskin text, is defined
for every token, and `data-theme="light"` or `"dark"` on `<html>` forces either.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--color-bg` | `#efe6d4` buckskin | `#1b161e` | The page |
| `--color-surface` | `#f8f3e9` | `#241e28` | Cards, fields |
| `--color-surface-sunk` | `#e4d8c1` | `#201a23` | Alternate section bands, the copy block |
| `--color-ink` | `#2b2130` | `#efe6d4` | Body text, card titles |
| `--color-heading` | `#4a3550` elderberry | `#c9bcdd` | Headlines, the why quote, the place line |
| `--color-ink-muted` | `#2f4a3a` cedar | `#aebe98` | Sublines, leads, notes |
| `--color-line` | `#d9cdb6` | `#3a3140` | Hairlines, decorative only |
| `--color-line-strong` | `#857766` | `#7d6e86` | Borders of fields and quiet buttons |
| `--color-accent` | `#4a3550` elderberry | `#b3a3cb` | The main action's fill, the mark, focus |
| `--color-on-accent` | `#efe6d4` | `#1b161e` | Text on the accent |
| `--color-link` | `#655282` | `#b3a3cb` | Links (a deeper lupine) |
| `--color-highlight` | `#8e7ba6` lupine | `#8e7ba6` | Bullets and step numbers, on bg or surface only |
| `--color-tag-bg` / `--color-tag-ink` | `#d3dbc6` / `#2f4a3a` | `#2a3a2f` / `#c3cfb2` | Tags such as "Example" |

Every text pairing meets WCAG AA in both themes (4.8:1 or better), and borders of controls and the
highlight hold 3:1. Raw sage is for quiet decorative fills only, never text. Use the accent fill for
one thing per view: the main action.

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
- **Tag**: `.note__tag`, tag ink on the tag fill, in a pill.
- **Card**: `.card`, a surface with a hairline border. `.grid` lays cards out and wraps on phones.
- **Steps**: `.steps`, an ordered list of cards, numbered automatically.
- **Nav** and **footer**: in `src/layouts/Page.astro`, on every page.
- **Prose**: `.prose` for long text such as the beta terms and privacy policy.
- **Mark**: an open ring, the weekly loop, in the accent color (elderberry, or `#b3a3cb` in dark). `public/favicon.svg` is the same.

## Words

Plain, warm and specific, written for independent creators: people who make content for a living,
usually for themselves. No em dashes, no hype, no funnel or growth talk, no health or healing claims. Say what isn't proven yet. An
example on the page is labeled as one.
