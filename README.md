# radshrimp-web

Landing site for RADSHRIMP at https://radshrimp.wardrakes.com.

## Pages

- `/` — Landing (hero, Get it on Google Play badge, feature cards)
- `/leaderboard` — Live top-100 from DreamLo (revalidates every 30s)
- `/privacy` — Privacy policy (preserved from the original Firebase-hosted page)

## Stack

Next.js 15 App Router, React 19, Tailwind 3. No DB, no auth.

## Deploy

```
npm install
npm run dev    # local dev at http://localhost:3000
npm run build
```

Vercel: import the repo, point `radshrimp.wardrakes.com` at the Vercel project.

## Notes

- DreamLo public code (read-only) is in `src/app/leaderboard/page.tsx`. The private code stays in the GMS2 game source — never put it in this repo.
- The game submits scores as `add/{name|level|date}/{score}`, so DreamLo stores the pipe-separated string in the `name` field. The leaderboard page parses it back into name + level columns.
