// Playwright configuration for post-deploy smoke tests
// Docs: https://playwright.dev/docs/test-configuration

module.exports = {
  testDir: './tests/smoke',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: process.env.BASE_URL || 'https://dev.v-15.org',
    headless: true,
  },
};
