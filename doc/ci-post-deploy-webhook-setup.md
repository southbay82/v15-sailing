# Netlify Post-Deploy Test Automation with GitHub Actions

This document describes how to configure Netlify and GitHub Actions to automatically run smoke tests against your live site (`https://dev.v-15.org`) after every successful deployment.

---

## 1. Prerequisites
- You must have admin access to both your Netlify project and GitHub repository.
- Your repository must contain:
  - `.github/workflows/post-deploy-tests.yml` (already provided)
  - Playwright config and smoke tests (already provided)

---

## 2. Generate a GitHub Personal Access Token
1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens).
2. Click **Generate new token** (classic).
3. Give it a name (e.g., `Netlify Webhook Trigger`).
4. Select **repo** scope (minimum required).
5. Generate and copy the token (keep it secure).

---

## 3. Configure Netlify Outgoing Webhook
1. In Netlify, go to your site’s **Settings > Build & deploy > Deploy notifications**.
2. Under **Outgoing webhooks**, click **Add notification** > **Outgoing webhook**.
3. Set the event to **Deploy succeeded**.
4. Set the URL to:
   ```
   https://api.github.com/repos/<owner>/<repo>/dispatches
   ```
   Replace `<owner>` and `<repo>` with your GitHub org/user and repository name.
5. Set the HTTP method to `POST`.
6. Set the content type to `application/json`.
7. Set the body to:
   ```json
   {
     "event_type": "netlify-post-deploy"
   }
   ```
8. In the **Headers** section, add:
   - Key: `Authorization`
   - Value: `Bearer <YOUR_PERSONAL_ACCESS_TOKEN>`

---

## 4. How It Works
- After every successful deploy, Netlify sends a webhook to GitHub.
- The GitHub Actions workflow listens for the `repository_dispatch` event with type `netlify-post-deploy`.
- The workflow runs Playwright smoke tests against `https://dev.v-15.org`.
- Results are visible in the GitHub Actions tab.

---

## 5. Troubleshooting
- Ensure your GitHub token is valid and has the correct permissions.
- Confirm the webhook fires after deploy (check Netlify notifications log).
- Check the Actions tab in GitHub for workflow status and logs.

---

## 6. References
- [GitHub Actions: repository_dispatch event](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#repository_dispatch)
- [Netlify Outgoing Webhooks](https://docs.netlify.com/configure-builds/build-hooks/#outgoing-webhooks)
- [Playwright Testing](https://playwright.dev/docs/intro)
