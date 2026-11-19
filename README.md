# Studio site

The company name is one line: the `name` field in `src/content/site.ts`.

That value is the wordmark, the footer, the document title, the Open Graph and Twitter tags, and the web app manifest. Change it there only. The page is the studio of Clarke Adjorlolo in Accra. It presents websites, restaurant ordering sites, and online stores. The work section links to live prototypes.

## Fill in before publishing

These are placeholders. They are not real contact details.

- WhatsApp number: `whatsappDisplay` in `src/content/site.ts` (currently `+233 XX XXX XXXX`)
- Email: `email` in `src/content/site.ts` (currently `you@example.com`)
- Public URL, if it changes: `url` in `src/content/site.ts` (currently `https://brandandwebco.vercel.app`)
- Supabase email functions under `supabase/functions/` still expect an inbox. Their recipient is `YOUR_EMAIL@example.com` until you set it.

Lighthouse figures on the page come from a real run against the live prototype URLs. Replace them only with a new measurement. The date and tool are in `labReport` inside `src/content/site.ts`.

## Scripts

```sh
npm i
npm run dev
npm run build
```

The dev server runs on port 8080.

## Stack

- Vite
- TypeScript
- React
- Tailwind CSS
- shadcn/ui

## Prototypes linked from the site

The site labels each of these as a prototype.

- https://cravins-landing.vercel.app
- https://usetakeorder.app
- https://wearaword.store
- https://pate-a-choux-accra.netlify.app
