import { test, expect } from '@playwright/test';

test.describe('Articles Dropdown Navigation', () => {
  test('Dropdown remains open and links are clickable', async ({ page }) => {
    await page.goto('http://localhost:3000');
    // Hover over the Articles nav item
    await page.click('[data-testid="nav-articles"]');
    // Wait for dropdown to appear
    await expect(page.locator('[data-testid="nav-articles-contacts"]')).toBeVisible();
    // Click Contacts and wait for load
    await page.click('[data-testid="nav-articles-contacts"]', { force: true });
    await expect(page).toHaveURL(/\/articles\/contacts\/?$/);
    // Assert heading present
    await expect(page.locator('h1').first()).toHaveText('Vanguard 15 Contacts');
  });
});
