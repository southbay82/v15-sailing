# Building, Exporting & Testing the V-15 Sailing Docs Site

This doc explains how to:

1. Build & statically export the Next.js site.
2. Serve the exported HTML locally.
3. Run the Playwright end-to-end tests.
4. How the GitHub Action post-deploy job executes the same smoke tests against the live Netlify preview.

---

## 1. Build & Export

```bash
# install deps (only once)
npm ci

# build & export – output is written to ./out
npm run build
```

Important: Next 15 uses **`output="export"`** in `next.config.js`. Each route is written to
`out/<route>/index.html` (not `<route>.html`). For example:

```
out/
  └─ articles/
       └─ contacts/
            └─ index.html   # /articles/contacts
```

## 2. Serve Locally

```bash
npx serve -l 3000 out
```

The site is now available at <http://localhost:3000>.

## 3. Run Playwright Tests Locally

```bash
# Ensure the site above is running first!

# Run the full suite
npx playwright test

# Run a single spec
npx playwright test tests/playwright/dropdown.spec.ts
```

Environment variable overrides:

* `BASE_URL` – default is `http://localhost:3000`; set to target another host.

### Current Key Tests

| Spec | Purpose |
|------|---------|
| `dropdown.spec.ts` | Verifies Articles dropdown opens on click and navigation to Contacts works |
| `direct-contacts.spec.ts` | Direct URL test ensuring `/articles/contacts` renders correctly |

### Adding More Tests

Duplicate one of the existing specs and update the selectors / expected text. Keep each test under **5 seconds** to ensure the CI job completes quickly.

## 4. GitHub Actions Post-Deploy Smoke Job

`.github/workflows/post-deploy-tests.yml` runs when Netlify triggers a `repository_dispatch` event after deployment. Key points:

* Installs Playwright.
* Sets `BASE_URL` to the live preview URL (`https://dev.v-15.org`).
* Runs `npx playwright test tests/smoke` – keep critical smoke specs in that folder.

If the smoke tests fail, the GitHub Action will mark the deployment as ❌.

---

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| `404` when navigating to a docs page | Static export missing page | Re-run `npm run build`, confirm `out/<route>/index.html` exists |
| Playwright timeout after click | Selector not visible, dropdown closed too early, or wrong URL pattern | Verify data-testids, ensure dropdown stays open, loosen regex with optional trailing slash |
