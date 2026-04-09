# mae_website

Astro landing page scaffold for the Mae site.

## Run

```bash
npm install
npm run dev
```

## Notes

The source mockup currently referenced for the landing page is:

- `/Users/bryan/Documents/code/mae_website_mockup_white-01.png`

## Google Sheets Events

The events page supports a build-time CSV source via the `EVENTS_CSV_URL` environment variable.

Setup:

```bash
cp .env.example .env
```

Then set `EVENTS_CSV_URL` to the published CSV export URL for your Google Sheet.

Current sheet URL:

```bash
https://docs.google.com/spreadsheets/d/14WjXAfTpnhym-bzfpcq9dKGskBGqN9ge6NAqNZDy2hU/export?format=csv&gid=0
```

If `EVENTS_CSV_URL` is not set, the site falls back to:

- `public/assets/MAE Event List - Sheet1.csv`

### Auto redeploy

A GitHub Actions workflow is included at:

- `.github/workflows/redeploy-from-sheet.yml`

It can:

- run manually from GitHub Actions
- trigger every 5 minutes

To use it with Vercel:

1. In Vercel, open your project.
2. Go to `Settings -> Environment Variables`.
3. Add `EVENTS_CSV_URL` for Production, Preview, and Development using the URL above.
4. Go to `Settings -> Git -> Deploy Hooks`.
5. Create a Deploy Hook for the branch Vercel deploys from.
6. In GitHub, open this repository's `Settings -> Secrets and variables -> Actions`.
7. Add a repository secret named `DEPLOY_HOOK_URL` with that Vercel deploy hook URL.

Result:

- updating the Google Sheet changes the CSV source
- GitHub Actions calls the Vercel deploy hook every 5 minutes
- Vercel rebuilds the static site using the latest sheet data
