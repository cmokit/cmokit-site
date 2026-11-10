import { defineConfig } from '@cmokit/cli';

export default defineConfig({
  analytics: {
    posthog: {
      // The site's PostHog project key (Project settings → Project API key). It is public by design.
      key: 'phc_REPLACE_ME',
      host: 'https://us.i.posthog.com',
    },
  },
  // How the "you're in" message is sent, through SendGrid. Nothing is sent until the secret
  // SENDGRID_API_KEY is set, so these can be filled in before then.
  messaging: {
    // An address on cmokit.ai, which is authenticated in SendGrid (Settings → Sender Authentication).
    from: 'hello@cmokit.ai',
    fromName: 'CMO Kit',
    // The postal address every message carries, as anti-spam law requires. Replace before setting
    // SENDGRID_API_KEY.
    address: 'REPLACE_ME: postal address',
    // The unsubscribe group every message belongs to (Suppressions → Unsubscribe Groups). Replace with
    // the group's id before setting SENDGRID_API_KEY.
    sendgrid: { unsubscribeGroup: 12345 },
  },
  // The closed beta's waitlist. The home page's form records `waitlist_joined` with the person's
  // address, which puts them on the list and answers with their own referral link. Joining gives no
  // access. A maintainer lets a person in with `npx cmokit waitlist activate <email> --site
  // https://cmokit.ai`, which sends them messages/youre-in.md once; its {{link}} is `link`.
  waitlist: {
    event: 'waitlist_joined',
    referral: 'ref',
    template: 'youre-in',
    // Where an activated person goes next: the content plugin, which they add to Claude. Pending:
    // an account page on app.cmokit.ai, once the hosted app serves one there.
    link: 'https://github.com/cmokit/cmokit/tree/main/plugins/cmokit-content',
  },
});
